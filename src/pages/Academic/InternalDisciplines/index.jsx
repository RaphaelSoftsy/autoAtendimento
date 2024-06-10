import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer";

const InternalDisciplines = () => {

    const navegation = useNavigate()

    const handleNext = () => {
        navegation('/');
    };

    return (
        <main className='main-perform-accord'>
            <div className="rescue-checks">
                <div className="card-checkout">
                    <h3><b>Identificamos que você possui disciplinas a serem passiveis de aproveitamento</b></h3>
                    <h4>O aproveitamento inteligente da Sumaré leva em consideração tudo o que você cursou e lhe traz o melhor resultado para que você conclua seus estudos no menor tempo possível !</h4>
                </div>
            </div>
            <div className='footer-container'>
                <Footer text='Simular Aproveitamento' onClick={handleNext} />
            </div>
        </main>
    );

}

export default InternalDisciplines;