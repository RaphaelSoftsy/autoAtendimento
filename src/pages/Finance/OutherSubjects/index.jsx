import './outherSubjects.css'
import ListSubjects from '../../../components/ListSubjects';

const OutherSubjects = () => {
    const list = [
        {
            id: 1,
            name: 'Bolsa',
            route: '/financeiro/outros-assuntos'
        },
        {
            id: 2,
            name: 'Reembolso',
            route: '/financeiro/outros-assuntos'
        },
        {
            id: 3,
            name: 'Mensalidades, serviços ou acordos com valores divergentes',
            route: '/financeiro/outros-assuntos'
        },
        {
            id: 4,
            name: 'Fies/Super Sumaré',
            route: '/financeiro/outros-assuntos'
        },
        {
            id: 5,
            name: 'CashBack',
            route: '/financeiro/outros-assuntos'
        },
        {
            id: 6,
            name: 'Cobrança Indevida',
            route: '/financeiro/outros-assuntos'
        },
        {
            id: 7,
            name: 'Resgate de Cheques',
            route: '/financeiro/outros-assuntos'
        }
    ]

    return (
        <div className="outherSubjects">
            <div className='list-subjects'>
                <h1 className='title'>Sobre qual assunto deseja falar?</h1>
                <ListSubjects itens={list} />
            </div>
        </div>
    )
}

export default OutherSubjects