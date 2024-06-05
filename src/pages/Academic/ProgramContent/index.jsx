import CardCheckout from "../../../components/CardCheckout";
import Footer from "../../../components/Footer";


const ProgramContent = () => {

    const style = {
        backgroundColor: "#dc143c"
    }

    return (
        <main className='main-perform-accord'>
            <div className="rescue-checks">
                <div className='list-subjects'>
                    <CardCheckout/>
                </div>
            </div>
            <div className='footer-container'>
                <Footer text="Relatar Problema" route="/" style={style} />
            </div>
        </main>
    );

}

export default ProgramContent;