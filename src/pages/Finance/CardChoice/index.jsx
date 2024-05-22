import { useNavigate } from 'react-router-dom';
import './cardChoice.css'
import { useState } from 'react';
import CardList from '../../../components/CardList';
import DefaultButton from '../../../components/DefaultButton';

const CardChoice = () => {

    const [selectedPayment, setSelectedPayment] = useState(null);

    const handleSelectPayment = (id) => {
        setSelectedPayment(id);
    };

    const navegation = useNavigate()

    const list = [
        {
            id: 1,
            name: 'MasterCard **** 4750',
        },
        {
            id: 2,
            name: 'MasterCard **** 4751',
        }
    ]

    return (
        <>
            <main className='card-choice'>
                <h2 className='meio-pagamento'>Qual Cartão de Crédito Deseja Utilizar?</h2>
                <div className='list-cards'>
                    <CardList
                        items={list}
                        selectedSubject={selectedPayment}
                        onSelect={handleSelectPayment}
                    />
                </div>
                <div className='buttons'>
                    <DefaultButton
                        text="Cadastrar Novo Cartão"
                        backgroundColor="#03bb85"
                        onClick={() => navegation("/financeiro/adicionar-cartao")}
                    />
                    <DefaultButton
                        text="Pagar"
                        backgroundColor="#019ED3"
                        onClick={() => navegation("/financeiro/realizar-pagamento/pago")}
                    />
                </div>
            </main>
        </>
    );
}

export default CardChoice;