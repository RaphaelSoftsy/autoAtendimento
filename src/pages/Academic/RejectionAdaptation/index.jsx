import { useState } from 'react';
import ListCheckButton from '../../../components/ListCheckButton'
import './rejectionAdaptation.css'
import Footer from '../../../components/Footer';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';

const RejectionAdaptation = () => {
    const list = [
        {
            id: 1,
            name: 'Disciplina 1 (Adaptação)'
        },
        {
            id: 2,
            name: 'Disciplina 2 (Reprovação-DP)'
        }
    ]

    const style = {
        backgroundColor: "var(--secondary-light-red)"
    }

    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const navegation = useNavigate();
    const MySwal = withReactContent(Swal);

    const handleSubjectSelect = (id) => {
        setSelectedSubjects(prevSelected => {
            const index = prevSelected.indexOf(id);
            if (index !== -1) {
                return prevSelected.filter(subjectId => subjectId !== id);
            } else {
                return [...prevSelected, id];
            }
        });
    };

    const handleNext = () => {
        if (selectedSubjects.length === 0) {
            MySwal.fire({
                icon: 'info',
                title: 'Erro',
                text: 'Você não selecionou nada',
                confirmButtonText: 'OK'
            });
        } else {
            navegation('/');
        }
    };

    return (
        <>
            <main className='rejection-adaptation'>
                <div className='discipline'>
                    <h3>Selecione a Disciplina que deseja realizar a Matrícula, lembrando que você pode ter 4 disciplinas simultaneamente</h3>
                    <div className='registration'>
                        <span>Nº de Disciplinas já matrículadas 2</span>
                        <span>Nº de Disciplinas que pode solicitar 2</span>
                    </div>
                    <h3 className='select-diploma'>Selecione a Disciplina</h3>
                    <ListCheckButton
                        items={list}
                        selectedSubjects={selectedSubjects}
                        onSelect={handleSubjectSelect}
                        text="Solicitar"
                    />
                </div>
            </main>
            <Footer text='Relatar um Problema' onClick={handleNext} style={style} />
        </>
    )
}

export default RejectionAdaptation