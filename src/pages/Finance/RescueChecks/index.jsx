import { useNavigate } from "react-router-dom";
import CardCheckout from "../../../components/CardCheckout";
import Footer from "../../../components/Footer";
import "./rescueChecks.css"

const RescueChecks = () => {

    const navegation = useNavigate();

    const style = {
        backgroundColor: "var(--secondary-light-red)"
    }

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
            <Footer text="Relatar Problema" onClick={handleNext} style={style} />
        </main>
    );
}

export default RescueChecks;