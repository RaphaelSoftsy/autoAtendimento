import './proofRequest.css'
import ListSubjects from '../../../components/ListSubjects';

const ProofRequest = () => {
    const list = [
        {
            id: 1,
            name: 'Prova Substitutiva',
            route: '/academico/solicitacoes-academicas/solicitacao-de-prova/prova-substitutiva'
        },
        {
            id: 2,
            name: 'Prova de Recuperação(SOMENTE HB)',
            route: '/academico/solicitacoes-academicas/solicitacao-de-prova/prova-recuperacao'
        }
    ]

    return (
        <main className="proof-request">
            <div className='list-subjects'>
                <h1 className='title'>Sobre qual assunto deseja falar?</h1>
                <ListSubjects itens={list} />
            </div>
        </main>
    )
}

export default ProofRequest