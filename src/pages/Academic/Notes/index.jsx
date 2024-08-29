import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import DefaultButton from '../../../components/DefaultButton';
import ReviewItem from '../../../components/ReviewItem';
import { useRA } from '../../../contexts/RAContext';
import { url_base_local } from '../../../services/url_base';
import './notes.css';

const Notes = () => {
    const [isSelecting, setIsSelecting] = useState(false);
    const [selectedReview, setSelectedReview] = useState('');
    const [selectedReviewNotes, setSelectedReviewNotes] = useState('');
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [codigoDisciplina, setCodigoDisciplina] = useState('');
    const [items, setItems] = useState([]);
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
            const dataToSend = {
                aluno: currentRA.ra,
                disciplina: selectedOption,
                avaliacao: selectedReview,
                nota: selectedReviewNotes
            };

            try {
                const response = await axios.post(`${url_base_local}/reclamacaoNota`, dataToSend);

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
        setSelectedReview('');
        setSelectedOption('');
    };

    async function getDiscipline() {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/DisciplinasHistorico/1412454`);
            const data = response.data;

            const formattedData = data.map((item, index) => ({
                id: index + 1,
                name: item.nomeCompleto,
                codigo: item.disciplina
            }));

            setSelectedSubjects(formattedData);
        } catch (error) {
            console.error('Erro ao buscar disciplinas:', error);
        }

        MySwal.close();
    }

    async function getDisciplineHistory() {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/notaHistorico/busca?aluno=1412454&disciplina=${codigoDisciplina}`);
            const data = response.data;

            console.log(data);

            if (data.length > 0) {

                const formattedItems = data.map((item) => ({
                    nome: item.avaliacao,
                    valor: item.nota,
                }));

                console.log(formattedItems);
                setItems(formattedItems);
            }else{
                setItems([]);
            }

        } catch (error) {
            console.error('Erro ao buscar o histórico de notas:', error);
        }

        MySwal.close();
    }

    useEffect(() => {
        getDiscipline();
    }, [currentRA]);

    useEffect(() => {
        if (codigoDisciplina) {
            getDisciplineHistory();
        }
    }, [codigoDisciplina]);

    const handleSelectChange = (e) => {
        const selectedCodigo = e.target.value;
        const selectedItem = selectedSubjects.find(item => item.codigo === selectedCodigo);

        setSelectedOption(selectedCodigo);
        setCodigoDisciplina(selectedCodigo);
        setSelectedReview(selectedItem ? selectedItem.name : '');
    };

    return (
        <main className="reviews-notes">
            {!isSelecting && (
                <div className='select-discipline'>
                    <select value={selectedOption} onChange={handleSelectChange} className="custom-select">
                        {selectedSubjects.map(item => (
                            <option key={item.id} value={item.codigo} className='option'>{item.name}</option>
                        ))}
                    </select>
                </div>
            )}
            {items.length > 0 ? (
                <>
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
                                    setSelectedReview(item.nome);
                                    setSelectedReviewNotes(item.valor);
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
                </>
            ) : (
                <p>Não existem notas disponíveis para a disciplina selecionada.</p>
            )}
        </main>
    );
};

export default Notes;
