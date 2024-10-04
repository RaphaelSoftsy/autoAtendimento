import './fiesSumare.css'
import ListSubjects from '../../../components/ListSubjects';

const FiesSumare = () => {
    const list = [
        {
            id: 1,
            name: 'Fies',
            route: '/financeiro/outros-assuntos/fies-sumare/fies'
        },
        {
            id: 2,
            name: 'Super Sumaré',
            route: '/financeiro/outros-assuntos/fies-sumare/sumare'
        }
    ]

    return (
        <main className="fies-sumare">
            <div className='list-subjects'>
                <h1 className='title'>Sobre qual assunto você deseja falar?</h1>
                <ListSubjects itens={list} />
            </div>
        </main>
    )
}

export default FiesSumare