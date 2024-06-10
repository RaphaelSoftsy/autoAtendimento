import './cardCheckout.css';
import DefaultButton from '../DefaultButton';
import { useNavigate } from 'react-router-dom';

const CardCheckout = (props) => {

    const navegation = useNavigate();

    return (
        <>
            <div className="card-checkout">
                <h2 className='explain-problem'>{props.text}</h2>
                <DefaultButton
                    text="Uploud do PDF"
                    backgroundColor="var(--primary-light-blue)"
                    color='#fff'
                    onClick={() => navegation("/")}
                />
                <div className="observation">
                    <span>Observação:</span>
                    <textarea name="observation" id="observation"></textarea>
                </div>
            </div>
        </>
    );
}

export default CardCheckout;