import './academicRequests.css'
import ListSubjects from '../../../components/ListSubjects';

const AcademicRequests = () => {
    const list = [
        {
            id: 1,
            name: 'Aproveitamento de Estudos',
            route: '/academico/expedicao-de-documentos/aproveitamento-de-estudos'
        },
        {
            id: 2,
            name: 'Solicitação de Prova',
            route: '/academico/expedicao-de-documentos/solicitação-de-prova'
        },
        {
            id: 3,
            name: 'Diplomas',
            route: '/academico/expedicao-de-documentos/diplomas'
        },
        {
            id: 4,
            name: 'Tranferência',
            route: '/academico/expedicao-de-documentos/traferencia'
        },
        {
            id: 5,
            name: 'Estágio',
            route: '/academico/expedicao-de-documentos/estagio'
        },
        {
            id: 6,
            name: 'Atividades Complementares',
            route: '/academico/expedicao-de-documentos/atividades-complementares'
        },
        {
            id: 7,
            name: 'ENADE',
            route: '/academico/expedicao-de-documentos/enade'
        },
        {
            id: 8,
            name: 'Rematrícula',
            route: '/academico/expedicao-de-documentos/rematricula'
        },
        {
            id: 9,
            name: 'Transporte Escolar',
            route: '/academico/expedicao-de-documentos/transporte-escolar'
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