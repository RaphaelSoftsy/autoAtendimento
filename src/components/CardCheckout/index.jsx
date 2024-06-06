import './cardCheckout.css';
import DefaultButton from '../DefaultButton';

const CardCheckout = (props) => {

    return (
        <>
            <div className="card-checkout">
                <h2 className='explain-problem'>{props.text}</h2>
                <DefaultButton
                    text="Uploud do PDF"
                    backgroundColor="#019ED3"
                    color='#fff'
                    onClick={() => navegation("/financeiro/tesrte1")}
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