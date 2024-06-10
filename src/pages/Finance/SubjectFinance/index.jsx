import './subjectFinance.css'
import ListSubjects from '../../../components/ListSubjects';

const SubjectFinance = () => {
    const list = [
        {
            id: 1,
            name: 'Realizar Pagamento',
            route: '/financeiro/realizar-pagamento'
        },
        {
            id: 2,
            name: 'Realizar Acordo',
            route: '/financeiro/realizar-acordo'
        },
        {
            id: 3,
            name: 'Solicitar Documentos',
            route: '/financeiro/solicitar-documentos'
        },
        {
            id: 4,
            name: 'Acrescentar ou Trocar Meios de Pagamento',
            route: '/financeiro/acrescentar-ou-trocar-meios-de-pagamento'
        },
        {
            id: 5,
            name: 'Outros Assuntos',
            route: '/financeiro/outros-assuntos'
        }
    ]

    return (
        <main className="finance">
            <div className='list-subjects'>
                <h1 className='title'>Sobre qual assunto deseja falar?</h1>
                <ListSubjects itens={list} />
            </div>
        </main>
    )
}

export default SubjectFinance