import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import logo from '../../../assets/logo-sumare-azul.png';
import DefaultButton from '../../../components/DefaultButton';
import { useRA } from '../../../contexts/RAContext';
import { url_base_hospedada } from '../../../services/url_base';

const StatementConclusion = () => {
    const navigate = useNavigate();
    const [statementConclusion, setStatementConclusion] = useState('');
    const { currentRA } = useRA();
    const MySwal = withReactContent(Swal);
    const encodedRa = btoa(currentRA.ra);

    async function getStatementConclusion() {
        try {
            const response = await axios.get(`${url_base_hospedada}/api-documento/documentos/conclusao?aluno=1412454`);
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
        getStatementConclusion();
    }, [currentRA.ra]);

    const buttons = [
        {
            text: "Imprimir Declaração",
            backgroundColor: "var(--primary-light-blue)",
            color: '#fff',
            onClick: () => {
                window.location.href = `https://sumare.edu.br/declaracao-conclusao.html?id=${encodedRa}`;
            }
        },
        {
            text: "Relatar Problema",
            backgroundColor: "var(--secondary-light-red)",
            color: '#fff',
            onClick: () => navigate("abrir-demanda")
        },
        {
            text: "Voltar para Serviços",
            backgroundColor: "var(--secondary-light-yellow)",
            color: '#fff',
            onClick: () => navigate("/academico")
        },
    ];

    return (
        <>
            <main className='send-declaration-financial'>
                <div className='card-declaration'>
                    <img src={logo} alt="logo da sumare" className='logo-sumare-azul' />
                    {statementConclusion.length > 0 ? (
                        statementConclusion.map((item, index) => (
                            <div className="declaration-content-conclusion" key={index}>
                                <h2>Histórico Escolar</h2>
                                <p><strong>Nome:</strong> {item.nome}</p>
                                <p><strong>Matrícula:</strong> {item.aluno}</p>
                                <p><strong>Data de Nascimento:</strong> {item.dtNasc}</p>
                                <p><strong>RG/RNE Nº:</strong> {item.rg}</p>

                                <h2>Dados do Processo Seletivo</h2>
                                <p><strong>Instituição:</strong> {item.ufAluno}</p>
                                <p><strong>Data:</strong> {item.dtConc}</p>
                                <p><strong>Classificação:</strong> {item.curso}</p>

                                <h2>Semestre Atual</h2>
                                <p><strong>Portaria:</strong> {item.portaria}</p>
                                <p><strong>Situação:</strong> {item.situacao}</p>
                                <p><strong>Data de Conclusão:</strong> {`${item.dia} de ${item.mes} de ${item.ano}`}</p>
                            </div>
                        ))
                    ) : statementConclusion.length === 0 ? (
                        <p>Não há Declaração de Conclusão.</p>
                    ) : (
                        <p>Carregando...</p>
                    )}
                    {buttons.map((props, index) => (
                        <DefaultButton key={index} {...props} />
                    ))}
                </div>
            </main>
        </>
    )
}

export default StatementConclusion