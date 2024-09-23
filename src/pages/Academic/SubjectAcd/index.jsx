import ListSubjects from '../../../components/ListSubjects';
import './subjectAcd.css';

const SubjectAcd = () => {

    const list = [
        {
            id: 1,
            name: 'Avaliações e Notas',
            route: '/academico/avaliacoes-e-notas'
        },
        {
            id: 2,
            name: 'Matrícula em Reprovação/Adaptação',
            route: '/academico/matricula-em-reprovacao-adaptacao'
        },
        {
            id: 3,
            name: 'Solicitações Acadêmicas',
            route: '/academico/solicitacoes-academicas'
        },
        {
            id: 4,
            name: 'Expedição de Documentos',
            route: '/academico/expedicao-de-documentos'
        },
        {
            id: 5,
            name: 'Cancelamento do Curso',
            route: '/academico/cancelamento-do-curso'
        }
    ]

    return (
        <main className="academic">
            <div className='list-subjects'>
                <h1 className='title'>Sobre qual assunto você deseja falar?</h1>
                <ListSubjects itens={list} />
            </div>
        </main>
    )
}

export default SubjectAcd