import { useNavigate } from "react-router-dom";
import DefaultButton from "../../../components/DefaultButton";
import "./courseCancellation.css"

const CourseCancellation = () => {

    const navegation = useNavigate()

    return (
        <main className="course-cancellation">
            <div className='card-cancellation'>
                <span>Seu curso atual: <b>Administração</b></span>
                <span>Seu semestre atual: <b>8 Semestre</b></span>
                <span>Polo: Sumaré <b>Av Dr.Arnald</b></span>
                <span>Situação Financeira <b>Inadimplente</b></span>
                <DefaultButton
                    text="Cancelar Curso"
                    backgroundColor="#DC143C"
                    color='#fff'
                    onClick={() => navegation("/academico/cancelamento-do-curso/cobrancas")}
                />
            </div>
            
        </main>
    );

}

export default CourseCancellation;