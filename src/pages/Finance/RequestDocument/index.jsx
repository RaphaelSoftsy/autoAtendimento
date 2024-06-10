import './requestDocument.css'
import ListSubjects from '../../../components/ListSubjects';

const RequestDocument = () => {
    const list = [
        {
            id: 1,
            name: 'Declaração Financeira',
            route: '/financeiro/solicitar-documentos/declaracao-financeira'
        },
        {
            id: 2,
            name: 'Carta de Anuencia',
            route: '/financeiro/solicitar-documentos/carta-de-anuencia'
        },
        {
            id: 3,
            name: 'Declaração de Quitação',
            route: '/financeiro/solicitar-documentos/declaracao-de-quitacao'
        },
        {
            id: 4,
            name: 'Declaração Especifica Financeira',
            route: '/financeiro/solicitar-documentos/declaracao-especifica-financeira'
        }
    ]

    return (
        <main className="request-document">
            <div className='list-subjects'>
                <h1 className='title'>Sobre qual assunto deseja falar?</h1>
                <ListSubjects itens={list} />
            </div>
        </main>
    )
}

export default RequestDocument