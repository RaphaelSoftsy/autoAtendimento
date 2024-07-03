import { useNavigate } from "react-router-dom";
import DefaultButton from "../../../components/DefaultButton"
import './handbag.css'
import CardDrop from "../../../components/CardDrop";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ModifyRA from "../../../components/ModifyRA";
import { useState } from "react";
import axios from "axios";

const Handbag = () => {

    const navegation = useNavigate()
    const [obs, setObs] = useState("");
    const [selectedOptionHandbag, setSelectedOptionHandbag] = useState(null);
    const ra = localStorage.getItem('aluno-ra');
    const MySwal = withReactContent(Swal);

    async function getBolsa() {
        try {
            const response = await axios.post(`http://localhost:8080/solicitacaoBolsa`, {
                aluno: ra,
                obs: obs,
                tipoBolsa: selectedOptionHandbag
            })
            const data = response.data;
            console.log('Dados Declaração Especifica:', data);

            // if (data.success) {
            //     MySwal.fire({
            //         icon: 'success',
            //         title: 'Enviado com sucesso!',
            //         timer: 5000,
            //         timerProgressBar: true,
            //         showConfirmButton: true
            //     }).then((result) => {
            //         if (result.isConfirmed) {
            //             navegation('/academico');
            //         }
            //     });
            // } else {
            //     MySwal.fire({
            //         icon: 'error',
            //         title: 'Erro ao alterar senha',
            //         text: 'Ocorreu um erro ao tentar enviar sua solicitação.',
            //         confirmButtonText: 'OK',
            //     });
            // }

        } catch (error) {
            console.error('Erro ao buscar declaração espeficica :', error);
        }
    }


    
    const handleObsChange = (newObs) => {
        setObs(newObs);
    };

    const handleSubjectSelect = (selected) => {
        setSelectedOptionHandbag(selected);
    };

    const handleUpload = () => {
        console.log('Upload clicado');
    };

    const handleBolsa = () => {
        if (selectedOptionHandbag === null || selectedOptionHandbag === "" || obs === null || obs === "") {
            MySwal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Por favor, prencher todos os campos.',
                confirmButtonText: 'OK',
            });
        }else{
            getBolsa();
            console.log('Observação:', obs);
            console.log('Opção selecionada:', selectedOptionHandbag);
        }
        
    };


    return (
        <main className="handbag">
            <ModifyRA />
            <CardDrop
                 obs={obs}
                 setObs={handleObsChange}
                 setSelect={handleSubjectSelect}
                 onClickButton={handleUpload}
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