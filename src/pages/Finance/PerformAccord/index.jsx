import './performAccord.css'
import ListSubjectsCheck from '../../../components/ListSubjectsCheck';
import { useState } from 'react';

const PerformAccord = () => {
    const [selectedSubjects, setSelectedSubjects] = useState([]);

    const list = [
        {
            id: 1,
            name: 'Mensalidade 1/3',
            route: '/financeiro/realizar-pagamento'
        },
        {
            id: 2,
            name: 'Mensalidade 2/3',
            route: '/financeiro/realizar-acordo'
        },
        {
            id: 3,
            name: 'Mensalidade 3/3',
            route: '/financeiro/solicitar-documentos'
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
        <div className="perform-accord">
            <div className='list-subjects'>
                <h1 className='title'>Sobre quais assuntos deseja falar?</h1>
                <ListSubjectsCheck
                    items={list}
                    selectedSubjects={selectedSubjects}
                    onSelect={handleSubjectSelect}
                />
            </div>
        </div>
    );
};

export default PerformAccord