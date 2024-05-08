import './performAccord.css'
import ListSubjectsCheck from '../../../components/ListSubjectsCheck';
import { useState } from 'react';

const PerformAccord = () => {

    const [selectedSubject, setSelectedSubject] = useState(null);

    //não esquecer de colocar o e de volta em rout
    const list = [
        {
            id: 1,
            name: 'Mensalidade 1/3',
            rout: '/financeiro/realizar-pagamento'
        },
        {
            id: 2,
            name: 'Mensalidade 2/3',
            rout: '/financeiro/realizar-acordo'
        },
        {
            id: 3,
            name: 'Mensalidade 3/3',
            rout: '/financeiro/solicitar-documentos'
        }
    ]

    const handleSubjectSelect = (id) => {
        setSelectedSubject(id);
    };

    return (
        <div className="perform-accord">
            <div className='list-subjects'>
                <h1 className='title'>Sobre qual assunto deseja falar?</h1>
                <ListSubjectsCheck
                    itens={list}
                    selectedSubject={selectedSubject} 
                    onSelect={handleSubjectSelect}
                />
            </div>
        </div>
    )
}

export default PerformAccord