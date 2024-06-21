import { useNavigate } from 'react-router-dom';
import ListSubjects from '../../../components/ListSubjects';

const ProofRequestSelect = () => {

    const navegation = useNavigate();

    const selectedProof = JSON.parse(localStorage.getItem("selectedProof") || "[]");

    console.log(selectedProof);

    const prova = [
        {
            id: 1,
            nome: 'prova-recuperação',
            descricao: 'teste',
            valor: '60.00'
        },
    ];

    const validate = () => {
        if (prova.valor === '0.00') {
            return '/realizar-pagamento'
        } else if (prova.valor == '') {
        } else {
            return '/academico/solicitacoes-academicas/solicitacao-de-prova/escolha/abrir-solicitacao'
        }
    }

    const list = [
        {
            id: 1,
            name: 'Prova Substitutiva',
            route: validate(),
            key: 'provasub'
        },
        {
            id: 2,
            name: 'Prova de Recuperação(SOMENTE HB)',
            route: validate(),
            key: 'provahb'
        }
    ]

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