import './cardCheckout.css';
import DefaultButton from '../DefaultButton';
import TextArea from '../TextArea';
import InputUpload from '../InputUpload';

const CardCheckout = (props) => {
    return (
        <div className="card-checkout">
            <h2 className='explain-problem'>{props.text}</h2>
            <InputUpload
                onChangeInputFile={props.onChangeInputFile}
                selectedFileName={props.selectedFileName}
            />
            <TextArea
                text="Observação :"
                value={props.observation}
                onChange={props.onObservationChangee}
                placeholder="Insira aqui o texto de upload"

            />
            <div className="button-group">
                <DefaultButton
                    text="Enviar Solicitação"
                    backgroundColor="var(--primary-light-blue)"
                    color='#fff'
                    onClick={props.onClick}
                />
            </div>
        </div>
    );
}

export default CardCheckout;
