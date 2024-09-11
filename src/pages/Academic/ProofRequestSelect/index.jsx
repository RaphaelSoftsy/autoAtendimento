import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ListSubjects from '../../../components/ListSubjects';
import { useRA } from '../../../contexts/RAContext';
import { url_base_local } from '../../../services/url_base';

const ProofRequestSelect = () => {
    const navigate = useNavigate();
    const { currentRA } = useRA();
    const MySwal = withReactContent(Swal);
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const disciplinaSelecionada = localStorage.getItem('selectedProof')

    useEffect(() => {
        getProva();
    }, [currentRA]);

    async function getProva() {
        MySwal.showLoading();

        try {
            // const response = await axios.get(`${url_base_local}/provasDisponiveis/ead?aluno=2480263&disciplina=${disciplinaSelecionada}`);
            const response = await axios.get(`${url_base_local}/solicitacao/provas?aluno=${currentRA.ra}&disciplina=${disciplinaSelecionada}`);

            const data = response.data;

            console.log(data);

            // Filtrando para remover os itens cujo nomeAvaliacao contenha "atividade"
            const filteredData = data.filter(item => !item.nomeAvaliacao.toLowerCase().includes('atividade'));

            const formattedData = filteredData.map((item, index) => {
                const nomeAvaliacaoSemPresencial = item.nomeAvaliacao.replace(/presencial/i, '').trim();

                // Verificando se item.valor é maior que 0.00 e adicionando ao nome
                const valorExibido = parseFloat(item.valor) > 0 ? ` - Valor: R$ ${item.valor}` : '';

                return {
                    id: index + 1,
                    name: `${item.avaliacao} - ${nomeAvaliacaoSemPresencial} - ${item.mensagem}${valorExibido}`,
                    codigo: item.disciplina,
                    solicitaProva: item.solicProva,
                    valor: item.valor
                };
            });

            console.log(formattedData);

            setSelectedSubjects(formattedData);
        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Não foi possível buscar as provas disponíveis. Tente novamente mais tarde.',
                confirmButtonText: 'OK'
            });
        } finally {
            MySwal.close();
        }
    }

    const handleNext = async (item) => {
        if (item.solicitaProva === 'S') {
            localStorage.setItem('selectedSubject', item.name);

            if (parseFloat(item.valor) > 0) {
                navigate("/financeiro/realizar-pagamento");
            } else {
                const dataToSend = {
                    aluno: currentRA.ra,
                    disciplina: item.codigo,
                    avaliacao: item.name,
                };

                try {
                    const response = await axios.post(`${url_base_local}/problemaAvaliacao`, dataToSend);

                    if (response.status === 200) {
                        const responseData = response.data;
                        MySwal.close();
                        MySwal.fire({
                            title: "Solicitação Enviada com Sucesso!",
                            icon: "success",
                            timer: 1500,
                            showConfirmButton: false
                        });
                        localStorage.setItem("numero-servico", JSON.stringify(responseData));
                        navigate("numero-servico");
                    }

                } catch (error) {
                    MySwal.close();
                    MySwal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Não foi possível fazer a solicitação. Tente novamente mais tarde.",
                    });
                }
            }
        } else {
            MySwal.fire({
                icon: 'warning',
                title: 'Prova não disponível',
                text: 'Esta prova não pode ser solicitada no momento.',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <main className="proof-request">
            <div className='list-subjects'>
                <h1 className='title'>Selecione a prova que deseja solicitar</h1>
                <ListSubjects
                    itens={selectedSubjects}
                    onClick={handleNext}
                    seta={true}
                    disabled={(item) => item.solicitaProva !== 'S'}
                />
            </div>
        </main>
    )
}

export default ProofRequestSelect;
