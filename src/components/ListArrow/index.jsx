import { useState } from 'react';
import './listArrow.css'
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';


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
                        <div className='card-details-diploma'>
                            <div className='details-diploma'>
                                <span>{subject.detalhes}</span>
                            </div>
                            <Link key={subject.id} to={subject.route} className='solicitar'> {subject.text_button} </Link>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};


export default ListArrow