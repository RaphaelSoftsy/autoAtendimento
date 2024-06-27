import './textArea.css';

const TextArea = (props) => {
    return (
        <div className="describe">
            <span>{props.text}</span>
            <textarea name="request" id={props.id}></textarea>
        </div>
    );
}

export default TextArea;
