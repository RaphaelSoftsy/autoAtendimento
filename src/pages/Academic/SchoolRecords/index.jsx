import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import logo from '../../../assets/logo-sumare-azul.png';
import DefaultButton from '../../../components/DefaultButton';
import { useRA } from '../../../contexts/RAContext';
import { url_base_hospedada } from '../../../services/url_base';

const SchoolRecords = () => {
    const navigate = useNavigate();
    const [declaration, setDeclaration] = useState('');
    const { currentRA } = useRA();
    const MySwal = withReactContent(Swal);
    const printRef = useRef();

    async function getSchoolRecords() {
        try {
            const response = await axios.get(`${url_base_hospedada}/api-documento/documentos/historico?aluno=${currentRA.ra}`);
            const data = response.data;

            if (data.length > 0) {
                setDeclaration(data);
            } else {
                setDeclaration([])
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
        },
        {
            text: "Finalizar Sessão",
            backgroundColor: "var(--secondary-light-red)",
            color: '#fff',
            onClick: () => navigate("/home")
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
                    <div ref={printRef} className='print-area-school-records'>
                        <div className='describe-uni'>
                            <img src={logo} alt="logo da sumare" className='logo-sumare-azul' />
                            <div>
                                <p>Ministerio da Educação</p>
                                <p>Secretaria de educação tecnologica</p>
                                <p>instituto federral de eeu d=educafkasfkmpa e ciencias e tecnologia de são paulo</p>
                                <p>tes tes teste</p>
                            </div>
                        </div>

                        <div className="declaration-content-records-print">
                            <h2>Histórico Escolar</h2>
                            <div className='historico-escolar'>
                                <p><strong>Nome:</strong> {declaration.nome}</p>
                                <p><strong>Matrícula:</strong> {declaration.aluno}</p>
                                <p><strong>Data de Nascimento:</strong> {declaration.dataNascimento}</p>
                                <p><strong>RG/RNE Nº:</strong> {declaration.rg}</p>
                                <p><strong>Instituição:</strong> {declaration.instituicao}</p>
                                <p><strong>Data:</strong> {declaration.dataIngresso}</p>
                                <p><strong>Classificação:</strong> {declaration.classificacao}</p>
                            </div>
                            <h2>Disciplinas do Histórico</h2>
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
                    </div>
                </div>
            </main>
        </>
    )
}

export default SchoolRecords;
