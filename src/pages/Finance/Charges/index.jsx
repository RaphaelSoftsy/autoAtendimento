import './charges.css'
import ListSubjects from '../../../components/ListSubjects';

const Charges = () => {
    const list = [
        {
            id: 1,
            name: 'Mensalidade',
            route: '/financeiro/outros-assuntos/cobrança-indevida/mensalidades'
        },
        {
            id: 2,
            name: 'Serviços',
            route: '/financeiro/outros-assuntos/cobrança-indevida/servicos'
        },
        {
            id: 3,
            name: 'Acordo',
            route: '/financeiro/outros-assuntos/cobrança-indevida/acordo'
        },
        {
            id: 4,
            name: 'Todos',
            route: '/financeiro/outros-assuntos/cobrança-indevida/todos'
        },
    ]

    return (
        <div className="charges">
            <div className='list-subjects'>
                <h1 className='title'>Selecione qual as opções que deseja:</h1>
                <ListSubjects itens={list} />
            </div>
        </div>
    )
}

export default Charges