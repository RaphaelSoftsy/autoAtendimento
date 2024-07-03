import './cardDrop.css';
import DefaultButton from '../DefaultButton';
import Dropdown from '../Dropdown/Dropdown';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextArea from '../TextArea';

const CardDrop = ({ obs, setObs, setSelect, onClickButton }) => {

    const list = [
        {
            id: 1,
            name: 'Prouni'
        },
        {
            id: 2,
            name: 'Colaborador'
        },
        {
            id: 3,
            name: 'Mantenedora'
        }
    ]

    const handleObsChange = (e) => {
        setObs(e.target.value);
    };

    return (
        <>
            <div className="card-drop">
                <h2 className='bag-type'>Selecione o Tipo da Bolsa:</h2>
                <Dropdown
                    id='dropdown-handbag'
                    name='dropdown-handbag'
                    itens={list}
                    label=''
                    onChange={setSelect}
                />
                <TextArea
                    id=''
                    text='Descreva o porquê da sua solicitação:'
                    value={obs}
                    onChange={handleObsChange}
                />
                <DefaultButton
                    text="Upload"
                    backgroundColor="var(--primary-light-blue)"
                    color='#fff'
                    onClick={onClickButton}
                />
            </div>
        </>
    );
}

export default CardDrop;