import './cardRequest.css';
import TextArea from '../TextArea';
import InputUpload from '../InputUpload';

const CardRequest = (props) => {

    return (
        <>
            <div className="card-request">
                <TextArea
                    text={props.title}
                    id="observation"
                    value={props.observation}
                    onChange={props.onObservationChange}
                />
                <InputUpload
                    onChangeInputFile={props.onChangeInputFile}
                    selectedFileName={props.selectedFileName}
                />
            </div>
        </>
    );
}

export default CardRequest;