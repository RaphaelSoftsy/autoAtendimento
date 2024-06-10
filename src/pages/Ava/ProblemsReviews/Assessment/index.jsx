import { useState } from "react";
import ListSubjectsCheck from "../../../../components/ListSubjectsCheck";
import Footer from "../../../../components/Footer";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';

const Assessment = () => {

    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const navegation = useNavigate();
    const MySwal = withReactContent(Swal);

    const list = [
        {
            id: 1,
            name: 'Disciplina 1'
        },
        {
            id: 2,
            name: 'Disciplina 2'
        }
    ];

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
            navegation('/ava/problemas-nas-avaliacoes/avaliacao/abrir-demanda');
        }
    };

    return (
        <main className='main-problems-activities'>
            <div className="problems-activities">
                <div className='list-subjects'>
                    <h1 className='title'>Em qual disciplina você está com problemas?</h1>
                    <ListSubjectsCheck
                        items={list}
                        selectedSubjects={selectedSubjects}
                        onSelect={handleSubjectSelect} />
                </div>
            </div>
            <Footer text="Avançar" onClick={handleNext} />
        </main>
    );
    
}

export default Assessment;


