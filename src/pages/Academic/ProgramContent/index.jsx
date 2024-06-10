import { useNavigate } from "react-router-dom";
import CardCheckout from "../../../components/CardCheckout";
import Footer from "../../../components/Footer";


const ProgramContent = () => {

    const style = {
        backgroundColor: "var(--secondary-light-red)"
    }

    const navegation = useNavigate();

    const handleNext = () => {
        navegation('/');
    };

    return (
        <main className='main-perform-accord'>
            <div className="rescue-checks">
                <div className='list-subjects'>
                    <CardCheckout text="Por favor, para analise nos explique seu problema" />
                </div>
            </div>
            <div className='footer-container'>
                <Footer text="Relatar Problema" style={style} onClick={handleNext} />
            </div>
        </main>
    );

}

export default ProgramContent;