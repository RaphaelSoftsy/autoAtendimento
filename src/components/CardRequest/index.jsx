import './cardRequest.css';
import DefaultButton from '../DefaultButton';

const CardRequest = () => {
    return (
        <>
            <div className="card-request">
                <h2 className='explain-problem'>Descreva o por que da sua solicitação:</h2>
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