import { FaFileAlt, FaGraduationCap, FaHandsHelping, FaQuestionCircle } from 'react-icons/fa';
import './cardPaymentDetails.css';

const CardPaymentDetails = ({ items }) => {


    const statusIcons = {
        'Acordo': <FaHandsHelping />,
        'Serviço': <FaFileAlt />,
        'Mensalidade': <FaGraduationCap />,
        'Outros': <FaQuestionCircle />
    };

    const getIcon = (status) => {
        return statusIcons[status] || <FaQuestionCircle />;
    };

    return (
        <ul className='card-payment-details'>
            {items.map(subject => (
                <li key={subject.id} className='card-payment'>
                    <div className='payment-icon-text'>
                        <span className='payment-icon'>{getIcon(subject.status)}</span>
                        <p className='payment-text'>{subject.name}</p>
                    </div>
                    <span className='payment-value'>R$ {subject.valor}</span>
                </li>
            ))}
        </ul>
    );
}

export default CardPaymentDetails;
