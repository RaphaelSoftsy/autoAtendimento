import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import DefaultButton from "../../../components/DefaultButton";
import Footer from "../../../components/Footer";
import { useRA } from "../../../contexts/RAContext";
import { url_base_local } from "../../../services/url_base";
import "./reEnrollment.css";

const ReEnrollment = () => {

    const navigate = useNavigate()
    const [reEnrollment, setValidateReEnrollment] = useState([]);
    const [reEnrollment2, setReEnrollment2] = useState([]);
    const MySwal = withReactContent(Swal);
    const { currentRA } = useRA();
    const aluno = '2473773'
    const aluno2 = '2470559'


    const style = {
        backgroundColor: "var(--secondary-light-red)"
    }

    const formatDateBR = (dateString) => {
        if (!dateString) return '';
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    };

    async function getValidateReEnrollment() {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/validaRematricula/aluno/${currentRA.ra}`);
            const data = response.data;

            setValidateReEnrollment(data);
        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Não foi possível fazer validação da rematrícula. Tente novamente mais tarde.',
                confirmButtonText: 'OK'
            });
        } finally {
            MySwal.close();
        }
    }

    async function getReEnrollment() {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/dataRematricula/${currentRA.ra}`);
            const data = response.data[0];

            console.log(data);

            setReEnrollment2(data);
        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Não foi possível buscar as data da rematrícula. Tente novamente mais tarde.',
                confirmButtonText: 'OK'
            });
        } finally {
            MySwal.close();
        }
    }

    useEffect(() => {
        getValidateReEnrollment();
        getReEnrollment();
    }, [currentRA.ra]);

    return (
        <main className='main-perform-accord'>
            <div className="rescue-checks">
                <div className="card-checkout-re">
                    {reEnrollment2 && (
                        <>
                            <span>Sua Rematrícula será efetuada de forma automática em: <b>{formatDateBR(reEnrollment2.dataRema)}</b></span>
                            <span>Para tanto basta estar em dia com suas mensalidades.</span>
                        </>
                    )}
                    <DefaultButton
                        text="Regularizar Financeiro"
                        backgroundColor="var(--primary-light-blue)"
                        color='#fff'
                        onClick={() => navigate("/financeiro/realizar-pagamento")}
                    />
                </div>
            </div>
            {/* <div className='footer-container'>
                <footer className='footer-double'>
                    <Link className='title-footer' style={style} > Relatar Problema </Link>
                    <Link className='title-footer' style={style} > Finalizar Sessão </Link>
                </footer>
            </div> */}
            <Footer text="Finalizar Sessão" onClick={() => navigate("/academico")} style={style} />
        </main>
    );

}

export default ReEnrollment;