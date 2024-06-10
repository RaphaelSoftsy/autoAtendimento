import { useNavigate } from "react-router-dom";
import DefaultButton from "../../../components/DefaultButton";

const ExternalDisciplines = () => {

    const navegation = useNavigate()


    const style1 = {
        backgroundColor: "var(--secondary-light-yellow)"
    }

    const style2 = {
        backgroundColor: "var(--secondary-light-red)"
    }

    return (
        <main className='main-perform-accord'>
            <div className="rescue-checks">
                <div className="card-checkout">
                    <span><b>O prazo para seu aproveitamento é de 10 dias uteis.</b></span>
                    <h4>Caso queira abrir uma solicitação clique abaixo.</h4>
                    <DefaultButton
                        text="Abrir Solicitação"
                        backgroundColor="var(--primary-light-blue)"
                        color='#fff'
                        onClick={() => navegation("/")}
                    />
                </div>
            </div>
            <div className='footer-container'>
                <footer className='footer-double'>
                    <button className='title-footer' style={style1} > Voltar para Serviços </button>
                    <button className='title-footer' style={style2} > Finalizar Sessão </button>
                </footer>
            </div>
        </main>
    );

}

export default ExternalDisciplines;