import './cardCheckout.css';
import TextArea from '../TextArea';
import InputUpload from '../InputUpload';

const CardCheckoutNoButton = (props) => {
    return (
        <div className="card-checkout">
            <h2 className='explain-problem'>{props.text}</h2>
            <TextArea
                text={props.textTextArea}
                id="observation"
                value={props.observation}
                onChange={props.onObservationChange}
            />
            <InputUpload
                onChangeInputFile={props.onChangeInputFile}
                selectedFileName={props.selectedFileName}
            />
        </div>
    );
}

export default CardCheckoutNoButton;
