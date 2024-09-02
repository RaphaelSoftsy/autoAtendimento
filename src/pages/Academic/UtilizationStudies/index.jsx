import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Dropdown from "../../../components/Dropdown/Dropdown";
import TextArea from "../../../components/TextArea";
import DefaultButton from "../../../components/DefaultButton";
import InputUpload from "../../../components/InputUpload";
import { convertToBase64 } from "../ProgramContent";
import { url_base_local } from "../../../services/url_base";
import { useRA } from "../../../contexts/RAContext";

const UtilizationStudies = () => {
    const navegation = useNavigate();
    const MySwal = withReactContent(Swal);
    const { currentRA } = useRA();

    const list = [
        {
            id: 1,
            name: 'Aproveitar disciplinas cursadas na Sumaré'
        },
        {
            id: 2,
            name: 'Aproveitar disciplinas cursadas em outra(s) faculdade(s)'
        }
    ];

    const [formData, setFormData] = useState({
        aluno: currentRA.ra,
        obs: '',
        nomeArq: '',
        tamanhoArq: '',
        extensaoArq: '',
        tipoArq: '',
        arquivo: '',
        apiEndpoint: ''
    });

    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            aluno: currentRA.ra
        }));
    }, [currentRA]);


    const handleChangeObservation = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            convertToBase64(file, (base64String) => {
                const imgSplit = base64String.split(',');
                setFormData(prevState => ({
                    ...prevState,
                    nomeArq: file.name,
                    tamanhoArq: file.size,
                    extensaoArq: file.name.split('.').pop().toUpperCase(),
                    tipoArq: file.type,
                    arquivo: imgSplit[1]
                }));
            });
        }
    };

    const handleSubmit = async () => {

        if (!formData.arquivo) {
            MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor, selecione um arquivo antes de enviar!",
            });
            return;
        }

        MySwal.showLoading();

        const dataToSend = {
            ...formData
        };

        try {
            const response = await axios.post(`${url_base_local}/${formData.apiEndpoint}`, dataToSend);

            if (response.status === 200) {
                const responseData = response.data;
                MySwal.close();
                MySwal.fire({
                    title: "Cadastrado com sucesso",
                    icon: "success",
                });
                localStorage.setItem("numero-servico", JSON.stringify(responseData));
                navegation("numero-servico");
            }
        } catch (error) {
            MySwal.close();
            MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "Não foi possível fazer a solicitação. Tente novamente mais tarde.",
            });
        }
    };

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChanges = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        handleFileChange(event);
    };

    const handleDropdownChange = (selectedValue) => {
        let apiEndpoint = '';
        if (selectedValue === 'Aproveitar disciplinas cursadas na Sumaré') {
            apiEndpoint = 'aproveitamentoInterno';
        } else if (selectedValue === 'Aproveitar disciplinas cursadas em outra(s) faculdade(s)') {
            apiEndpoint = 'aproveitamentoExterno';
        }

        setFormData(prevState => ({
            ...prevState,
            apiEndpoint
        }));
    };

    return (
        <main>
            <div className="rescue-checks">
                <div className='repayment-card'>
                    <div className="card-checkout">
                        <Dropdown
                            id='dropdown-handbag'
                            name='dropdown-handbag'
                            itens={list}
                            label='Selecione um Aproveitamento de Estudos'
                            onChange={handleDropdownChange}
                            text="Selecione um Aproveitamento de Estudos"
                        />
                        <TextArea
                            text='Descreva o motivo da sua solicitação, incluindo detalhes relevantes e quando ocorreu. Anexe uma captura de tela ou documento relevante (obrigatório).'
                            id="observation"
                            value={formData.obs}
                            onChange={handleChangeObservation}
                        />
                        <InputUpload
                            onChangeInputFile={handleFileChanges}
                            selectedFileName={selectedFile ? selectedFile.name : ""}
                        />
                        <div className="button-group">
                            <DefaultButton
                                text="Enviar Solicitação"
                                backgroundColor="var(--primary-light-blue)"
                                color='#fff'
                                onClick={handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default UtilizationStudies;
