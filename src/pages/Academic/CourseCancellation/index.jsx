import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import DefaultButton from "../../../components/DefaultButton";
import { url_base_local } from '../../../services/url_base';
import "./courseCancellation.css";
import { useRA } from '../../../contexts/RAContext';

const CourseCancellation = () => {
    const navigate = useNavigate();
    const [course, setCourse] = useState('');
    const MySwal = withReactContent(Swal);
    const { currentRA } = useRA();

    const handleNext = () => {
        if (course[0].inadimplente === 'S') {
            navigate('/academico/cancelamento-do-curso/cobrancas');
        } else {
            MySwal.fire({
                icon: 'question',
                title: 'Deseja mesmo cancelar o curso?',
                showCancelButton: true,
                confirmButtonText: 'Sim',
                cancelButtonText: 'Não'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/academico/cancelamento-do-curso/abrir-demanda');
                }
            });
        }
    };

    async function getCourseCancellation() {
        try {
            const response = await axios.get(`${url_base_local}/dadosCancelamento/${currentRA.ra}`);
            const data = response.data;

            if (data.length > 0) {
                setCourse(data[0]);
            }
            else{
                setCourse([])
            }
            
        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Não foi possível buscar os dados de cancelamento. Tente novamente mais tarde.',
                confirmButtonText: 'OK'
            });
        }
    }

    useEffect(() => {
        getCourseCancellation();
    }, [currentRA.ra]);

    return (
        <main className="course-cancellation">
            <div className='card-cancellation'>
                {course ? (
                    <>
                        <span>Seu curso atual: <b>{course.nomeCurso}</b></span>
                        <span>Seu semestre atual: <b>{course.serie} Semestre</b></span>
                        <span>Polo: Sumaré <b>{course.nomePolo}</b></span>
                        <span>Situação Financeira <b>{course.inadimplente === 'S' ? 'Inadimplente' : 'Adimplente'}</b></span>
                    </>
                ) : (
                    <p>Carregando dados do aluno...</p>
                )}
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
