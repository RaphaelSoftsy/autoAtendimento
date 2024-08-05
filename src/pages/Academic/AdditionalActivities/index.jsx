import { FaRegHourglass } from 'react-icons/fa';
import Footer from '../../../components/Footer';
import ListSubjects from '../../../components/ListSubjects';
import './additionalActivities.css';
import { FaRegHourglassHalf } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { url_base_local } from '../../../services/url_base';

const AdditionalActivities = () => {

    const list = [
        {
            id: 1,
            name: 'Sumaré Cultural',
            route: 'https://atc.sumare.edu.br/home'
        },
        {
            id: 2,
            name: 'Sumaré Qualifica',
            route: ''
        }
    ];

    const [reEnrollment, setReEnrollment] = useState(null);
    const MySwal = withReactContent(Swal);
    const aluno = '2012791';

    const style = {
        backgroundColor: "var(--secondary-light-red)"
    };

    const navigate = useNavigate();

    async function getReEnrollment() {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/atividade/${aluno}`);
            const data = response.data[0];
            console.log('Dados da declaração:', data);

            setReEnrollment(data);
        } catch (error) {
            console.error('Erro ao buscar declaração:', error);
        } finally {
            MySwal.close();
        }
    }

    useEffect(() => {
        getReEnrollment();
    }, [aluno]);

    console.log(reEnrollment);

    const handleNext = () => {
        navigate('abrir-demanda');
    };

    return (
        <>
            <main className='main-additional-activities'>
                <div className='additional-activities'>
                    <h3>Carga Horária Total: {reEnrollment ? `${reEnrollment.horasCurso} horas` : 'Carregando...'}</h3>
                    <div className='charge-student'>
                        <h3>Carga Horária Aluno:</h3>
                        <div className='card-charge-student'>
                            <span>{reEnrollment ? `${reEnrollment.atividadeAluno} horas` : 'Carregando...'}</span>
                            <FaRegHourglass />
                        </div>
                    </div>
                    <div className='charge-student-missing'>
                        <h3>Carga Horária Faltante:</h3>
                        <div className='card-student-missing'>
                            <span>{reEnrollment ? `${reEnrollment.horasFaltantes} horas` : 'Carregando...'}</span>
                            <FaRegHourglassHalf />
                        </div>
                    </div>
                    <div className='access-subjects'>
                        <h3>Acessar Plataformas de atividades</h3>
                        <ListSubjects itens={list} />
                    </div>
                </div>
                <Footer text='Abrir Demanda' onClick={handleNext} style={style} />
            </main>
        </>
    );
}

export default AdditionalActivities;
