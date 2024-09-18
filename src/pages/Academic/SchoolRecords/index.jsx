import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import logo from '../../../assets/logo-sumare-azul.png';
import DefaultButton from '../../../components/DefaultButton';
import { useRA } from '../../../contexts/RAContext';
import { url_base_hospedada } from '../../../services/url_base';

const SchoolRecords = () => {
    const navigate = useNavigate();
    const [schoolRecords, setSchoolRecords] = useState([]);
    const { currentRA } = useRA();
    const MySwal = withReactContent(Swal);
    const encodedRa = btoa(currentRA.ra);

    async function getSchoolRecords() {
        try {
            const response = await axios.get(`${url_base_hospedada}/api-documento/documentos/historico?aluno=${currentRA.ra}`);
            const data = response.data;

            if (data && typeof data === 'object' && Object.keys(data).length > 0) {
                setSchoolRecords(data);
            } else {
                setSchoolRecords({});
            }
        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Não foi possível buscar o histórico escolar. Tente novamente mais tarde.',
                confirmButtonText: 'OK'
            });
        } finally {
            MySwal.close();
        }
    }

    useEffect(() => {
        getSchoolRecords();
    }, [currentRA.ra]);

    const buttons = [
        {
            text: "Imprimir Declaração",
            backgroundColor: "var(--primary-light-blue)",
            color: '#fff',
            onClick: () => {
                window.location.href = `https://sumare.edu.br/historico.html?id=${encodedRa}`;
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
        }
    ];

    return (
        <>
            <main className='send-declaration-financial'>
                <div className='card-declaration'>
                    <img src={logo} alt="logo da sumare" className='logo-sumare-azul' />
                    {schoolRecords ? (
                        <div className="declaration-content-records">
                            <h2>Histórico Escolar</h2>
                            <p>Nome: {schoolRecords.nome}</p>
                            <p>Matrícula: {schoolRecords.aluno}</p>
                            <p>Data de Nascimento: {schoolRecords.dataNascimento}</p>
                            <p>{schoolRecords.rg}</p>
                            <h2>Dados do Processo Seletivo</h2>
                            <p>Instituição: {schoolRecords.instituicao}</p>
                            <p>Data: {schoolRecords.dataIngresso}</p>
                            <p>Classificação: {schoolRecords.classificacao}</p>
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
                                <tbody dangerouslySetInnerHTML={{ __html: schoolRecords.semeste1 }}></tbody>
                                <tbody dangerouslySetInnerHTML={{ __html: schoolRecords.semeste2 }}></tbody>
                                <tbody dangerouslySetInnerHTML={{ __html: schoolRecords.semeste3 }}></tbody>
                                <tbody dangerouslySetInnerHTML={{ __html: schoolRecords.semeste4 }}></tbody>
                                <tbody dangerouslySetInnerHTML={{ __html: schoolRecords.semeste5 }}></tbody>
                                <tbody dangerouslySetInnerHTML={{ __html: schoolRecords.semeste6 }}></tbody>
                                <tbody dangerouslySetInnerHTML={{ __html: schoolRecords.semeste7 }}></tbody>
                                <tbody dangerouslySetInnerHTML={{ __html: schoolRecords.semeste8 }}></tbody>
                                <tbody dangerouslySetInnerHTML={{ __html: schoolRecords.semeste9 }}></tbody>
                                <tbody dangerouslySetInnerHTML={{ __html: schoolRecords.semeste10 }}></tbody>
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

export default SchoolRecords;
