import './cardDrop.css';
import DefaultButton from '../DefaultButton';
import Dropdown from '../Dropdown/Dropdown';
import { useState } from 'react';

const CardDrop = () => {

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
                    <span>Descreva o por que da sua solicitação:</span>
                    <textarea name="describe" id="describe"></textarea>
                </div>
                <DefaultButton
                    text="Uploud"
                    backgroundColor="#019ED3"
                    color='#fff'
                    onClick={() => navegation("/financeiro/tesrte1")}
                />
            </div>
        </>
    );
}

export default CardDrop;