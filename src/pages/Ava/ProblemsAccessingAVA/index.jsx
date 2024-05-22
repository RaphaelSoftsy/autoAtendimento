import CardRequest from "../../../components/CardRequest";
import DefaultButton from "../../../components/DefaultButton";


const ProblemsAccessingAVA = () => {

    return (
        <main className="repayment">
            <div className='repayment-card'>
                <CardRequest text="Descreva sua solicitação:"/>
                <DefaultButton
                    text="Enviar Solicitação"
                    backgroundColor="#019ED3"
                    color='#fff'
                    onClick={() => navegation("/financeiro/tesrte1")}
                />
            </div>
        </main>
    );
    
}

export default ProblemsAccessingAVA;