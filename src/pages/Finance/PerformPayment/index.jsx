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
    const [payment, setPayment] = useState([]);
    const navigate = useNavigate();
    // const aluno = localStorage.getItem("aluno-ra");
    const aluno = '2473773'
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
            const response = await axios.get(`${url_base}/cobrancaAluno/busca?aluno=${aluno}&cpf=&vencidas=N&aVencer=S`);
            const data = response.data;
            console.log('Dados da declaração:', data);

            // Mapeando os objetos retornados pela API para o novo formato com IDs incrementais
            const formattedData = data
            .filter(item => parseFloat(item.valorPagar) !== 0)
            .map((item, index) => ({
                id: index + 1,
                aluno: item.aluno,
                resp: item.resp,
                statusCobranca: item.statusCobranca,
                cobranca: item.cobranca,
                tipoCobranca: item.tipoCobranca,
                descricao: item.descricao,
                curso: item.curso,
                turno: item.turno,
                serie: item.serie,
                mes: item.mes,
                mesName: monthNames[item.mes],
                ano: item.ano,
                dataDeVencimento: item.dataDeVencimento,
                dataDescontoAtual: item.dataDescontoAtual,
                valorDescontoAtual: item.valorDescontoAtual,
                valorFaturado: item.valorFaturado,
                valorPagar: item.valorPagar,
                jurosMulta: item.jurosMulta
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

    const formattedList = payment.map((item) => ({
        id: item.id,
        name: `${item.tipoCobranca} ${item.mesName}/${item.ano}`,
        valor: item.valorPagar,
        status: item.tipoCobranca,
        descricao: item.descricao,
        mes: item.mes,
        ano: item.ano,
        dataVencimento: item.dataDeVencimento,
        valorDensconto: item.valorDenscontoAtual
    }));

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
        const item = formattedList.find(item => item.id === id);
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
            const selectedItems = formattedList.filter(item => selectedSubjects.includes(item.id));
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
                        items={formattedList}
                        selectedSubjects={selectedSubjects}
                        onSelect={handleSubjectSelect} 
                        />
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