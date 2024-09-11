import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaRegHourglass } from 'react-icons/fa';
import { FaRegHourglassHalf } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Footer from '../../../components/Footer';
import ListSubjects from '../../../components/ListSubjects';
import { useRA } from '../../../contexts/RAContext';
import { url_base_local } from '../../../services/url_base';
import './additionalActivities.css';

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
    const navigate = useNavigate();
    const { currentRA } = useRA();

    const style = {
        backgroundColor: "var(--secondary-light-red)"
    };

    async function getAdditionalActivities() {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/atividade/${currentRA.ra}`);
            const data = response.data;

            console.log(data);

            if (data.length > 0) {
                setReEnrollment(data[0]);
            } else {
                setReEnrollment([])
            }

        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Não foi possível buscar as atividades complementares. Tente novamente mais tarde.',
                confirmButtonText: 'OK'
            });
        } finally {
            MySwal.close();
        }
    }

    useEffect(() => {
        getAdditionalActivities();
    }, [currentRA.ra]);

    const formatValue = (value) => {
        if (value && !isNaN(value)) {
            return Math.round(parseFloat(value));
        }
        return 0;
    };

    return (
        <>
            <main className='main-additional-activities'>
                <div className='additional-activities'>
                    <h3 className='carga-horaria-total'>
                        Carga Horária Total: {reEnrollment ? `${formatValue(reEnrollment.horasCurso)} horas` : 'Carregando...'}
                    </h3>
                    <div className='charge-student'>
                        <h3>Carga Horária Aluno:</h3>
                        <div className='card-charge-student'>
                            <span>{reEnrollment ? `${formatValue(reEnrollment.atividadeAluno)} horas` : 'Carregando...'}</span>
                            <FaRegHourglass />
                        </div>
                    </div>
                    <div className='charge-student-missing'>
                        <h3>Carga Horária Faltante:</h3>
                        <div className='card-student-missing'>
                            <span>{reEnrollment ? `${formatValue(reEnrollment.horasFaltantes)} horas` : 'Carregando...'}</span>
                            <FaRegHourglassHalf />
                        </div>
                    </div>
                    <div className='access-subjects'>
                        <h3>Acessar Plataformas de atividades</h3>
                        <ListSubjects itens={list} />
                    </div>
                </div>
                <Footer text='Abrir Demanda' onClick={() => navigate("abrir-demanda")} style={style} />
            </main>
        </>
    );
}

export default AdditionalActivities;
