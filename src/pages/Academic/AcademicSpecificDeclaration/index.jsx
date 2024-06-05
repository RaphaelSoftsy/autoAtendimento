import DefaultButton from "../../../components/DefaultButton";
import "./academicSpecificDeclaration.css"

const AcademicSpecificDeclaration = () => {

    return (
        <main className="academic-specific-declaration">
            <div className='card-request'>
                <h2 className='explain-problem'>Descrever todas as informações que devem constar na declaração e especificar o período a que se refere.</h2>
                <textarea name="request" id="request"></textarea>
            </div>
            <DefaultButton
                    text="Enviar Solicitação"
                    backgroundColor="#019ED3"
                    color='#fff'
                    onClick={() => navegation("/")}
                />
        </main>
    );

}

export default AcademicSpecificDeclaration;