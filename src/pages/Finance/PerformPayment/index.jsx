import './performPayment.css'
import ItemsPayment from '../../../components/ItemsPayment';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';
import url_base from '../../../services/url_base';

const PerformPayment = () => {

    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [payment, setPayment] = useState('');
    const navigate = useNavigate();
    // const aluno = localStorage.getItem("aluno-ra");
    const aluno = '13121080709'

    const MySwal = withReactContent(Swal);

    const monthNames = {
        '1': 'Janeiro',
        '2': 'Fevereiro',
        '3': 'Março',
        '4': 'Abril',
        '5': 'Maio',
        '6': 'Junho',
        '7': 'Julho',
        '8': 'Agosto',
        '9': 'Setembro',
        '10': 'Outubro',
        '11': 'Novembro',
        '12': 'Dezembro'
    };

    async function getPerformPayment() {
        try {
            const response = await axios.get(`${url_base}/cobrancaAluno/aluno/${aluno}/vencidas/n/aVencer/s`);
            const data = response.data;
            console.log('Dados da declaração:', data);

             // Mapeando os objetos retornados pela API para o novo formato com IDs incrementais
             const formattedData = data.map((item, index) => ({
                id: index + 1,
                cobranca: item.cobranca,
                ano: item.ano,
                mes: item.mes,
                mesName: monthNames[item.mes],
                aluno: item.aluno,
                resp: item.resp,
                dataDeVencimento: item.dataDeVencimento,
                valorFaturado: item.valorFaturado,
                valorDenscontoAtual: item.valorDenscontoAtual,
                dataDescontoAtual: item.dataDescontoAtual,
                valorPagar: item.valorPagar
            }));

            setPayment(formattedData);
        } catch (error) {
            console.error('Erro ao buscar declaração:', error);
        }
    }

    useEffect(() => {
        getPerformPayment();
    }, [aluno]);

    console.log(payment);

    const list = [
        {
            id: 1,
            name: 'Mensalidade Jan/234',
            valor: '79,90',
            status: 'Acordo'
        },
        {
            id: 2,
            name: 'Mensalidade Jan/235',
            valor: '139,90',
            status: 'Serviço'
        },
        {
            id: 3,
            name: 'Mensalidade Jan/236',
            valor: '138,90',
            status: 'Mensalidade'
        },
        {
            id: 4,
            name: 'Mensalidade Jan/237',
            valor: '155,90',
            status: 'Outros'
        }
    ];

    const handleSubjectSelect = (id) => {
        setSelectedSubjects(prevSelected => {
            const index = prevSelected.indexOf(id);
            if (index !== -1) {
                return prevSelected.filter(subjectId => subjectId !== id);
            } else {
                return [...prevSelected, id];
            }
        });
    };

    const total = selectedSubjects.reduce((acc, id) => {
        const item = list.find(item => item.id === id);
        return acc + parseFloat(item.valor.replace(',', '.'));
    }, 0);

    const formatValue = (value) => {
        return value.toFixed(2).replace('.', ',');
    };

    const handleNext = () => {
        if (selectedSubjects.length === 0) {
            MySwal.fire({
                icon: 'info',
                title: 'Erro',
                text: 'Você não selecionou nada',
                confirmButtonText: 'OK'
            });
        } else {
            const selectedItems = list.filter(item => selectedSubjects.includes(item.id));
            localStorage.setItem("selectedItems", JSON.stringify(selectedItems));

            localStorage.setItem("total", formatValue(total));

            navigate('/financeiro/realizar-pagamento/detalhes-pagamento');
        }
    };

    return (
        <>
            <main className="perform-payment">
                <div className='list-subjects'>
                    <h1 className='title'>Escolha os itens para pagamento</h1>
                    <ItemsPayment
                        items={list}
                        selectedSubjects={selectedSubjects}
                        onSelect={handleSubjectSelect} />
                </div>
            </main>
            <footer className='footer-container'>
                <div className='footer-payment'>
                    <div className='total'>
                        <span>Total:</span>
                        <span>R$ {formatValue(total)}</span>
                    </div>
                    <button onClick={handleNext} className='title-footer' > Próximo </button>
                </div>
            </footer>
        </>
    );
};

export default PerformPayment