import { FaRegHourglass } from 'react-icons/fa'
import Footer from '../../../components/Footer'
import ListSubjects from '../../../components/ListSubjects'
import './additionalActivities.css'
import { FaRegHourglassHalf } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { url_base_local } from '../../../services/url_base'

const AdditionalActivities = () => {

    const list = [
        {
            id: 1,
            name: 'Sumaré Cultural'
        },
        {
            id: 2,
            name: 'Sumaré Qualifica'
        }
    ]

    const [reEnrollment, setReEnrollment] = useState([]);
    const MySwal = withReactContent(Swal);
    const aluno = '2473773'

    const style = {
        backgroundColor: "var(--secondary-light-red)"
    }

    const navegation = useNavigate()

    async function getReEnrollment() {

        MySwal.showLoading()

        try {
            const response = await axios.get(`${url_base_local}/atividade/${aluno}`);
            const data = response.data;
            console.log('Dados da declaração:', data);

            setReEnrollment(reEnrollment);
        } catch (error) {
            console.error('Erro ao buscar declaração:', error);
        }
        MySwal.close()
    }

    useEffect(() => {
        getReEnrollment();
    }, []);

    console.log(reEnrollment);

    const handleNext = () => {
        navegation('abrir-demanda');
    };

    return (
        <>
            <main className='main-additional-activities'>
                <div className='additional-activities'>
                    <div className='charge-student'>
                        <h3>Carga Horária Aluno:</h3>
                        <div className='card-charge-student'>
                            <span>100 horas</span>
                            <FaRegHourglass />
                        </div>
                    </div>
                    <div className='charge-student-missing'>
                        <h3>Carga Horária Faltante:</h3>
                        <div className='card-student-missing'>
                            <span>50 horas</span>
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
    )
}

export default AdditionalActivities