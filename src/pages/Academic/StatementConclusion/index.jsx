import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../../../assets/logo-sumare-azul.png'
import url_base from '../../../services/url_base';
import DefaultButton from '../../../components/DefaultButton';

const StatementConclusion = () => {

    const navegation = useNavigate();
    const [declaration, setDeclaration] = useState('');
    // const aluno = localStorage.getItem("aluno-ra");
    const aluno = "1412454";

    async function getDeclaration() {
        try {
            const response = await axios.get(`${url_base}/api-documento/documentos/conclusao?aluno=${aluno}`);
            const data = response.data;
            console.log('Dados da declaração:', data);
            setDeclaration(data);
        } catch (error) {
            // alert("Não foi encontrado Aluno com esse RA em situação de Conclusão");
            setDeclaration('');
        }
    }

    useEffect(() => {
        getDeclaration();
    }, [aluno]);

    const buttons = [
        {
            text: "Imprimir Declaração",
            backgroundColor: "var(--primary-light-blue)",
            color: '#fff',
            onClick: () => navegation("/")
        },
        {
            text: "Voltar para Serviços",
            backgroundColor: "var(--secondary-light-yellow)",
            color: '#fff',
            onClick: () => navegation("/")
        },
        {
            text: "Abrir Demanda",
            backgroundColor: "var(--secondary-light-red)",
            color: '#fff',
            onClick: () => navegation("/")
        },
        {
            text: "Finalizar Sessão",
            backgroundColor: "var(--secondary-light-red)",
            color: '#fff',
            onClick: () => navegation("/")
        }
    ];

    return (
        <>
            <main className='send-declaration-financial'>
                <div className='card-declaration'>
                    <img src={logo} alt="logo da sumare" className='logo-sumare-azul' />
                    {declaration.length > 0 ? (
                        declaration.map((item, index) => (
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
                    ) : declaration.length === 0 ? (
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