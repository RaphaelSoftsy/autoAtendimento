import './paymentDetails.css'
import CardPaymentDetails from '../../../components/CardPaymentDetails';
import { FaQrcode, FaCreditCard, FaBarcode } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const PaymentDetails = () => {

    const location = useLocation();
    const { selectedItems } = location.state || { selectedItems: [] };

    const total = localStorage.getItem("total");

    return (
        <main className='payment-details'>
            <div className='container-payment'>
                <div className="overall">
                    <h2>Total</h2>
                    <span className='total-value'>R$ {total}</span>
                </div>
                <div className='cards-pix-boleto-cartao'>
                    <Link className="card-pix" to="/financeiro/realizar-pagamento/detalhes-pagamento/pix">
                        <FaQrcode />
                        <h3>Pix</h3>
                    </Link>
                    <Link className="card-boleto" to="/financeiro/realizar-pagamento/detalhes-pagamento/boleto">
                        <FaBarcode />
                        <h3>Boleto</h3>
                    </Link>
                    <Link className="card-cartao" to="/financeiro/realizar-pagamento/detalhes-pagamento/cartao">
                        <FaCreditCard />
                        <h3>Cartão</h3>
                    </Link>
                </div>
            </div>
            <div className='container-payment-details'>
                <h2>Detalhes do pagamento</h2>
                <CardPaymentDetails items={selectedItems} />
            </div>

        </main>
    );

}

export default PaymentDetails;