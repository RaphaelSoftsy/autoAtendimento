import './monthlyPayment.css'
import ListSubjects from '../../../components/ListSubjects';

const MonthlyPayment = () => {
    const list = [
        {
            id: 1,
            name: 'Mensalidade',
            route: '/financeiro/outros-assuntos/mensalidades-servicos/mensalidade'
        },
        {
            id: 2,
            name: 'Serviços',
            route: '/financeiro/outros-assuntos/mensalidades-servicos/servicos'
        },
        {
            id: 3,
            name: 'Acordo',
            route: '/financeiro/outros-assuntos/mensalidades-servicos/acordo'
        }
    ]

    return (
        <div className="monthlyPayment">
            <div className='list-subjects'>
                <h1 className='title'>Sobre qual assunto deseja falar? 2</h1>
                <ListSubjects itens={list} />
            </div>
        </div>
    )
}

export default MonthlyPayment