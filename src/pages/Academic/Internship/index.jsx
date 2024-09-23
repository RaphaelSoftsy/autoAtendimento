import ListSubjects from '../../../components/ListSubjects';
import { useRA } from '../../../contexts/RAContext';
import './internship.css';

const Internship = () => {
    const { currentRA } = useRA();
    const encodedRa = btoa(currentRA.ra);

    const list = [
        {
            id: 1,
            name: 'Assinatura de Contrato de Estágio',
            route: '/academico/solicitacoes-academicas/estagio/assinatura-de-contrato-de-estagio'
        },
        {
            id: 2,
            name: 'Entrega de Relatório de Estágio',
            route: '/academico/solicitacoes-academicas/estagio/entrega-de-relatorio-de-estagio'
        },
        {
            id: 3,
            name: 'Rescisão de Contrato de Estágio',
            route: '/academico/solicitacoes-academicas/estagio/rescisao-de-contrato-de-estagio'
        },
        {
            id: 4,
            name: 'Convalidação de Horas',
            route: '/academico/solicitacoes-academicas/estagio/convalidacao-de-horas'
        },
        {
            id: 5,
            name: 'Carta de Apresentação – Licenciatura',
            route: `https://sumare.edu.br/cartaDeTermoDoEstagio.html?id=${encodedRa}`
        },
        {
            id: 6,
            name: 'Regulamentos, manuais e outros documentos de estágio. Ir para o site',
            route: 'https://sumare.edu.br/estagio.html'
        }
    ]

    return (
        <div className="internship">
            <div className='list-subjects'>
                <h1 className='title'>Sobre qual assunto você deseja falar?</h1>
                <ListSubjects itens={list} />
            </div>
        </div>
    )
}

export default Internship