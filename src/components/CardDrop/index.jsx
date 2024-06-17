import './cardDrop.css';
import DefaultButton from '../DefaultButton';
import Dropdown from '../Dropdown/Dropdown';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CardDrop = () => {

    const navegation = useNavigate();

    const [typeScholarship, setTypeScholarship] = useState('')

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

    return (
        <>
            <div className="card-drop">
                <h2 className='bag-type'>Selecione o Tipo da Bolsa:</h2>
                <Dropdown
                    id='dropdown-handbag'
                    name='dropdown-handbag'
                    itens={list}
                    label=''
                    onChange={(e) => setTypeScholarship(e.target.value)}
                />
                <div className="describe">
                    <h3>Descreva o por que da sua solicitação:</h3>
                    <textarea name="describe" id="describe"></textarea>
                </div>
                <DefaultButton
                    text="Upload"
                    backgroundColor="#019ED3"
                    color='#fff'
                    onClick={() => navegation("/")}
                />
            </div>
        </>
    );
}

export default CardDrop;