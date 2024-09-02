import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Footer from '../../../components/Footer';
import ListCheckButton from '../../../components/ListCheckButton';
import { useRA } from '../../../contexts/RAContext';
import { url_base_local } from '../../../services/url_base';
import './proofRequest.css';

const ProofRequest = () => {
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState([]);
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);
    const { currentRA } = useRA();
    const [noData, setNoData] = useState(false);

    useEffect(() => {
        getDiscipline();
    }, [currentRA]);

    async function getDiscipline() {
        MySwal.showLoading();

        let apiEndpoint = '';

        if (currentRA.curso.toLowerCase().includes('ead')) {
            apiEndpoint = 'provasDisponiveisEad';
        } else {
            apiEndpoint = 'provasDisponiveisPres';
        }

        try {
            const response = await axios.get(`${url_base_local}/${apiEndpoint}/${currentRA.ra}`);
            const data = response.data;

            const hasValidData = data.some((item) => {
                const aluno = item.aluno?.trim();
                const discipina = item.disciplina?.trim();
                const nome = item.nome?.trim();
                return aluno && discipina && nome;
            });

            if (!hasValidData) {
                setNoData(true);
            } else {
                setNoData(false);
                const formattedData = data.map((item, index) => ({
                    id: index + 1,
                    aluno: item.aluno,
                    name: item.nomeDisciplina
                }));
                setSelectedSubject(formattedData);
            }

        } catch (error) {
            console.error('Erro ao buscar disciplinas:', error);
        }
        MySwal.close();
    }

    const handleSubjectSelect = (id, multiple) => {
        if (multiple) {
            setSelectedSubjects(prevSelected => {
                const index = prevSelected.indexOf(id);
                if (index !== -1) {
                    return prevSelected.filter(subjectId => subjectId !== id);
                } else {
                    return [...prevSelected, id];
                }
            });
        } else {
            setSelectedSubjects([id]);
        }
    };

    const handleNext = () => {
        if (selectedSubjects.length === 0) {
            MySwal.fire({
                icon: 'info',
                title: 'Erro',
                text: 'Você não selecionou nada',
                confirmButtonText: 'OK'
            });
        } else {
            const selectedProof = selectedSubject.filter(item => selectedSubjects.includes(item.id));
            localStorage.setItem("selectedProof", JSON.stringify(selectedProof));

            navigate('/academico/solicitacoes-academicas/solicitacao-de-prova/escolha');
        }
    };

    return (
        <>
            <main className='main-problems-activities'>
                <div className="proof-request">
                    {noData ? (
                        <p>Não existem dados disponíveis para a solicitação da prova.</p>
                    ) : (
                        <div className='list-subjects'>
                            <h1 className='title'>Informe a disciplina para a qual deseja solicitar a prova.</h1>
                            <ListCheckButton
                                items={selectedSubject}
                                selectedSubjects={selectedSubjects}
                                onSelect={handleSubjectSelect}
                                multiple={false}
                                text="Não achou a disciplina que está procurando?"
                            />

                        </div>
                    )}
                </div>
                <Footer text='Avançar' onClick={handleNext} />
            </main>
        </>
    );
};

export default ProofRequest;
