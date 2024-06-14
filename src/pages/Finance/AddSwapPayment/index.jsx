import { useEffect, useState } from 'react';
import CardList from '../../../components/CardList';
import './addSwapPayment.css'
import DefaultButton from '../../../components/DefaultButton';
import { useNavigate } from 'react-router-dom';
import url_base from '../../../services/url_base';
import axios from 'axios';

const AddSwapPayment = () => {

    const [selectedPayment, setSelectedPayment] = useState(null);
    const [payment, setPayment] = useState('');
    // const aluno = localStorage.getItem("aluno-ra");
    const aluno = '2183321'

    const [planoAtual, setPlanoAtual] = useState('PLANO RECORRÊNCIA');

    const handleSelectPayment = (id) => {
        setSelectedPayment(id);
    };

    const togglePlano = () => {
        setPlanoAtual(planoAtual === 'PLANO RECORRÊNCIA' ? 'PLANO MENSAL' : 'PLANO RECORRÊNCIA');
    };

    const navegation = useNavigate()

    async function getPerformPayment() {
        try {
            const response = await axios.get(`${url_base}/listaCartoesSalvos/${aluno}`);
            const data = response.data;
            console.log('Dados da declaração:', data);

            // Filtrando os objetos que têm o campo 'id' definido
            const filteredData = data.filter(item => item.id !== null);

            const formattedData = filteredData.map((item, index) => ({
                id: index + 1,
                idCartao: item.id,
                aluno: item.aluno,
                num: `****${item.num}`
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
            name: 'MasterCard **** 4750',
        },
        {
            id: 2,
            name: 'MasterCard **** 4750',
        },
        {
            id: 3,
            name: 'Boleto',
        },
        {
            id: 4,
            name: 'PIX',
        }
    ]
    return (
        <>
            <main className='add-swap-payment'>
                <div className='plano-recorrencia-ou-mensal'>
                    <div className='plano-atual'>
                        <span>Plano Atual:</span>
                        <span>{planoAtual}</span>
                    </div>
                </div>
                <h2 className='meio-pagamento'>Seus Meios de Pagamento</h2>
                <div className='list-cards'>
                    <CardList
                        items={list}
                        selectedSubject={selectedPayment}
                        onSelect={handleSelectPayment}
                    />
                </div>
                <div className='buttons'>
                    <DefaultButton
                        text={`Se for plano 
                        ${planoAtual === 'PLANO RECORRÊNCIA' ? 'recorrência' : 'mensal'} 
                        ALTERAR PLANO PARA 
                        ${planoAtual === 'PLANO RECORRÊNCIA' ? 'MENSAL' : 'RECORRÊNCIA'}`
                        }
                        backgroundColor="var(--custom-green)"
                        onClick={togglePlano}
                    />
                    <DefaultButton
                        text="Cadastrar Novo Cartão"
                        backgroundColor="var(--custom-green)"
                        onClick={() => navegation("/financeiro/adicionar-cartao")}
                    />
                    <DefaultButton
                        text="Finalizar Sessão"
                        backgroundColor="var(--secondary-light-red)"
                        onClick={() => navegation("/")}
                    />
                </div>
            </main>
        </>

    );

};

export default AddSwapPayment