import CardCheckout from "../../../components/CardCheckout";
import Footer from "../../../components/Footer";

const OpenDemand = () => {

    const style = {
        backgroundColor: "var(--secondary-light-red)"
    }

    return (
        <main className='main-perform-accord'>
            <div className="rescue-checks">
                <div className='list-subjects'>
                    <CardCheckout text="Por favor, para análise nos explique seu problema" />
                </div>
            </div>
            <Footer text="Relatar Problema" style={style} />
        </main>
    );



}

export default OpenDemand;