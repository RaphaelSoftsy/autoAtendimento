import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ListCheckButton from '../../../components/ListCheckButton';
import { url_base_local } from '../../../services/url_base';
import './rejectionAdaptation.css';
import { FaExclamationCircle } from 'react-icons/fa';
import { useRA } from '../../../contexts/RAContext';

const RejectionAdaptation = () => {
    const list = [
        {
            id: 1,
            name: 'Disciplina 1 (Adaptação)'
        },
        {
            id: 2,
            name: 'Disciplina 2 (Reprovação-DP)'
        }
    ];

    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [disciplineList, setDisciplineList] = useState([]);
    const [reEnrollment, setReEnrollment] = useState({ disciplinas: 0 });
    const navegation = useNavigate();
    const MySwal = withReactContent(Swal);
    const { currentRA } = useRA();

    const maxDisciplines = 4;

    useEffect(() => {
        getReEnrollment();
        getDiscipline();
    }, [currentRA]);

    async function getReEnrollment() {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/disciplinasMatriculadas/${currentRA.ra}`);
            const data = response.data[0];

            console.log(data);

            setReEnrollment(data);
        } catch (error) {
            console.error('Erro ao buscar declaração:', error);
        } finally {
            MySwal.close();
        }
    }

    async function getDiscipline() {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/statusDisciplina/${currentRA.ra}`);
            const data = response.data;

            const formattedData = data.map((item, index) => ({
                id: index + 1,
                aluno: item.aluno,
                name: `${item.nomeDisciplina} (${item.status})`,
                codigo: item.codDisciplina
            }));
            
            setDisciplineList(formattedData);
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
            } else if (prevSelected.length < maxDisciplines - reEnrollment.disciplinas) {
                return [...prevSelected, id];
            } else {
                MySwal.fire({
                    icon: 'info',
                    title: 'Limite atingido',
                    text: `Você já selecionou o máximo de ${maxDisciplines - reEnrollment.disciplinas} disciplinas.`,
                    confirmButtonText: 'OK'
                });
                return prevSelected;
            }
        });
    };

    const handleNext = () => {
        if (selectedSubjects.length === 0) {
            MySwal.fire({
                icon: 'info',
                title: 'Erro',
                text: 'Selecione uma Disciplina para seguir.',
                confirmButtonText: 'OK'
            });
        } else {
            navegation('pagamento');
        }
    };

    return (
        <>
            <main className='rejection-adaptation'>
                <div className='discipline'>
                    <div className='registration'>
                        <span>Número de Disciplinas Matrículadas = {reEnrollment.disciplinas}</span>
                        <span>Número de Disciplinas que podem ser solicitadas = {maxDisciplines - reEnrollment.disciplinas}</span>
                    </div>
                    <h3>
                        Selecione a Disciplina que deseja realizar a Matrícula
                        <span className="tooltip">
                            <FaExclamationCircle />
                            <p className="tooltiptext">Lembrando que você pode ter apenas 4 disciplinas simultaneamente na matrícula.</p>
                        </span>
                    </h3>
                    <ListCheckButton
                        items={disciplineList}
                        selectedSubjects={selectedSubjects}
                        onSelect={handleSubjectSelect}
                        text="Solicitar"
                        onClickButton={handleNext}
                    />
                </div>
            </main>
        </>
    );
}

export default RejectionAdaptation;
