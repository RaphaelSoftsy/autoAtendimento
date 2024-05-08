import './internship.css'
import ListSubjects from '../../../components/ListSubjects';

const Internship = () => {
    const list = [
        {
            id: 1,
            name: 'Assinatura de Contrato de Estágio',
            route: '/academico/expedicao-de-documentos/estagio/assinatura-de-contrato-de-estagio'
        },
        {
            id: 2,
            name: 'Entrega de Relatório de Estágio',
            route: '/academico/expedicao-de-documentos/estagio/entrega-de-relatorio-de-estagio'
        },
        {
            id: 3,
            name: 'Rescisão de Contrato de Estágio',
            route: '/academico/expedicao-de-documentos/estagio/rescisao-de-contrato-de-estagio'
        },
        {
            id: 4,
            name: 'Convalidação de Horas',
            route: '/academico/expedicao-de-documentos/estagio/convalidacao-de-horas'
        },
        {
            id: 5,
            name: 'Carta de Apresentação – Licenciatura',
            route: '/academico/expedicao-de-documentos/estagio/carta-de-apresentacao-licenciatura'
        },
        {
            id: 6,
            name: 'Regulamentos, manuais e outros documentos de estágio. Ir para o site',
            route: '/academico/expedicao-de-documentos/estagio/regulamentos-manuais-e-outros-documentos-de-estagio'
        },
    ]

    return (
        <div className="internship">
            <div className='list-subjects'>
                <h1 className='title'>Sobre qual assunto deseja falar?</h1>
                <ListSubjects itens={list} />
            </div>
        </div>
    )
}

export default Internship