import { useEffect, useState } from 'react';
import CardList from '../../../components/CardList';
import './addSwapPayment.css';
import DefaultButton from '../../../components/DefaultButton';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url_base_local } from '../../../services/url_base';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const AddSwapPayment = () => {
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [payment, setPayment] = useState([]);
    const navigate = useNavigate();
    const aluno = '2183321';
    const MySwal = withReactContent(Swal);

    const [planoAtual, setPlanoAtual] = useState('PLANO RECORRÊNCIA');

    const statusPlano = {
        'PLANO RECORRÊNCIA': 'Recorrente',
        'PLANO MENSAL': 'Mensal'
    };

    const handleSelectPayment = (id) => {
        setSelectedPayment(id);
    };

    const togglePlano = async () => {
        const novoPlano = planoAtual === 'PLANO RECORRÊNCIA' ? 'PLANO MENSAL' : 'PLANO RECORRÊNCIA';
        const tipo = novoPlano === 'PLANO RECORRÊNCIA' ? 'R' : 'M';

        const result = await MySwal.fire({
            icon: 'warning',
            title: 'Deseja realmente trocar o plano?',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        });

        if (result.isConfirmed) {
            MySwal.showLoading();

            try {
                const alunoId = '2471074';
                const response = await axios.put(`${url_base_local}/definirPlano/dados`, {
                    aluno: alunoId,
                    tipo: tipo
                });
                console.log('Plano alterado com sucesso:', response.data);

                setPlanoAtual(novoPlano);

            } catch (error) {
                console.error('Erro ao trocar plano:', error);
                MySwal.fire({
                    title: 'Erro',
                    text: 'Erro ao trocar plano. Por favor, tente novamente.',
                    icon: 'error'
                });
            } finally {
                MySwal.close();
            }
        }
    };

    async function getListCard() {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/listaCartoesSalvos/${aluno}`);
            const data = response.data;
            console.log('Dados dos cartões:', data);

            const filteredData = data.filter(item => item.id !== null);

            const formattedData = filteredData.map((item, index) => ({
                id: index + 1,
                idCartao: item.id,
                aluno: item.aluno,
                name: `****${item.num}`
            }));

            if (planoAtual === 'PLANO MENSAL') {
                formattedData.push(
                    { id: formattedData.length + 1, idCartao: null, aluno: aluno, name: 'PIX', num: 'PIX' },
                    { id: formattedData.length + 2, idCartao: null, aluno: aluno, name: 'Boleto', num: 'Boleto' }
                );
            }

            setPayment(formattedData);
        } catch (error) {
            console.error('Erro ao buscar cartões:', error);
            MySwal.fire({
                title: 'Erro',
                text: 'Erro ao buscar cartões. Por favor, tente novamente.',
                icon: 'error'
            });
        }
        MySwal.close();
    }

    async function putSelectNewCard(aluno, cartao) {
        try {
            const newCardData = {
                aluno: aluno,
                cartao: cartao
            };

            const response = await axios.put(`${url_base_local}/definirCartao/dados`, newCardData);
            const data = response.data;
            console.log('Cartão principal atualizado com sucesso:', data);

            if (response.statusCode === 200) {
                getListCard();
                MySwal.fire({
                    title: 'Sucesso',
                    text: 'Plano alterado com sucesso.',
                    icon: 'success'
                });
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('Erro ao definir novo cartão principal:', error);
            MySwal.fire({
                title: 'Erro',
                text: 'Erro ao definir novo cartão principal. Por favor, tente novamente.',
                icon: 'error'
            });
        }
    }

    useEffect(() => {
        console.log('Aluno ou plano atual mudou:', aluno, planoAtual);
        getListCard();
    }, [aluno, planoAtual]);

    const filteredList = payment.filter(item => {
        if (planoAtual === 'PLANO RECORRÊNCIA') {
            return !['Boleto', 'PIX'].includes(item.num);
        } else {
            return true;
        }
    });

    const handlePayment = () => {
        if (selectedPayment) {
            putSelectNewCard(aluno, selectedPayment);
            setSelectedPayment(null);
        } else {
            MySwal.fire({
                title: 'Erro',
                text: 'Por favor, selecione um cartão.',
                icon: 'warning'
            });
        }
    };

    return (
        <main className='add-swap-payment'>
            <div className='plano-recorrencia-ou-mensal'>
                <div className='plano-atual'>
                    <span>Plano Atual:</span>
                    <span>{planoAtual}</span>
                </div>
            </div>
            <h2 className='meio-pagamento'>Seus Meios de Pagamento</h2>
            <div className='list-cards'>
                {filteredList.length > 0 ?
                    <CardList
                        items={filteredList}
                        selectedSubject={selectedPayment}
                        onSelect={handleSelectPayment}
                    />
                    :
                    <p>Nenhum meio de pagamento disponível.</p>
                }
            </div>
            <div className='buttons'>
                <DefaultButton
                    text={`Alterar Plano ${statusPlano[planoAtual]} para ${statusPlano[planoAtual === 'PLANO RECORRÊNCIA' ? 'PLANO MENSAL' : 'PLANO RECORRÊNCIA']}`}
                    backgroundColor="var(--custom-green)"
                    onClick={togglePlano}
                />
                <DefaultButton
                    text="Selecionar Novo Cartão Principal"
                    backgroundColor="var(--custom-green)"
                    onClick={handlePayment}
                />
                <DefaultButton
                    text="Cadastrar Novo Cartão"
                    backgroundColor="var(--custom-green)"
                    onClick={() => navigate("/financeiro/adicionar-cartao")}
                />
                <DefaultButton
                    text="Finalizar Sessão"
                    backgroundColor="var(--secondary-light-red)"
                    onClick={() => navigate("/home")}
                />
            </div>
        </main>
    );
};

export default AddSwapPayment;
