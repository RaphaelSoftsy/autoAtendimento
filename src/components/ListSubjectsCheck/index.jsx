import './listSubjectsCheck.css'
import { Link } from 'react-router-dom';

const ListSubjectsCheck = ({ itens, selectedSubject, onSelect }) => {

    // const handleClick = (id) => {
    //     onSelect(id);
    // };

    return (
        <ul className='list'>
            {itens.map(subject => (
                <Link
                    key={subject.id}
                    to={subject.route}
                    className='topics'
                    onClick={() => handleClick(subject.id)}
                >
                    <input
                        type="checkbox"
                        id={`subject-${subject.id}`}
                        name={`subject-${subject.id}`}
                        checked={selectedSubject === subject.id}
                        onChange={() => handleClick(subject.id)}
                    />
                    <label htmlFor={`subject-${subject.id}`}>{subject.name}</label>
                </Link>
            ))}
        </ul>
    );
};

export default ListSubjectsCheck