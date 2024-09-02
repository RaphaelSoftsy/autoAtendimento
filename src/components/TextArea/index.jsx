import './textArea.css';

const TextArea = (props) => {
    return (
        <div className="describe">
            <p><strong>{props.text}</strong></p>
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
