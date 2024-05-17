import './cardCheckout.css';
import DefaultButton from '../DefaultButton';

const CardCheckout = () => {
    return (
        <>
            <div className="card-checkout">
                <h2 className='explain-problem'>Por favor, para analise nos explique seu problema</h2>
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