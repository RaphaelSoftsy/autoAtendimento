import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import url_base from '../../../services/url_base';
import { useEffect, useState } from 'react';
import logo from '../../../assets/logo-sumare-azul.png'
import DefaultButton from '../../../components/DefaultButton';

const SchoolRecords = () => {

    const navegation = useNavigate();
    const [declaration, setDeclaration] = useState('');
    const aluno = localStorage.getItem("aluno-ra");

    async function getDeclaration() {
        try {
            const response = await axios.get(`${url_base}/api-documento/documentos/historico?aluno=${aluno}`);
            const data = response.data;
            console.log('Dados da declaração:', data);
            setDeclaration(data);
        } catch (error) {
            console.error('Erro ao buscar declaração:', error);
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
                    {declaration ? (
                        <div className="declaration-content-records">
                            <h2>Histórico Escolar</h2>
                            <p>Nome: {declaration.nome}</p>
                            <p>Matrícula: {declaration.aluno}</p>
                            <p>Data de Nascimento: {declaration.dataNascimento}</p>
                            <p>RG/RNE Nº: {declaration.rg}</p>
                            <h2>Dados do Processo Seletivo</h2>
                            <p>Instituição: {declaration.instituicao}</p>
                            <p>Data: {declaration.dataIngresso}</p>
                            <p>Classificação: {declaration.classificacao}</p>
                            <h2>Semestre Atual</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Ano/Período</th>
                                        <th>Série</th>
                                        <th>Disciplina</th>
                                        <th>Carga Horária</th>
                                        <th>Média</th>
                                        <th>Situação</th>
                                    </tr>
                                </thead>
                                <tbody dangerouslySetInnerHTML={{ __html: declaration.semeste1 }}></tbody>
                                <tbody dangerouslySetInnerHTML={{ __html: declaration.semeste2 }}></tbody>
                                <tbody dangerouslySetInnerHTML={{ __html: declaration.semeste3 }}></tbody>
                                <tbody dangerouslySetInnerHTML={{ __html: declaration.semeste4 }}></tbody>
                                <tbody dangerouslySetInnerHTML={{ __html: declaration.semeste5 }}></tbody>
                                <tbody dangerouslySetInnerHTML={{ __html: declaration.semeste6 }}></tbody>
                                <tbody dangerouslySetInnerHTML={{ __html: declaration.semeste7 }}></tbody>
                                <tbody dangerouslySetInnerHTML={{ __html: declaration.semeste8 }}></tbody>
                                <tbody dangerouslySetInnerHTML={{ __html: declaration.semeste9 }}></tbody>
                                <tbody dangerouslySetInnerHTML={{ __html: declaration.semeste10 }}></tbody>
                            </table>
                        </div>
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

export default SchoolRecords