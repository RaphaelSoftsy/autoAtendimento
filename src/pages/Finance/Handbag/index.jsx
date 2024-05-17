import { useNavigate } from "react-router-dom";
import DefaultButton from "../../../components/DefaultButton"
import './handbag.css'
import CardDrop from "../../../components/CardDrop";

const Handbag = () => {
    const navigate = useNavigate()
    
    return (
        <main className="handbag">
            <CardDrop/>
            <DefaultButton
                onClick={() => navigate('/')}
                text='Enviar Solicitação'
                backgroundColor='#019ED3'
            />
        </main>
    )
}

export default Handbag;