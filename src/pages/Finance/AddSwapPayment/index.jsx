import { useState } from 'react';
import CardList from '../../../components/CardList';
import './addSwapPayment.css'
import DefaultButton from '../../../components/DefaultButton';
import { useNavigate } from 'react-router-dom';

const AddSwapPayment = () => {

    const [selectedPayment, setSelectedPayment] = useState(null);

    const [planoAtual, setPlanoAtual] = useState('PLANO RECORRÊNCIA');

    const handleSelectPayment = (id) => {
        setSelectedPayment(id);
    };

    const togglePlano = () => {
        setPlanoAtual(planoAtual === 'PLANO RECORRÊNCIA' ? 'PLANO MENSAL' : 'PLANO RECORRÊNCIA');
    };

    const navegation = useNavigate()

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
                        backgroundColor="#03bb85"
                        onClick={togglePlano}
                    />
                    <DefaultButton
                        text="Cadastrar Novo Cartão"
                        backgroundColor="#03bb85"
                        onClick={() => navegation("/financeiro/adicionar-cartao")}
                    />
                    <DefaultButton
                        text="Finalizar Sessão"
                        backgroundColor="#dc143c"
                        onClick={() => navegation("/")}
                    />
                </div>
            </main>
        </>

    );

};

export default AddSwapPayment