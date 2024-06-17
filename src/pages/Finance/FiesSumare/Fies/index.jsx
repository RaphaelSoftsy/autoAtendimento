import { useNavigate } from "react-router-dom";
import CardRequest from "../../../../components/CardRequest";
import DefaultButton from "../../../../components/DefaultButton";

const Fies = () => {

    const navegation = useNavigate();

    return (
        <main className="repayment">
            <div className='repayment-card'>
                <CardRequest text="Descreva o por que da sua solicitação:"/>
                <DefaultButton
                    text="Enviar Solicitação"
                    backgroundColor="var(--primary-light-blue)"
                    color='#fff'
                    onClick={() => navegation("/")}
                />
            </div>
        </main>
    );
    
}

export default Fies;