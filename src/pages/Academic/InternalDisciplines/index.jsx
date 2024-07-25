import { useNavigate } from "react-router-dom";
import DefaultButton from "../../../components/DefaultButton";

const InternalDisciplines = () => {

    const navegation = useNavigate()

    const style1 = {
        backgroundColor: "var(--secondary-light-yellow)"
    }

    const style2 = {
        backgroundColor: "var(--secondary-light-red)"
    }

    const handleNext = () => {
        navegation('/academico/solicitacoes-academicas/aproveitamento-de-estudos/aproveitamento-disciplinas-cursadas-na-sumare/abrir-demanda');
    };

    return (
        <main className='main-perform-accord'>
            {/* <div className="rescue-checks">
                <div className="card-checkout">
                    <h3><b>Identificamos que você possui disciplinas a serem passiveis de aproveitamento</b></h3>
                    <h4>O aproveitamento inteligente da Sumaré leva em consideração tudo o que você cursou e lhe traz o melhor resultado para que você conclua seus estudos no menor tempo possível !</h4>
                </div>
            </div>
            <div className='footer-container'>
                <Footer text='Simular Aproveitamento' onClick={handleNext} />
            </div> */}
            <div className="rescue-checks">
                <div className="card-checkout-fill-max-width">
                    <span><b>O prazo para seu aproveitamento é de 10 dias úteis.</b></span>
                    <h4>Caso queira abrir uma solicitação clique abaixo.</h4>
                    <DefaultButton
                        text="Abrir Solicitação"
                        backgroundColor="var(--primary-light-blue)"
                        color='#fff'
                        onClick={handleNext}
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

export default InternalDisciplines;