import { FaUpload } from "react-icons/fa";
import './inputUpload.css';


const InputUpload = (props) => {
    return (
        <>
            <div className="file-upload-wrapper">
                <label htmlFor="file-upload" className="upload-container">
                    <FaUpload className="upload-icon" />
                    <div className="upload-path">
                        {props.selectedFileName ? ` ${props.selectedFileName}` : 'Selecione um Arquivo'}
                    </div>
                </label>
                <input
                    id="file-upload"
                    type="file"
                    accept=".pdf,.doc,.png,.jpg"
                    onChange={props.onChangeInputFile}
                    style={{ display: 'none' }}
                />
                {/* <div className="file-size">O arquivo deve ter 25 MB no máximo</div> */}
            </div>
        </>
    );
}

export default InputUpload;