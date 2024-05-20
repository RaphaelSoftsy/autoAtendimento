import './paymentDetails.css'
import CardPaymentDetails from '../../../components/CardPaymentDetails';
import { FaQrcode, FaCreditCard, FaBarcode, FaGraduationCap, FaHandsHelping, FaFileAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const PaymentDetails = () => {

    const location = useLocation();
    const { selectedItems, total } = location.state || { selectedItems: [], total: 0 };

    console.log(selectedItems, total);
    

    // const list = [
    //     {
    //         id: 1,
    //         icon: <FaFileAlt />,
    //         text: 'Segunda via de Diploma de Segunda Graduação',
    //         value: '79.90',
    //         status: 'Acordo'
    //     },
    //     {
    //         id: 2,
    //         icon: <FaGraduationCap />,
    //         text: 'Mensalidade Jan/23',
    //         value: '139.90',
    //         status: 'Serviço'
    //     },
    //     {
    //         id: 3,
    //         icon: <FaHandsHelping />,
    //         text: 'Acordo Parcela 08/12',
    //         value: '138.90',
    //         status: 'Mensalidade'
    //     }
    // ];

    return (
        <main className='payment-details'>
            <div className='container-payment'>
                <div className="overall">
                    <h2>Total</h2>
                    <span className='total-value'>R$ {total.toFixed(2)}</span>
                </div>
                <div className='cards-pix-boleto-cartao'>
                    <div className="card-pix">
                        <FaQrcode />
                        <h3>Pix</h3>
                    </div>
                    <div className="card-boleto">
                        <FaBarcode />
                        <h3>Boleto</h3>
                    </div>
                    <div className="card-cartao">
                        <FaCreditCard />
                        <h3>Cartão</h3>
                    </div>
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