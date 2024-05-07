import './reviewsNotes.css'
import ListSubjects from '../../../components/ListSubjects';

const ReviewsNotes = () => {
    const list = [
        {
            id: 1,
            name: 'Revisão/Lançamento de Notas',
            route: '/academico/avaliacoes-e-notas/revisao-lancamento-de-notas'
        }
    ]

    return (
        <div className="reviews-notes">
            <div className='list-subjects'>
                <h1 className='title'>Sobre qual assunto deseja falar?</h1>
                <ListSubjects itens={list} />
            </div>
        </div>
    )
}

export default ReviewsNotes