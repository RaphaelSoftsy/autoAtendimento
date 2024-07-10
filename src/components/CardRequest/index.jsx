import './cardRequest.css';
import TextArea from '../TextArea';

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
                <label className="file-upload">
                    <input
                        type="file"
                        accept=".pdf,.doc,.png,.jpg"
                        onChange={props.onChangeInputFile}
                    />
                    {props.selectedFile ? (
                        <div className="file-info">
                            <p>{props.selectedFileName}</p>
                        </div>
                    ) : (
                        <p>Upload de arquivo (Coloque aqui se tiver)</p>
                    )}
                </label>
            </div>
        </>
    );
}

export default CardRequest;