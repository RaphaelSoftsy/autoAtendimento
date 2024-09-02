import './dropdown.css'

const Dropdown = (props) => {

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        props.onChange(selectedValue);
    };

    return (
        <div className="box-dropdown">
            <label htmlFor={props.id}>{props.label}</label>
            <select
                name={props.name}
                id={props.id}
                onChange={handleChange}
                className="custom-select"
                defaultValue=""
            >
                <option className="opt-drop" value="" disabled hidden>{props.text}</option>
                {props.itens.map(option => (
                    <option className="opt-drop" key={option.id} value={option.name}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown;
