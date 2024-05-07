import './problemsReviews.css'
import ListSubjects from '../../../components/ListSubjects';

const ProblemsReviews = () => {
    const list = [
        {
            id: 1,
            name: 'Avaliação',
            route: '/ava/problemas-nas-avaliacoes/avaliacao'
        },
        {
            id: 2,
            name: 'Substitutiva',
            route: '/ava/problemas-nas-avaliacoes/substitutiva'
        },
        {
            id: 3,
            name: 'Recuperação',
            route: '/ava/problemas-nas-avaliacoes/recuperacao'
        }
    ]

    return (
        <div className="problems-reviews">
            <div className='list-subjects'>
                <h1 className='title'>Selecione qual das opções deseja:</h1>
                <ListSubjects itens={list} />
            </div>
        </div>
    )
}

export default ProblemsReviews