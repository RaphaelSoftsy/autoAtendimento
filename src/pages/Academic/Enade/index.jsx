import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import DefaultButton from "../../../components/DefaultButton";
import { useRA } from "../../../contexts/RAContext";
import { url_base_local } from "../../../services/url_base";

const Enade = () => {
    const navigate = useNavigate()
    const [statementConclusion, setStatementConclusion] = useState('');
    const { currentRA } = useRA();
    const MySwal = withReactContent(Swal);

    const styles = {
        '1': { backgroundColor: "var(--secondary-light-yellow)" },
        '2': { backgroundColor: "var(--secondary-light-red)" }
    };

    async function getEnade() {
        try {
            const response = await axios.get(`${url_base_local}/buscaAluno/2180129`);
            const data = response.data;

            if (data.length > 0) {
                setStatementConclusion(data);
            } else {
                setStatementConclusion([])
            }
        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Não foi possível buscar os documentos de conclusão. Tente novamente mais tarde.',
                confirmButtonText: 'OK'
            });
        } finally {
            MySwal.close();
        }
    }

    useEffect(() => {
        getEnade();
    }, [currentRA.ra]);

    return (
        <main className='main-perform-accord'>
            <div className="rescue-checks">
                <div className="card-checkout-fill-max-width">
                    {statementConclusion.compareceu === 'S' ? (
                        <>
                            <p><strong>O aluno participou do ENADE e compareceu à prova.</strong></p>
                        </>
                    ) : (
                        <>
                            <p><strong>O aluno ainda não participa do ENADE (Exame Nacional de Desempenho dos Estudantes)</strong></p>
                            <div className="button-group">
                                <DefaultButton
                                    text="Abrir uma Demanda"
                                    backgroundColor="var(--primary-light-blue)"
                                    color='#fff'
                                    onClick={() => navigate("abrir-demanda")}
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className='footer-container'>
                <footer className='footer-double'>
                    <Link className='title-footer' style={styles['1']} to={'/academico'}> Voltar para Serviços </Link>
                    <Link className='title-footer' style={styles['2']} to={'/home'}> Finalizar Sessão </Link>
                </footer>
            </div>
        </main>
    );
}

export default Enade;