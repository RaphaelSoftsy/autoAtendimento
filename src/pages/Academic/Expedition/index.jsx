import './expedition.css'
import ListSubjects from '../../../components/ListSubjects';

const Expedition = () => {
    
    const list = [
        {
            id: 1,
            name: 'Declaração de Matrícula',
            route: '/academico/expedicao-de-documentos/declaracao-de-matricula'
        },
        {
            id: 2,
            name: 'Histórico Escolar',
            route: '/academico/expedicao-de-documentos/historico-escolar'
        },
        {
            id: 3,
            name: 'Declaração de Conclusão',
            route: '/academico/expedicao-de-documentos/declaracao-de-conclusao'
        },
        {
            id: 4,
            name: 'Declaração Especifica Academica',
            route: '/academico/expedicao-de-documentos/declaracao-especifica-academica'
        },
        {
            id: 5,
            name: 'Conteúdo Programático',
            route: '/academico/expedicao-de-documentos/conteudo-promatico'
        },
    ]

    return (
        <main className="expedition">
            <div className='list-subjects'>
                <h1 className='title'>Selecione qual das opções deseja:</h1>
                <ListSubjects itens={list} />
            </div>
        </main>
    )
}

export default Expedition