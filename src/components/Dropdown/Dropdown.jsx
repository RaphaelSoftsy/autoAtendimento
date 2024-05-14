import './dropdown.css'

const Dropdown = (props) => {
    return (
        <div className="box-dropdown">
            <label htmlFor={props.id}>{props.label}</label>
            <select
                name={props.name}
                id={props.id}
                onChange={(e) => props.onChange(e)}
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