import './textArea.css';

const TextArea = (props) => {
    return (
        <div className="describe">
            <span>{props.text}</span>
            <textarea
                name="request"
                id={props.id}
                onClick={props.onClick}
                value={props.value}
                onChange={props.onChange}
            ></textarea>
        </div>
    );
}

export default TextArea;
