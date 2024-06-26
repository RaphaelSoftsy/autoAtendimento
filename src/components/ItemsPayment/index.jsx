import { useState } from 'react';
import './itemsPayment.css'
import { FaChevronDown } from "react-icons/fa";


const ItemsPayment = ({ items, selectedSubjects, onSelect }) => {

    const [expandedItemId, setExpandedItemId] = useState(null);

    const toggleDetails = (id) => {
        setExpandedItemId(expandedItemId === id ? null : id);
    };

    const handleClick = (id) => {
        onSelect(id);
    };

    const statusColors = {
        'ACORDOS': 'var(--secondary-light-yellow)',
        'SERVIÇOS': 'var(--success-light-green)',
        'MENSALIDADES': 'var(--primary-light-blue)',
        'OUTROS': 'var(--secondary-dark-red)'
    };

    return (
        <ul className='list-payment'>
            {items.map(subject => (
                <li
                    key={subject.id}
                    className='topics-payment'
                    style={{
                        borderLeft: `20px solid ${statusColors[subject.status] || 'var(--neutral-light-gray)'}`
                    }}
                >
                    <div className='payment'>
                        <input
                            type="checkbox"
                            checked={selectedSubjects.includes(subject.id)}
                            onChange={() => handleClick(subject.id)}
                        />
                        <label onClick={() => handleClick(subject.id)}>
                            R${subject.valor} - {subject.name}
                        </label>
                        <span className='arrow-down' onClick={() => toggleDetails(subject.id)}>
                            <FaChevronDown />
                        </span>
                    </div>


                    {expandedItemId === subject.id && (
                        <div className='details'>
                            <h1>A Vencer</h1>
                            <p>Descrição: {subject.descricao}</p>
                            <p>Vencimento: {subject.dataVencimento}</p>
                            <p>Desconto: {subject.valorDensconto}</p>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};


export default ItemsPayment