import './problemsAccessingDiscipline.css'
import ListSubjectsCheck from '../../../components/ListSubjectsCheck';
import Footer from '../../../components/Footer';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url_base_local } from '../../../services/url_base';
import ModifyRA from '../../../components/ModifyRA';
import { useRA } from '../../../contexts/RAContext';

const ProblemsAccessingDiscipline = () => {
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [problems, setProblems] = useState([]);
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);

    const { currentRA } = useRA();

    console.log(currentRA);

    useEffect(() => {
        getProblemsAccessingDiscipline();
    }, [currentRA]);

    async function getProblemsAccessingDiscipline() {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/disciplinaMatriculada/${currentRA.ra}`);
            const data = response.data;

            const formattedData = data.map((item, index) => ({
                id: index + 1,
                aluno: item.aluno,
                name: item.nomeDisciplina
            }));

            setProblems(formattedData);
        } catch (error) {
            console.error('Erro ao buscar disciplinas:', error);
        }

        MySwal.close();
    }

    const handleSubjectSelect = (id) => {
        setSelectedSubjects(prevSelected => {
            const index = prevSelected.indexOf(id);
            if (index !== -1) {
                return prevSelected.filter(subjectId => subjectId !== id);
            } else {
                return [...prevSelected, id];
            }
        });
    };

    const handleNext = () => {
        if (selectedSubjects.length === 0) {
            MySwal.fire({
                icon: 'info',
                title: 'Erro',
                text: 'Você não selecionou nenhuma disciplina.',
                confirmButtonText: 'OK'
            });
        } else {
            navigate('/ava/problemas-com-acesso-as-disciplinas/descreva-solicitacao');
        }
    };

    return (
        <main className='main-problems-reviews'>
            <div className="problems-reviews">
                <ModifyRA />
                <div className='list-subjects'>
                    <h1 className='title'>Em qual disciplina você está com problemas?</h1>
                    {problems.length > 0 ?
                        <ListSubjectsCheck
                            items={problems}
                            selectedSubjects={selectedSubjects}
                            onSelect={handleSubjectSelect}
                        />
                        : 'Carregando disciplinas...'
                    }
                </div>
            </div>
            <Footer text="Avançar" onClick={handleNext} />
        </main>
    );
};

export default ProblemsAccessingDiscipline