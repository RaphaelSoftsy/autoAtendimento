import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ListCheckButton from '../../../components/ListCheckButton';
import { url_base_local } from '../../../services/url_base';
import './rejectionAdaptation.css';

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

    // const style = {
    //     backgroundColor: "var(--secondary-light-red)"
    // };

    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [reEnrollment, setReEnrollment] = useState({ disciplinas: 0 });
    const navegation = useNavigate();
    const MySwal = withReactContent(Swal);
    const aluno = '2471074';
    const maxDisciplines = 4;

    async function getReEnrollment() {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/disciplinasMatriculadas/${aluno}`);
            const data = response.data[0];
            console.log('Dados:', data);

            setReEnrollment(data);
        } catch (error) {
            console.error('Erro ao buscar declaração:', error);
        } finally {
            MySwal.close();
        }
    }

    useEffect(() => {
        getReEnrollment();
    }, []);

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
            navegation('numero-servico');
        }
    };

    return (
        <>
            <main className='rejection-adaptation'>
                <div className='discipline'>
                    <h3>Selecione a Disciplina que deseja realizar a Matrícula, lembrando que você pode ter 4 disciplinas simultaneamente</h3>
                    <div className='registration'>
                        <span>Nº de Disciplinas já matrículadas {reEnrollment.disciplinas}</span>
                        <span>Nº de Disciplinas que pode solicitar {maxDisciplines - reEnrollment.disciplinas}</span>
                    </div>
                    <h3 className='select-diploma'>Selecione a Disciplina</h3>
                    <ListCheckButton
                        items={list}
                        selectedSubjects={selectedSubjects}
                        onSelect={handleSubjectSelect}
                        text="Solicitar"
                        onClickButton = {handleNext}
                    />
                </div>
            </main>
            {/* <Footer text='Relatar um Problema' onClick={handleNext} style={style} /> */}
        </>
    );
}

export default RejectionAdaptation;
