import './cardRequest.css';
import DefaultButton from '../DefaultButton';
import { useNavigate } from 'react-router-dom';

const CardRequest = (props) => {

    const navegation = useNavigate();

    return (
        <>
            <div className="card-request">
                <h2 className='explain-problem'>{props.text}</h2>
                <textarea name="request" id="request"></textarea>
                <DefaultButton
                    text="Uploud do PDF"
                    backgroundColor="#019ED3"
                    color='#fff'
                    onClick={() => navegation("/")}
                />
            </div>
        </>
    );
}

export default CardRequest;