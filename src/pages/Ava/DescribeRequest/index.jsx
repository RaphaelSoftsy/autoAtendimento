import { useNavigate } from "react-router-dom";
import CardRequest from "../../../components/CardRequest";
import DefaultButton from "../../../components/DefaultButton";

const DescribeRequest = () => {

    const navegation = useNavigate();

    return (
        <main className="problems-accessing-ava">
            <div className='problems-accessing-ava-card'>
                <CardRequest title="Descreva sua solicitação:"/>
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

export default DescribeRequest;