import { useNavigate } from "react-router-dom";
import DefaultButton from "../../../components/DefaultButton"
import Dropdown from "../../../components/Dropdown/Dropdown";
import './handbag.css'
import { useState } from "react";

const Handbag = () => {
    const navigate = useNavigate()
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
        <main className="handbag">
            <form className="form-handbag">
                <Dropdown
                    id='dropdown-handbag'
                    name='dropdown-handbag'
                    itens={list}
                    label='Selecione o Tipo da Bolsa:'
                    onChange={(e) => setTypeScholarship(e.target.value)}
                />
            </form>
            <DefaultButton onClick = {() => navigate('/')} text='Enviar Solicitação' backgroundColor='#019ED3' />
        </main>
    )
}

export default Handbag;