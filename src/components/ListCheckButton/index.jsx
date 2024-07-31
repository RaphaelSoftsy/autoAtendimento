import './listCheckButton.css';

const ListCheckButton = ({ items, selectedSubjects, onSelect, text, multiple, onClickButton }) => {
    const handleClick = (id) => {
        onSelect(id, multiple);
    };

    return (
        <>
            <ul className='list-check'>
                {items.map(subject => (
                    <li key={subject.id} className='topics'>
                        <input
                            type="checkbox"
                            checked={selectedSubjects.includes(subject.id)}
                            onChange={() => handleClick(subject.id)}
                        />
                        <label onClick={() => handleClick(subject.id)}>
                            {subject.name}
                        </label>
                    </li>
                ))}
                <button className="button-check" onClick={onClickButton}>{text}</button>
            </ul>
        </>
    );
};

export default ListCheckButton;

