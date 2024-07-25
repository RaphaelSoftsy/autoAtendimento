import { Link, useNavigate } from "react-router-dom";
import DefaultButton from "../../../components/DefaultButton";
import "./reEnrollment.css"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { url_base_local } from "../../../services/url_base";
import axios from "axios";
import { useEffect, useState } from "react";

const ReEnrollment = () => {

    const navegation = useNavigate()
    const [reEnrollment, setReEnrollment] = useState([]);
    const MySwal = withReactContent(Swal);
    const aluno = '2473773'

    const style = {
        backgroundColor: "var(--secondary-light-red)"
    }

    async function getReEnrollment() {

        MySwal.showLoading()

        try {
            const response = await axios.get(`${url_base_local}/validaRematricula/aluno/${aluno}`);
            const data = response.data;
            console.log('Dados da declaração:', data);

            setReEnrollment(reEnrollment);
        } catch (error) {
            console.error('Erro ao buscar declaração:', error);
        }
        MySwal.close()
    }

    useEffect(() => {
        getReEnrollment();
    }, []);

    console.log(reEnrollment);

    return (
        <main className='main-perform-accord'>
            <div className="rescue-checks">
                <div className="card-checkout-re">
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