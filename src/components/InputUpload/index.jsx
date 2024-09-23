import { FaUpload } from "react-icons/fa";
import './inputUpload.css';

const InputUpload = (props) => {

    const truncateFileName = (fileName) => {
        if (fileName.length > 25) {
            return fileName.slice(0, 25) + '...';
        }
        return fileName;
    };

    return (
        <>
            <div className="file-upload-wrapper">
                <label htmlFor="file-upload" className="upload-container">
                    <FaUpload className="upload-icon" />
                    <div className="upload-path">
                        {props.selectedFileName ? truncateFileName(props.selectedFileName) : 'Selecione um Arquivo'}
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