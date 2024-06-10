import { useState } from 'react';
import ListCheckButton from '../../../components/ListCheckButton'
import './retakeTest.css'
import Footer from '../../../components/Footer';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';

const RetakeTest = () => {

    const list = [
        {
            id: 1,
            name: 'Disciplina 1'
        },
        {
            id: 2,
            name: 'Disciplina 2'
        },
        {
            id: 3,
            name: 'Disciplina 3'
        }
    ]

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
            <main className="retake-test">
                <div className='list-subjects'>
                    <h1 className='title'>De qual disciplina?</h1>
                    <h4 className='title'>Se já houver solicitacao da disciplina aberta, levar para a tela de senha com a opção de abrir demanda</h4>
                    <ListCheckButton
                        items={list}
                        selectedSubjects={selectedSubjects}
                        onSelect={handleSubjectSelect}
                        text="Não achou a disciplina que está procurando?"
                    />
                </div>
            </main>
            <Footer text='Avançar' onClick={handleNext}  />
        </>

    )
}

export default RetakeTest