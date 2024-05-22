import './problemsAccessingDiscipline.css'
import ListSubjectsCheck from '../../../components/ListSubjectsCheck';
import Footer from '../../../components/Footer';
import { useState } from 'react';

const ProblemsAccessingDiscipline = () => {
    const [selectedSubjects, setSelectedSubjects] = useState([]);

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
    ];

    const handleSubjectSelect = (id) => {
        setSelectedSubjects(prevSelected => {
            if (prevSelected.includes(id)) {
                return prevSelected.filter(subjectId => subjectId !== id);
            } else {
                return [...prevSelected, id];
            }
        });
    };

    return (
        <main className='main-perform-accord'>
            <div className="perform-accord">
                <div className='list-subjects'>
                    <h1 className='title'>Em qual disciplina você está com problemas?</h1>
                    <ListSubjectsCheck
                        items={list}
                        selectedSubjects={selectedSubjects}
                        onSelect={handleSubjectSelect} />
                </div>
            </div>
            <div className='footer-container'>
                <Footer text="Avançar" route="/ava/teste"/>
            </div>
        </main>

    );

};

export default ProblemsAccessingDiscipline