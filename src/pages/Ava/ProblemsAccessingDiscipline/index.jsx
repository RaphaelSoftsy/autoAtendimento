import './problemsAccessingDiscipline.css'
import ListSubjectsCheck from '../../../components/ListSubjectsCheck';
import Footer from '../../../components/Footer';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';
import url_base from '../../../services/url_base';
import axios from 'axios';

const ProblemsAccessingDiscipline = () => {

    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [problems, setProblems] = useState([]);
    const navegation = useNavigate();
    const MySwal = withReactContent(Swal);
    // const aluno = localStorage.getItem("aluno-ra");
    const ra = '2473474'

    async function getProblemsAccessingDiscipline() {

        MySwal.showLoading()

        try {
            const response = await axios.get(`${url_base}/disciplinaMatriculada/${ra}`);
            const data = response.data;

            const formattedData = data
                .map((item, index) => ({
                    id: index + 1,
                    aluno: item.aluno,
                    name: item.nomeDisciplina
                }));

            setProblems(formattedData);
        } catch (error) {
            console.error('Erro ao buscar declaração:', error);
        }
        MySwal.close()
    }

    useEffect(() => {
        getProblemsAccessingDiscipline();
    }, []);

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
                text: 'Você não selecionou nada',
                confirmButtonText: 'OK'
            });
        } else {
            navegation('/ava/problemas-com-acesso-as-disciplinas/descreva-solicitacao');
        }
    };

    return (
        <main className='main-problems-reviews'>
            <div className="problems-reviews">
                <div className='list-subjects'>
                    <h1 className='title'>Em qual disciplina você está com problemas?</h1>
                    <ListSubjectsCheck
                        items={problems}
                        selectedSubjects={selectedSubjects}
                        onSelect={handleSubjectSelect} />
                </div>
            </div>
            <Footer text="Avançar" onClick={handleNext} />
        </main>

    );

};

export default ProblemsAccessingDiscipline