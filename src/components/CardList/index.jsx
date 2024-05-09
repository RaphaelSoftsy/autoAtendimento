import './cardList.css'
import { FaExpandAlt } from "react-icons/fa";

const CardList = ({ items, selectedSubjects, onSelect }) => {
    const handleClick = (id) => {
        onSelect(id);
    };

    return (
        <ul className='list-card'>
            {items.map(card => (
                <li key={card.id} className='card'>
                    <input
                        type="radio"
                        onChange={() => handleClick(card.id)}
                    />
                    <label onClick={() => handleClick(card.id)}>
                        {card.name}
                    </label>
                    <FaExpandAlt />
                </li>
            ))}
        </ul>
    );
};


export default CardList