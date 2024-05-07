import './cashBack.css'
import ListSubjects from '../../../components/ListSubjects';

const CashBack = () => {
    const list = [
        {
            id: 1,
            name: 'Mensalidade',
            route: '/financeiro/outros-assuntos/cashback/mensalidades'
        },
        {
            id: 2,
            name: 'Serviços',
            route: '/financeiro/outros-assuntos/cashback/servicos'
        },
        {
            id: 3,
            name: 'Todos',
            route: '/financeiro/outros-assuntos/cashback/todos'
        },
    ]

    return (
        <div className="cashback">
            <div className='list-subjects'>
                <h1 className='title'>Selecione qual as opções que deseja:</h1>
                <ListSubjects itens={list} />
            </div>
        </div>
    )
}

export default CashBack