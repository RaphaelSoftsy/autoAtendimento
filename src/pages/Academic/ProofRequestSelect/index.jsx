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

            const filteredData = data.filter(item => !item.nomeAvaliacao.toLowerCase().includes('atividade'));

            const formattedData = filteredData.map((item, index) => {
                const nomeAvaliacaoSemPresencial = item.nomeAvaliacao.replace(/presencial/i, '').trim();

                const valorExibido = parseFloat(item.valor) > 0 ? ` - Valor: R$ ${item.valor}` : '';

                return {
                    id: index + 1,
                    name: `${item.avaliacao} - ${nomeAvaliacaoSemPresencial} - ${item.mensagem}${valorExibido}`,
                    codigo: item.disciplina,
                    solicProva: item.solicProva,
                    servico: item.servico,
                    valor: item.valor
                };
            });

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

    const handleNext = async (name) => {
        const selectedItem = selectedSubjects.find(item => item.name === name);
    
        if (!selectedItem) {
            console.error('Item não encontrado.');
            return;
        }
    
        selectedItem.solicProva = 'S';
        selectedItem.valor = 0;
    
        console.log('Item após modificações:', selectedItem);

        if (selectedItem.solicProva === 'S') {
            if (parseFloat(selectedItem.valor) > 0) {
                console.log('Navegando para realizar pagamento...');
                navigate("/financeiro/realizar-pagamento");
            } else {
                
                const servicoSelecionado = selectedItem.servico;
                const dataAtual = new Date().toLocaleDateString('pt-BR');
    
                const dataToSend = {
                    aluno: currentRA.ra,
                    servico: servicoSelecionado,
                    data: dataAtual,
                    disciplina: disciplinaSelecionada
                };
    
                console.log('Dados a serem enviados:', dataToSend);
    
                try {
                    const response = await axios.post(`${url_base_local}/SolicitacaoAgendamento`, dataToSend);
                    console.log('Resposta da solicitação:', response);
    
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
                    console.error('Erro ao enviar solicitação:', error);
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
