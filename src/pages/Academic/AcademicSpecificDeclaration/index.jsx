import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import DefaultButton from "../../../components/DefaultButton";
import { url_base_local } from "../../../services/url_base";
import "./academicSpecificDeclaration.css";
import { useRA } from "../../../contexts/RAContext";
import CardCheckout from "../../../components/CardCheckout";
import { convertToBase64 } from "../ProgramContent";

const AcademicSpecificDeclaration = () => {
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);
    const { currentRA } = useRA();

    const [formData, setFormData] = useState({
        aluno: currentRA.ra,
        obs: '',
        nomeArq: '',
        tamanhoArq: '',
        extensaoArq: '',
        tipoArq: '',
        arquivo: ''
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
            const response = await axios.post(`${url_base_local}/declaracaoEspecifica`, dataToSend);

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
            MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "Não foi possível fazer a solicitação. Tente novamente mais tarde.",
            });
        }
    };

    //         if (response.status === 200) {
    //             MySwal.fire({
    //                 icon: 'success',
    //                 title: 'Enviado com sucesso!',
    //                 timer: 3000,
    //                 timerProgressBar: true,
    //                 showConfirmButton: true
    //             }).then((result) => {
    //                 // Verifica se o modal foi fechado pelo timer
    //                 const closedByTimer = result.dismiss === 'timer';

    //                 if (result.isConfirmed || closedByTimer) {
    //                     navigate('numero-servico');
    //                 }
    //             });

    return (
        <main>
            <div className="rescue-checks">
                <div className='list-subjects'>
                    <CardCheckout
                        text='Por favor, para análise nos explique seu problema'
                        onChangeInputFile={handleFileChange}
                        selectedFileName={formData.nomeArq}
                        onClick={handleSubmit}
                        textTextArea=''
                        observation={formData.obs}
                        onObservationChange={handleChangeObservation}
                    />
                </div>
            </div>
        </main>
    );

}

export default AcademicSpecificDeclaration;