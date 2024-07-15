import { useNavigate } from "react-router-dom";
import DefaultButton from "../../../components/DefaultButton"
import './handbag.css'
import CardDrop from "../../../components/CardDrop";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ModifyRA from "../../../components/ModifyRA";
import { useState } from "react";
import axios from "axios";
import { convertToBase64 } from "../../Academic/ProgramContent";

const Handbag = () => {

    const navegation = useNavigate();
    const [obs, setObs] = useState("");
    const [selectedOptionHandbag, setSelectedOptionHandbag] = useState(null);
    // const ra = localStorage.getItem('aluno-ra');
    const ra = '2471074';
    const MySwal = withReactContent(Swal);
    const [formData, setFormData] = useState({
        nomeArq: '',
        tamanhoArq: '',
        extensaoArq: '',
        tipoArq: '',
        arquivo: ''
    });

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

    async function getBolsa() {

        if (!formData.arquivo) {
            MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor, selecione um arquivo antes de enviar!",
            });
            return;
        }

        MySwal.showLoading();

        try {
            const dataToSend = {
                aluno: ra,
                obs: obs,
                nomeArq: formData.nomeArq,
                tamanhoArq: formData.tamanhoArq,
                extensaoArq: formData.extensaoArq,
                tipoArq: formData.tipoArq,
                arquivo: formData.arquivo,
                tipoBolsa: selectedOptionHandbag.name
            };

            const response = await axios.post('http://localhost:8080/solicitacaoBolsa', dataToSend, {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            });

            const data = response.data;
            console.log('Dados Bolsa:', data);

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
            console.error('Erro ao buscar bolsa :', error);
        }
    }

    const handleObsChange = (newObs) => {
        setObs(newObs);
    };

    const handleSubjectSelect = (selected) => {
        setSelectedOptionHandbag(selected);
    };

    const handleBolsa = () => {
        if (selectedOptionHandbag === null || selectedOptionHandbag === "" || obs === null || obs === "") {
            MySwal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Por favor, preencha todos os campos.',
                confirmButtonText: 'OK',
            });
        } else {
            getBolsa();
        }
    };

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChanges = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        handleFileChange(event);
    };

    return (
        <main className="handbag">
            <ModifyRA />
            <CardDrop
                obs={obs}
                setObs={handleObsChange}
                setSelect={handleSubjectSelect}
                onChangeInputFile={handleFileChanges}
                selectedFile={selectedFile}
                selectedFileName={selectedFile ? selectedFile.name : ""}
            />
            <DefaultButton
                onClick={handleBolsa}
                text='Enviar Solicitação'
                backgroundColor='var(--primary-light-blue)'
            />
        </main>
    )
}

export default Handbag;