import { useNavigate } from "react-router-dom";
import CardRequest from "../../../components/CardRequest";
import DefaultButton from "../../../components/DefaultButton";
import "./repayment.css"


const Repayment = () => {

    const navegation = useNavigate();

    return (
        <main className="repayment">
            <div className='repayment-card'>
                <CardRequest text="Descreva o por que da sua solicitação:"/>
                <DefaultButton
                    text="Enviar Solicitação"
                    backgroundColor="#019ED3"
                    color='#fff'
                    onClick={() => navegation("/")}
                />
            </div>
        </main>
    );
    
}

export default Repayment;