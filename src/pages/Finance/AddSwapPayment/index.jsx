import CardList from '../../../components/CardList';
import './addSwapPayment.css'

const AddSwapPayment = () => {

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
            <main>
                <div className='plano-recorrencia-ou-mensal'>
                    <span>Plano Atual:</span>
                    <span>PLANO RECORRENCIA</span>
                </div>
                <h2 className='meio-pagamento'>Seus Meios de Pagamento</h2>
                <div className='lista-cartao'>
                   <CardList items={list} />
                </div>
            </main>
        </>

    );

};

export default AddSwapPayment