import { Link, useNavigate } from "react-router-dom";
import DefaultButton from "../../../components/DefaultButton";

const Enade = () => {

    const navigate = useNavigate()

    const style1 = {
        backgroundColor: "var(--secondary-light-yellow)"
    }

    const style2 = {
        backgroundColor: "var(--secondary-light-red)"
    }

    return (
        <main className='main-perform-accord'>
            <div className="rescue-checks">
                <div className="card-checkout-fill-max-width">
                    <p><strong>O seu curso ainda não participa do ENADE (Exame Nacional de Desempenho dos Estudantes)</strong></p>
                    <div className="button-group">
                        <DefaultButton
                            text="Abrir uma Demanda"
                            backgroundColor="var(--primary-light-blue)"
                            color='#fff'
                            onClick={() => navigate("abrir-demanda")}
                        />
                    </div>
                </div>
            </div>
            <div className='footer-container'>
                <footer className='footer-double'>
                    <Link className='title-footer' style={style1} to={'/academico'}> Voltar para Serviços </Link>
                    <Link className='title-footer' style={style2} to={'/home'}> Finalizar Sessão </Link>
                </footer>
            </div>
        </main>
    );

}

export default Enade;