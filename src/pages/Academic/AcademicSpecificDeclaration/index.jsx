import { useNavigate } from "react-router-dom";
import DefaultButton from "../../../components/DefaultButton";
import "./academicSpecificDeclaration.css"

const AcademicSpecificDeclaration = () => {

    const navegation = useNavigate();

    return (
        <main className="academic-specific-declaration">
            <div className='card-request'>
                <h2 className='explain-problem'>Descrever todas as informações que devem constar na declaração e especificar o período a que se refere.</h2>
                <textarea name="request" id="request"></textarea>
            </div>
            <DefaultButton
                    text="Enviar Solicitação"
                    backgroundColor="var(--primary-light-blue)"
                    color='#fff'
                    onClick={() => navegation("/")}
                />
        </main>
    );

}

export default AcademicSpecificDeclaration;