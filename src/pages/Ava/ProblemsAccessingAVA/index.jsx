import CardRequest from "../../../components/CardRequest";
import DefaultButton from "../../../components/DefaultButton";
import './problemsAccessingAva.css'

const ProblemsAccessingAVA = () => {

    return (
        <main className="problems-accessing-ava">
            <div className='problems-accessing-ava-card'>
                <CardRequest text="Descreva sua solicitação:"/>
                <DefaultButton
                    text="Enviar Solicitação"
                    backgroundColor="#019ED3"
                    color='#fff'
                    onClick={() => navegation("/ava/teste")}
                />
            </div>
        </main>
    );
    
}

export default ProblemsAccessingAVA;