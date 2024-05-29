import { useState } from 'react';
import ListCheckButton from '../../../components/ListCheckButton'
import './rejectionAdaptation.css'
import Footer from '../../../components/Footer';

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

    const [selectedSubjects, setSelectedSubjects] = useState([]);

    const handleSelect = (id) => {
        setSelectedSubjects(prevSelected => {
            if (prevSelected.includes(id)) {
                return prevSelected.filter(subjectId => subjectId !== id);
            } else {
                return [...prevSelected, id];
            }
        });
    };

    return (
        <>
            <main className="rejection-adaptation">
                <div className='list-subjects'>
                    <h3 className='title'>Selecione a Disciplina que deseja realizar a Matricula, lembrando que você pode ter 4 disciplinas simultaneamente</h3>
                    <div className='registration'>
                        <span>Nº de Disciplinas já matriculadas 2</span>
                        <span>Nº de Disciplinas que pode solicitar 2</span>
                    </div>
                    <ListCheckButton
                        items={list}
                        selectedSubjects={selectedSubjects}
                        onSelect={handleSelect}
                        text="Não achou a disciplina que está procurando?"
                    />
                </div>
            </main>
            <Footer text='Relatar um Problema' route='/' />
        </>

    )
}

export default RejectionAdaptation