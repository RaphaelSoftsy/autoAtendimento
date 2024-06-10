import { Link, useNavigate } from "react-router-dom";
import DefaultButton from "../../../components/DefaultButton";

const Enade = () => {

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
                <span><b>O seu curso ainda não participa do ENADE (Exame Nacional de Desempenho dos Estudantes)</b></span>
                <DefaultButton
                    text="Abrir uma Demanada"
                    backgroundColor="var(--primary-light-blue)"
                    color='#fff'
                    onClick={() => navegation("/")}
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

export default Enade;