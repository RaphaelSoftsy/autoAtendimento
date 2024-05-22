import './cardRequest.css';
import DefaultButton from '../DefaultButton';

const CardRequest = (props) => {
    return (
        <>
            <div className="card-request">
                <h2 className='explain-problem'>{props.text}</h2>
                <textarea name="request" id="request"></textarea>
                <DefaultButton
                    text="Uploud do PDF"
                    backgroundColor="#019ED3"
                    color='#fff'
                    onClick={() => navegation("/financeiro/tesrte1")}
                />
            </div>
        </>
    );
}

export default CardRequest;