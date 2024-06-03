import './academicRequests.css'
import ListSubjects from '../../../components/ListSubjects';

const AcademicRequests = () => {
    const list = [
        {
            id: 1,
            name: 'Aproveitamento de Estudos',
            route: '/academico/solicitacoes-academicas/aproveitamento-de-estudos'
        },
        {
            id: 2,
            name: 'Solicitação de Prova',
            route: '/academico/solicitacoes-academicas/solicitacao-de-prova'
        },
        {
            id: 3,
            name: 'Diplomas',
            route: '/academico/solicitacoes-academicas/diplomas'
        },
        {
            id: 4,
            name: 'Tranferência',
            route: '/academico/solicitacoes-academicas/traferencia'
        },
        {
            id: 5,
            name: 'Estágio',
            route: '/academico/solicitacoes-academicas/estagio'
        },
        {
            id: 6,
            name: 'Atividades Complementares',
            route: '/academico/solicitacoes-academicas/atividades-complementares'
        },
        {
            id: 7,
            name: 'ENADE',
            route: '/academico/solicitacoes-academicas/enade'
        },
        {
            id: 8,
            name: 'Rematrícula',
            route: '/academico/solicitacoes-academicas/rematricula'
        },
        {
            id: 9,
            name: 'Transporte Escolar',
            route: '/academico/solicitacoes-academicas/transporte-escolar'
        }
        
    ]

    return (
        <div className="academic-requests">
            <div className='list-subjects'>
                <h1 className='title'>Sobre qual assunto deseja falar?</h1>
                <ListSubjects itens={list} />
            </div>
        </div>
    )
}

export default AcademicRequests