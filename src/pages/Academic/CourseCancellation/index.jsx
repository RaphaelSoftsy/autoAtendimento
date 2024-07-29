import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';
import DefaultButton from "../../../components/DefaultButton";
import "./courseCancellation.css";
import { url_base_local } from '../../../services/url_base';
import axios from 'axios';

const CourseCancellation = () => {
    const navegation = useNavigate();
    const [course, setCourse] = useState('');
    const hasPendingFees = true; // Simulando a verificação de pendências
    const aluno = "2014554"
    const MySwal = withReactContent(Swal);

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

    async function getCourseCancellation() {
        try {
            const response = await axios.get(`${url_base_local}/dadosCancelamento/${aluno}`);
            const data = response.data;
            console.log('Dados da declaração:', data);
            setCourse(data);
        } catch (error) {
            console.error('Erro ao buscar declaração:', error);
        }
    }

    useEffect(() => {
        getCourseCancellation();
    }, [aluno]);

    return (
        <main className="course-cancellation">
            <div className='card-cancellation'>
                {course ? (
                    <>
                        <span>Seu curso atual: <b>{course[0].nomeCurso}</b></span>
                        <span>Seu semestre atual: <b>{course[0].serie} Semestre</b></span>
                        <span>Polo: Sumaré <b>{course[0].nomePolo}</b></span>
                        <span>Situação Financeira <b>{course[0].inadimplente === 'S' ? 'Inadimplente' : 'Adimplente'}</b></span>
                    </>
                ) : (
                    <p>Carregando dados do aluno...</p>
                )}
                {/* <span>Seu curso atual: <b>Administração</b></span>
                <span>Seu semestre atual: <b>8 Semestre</b></span>
                <span>Polo: Sumaré <b>Av Dr.Arnald</b></span>
                <span>Situação Financeira <b>Inadimplente</b></span> */}
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
