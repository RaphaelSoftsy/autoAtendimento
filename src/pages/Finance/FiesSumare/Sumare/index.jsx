import CardRequest from "../../../../components/CardRequest";
import DefaultButton from "../../../../components/DefaultButton";

const Sumare = () => {

    return (
        <main className="repayment">
            <div className='repayment-card'>
                <CardRequest />
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

export default Sumare;