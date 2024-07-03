import './dropdown.css'

const Dropdown = (props) => {

    const handleChange = (e) => {
        const selectedOption = props.itens.find(item => item.id === parseInt(e.target.value, 10));
        props.onChange(selectedOption);
    };

    return (
        <div className="box-dropdown">
            <label htmlFor={props.id}>{props.label}</label>
            <select
                name={props.name}
                id={props.id}
                onChange={handleChange}
                className="custom-select"
            >
                <option className="opt-drop" value="hide">Selecione</option>
                {props.itens.map(option => (
                    <option className="opt-drop" key={option.id} value={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown