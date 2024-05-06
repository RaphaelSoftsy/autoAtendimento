import './subjectAcd.css'
import ListSubjects from '../../../components/ListSubjects';

const SubjectAcd = () => {

    const list = [
        {
            id: 1,
            name: 'Avaliações e Notas',
            route: '/academico/avaliacoes-e-notas'
        },
        {
            id: 2,
            name: 'Matricula em Reprovação/Adaptação',
            route: '/academico/matricula-em-reprovacao-adaptacao'
        },
        {
            id: 3,
            name: 'Solicitações Academicas',
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
        <div className="academic">
            <div className='list-subjects'>
                <h1 className='title'>Sobre qual assunto deseja falar?</h1>
                <ListSubjects itens={list} />
            </div>
        </div>
    )
}

export default SubjectAcd