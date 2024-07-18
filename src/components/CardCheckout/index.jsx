// import React from 'react';
// import './cardCheckout.css';
// import DefaultButton from '../DefaultButton';

// const CardCheckout = (props) => {
//     return (
//         <div className="card-checkout">
//             <h2 className='explain-problem'>{props.text}</h2>

//             <label className="file-upload">

//                 <input
//                     type="file"
//                     accept=".pdf,.doc,.png,.jpg"
//                     onChange={props.onChangeInputFile}
//                 />
//                 {props.selectedFile ? (
//                     <div className="file-info">
//                         <p>{props.selectedFileName}</p>
//                     </div>
//                 ) : (
//                     <p>Upload de arquivo (Coloque aqui se tiver)</p>
//                 )}
//             </label>

//             <div className="observation">
//                 <span>{props.textTextArea}</span>
//                 <textarea
//                     name="obs"
//                     id="observation"
//                     value={props.observation}
//                     onChange={props.onObservationChange}
//                 ></textarea>
//             </div>

//             <DefaultButton
//                 text="Enviar Solicitação"
//                 backgroundColor="var(--primary-light-blue)"
//                 color='#fff'
//                 onClick={props.onClick}
//             />
//         </div>
//     );
// }

// export default CardCheckout;


import React from 'react';
import { FaUpload } from 'react-icons/fa';
import './cardCheckout.css';
import DefaultButton from '../DefaultButton';
import TextArea from '../TextArea';
import InputUpload from '../InputUpload';

const CardCheckout = (props) => {
    return (
        <div className="card-checkout">
            <h2 className='explain-problem'>{props.text}</h2>

            {/* <label className="file-upload">
                <FaUpload className="upload-icon" />
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
            </label> */}
            <InputUpload
                onChangeInputFile={props.onChangeInputFile}
                selectedFileName={props.selectedFileName}
            />

            {/* <div className="observation">
                <textarea
                    name="obs"
                    id="observation"
                    value={props.observation}
                    onChange={props.onObservationChange}
                    placeholder="Digite sua observação aqui"
                ></textarea>
            </div> */}
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
