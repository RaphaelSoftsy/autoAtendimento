import './listSubjectsCheck.css'

const ListSubjectsCheck = ({ items, selectedSubjects, onSelect }) => {
    const handleClick = (id) => {
        onSelect(id);
    };

    return (
        <ul className='list'>
            {items.map(subject => (
                <li key={subject.id} className='topics'>
                    <input
                        type="checkbox"
                        checked={selectedSubjects.includes(subject.id)}
                        onChange={() => handleClick(subject.id)}
                    />
                    <label>
                        {subject.name}
                    </label>
                </li>
            ))}
        </ul>
    );
};


export default ListSubjectsCheck