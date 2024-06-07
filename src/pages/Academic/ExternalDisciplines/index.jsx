import { Link, useNavigate } from "react-router-dom";
import DefaultButton from "../../../components/DefaultButton";

const ExternalDisciplines = () => {

    const navegation = useNavigate()


    const style1 = {
        backgroundColor: "#EEAD2D"
    }

    const style2 = {
        backgroundColor: "#dc143c"
    }

    return (
        <main className='main-perform-accord'>
            <div className="rescue-checks">
                <div className="card-checkout">
                    <span><b>O prazo para seu aproveitamento é de 10 dias uteis.</b></span>
                    <h4>Caso queira abrir uma solicitação clique abaixo.</h4>
                    <DefaultButton
                        text="Abrir Solicitação"
                        backgroundColor="#019ED3"
                        color='#fff'
                        onClick={() => navegation("/financeiro/tesrte1")}
                    />
                </div>
            </div>
            <div className='footer-container'>
                <footer className='footer-double'>
                    <Link className='title-footer' style={style1} > Voltar para Serviços </Link>
                    <Link className='title-footer' style={style2} > Finalizar Sessão </Link>
                </footer>
            </div>
        </main>
    );

}

export default ExternalDisciplines;