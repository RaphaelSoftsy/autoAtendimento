import './textArea.css';

const TextArea = (props) => {
    return (
        <div className="describe">
            <span>{props.text}</span>
            <textarea
                name="obs"
                id={props.id}
                value={props.value}
                onChange={props.onChange}
            ></textarea>
        </div>
    );
}

export default TextArea;
