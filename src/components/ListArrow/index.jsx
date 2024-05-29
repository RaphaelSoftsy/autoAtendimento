import { useState } from 'react';
import './listArrow.css'
import { FaChevronDown } from "react-icons/fa";


const ListArrow = ({ items }) => {

    const [expandedItemId, setExpandedItemId] = useState(null);

    const toggleDetails = (id) => {
        setExpandedItemId(expandedItemId === id ? null : id);
    };

    return (
        <ul className='list-card-arrow'>
            {items.map(subject => (
                <li
                    key={subject.id}
                    className='topics-card-arrow'
                    style={{
                        borderLeft: `20px solid #CCC`
                    }}
                >
                    <div className='arrow'>
                        <p onClick={() => toggleDetails(subject.id)}>
                            {subject.name}
                        </p>
                        <span className='arrow-down' onClick={() => toggleDetails(subject.id)}>
                            <FaChevronDown />
                        </span>
                    </div>

                    {expandedItemId === subject.id && (
                        <div className='card-details'>
                            <div className='details'>
                                <p>{subject.detalhes}</p>
                            </div>
                            <button className='solicitar'>{subject.text_button}</button>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};


export default ListArrow