import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ListCheckButton from '../../../components/ListCheckButton';
import { useRA } from '../../../contexts/RAContext';
import { url_base_local } from '../../../services/url_base';
import './rejectionAdaptation.css';

const RejectionAdaptation = () => {
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [disciplineList, setDisciplineList] = useState([]);
    const [reEnrollment, setReEnrollment] = useState({});
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);
    const { currentRA } = useRA();
    const maxDisciplines = 4;

    useEffect(() => {
        getReEnrollment();
        getStatusDiscipline();
    }, [currentRA]);

    const getReEnrollment = async () => {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/disciplinasMatriculadas/${currentRA.ra}`);
            const data = response.data;
            
            if (data.length > 0) {
                setReEnrollment(data[0]);
            }else{
                setReEnrollment({})
            }
        } catch (error) {
            MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "Não foi possível fazer a busca por disciplina. Tente novamente mais tarde.",
            });
        } finally {
            MySwal.close();
        }
    }

    const getStatusDiscipline = async () => {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/statusDisciplina/${currentRA.ra}`);
            const data = response.data;

            if (data.length > 0) {
                const formattedData = data.map((item, index) => ({
                    id: index + 1,
                    aluno: item.aluno,
                    name: `${item.nomeDisciplina} (${item.status})`,
                    codigo: item.codDisciplina
                }));
                setDisciplineList(formattedData);
            }else{
                setDisciplineList([]);
            }
        } catch (error) {
            MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "Não foi possível fazer a busca status disciplina. Tente novamente mais tarde.",
            });
        } finally {
            MySwal.close();
        }
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
                text: 'Você ainda não selecionou uma disciplina. Escolha uma para continuar.',
                confirmButtonText: 'OK'
            });
        } else {
            navigate('/financeiro/realizar-pagamento');
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
                    {disciplineList.length > 0 ? (
                        <ListCheckButton
                            items={disciplineList}
                            selectedSubjects={selectedSubjects}
                            onSelect={handleSubjectSelect}
                            text="Solicitar"
                            onClickButton={handleNext}
                        />
                    ) : disciplineList.length === 0 ? (
                        <p>Não há Disciplinas para a reprovação e adaptação.</p>
                    ) : (
                        <p>Carregando disciplinas...</p>
                    )}
                </div>
            </main>
        </>
    );
}

export default RejectionAdaptation;
