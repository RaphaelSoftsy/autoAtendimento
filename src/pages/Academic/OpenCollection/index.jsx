import { useNavigate } from "react-router-dom";
import DefaultButton from "../../../components/DefaultButton";

const OpenCollection = () => {

    const navegation = useNavigate();

    return (
        <main className="course-cancellation">
            <div className='card-cancellation'>
                <span><b>Você possui cobranças em aberto. Gostaria de realizar um acordo?</b></span>
                <DefaultButton
                    text="Sim"
                    backgroundColor="var(--primary-light-blue)"
                    color='#fff'
                    onClick={() => navegation("/")}
                />
                <DefaultButton
                    text="Não"
                    backgroundColor="var(--secondary-light-red)"
                    color='#fff'
                    onClick={() => navegation("/")}
                />
            </div>
        </main>
    );
}

export default OpenCollection;