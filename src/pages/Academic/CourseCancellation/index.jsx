import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';
import DefaultButton from "../../../components/DefaultButton";
import "./courseCancellation.css";

const MySwal = withReactContent(Swal);

const CourseCancellation = () => {
    const navegation = useNavigate();
    const hasPendingFees = true; // Simulando a verificação de pendências

    const handleNext = () => {
        navegation('/academico/cancelamento-do-curso/cobrancas');
    };

    // const handleCancelCourse = () => {
    //     if (hasPendingFees) {
    //         MySwal.fire({
    //             icon: 'error',
    //             title: 'Erro',
    //             text: 'Você possui mensalidades pendentes.',
    //             confirmButtonText: 'Realizar Acordo'
                
    //         }).then(() => {
    //             navigate("/academico/cancelamento-do-curso/cobrancas");
    //         });
    //     } else {
    //         MySwal.fire({
    //             icon: 'question',
    //             title: 'Deseja mesmo cancelar o curso?',
    //             showCancelButton: true,
    //             confirmButtonText: 'Sim',
    //             cancelButtonText: 'Não'
    //         }).then((result) => {
    //             if (result.isConfirmed) {
    //                 navigate("/teste");
    //             }
    //         });
    //     }
    // };

    return (
        <main className="course-cancellation">
            <div className='card-cancellation'>
                <span>Seu curso atual: <b>Administração</b></span>
                <span>Seu semestre atual: <b>8 Semestre</b></span>
                <span>Polo: Sumaré <b>Av Dr.Arnald</b></span>
                <span>Situação Financeira <b>Inadimplente</b></span>
                <DefaultButton
                    text="Cancelar Curso"
                    backgroundColor="var(--secondary-light-red)"
                    color='#fff'
                    onClick={handleNext}
                />
            </div>
        </main>
    );
};

export default CourseCancellation;
