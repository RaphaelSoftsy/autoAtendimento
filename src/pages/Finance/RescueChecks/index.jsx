import CardCheckout from "../../../components/CardCheckout";
import Footer from "../../../components/Footer";
import "./rescueChecks.css"


const RescueChecks = () => {

    const style = {
        backgroundColor: "#dc143c"
    }

    return (
        <main className='main-perform-accord'>
            <div className="rescue-checks">
                <div className='list-subjects'>
                    <CardCheckout text="Por favor, para analise nos explique seu problema"/>
                </div>
            </div>
            <div className='footer-container'>
                <Footer text="Relatar Problema" route="/financeiro/realizar-acordo/teste" style={style} />
            </div>
        </main>
    );



}

export default RescueChecks;