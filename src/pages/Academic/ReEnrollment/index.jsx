import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import DefaultButton from "../../../components/DefaultButton";
import Footer from "../../../components/Footer";
import { url_base_local } from "../../../services/url_base";
import "./reEnrollment.css";

const ReEnrollment = () => {

    const navegation = useNavigate()
    const [reEnrollment, setReEnrollment] = useState([]);
    const [reEnrollment2, setReEnrollment2] = useState([]);
    const MySwal = withReactContent(Swal);
    const aluno = '2473773'

    const style = {
        backgroundColor: "var(--secondary-light-red)"
    }

    const formatDateBR = (dateString) => {
        if (!dateString) return '';
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    };

    async function getReEnrollment() {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/validaRematricula/aluno/${aluno}`);
            const data = response.data;

            setReEnrollment(data);
        } catch (error) {
            console.error('Erro ao buscar declaração:', error);
        } finally {
            MySwal.close();
        }
    }

    async function getReEnrollment2() {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/dataRematricula/2470559`);
            const data = response.data[0];

            setReEnrollment2(data);
        } catch (error) {
            console.error('Erro ao buscar declaração:', error);
        } finally {
            MySwal.close();
        }
    }

    useEffect(() => {
        getReEnrollment();
        getReEnrollment2();
    }, [aluno]);

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
                        onClick={() => navegation("/")}
                    />
                </div>
            </div>
            {/* <div className='footer-container'>
                <footer className='footer-double'>
                    <Link className='title-footer' style={style} > Relatar Problema </Link>
                    <Link className='title-footer' style={style} > Finalizar Sessão </Link>
                </footer>
            </div> */}
            <Footer text="Finalizar Sessão" onClick={() => navegation("/academico")} style={style} />
        </main>
    );

}

export default ReEnrollment;