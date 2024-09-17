import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import logo from '../../../assets/logo-sumare-azul.png';
import DefaultButton from '../../../components/DefaultButton';
import { useRA } from '../../../contexts/RAContext';
import { url_base_hospedada } from '../../../services/url_base';

const StatementConclusion = () => {
    const navigate = useNavigate();
    const [statementConclusion, setStatementConclusion] = useState('');
    const { currentRA } = useRA();
    const printRef = useRef();

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
            text: "Voltar para Serviços",
            backgroundColor: "var(--secondary-light-yellow)",
            color: '#fff',
            onClick: () => navigate("/academico")
        },
        {
            text: "Relatar Problema",
            backgroundColor: "var(--secondary-light-red)",
            color: '#fff',
            onClick: () => navigate("abrir-demanda")
        }
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
                    <ReactToPrint
                        trigger={() => (
                            <DefaultButton
                                text="Imprimir Declaração"
                                backgroundColor="var(--primary-light-blue)"
                                color='#fff'
                            />
                        )}
                        content={() => printRef.current}
                    />
                    {buttons.map((props, index) => (
                        <DefaultButton key={index} {...props} />
                    ))}
                </div>

                <div style={{ display: 'none' }}>
                    <div ref={printRef} className='print-area-statement-conclusion'>
                        {statementConclusion.length > 0 && statementConclusion.map((item, index) => (
                            <div className="declaration-content-conclusion-print" key={index}>
                                <img src={logo} alt="logo da sumare" className='logo-sumare-azul' />
                                <div className='declaration-conclusion'>
                                    <h2>DECLARAÇÃO DE CONCLUSÃO DE CURSO</h2>
                                    <p>Declaro para os devidos fins que o (a) discente <strong>{item.nome}, CPF: {item.cpf}</strong> cursou o <strong>{item.curso}</strong> modalidade <strong>{item.modalidade}</strong> ofertado pela <strong>{item.instituicao}</strong> com início das disciplinas do eixo básico e específico em <strong>{item.dataInicio}</strong> e fim em <strong>{item.dataFim}</strong>, mais o Trabalho de Conclusão de Curso (TCC). A situação do (a) discente no curso está detalhada na página seguinte desta declaração. O (a) discente integralizou a carga horária obrigatória exigida pelo Projeto Pedagógico do Curso, no total de <strong>{item.cargaHoraria}</strong>, tendo sido aprovado (a) nas disciplinas e no Trabalho de Conclusão de Curso.</p>
                                </div>
                                <p>Portanto, o status acadêmico do (a) discente no curso é: <strong>Concluído</strong>.</p>
                                <div className='declaration-conclusion-ass'>
                                    <p>Uberlândia, {item.dataDeclaracao}</p>
                                    <img src='https://sites.unipampa.edu.br/certificadosdigitais/files/2011/06/assinatura.gif' alt="assinatura" className='logo-sumare-azul' />
                                    <p>Prof. Dr. Antonio Sérgio Torres Penedo</p>
                                    <p>Coordenador do curso de Especialização em Gestão Pública em Saúde PNAP – EaD</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

        </>

    )
}


export default StatementConclusion