import ListSubjects from '../../../components/ListSubjects';

const ProblemsReviewsSelect = () => {

    const list = [
        {
            id: 1,
            name: 'Avaliação',
            route: '/ava/problemas-nas-avaliacoes/escolha/avaliacao'
        },
        {
            id: 2,
            name: 'Substitutiva',
            route: '/ava/problemas-nas-avaliacoes/escolha/substitutiva'
        },
        {
            id: 3,
            name: 'Recuperação',
            route: '/ava/problemas-nas-avaliacoes/escolha/recuperacao'
        }
    ];


    return (
        <main className="problems-reviews">
            <div className='list-subjects'>
                <h1 className='title'>Selecione qual das opções deseja:</h1>
                <ListSubjects itens={list} />
            </div>
        </main>
    )
}

export default ProblemsReviewsSelect