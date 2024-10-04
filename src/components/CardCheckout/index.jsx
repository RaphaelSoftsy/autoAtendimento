import './cardCheckout.css';
import DefaultButton from '../DefaultButton';
import TextArea from '../TextArea';
import InputUpload from '../InputUpload';

const CardCheckout = (props) => {
    return (
        <div className="card-checkout">
            {/* <h2 className='explain-problem'>{props.text}</h2> */}
            <TextArea
                text={props.text}
                id="observation"
                value={props.observation}
                onChange={props.onObservationChange}
            />
            <InputUpload
                onChangeInputFile={props.onChangeInputFile}
                selectedFileName={props.selectedFileName}
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
