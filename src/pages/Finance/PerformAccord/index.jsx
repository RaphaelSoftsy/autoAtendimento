import './performAccord.css'
import ListSubjectsCheck from '../../../components/ListSubjectsCheck';
import Footer from '../../../components/Footer';
import { useState } from 'react';

const PerformAccord = () => {
    const [selectedSubjects, setSelectedSubjects] = useState([]);

    const list = [
        {
            id: 1,
            name: 'Mensalidade Jan/23'
        },
        {
            id: 2,
            name: 'Mensalidade Fev/23'
        },
        {
            id: 3,
            name: 'Mensalidade Mar/23'
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
    // console.log(selectedSubjects);
    return (
        <>
            <div className="perform-accord">
                <div className='list-subjects'>
                    <h1 className='title'>Selecione as cobranças que você deseja incluir no acordo:</h1>
                    <ListSubjectsCheck
                        items={list}
                        selectedSubjects={selectedSubjects}
                        onSelect={handleSubjectSelect} />
                </div>
            </div>
            <div className='footer-container'>
                <Footer text="Avançar" route="/financeiro/realizar-acordo/teste"/>
            </div>
        </>

    );

};

export default PerformAccord