import { useEffect, useState } from 'react';
import ListSubjects from '../../../components/ListSubjects';
import { useRA } from '../../../contexts/RAContext';

const ProblemsReviewsSelect = () => {

    const baseRoute = '/ava/problemas-nas-avaliacoes/escolha/abrir-demanda';
    const { currentRA } = useRA();

    const [selectedSubjectName, setSelectedSubjectName] = useState(null);

    useEffect(() => {
        console.log(`RA Atual: ${currentRA.ra}`);
    }, [currentRA]);

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
                    onClick={handleSubjectClick}
                />
            </div>
        </main>
    );
}

export default ProblemsReviewsSelect;
