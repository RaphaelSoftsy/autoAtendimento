import { useState } from 'react';
import CardList from '../../../components/CardList';
import './addSwapPayment.css'
import DefaultButton from '../../../components/DefaultButton';

const AddSwapPayment = () => {

    const [selectedPayment, setSelectedPayment] = useState(null);

    const handleSelectPayment = (id) => {
        setSelectedPayment(id);
    };

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
            <main className='main'>
                <div className='plano-recorrencia-ou-mensal'>
                    <div className='plano-atual'>
                        <span>Plano Atual:</span>
                        <span>PLANO RECORRENCIA</span>
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
                        text="Se for plano mensal  ALTERAR PLANO PARA RECORRENCIA"
                        backgroundColor="#03bb85"
                    />
                    <DefaultButton
                        text="Cadastrar Novo Cartão"
                        backgroundColor="#03bb85"
                    />
                    <DefaultButton
                        text="Finalizar Sessão"
                        backgroundColor="#dc143c"
                    />
                </div>
            </main>
        </>

    );

};

export default AddSwapPayment