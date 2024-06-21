import { useNavigate } from 'react-router-dom';
import ListSubjects from '../../../components/ListSubjects';

const ProofRequestSelect = () => {

    const navegation = useNavigate();

    const selectedProof = JSON.parse(localStorage.getItem("selectedProof") || "[]");

    console.log(selectedProof);

    const list = [
        {
            id: 1,
            name: 'Prova Substitutiva',
            route: '/academico/solicitacoes-academicas/solicitacao-de-prova/escolha/prova-substitutiva',
            key: 'provasub'
        },
        {
            id: 2,
            name: 'Prova de Recuperação(SOMENTE HB)',
            route: '/academico/solicitacoes-academicas/solicitacao-de-prova/escolha/prova-recuperacao',
            key: 'provahb'
        }
    ]

    const prova = [

        {
            id: 1,
            nome: 'prova-recuperaçaõ',
            descricao: 'teste',
            valor: '60.00'
        },


    ];

    if(prova.valor === '0.00'){
        navegation('/realizar-pagamento')
    }else if(prova.valor == '') {
    }else{
        navegation('/academico/solicitacoes-academicas/solicitacao-de-prova/escolha/abrir-solicitacao')
    }

    // Filtrar a lista com base nos valores armazenados no localStorage
    const filteredList = list.filter(item => selectedProof.some(proof => proof[item.key]));

    return (
        <main className="proof-request">
            <div className='list-subjects'>
                <h1 className='title'>Sobre qual assunto deseja falar?</h1>
                <ListSubjects itens={filteredList} />
            </div>
        </main>
    )
}

export default ProofRequestSelect