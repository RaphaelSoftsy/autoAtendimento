import ListSubjects from '../../../components/ListSubjects'
import './substituteProof.css'

const SubstituteProof = () => {
    const list = [
        {
            id: 1,
            name: 'Prova Substitutiva',
            route: '/academico/solicitacoes-academicas/solicitacao-de-prova/escolha/prova-substitutiva'
        },
        {
            id: 2,
            name: 'Prova de Recuperação(SOMENTE HB)',
            route: '/academico/solicitacoes-academicas/solicitacao-de-prova/escolha/prova-recuperacao'
        }
    ]

    return (
        <>
            <main className="substitute-proof">
                <div className='list-subjects'>
                    <h1 className='title'>Sobre qual assunto deseja falar?</h1>
                    <ListSubjects itens={list} />
                </div>
            </main>
        </>

    )
}

export default SubstituteProof