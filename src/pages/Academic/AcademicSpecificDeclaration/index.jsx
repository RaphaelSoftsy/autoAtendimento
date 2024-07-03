import { useNavigate } from "react-router-dom";
import DefaultButton from "../../../components/DefaultButton";
import "./academicSpecificDeclaration.css"
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const AcademicSpecificDeclaration = () => {

    const navegation = useNavigate();
    const [DeclaracaoEspecifica, setDeclaracaoEspecifica] = useState([]);
    const [obs, setObs] = useState("");
    const ra = localStorage.getItem('aluno-ra');
    const MySwal = withReactContent(Swal);

    async function getDeclaracaoEspecifica() {
        try {
            const response = await axios.post(`http://localhost:8080/declaracaoEspecifica`, {
                aluno: ra,
                obs: obs
            })
            const data = response.data;
            console.log('Dados Declaração Especifica:', data);

            if (data.success) {
                MySwal.fire({
                    icon: 'success',
                    title: 'Enviado com sucesso!',
                    timer: 5000,
                    timerProgressBar: true,
                    showConfirmButton: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        navegation('/academico');
                    }
                });
            } else {
                MySwal.fire({
                    icon: 'error',
                    title: 'Erro ao alterar senha',
                    text: 'Ocorreu um erro ao tentar enviar sua solicitação.',
                    confirmButtonText: 'OK',
                });
            }

        } catch (error) {
            console.error('Erro ao buscar declaração espeficica :', error);
        }
    }

    const handleTextareaChange = (e) => {
        setObs(e.target.value);
    };

    const handleNext = () => {
        if (obs === "") {
            MySwal.fire({
                icon: 'info',
                title: 'Erro',
                text: 'Por favor, preencha o campo de observação',
                confirmButtonText: 'OK'
            });
        } else {
            getDeclaracaoEspecifica();
        }
    };


    return (
        <main className="academic-specific-declaration">
            <div className='card-request'>
                <h3>Descrever todas as informações que devem constar na declaração e especificar o período a que se refere.</h3>
                <textarea
                    name="request"
                    id="request"
                    value={obs}
                    onChange={handleTextareaChange}
                ></textarea>
            </div>
            <DefaultButton
                text="Enviar Solicitação"
                backgroundColor="var(--primary-light-blue)"
                color='#fff'
                onClick={handleNext}
            />
        </main>
    );

}

export default AcademicSpecificDeclaration;