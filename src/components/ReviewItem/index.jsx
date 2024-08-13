const ReviewItem = (props) => {
    return (
        <li className='topic'>
            <label className='sub-topic' onClick={props.onClick}>
                {props.isSelecting && (
                    <input
                        type="radio"
                        name="subject"
                        checked={props.selectedSubject === props.subject}
                        onChange={props.onClick}
                    />
                )}
                <span>{props.subject}</span>
            </label>
            <span>{props.valor}</span>
        </li>
    );
};

export default ReviewItem;

