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
                <div className="card-checkout-fill-max-width">
                    <span><b>O prazo para seu aproveitamento é de 10 dias úteis.</b></span>
                    <h4>Caso queira abrir uma solicitação clique abaixo.</h4>
                    <DefaultButton
                        text="Abrir Solicitação"
                        backgroundColor="var(--primary-light-blue)"
                        color='#fff'
                        onClick={() => navegation("/academico/solicitacoes-academicas/aproveitamento-de-estudos/aproveitamento-disciplinas-cursadas-em-outras-faculdades/abrir-demanda")}
                    />
                </div>
            </div>
            <div className='footer-container'>
                <footer className='footer-double'>
                    <button
                        className='title-footer'
                        style={style1}
                        onClick={() => navegation("/academico")}
                    >
                        Voltar para Serviços
                    </button>
                    <button
                        className='title-footer'
                        style={style2}
                        onClick={() => navegation("/home")}
                    >
                        Finalizar Sessão
                    </button>
                </footer>
            </div>
        </main>
    );

}

export default ExternalDisciplines;