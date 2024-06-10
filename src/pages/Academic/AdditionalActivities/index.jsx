import { FaRegHourglass } from 'react-icons/fa'
import Footer from '../../../components/Footer'
import ListSubjects from '../../../components/ListSubjects'
import './additionalActivities.css'
import { FaRegHourglassHalf } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const AdditionalActivities = () => {

    const list = [
        {
            id: 1,
            name: 'Sumaré Cultural'
        },
        {
            id: 2,
            name: 'Histórico Qualifica'
        }
    ]

    const style = {
        backgroundColor: "var(--secondary-light-red)"
    }

    const navegation = useNavigate()

    const handleNext = () => {
        navegation('/');
    };

    return (
        <>
            <main className='main-additional-activities'>
                <div className='additional-activities'>
                    <div className='charge-student'>
                        <h3>Carga Horaria Aluno:</h3>
                        <div className='card-charge-student'>
                            <span>100 horas</span>
                            <FaRegHourglass />
                        </div>
                    </div>
                    <div className='charge-student-missing'>
                        <h3>Carga Horaria Faltante:</h3>
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