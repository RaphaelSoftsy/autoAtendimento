import { Link, useNavigate } from "react-router-dom";
import DefaultButton from "../../../components/DefaultButton";
import "./reEnrollment.css"

const ReEnrollment = () => {

    const navegation = useNavigate()

    const style = {
        backgroundColor: "var(--secondary-light-red)"
    }

    return (
        <main className='main-perform-accord'>
            <div className="rescue-checks">
            <div className="card-checkout">
                <span>Sua Rematrícula será efetuada de forma automática em: <b>19/06/2023</b></span>
                <span>Para tanto basta estar em dia com suas mensalidades.</span>
                <DefaultButton
                    text="Regularizar Financeiro"
                    backgroundColor="var(--primary-light-blue)"
                    color='#fff'
                    onClick={() => navegation("/")}
                />
            </div>
            </div>
            <div className='footer-container'>
                <footer className='footer-double'>
                    <Link className='title-footer' style={style} > Relatar Problema </Link>
                    <Link className='title-footer' style={style} > Finalizar Sessão </Link>
                </footer>
            </div>
        </main>
    );

}

export default ReEnrollment;