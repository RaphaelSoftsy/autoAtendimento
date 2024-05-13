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
        'Acordo': '#019ed3',
        'Serviço': '#ffc107',
        'Mensalidade': '#00cc00',
        'Outros': '#ff0000'
    };

    return (
        <ul className='list-payment'>
            {items.map(subject => (
                <li
                    key={subject.id}
                    className='topics-payment'
                    style={{
                        borderLeft: `20px solid ${statusColors[subject.status] || '#CCC'}`
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
                            <p>Mensalidade referente a Fevereiro de 2023</p>
                            <p>Vencimento: 10/02</p>
                            <p>Desconto: R$ 60,00</p>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};


export default ItemsPayment