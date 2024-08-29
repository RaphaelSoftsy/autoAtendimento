import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import CardCheckout from "../../../components/CardCheckout";
import { url_base_local } from "../../../services/url_base";
import { convertToBase64 } from "../../Academic/ProgramContent";
import { useRA } from '../../../contexts/RAContext';

const ProblemsAccessingDisciplineOpenDemand = () => {
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);
    const disciplinaSelecionada = localStorage.getItem("disciplina-selecionada");
    const { currentRA } = useRA();

    const [formData, setFormData] = useState({
        aluno: currentRA.ra || '',
        obs: '',
        nomeArq: '',
        tamanhoArq: '',
        extensaoArq: '',
        tipoArq: '',
        arquivo: '',
        disciplina: disciplinaSelecionada || ''
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
            const response = await axios.post(`${url_base_local}/poblemasDisciplinasAva`, dataToSend, {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            });

            if (response.status === 200) {
                const responseData = response.data;
                MySwal.close();
                MySwal.fire({
                    title: "Solicitação Enviada com Sucessso!",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                });
                localStorage.setItem("numero-servico", JSON.stringify(responseData));
                navigate("numero-servico");
            }

        } catch (error) {
            MySwal.close();
            console.log(error);
            MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "Não foi possível fazer a solicitação. Tente novamente mais tarde.",
            });
        }
    };

    return (
        <main className="problems-accessing-ava">
            <div className='problems-accessing-ava-card'>
                <CardCheckout
                    text='Descreva o problema encontrado ao acessar as Diciplinas na plataforma AVA, incluindo detalhes do erro e quando ocorreu. Anexe uma captura de tela ou documento relevante (obrigatório).'
                    onChangeInputFile={handleFileChange}
                    selectedFileName={formData.nomeArq}
                    onClick={handleSubmit}
                    textTextArea=''
                    observation={formData.obs}
                    onObservationChange={handleChangeObservation}
                />
            </div>
        </main>
    );
}

export default ProblemsAccessingDisciplineOpenDemand;