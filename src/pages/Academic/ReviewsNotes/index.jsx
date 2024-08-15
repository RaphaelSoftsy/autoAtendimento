import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Footer from '../../../components/Footer';
import { useRA } from '../../../contexts/RAContext';
import { url_base_local } from '../../../services/url_base';
import './reviewsNotes.css';
import ListSubjectsCheck from '../../../components/ListSubjectsCheck';

const ReviewsNotes = () => {

    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [discipline, setDiscipline] = useState([]);
    const navegation = useNavigate();
    const MySwal = withReactContent(Swal);

    const { currentRA } = useRA();

    useEffect(() => {
        getDisciplinesByStudent();
    }, [currentRA.ra]);

    async function getDisciplinesByStudent() {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/disciplinaMatriculada/${currentRA.ra}`);
            const data = response.data;

            const formattedData = data.map((item, index) => ({
                id: index + 1,
                aluno: item.aluno,
                name: item.nomeDisciplina
            }));

            setDiscipline(formattedData);
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

    const selectedSubjectName = discipline.find(problem => problem.id === selectedSubjects[0])?.name;

    const handleNext = () => {
        if (selectedSubjects.length === 0) {
            MySwal.fire({
                icon: 'info',
                title: 'Erro',
                text: 'Você não selecionou nenhuma disciplina.',
                confirmButtonText: 'OK'
            });
        } else {
            localStorage.setItem("disciplina-selecionada", selectedSubjectName);
            navegation('notas');
        }
    };

    return (
        <main className='main-problems-reviews'>
            <div className="problems-reviews">
                <div className='list-subjects'>
                    <h1 className='title'>Em qual disciplina você está com problemas?</h1>
                    {discipline.length > 0 ?
                        <ListSubjectsCheck
                            items={discipline}
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

export default ReviewsNotes
