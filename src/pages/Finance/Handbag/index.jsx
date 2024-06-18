import { useNavigate } from "react-router-dom";
import DefaultButton from "../../../components/DefaultButton"
import './handbag.css'
import CardDrop from "../../../components/CardDrop";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Handbag = () => {
    const navigate = useNavigate()

    const MySwal = withReactContent(Swal);
    const hasPendingFees = true; // Simulando a verificação de pendências

    const handleCancelCourse = () => {
        if (hasPendingFees) {
            MySwal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Neste curso você não possui acesso a bolsa.Tente trocar de RA',
                confirmButtonText: 'RA'
                
            }).then(() => {
                navigate("/");
            });
        } else {
            MySwal.fire({
                icon: 'question',
                title: 'Deseja mesmo cancelar o curso?',
                showCancelButton: true,
                confirmButtonText: 'Sim',
                cancelButtonText: 'Não'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/teste");
                }
            });
        }
    };

    return (
        <main className="handbag">
            <div className="teste">
                <div className="teste2">
                    <div>Nome: Millena Ferreira</div>
                    <div>RA: 982739824</div>
                    <div>Curso: ADS</div>
                    <div>Semestre: 2 semestre</div>
                </div>
                <button>Alterar RA</button>
            </div>

            <CardDrop />
            <DefaultButton
                onClick={handleCancelCourse}
                text='Enviar Solicitação'
                backgroundColor='var(--primary-light-blue)'
            />
        </main>
    )
}

export default Handbag;