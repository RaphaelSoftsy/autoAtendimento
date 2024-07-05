import React from 'react';
import './cardCheckout.css';
import DefaultButton from '../DefaultButton';

const CardCheckout = (props) => {
    return (
        <div className="card-checkout">
            <h2 className='explain-problem'>{props.text}</h2>

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

            <div className="observation">
                <span>Observação:</span>
                <textarea
                    name="obs"
                    id="observation"
                    value={props.observation}
                    onChange={props.onObservationChange}
                ></textarea>
            </div>

            <DefaultButton
                text="Enviar"
                backgroundColor="var(--primary-light-blue)"
                color='#fff'
                onClick={props.onClick}
            />
        </div>
    );
}

export default CardCheckout;
