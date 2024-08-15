import React, { useEffect, useState } from 'react';
import DefaultButton from '../../../components/DefaultButton';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';
import ReviewItem from '../../../components/ReviewItem';
import { useRA } from '../../../contexts/RAContext';
import axios from 'axios';
import { url_base_local } from '../../../services/url_base';

const Notes = () => {
    const [isSelecting, setIsSelecting] = useState(false);
    const [selectedReview, setSelectedSubject] = useState('');
    const [selectedReviewNotes, setSelectedSubjectValor] = useState('');
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const disciplinaSelecionada = localStorage.getItem("disciplina-selecionada");
    const MySwal = withReactContent(Swal);
    const navegation = useNavigate();
    const { currentRA } = useRA();

    const handleNext = async () => {
        if (!selectedReview) {
            MySwal.fire({
                icon: 'info',
                title: 'Erro',
                text: 'Você não selecionou nenhuma disciplina.',
                confirmButtonText: 'OK'
            });
        } else {
            console.log(disciplinaSelecionada);
            console.log("disciplina " + selectedOption);
            console.log("Nota" + `${selectedReview} - ${selectedReviewNotes}`);
            
            const dataToSend = {
                aluno: currentRA.ra,
                disciplina: disciplinaSelecionada,
                avaliacao: selectedOption,
                nota: `${selectedReview} - ${selectedReviewNotes}`
            };

            try {
                const response = await axios.post(`${url_base_local}/problemaAvaliacao`, dataToSend);

                if (response.status === 200) {
                    const responseData = response.data;
                    MySwal.close();
                    MySwal.fire({
                        title: "Cadastrado com sucesso",
                        icon: "success",
                    });
                    localStorage.setItem("numero-servico", JSON.stringify(responseData));
                    navegation("numero-servico");
                } else {
                    throw new Error('Network response was not ok.');
                }
            } catch (error) {
                MySwal.close();
                console.log(error);
                MySwal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Não foi possível realizar esse comando!",
                });
            }
        }
    };

    const handleButtonClick = () => {
        if (!isSelecting) {
            setIsSelecting(true);
        } else {
            handleNext();
        }
    };

    const handleBackClick = () => {
        setIsSelecting(false);
        setSelectedSubject('');
        setSelectedOption('');
    };

    const items = [
        { nome: "Média", valor: "-" },
        { nome: "Aulas previstas", valor: "24" },
        { nome: "Aulas ministradas", valor: "0" },
        { nome: "Limites de faltas", valor: "24" },
        { nome: "Faltas acumuladas", valor: "0" },
        { nome: "Presenças", valor: "100%" }
    ];

    useEffect(() => {
        getDiscipline();
    }, [currentRA]);

    async function getDiscipline() {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/disciplinaMatriculada/${currentRA.ra}`);
            const data = response.data;

            const formattedData = data.map((item, index) => ({
                id: index + 1,
                aluno: item.aluno,
                name: item.nomeDisciplina
            }));

            setSelectedSubjects(formattedData);
        } catch (error) {
            console.error('Erro ao buscar disciplinas:', error);
        }

        MySwal.close();
    }

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue);
        setSelectedSubject(selectedValue);
    };

    return (
        <main className="reviews-notes">
            {/* <h1 className='title'>Notas e Revisões</h1> */}

            {!isSelecting && (
                <div className='select-discipline'>
                    <select value={selectedOption} onChange={handleSelectChange} className="custom-select-medium">
                        {selectedSubjects.map(item => (
                            <option key={item.id} value={item.name} className='option-medium'>{item.name}</option>
                        ))}
                    </select>
                </div>
            )}

            {isSelecting && (
                <span className="back-arrow" onClick={handleBackClick}>&larr; Voltar</span>
            )}

            <ul className='list'>
                {items.map((item, index) => (
                    <ReviewItem
                        key={index}
                        isSelecting={isSelecting}
                        subject={item.nome}
                        selectedSubject={selectedReview}
                        onClick={() => {
                            setSelectedSubject(item.nome)
                            setSelectedSubjectValor(item.valor)
                        }}
                        valor={item.valor}
                    />
                ))}
            </ul>

            <DefaultButton
                text={isSelecting ? "Avançar" : "Solicitar Revisão de Nota"}
                backgroundColor="var(--primary-light-blue)"
                color='#fff'
                onClick={handleButtonClick}
            />
        </main>
    );
};

export default Notes;
