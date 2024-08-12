import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Dropdown from "../../../components/Dropdown/Dropdown";
import TextArea from "../../../components/TextArea";
import DefaultButton from "../../../components/DefaultButton";
import InputUpload from "../../../components/InputUpload";
import { convertToBase64 } from "../ProgramContent";
import { url_base_local } from "../../../services/url_base";

const UtilizationStudies = () => {

    const navegation = useNavigate();
    const MySwal = withReactContent(Swal);

    const list = [
        {
            id: 1,
            name: 'Aproveitar disciplinas cursadas na Sumaré'
        },
        {
            id: 2,
            name: 'Aproveitar disciplinas cursadas em outra(s) faculdade(s) e na Sumaré'
        },
        {
            id: 3,
            name: 'Aproveitar disciplinas cursadas em outra(s) faculdade(s)'
        }
    ];

    const [formData, setFormData] = useState({
        aluno: '2471074',
        obs: '',
        nomeArq: '',
        tamanhoArq: '',
        extensaoArq: '',
        tipoArq: '',
        arquivo: '',
        tipo: ''
    });

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
            aluno: formData.aluno,
            obs: formData.obs,
            nomeArq: formData.nomeArq,
            tamanhoArq: formData.tamanhoArq,
            extensaoArq: formData.extensaoArq,
            tipoArq: formData.tipoArq,
            arquivo: formData.arquivo,
            tipo: formData.tipo
        };

        console.log(dataToSend);

        try {
            const response = await axios.post(`${url_base_local}/aproveitamentoInterno`, dataToSend, {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            });

            if (response.status === 200) {
                const responseData = response.data;
                MySwal.close();
                MySwal.fire({
                    title: "Cadastrado com sucesso",
                    icon: "success",
                });
                localStorage.setItem("numero-servico", JSON.stringify(responseData));
                navegation("numero-servico");
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            MySwal.close();
            console.log(error);
            MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "Não foi possível realizar esse comando!",
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
        setFormData(prevState => ({
            ...prevState,
            tipo: selectedValue
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
                        />
                        <TextArea
                            text='Descreva o por que da sua solicitação:'
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
            {/* <Footer text="Relatar Problema" style={style} /> */}
        </main>
    );
}

export default UtilizationStudies;
