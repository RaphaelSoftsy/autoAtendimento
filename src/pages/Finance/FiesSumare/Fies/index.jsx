import { useNavigate } from "react-router-dom";
import CardRequest from "../../../../components/CardRequest";
import DefaultButton from "../../../../components/DefaultButton";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState } from "react";
import CardCheckout from "../../../../components/CardCheckout";
import axios from "axios";
import { convertToBase64 } from "../../../Academic/ProgramContent";

const Fies = () => {

    const navegation = useNavigate();
    const MySwal = withReactContent(Swal);

    const [formData, setFormData] = useState({
        aluno: '2471074',
        obs: '',
        nomeArq: '',
        tamanhoArq: '',
        extensaoArq: '',
        tipoArq: '',
        arquivo: ''
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

    const handleSubmit = async (e) => {
        e.preventDefault();

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
            arquivo: formData.arquivo
        };

        console.log("Data to send:", JSON.stringify(dataToSend));

        try {
            const response = await axios.post('http://localhost:8080/solicitacaoFies', dataToSend, {
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

    return (
        <main className="repayment">
            <div className='repayment-card'>
                {/* <CardRequest
                    title="Descreva o por que da sua solicitação:"
                    text="Envie um arquivo em anexo com as informações do seu pedido."
                    onChange={handleChangeObservation}
                /> */}
                {/* <DefaultButton
                    text="Enviar Solicitação"
                    backgroundColor="var(--primary-light-blue)"
                    color='#fff'
                    onClick={() => navegation("/")}
                /> */}
                <CardCheckout
                    text='Descreva o por que da sua solicitação:'
                    onChangeInputFile={handleFileChanges}
                    selectedFile={selectedFile}
                    selectedFileName={selectedFile ? selectedFile.name : ""}
                    onClick={handleSubmit}
                    textTextArea='Observação'
                    observation={formData.obs}
                    onObservationChange={handleChangeObservation}
                />
            </div>
        </main>
    );

}

export default Fies;