import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Footer from '../../../components/Footer';
import ListSubjectsCheck from '../../../components/ListSubjectsCheck';
import { useRA } from '../../../contexts/RAContext';
import { url_base_local } from '../../../services/url_base';
import './proofRequest.css';

const ProofRequest = () => {
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState([]);
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);
    const { currentRA } = useRA();

    useEffect(() => {
        getDiscipline();
    }, [currentRA]);

    async function getDiscipline() {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/disciplina/matriculada/?aluno=${currentRA.ra}&obrigatoria=S`);
            const data = response.data;

            if (data.length > 0) {
                const formattedData = data.map((item, index) => ({
                    id: index + 1,
                    aluno: item.aluno,
                    name: item.nomeDisciplina,
                    codigo: item.disciplina
                }));
                setSelectedSubject(formattedData);
            } else {
                setSelectedSubject([])
            }
        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Não foi possível buscar as provas disponíveis no sistema. Tente novamente mais tarde.',
                confirmButtonText: 'OK'
            });
        } finally {
            MySwal.close();
        }
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
        if (selectedSubject.length === 0) {
            navigate('/academico/solicitacoes-academicas');
        } else if (selectedSubjects.length === 0) {
            MySwal.fire({
                icon: 'info',
                title: 'Erro',
                text: 'Você não selecionou nada',
                confirmButtonText: 'OK'
            });
        } else {
            const selectedProof = selectedSubject
                .filter(item => selectedSubjects.includes(item.id))
                .map(item => item.codigo);
            localStorage.setItem("selectedProof", selectedProof);

            navigate('/academico/solicitacoes-academicas/solicitacao-de-prova/escolha');
        }
    };

    return (
        <>
            <main className='main-problems-activities'>
                <div className="proof-request">
                    {selectedSubject.length > 0 ? (
                        <div className='list-subjects'>
                            <h1 className='title'>Informe a disciplina para a qual deseja solicitar a prova.</h1>
                            <ListSubjectsCheck
                                items={selectedSubject}
                                selectedSubjects={selectedSubjects}
                                onSelect={handleSubjectSelect}
                                multiple={false}
                            />
                        </div>
                    ) : (
                        <p>Não existem dados disponíveis para a solicitação da prova.</p>
                    )}
                </div>
                <Footer text={selectedSubject.length === 0 ? "Voltar" : "Avançar"} onClick={handleNext} />
            </main>
        </>
    );
};

export default ProofRequest;
