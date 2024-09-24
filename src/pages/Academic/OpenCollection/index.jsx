import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import DefaultButton from "../../../components/DefaultButton";

const OpenCollection = () => {
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);

    const handleNext = () => {
        MySwal.fire({
            icon: 'question',
            title: 'Deseja mesmo cancelar o curso?',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/academico/cancelamento-do-curso/abrir-demanda');
            }else{
                navigate('/academico/cancelamento-do-curso');
            }
        });
    }

    return (
        <main className="course-cancellation">
            <div className='card-cancellation'>
                <span><b>Você possui cobranças em aberto. Gostaria de realizar um acordo?</b></span>
                <DefaultButton
                    text="Sim"
                    backgroundColor="var(--primary-light-blue)"
                    color='#fff'
                    onClick={() => navigate("/financeiro/realizar-acordo")}
                />
                <DefaultButton
                    text="Não"
                    backgroundColor="var(--secondary-light-red)"
                    color='#fff'
                    onClick={handleNext}
                />
            </div>
        </main>
    );
}

export default OpenCollection;