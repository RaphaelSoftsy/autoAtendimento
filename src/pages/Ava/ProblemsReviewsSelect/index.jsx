import { useState } from 'react';
import ListSubjects from '../../../components/ListSubjects';

const ProblemsReviewsSelect = () => {

    const baseRoute = '/ava/problemas-nas-avaliacoes/escolha/abrir-demanda';

    const list = [
        {
            id: 1,
            name: 'Avaliação',
            route: baseRoute
        },
        {
            id: 2,
            name: 'Substitutiva',
            route: baseRoute
        },
        {
            id: 3,
            name: 'Recuperação',
            route: baseRoute
        }
    ];

    const [setSelectedSubjectName] = useState(null);

    const handleSubjectClick = (name) => {
        setSelectedSubjectName(name);
        localStorage.setItem('avaliacao-selecionada', name);
    };

    return (
        <main className="problems-reviews">
            <div className='list-subjects'>
                <h1 className='title'>Selecione qual das opções deseja:</h1>
                <ListSubjects
                    itens={list}
                    onClick={(name) => handleSubjectClick(name)}
                />
            </div>
        </main>
    )
}

export default ProblemsReviewsSelect