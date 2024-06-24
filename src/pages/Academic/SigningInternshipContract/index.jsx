import CardCheckout from "../../../components/CardCheckout";
import Footer from "../../../components/Footer";

const SigningInternshipContract= () => {

    const style = {
        backgroundColor: "var(--primary-dark-blue)"
    }

    return (
        <main className='main-perform-accord'>
            <div className="rescue-checks">
                <div className='list-subjects'>
                    <CardCheckout text="Por favor, para análise inserir todos os Documentos" />
                </div>
            </div>
            <Footer text="Enviar Solicitação" style={style} />
        </main>
    );



}

export default SigningInternshipContract;