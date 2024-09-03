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
    const navigate = useNavigate();
    const { currentRA } = useRA();

    const handleNext = async () => {
        if (!selectedReview) {
            MySwal.fire({
                icon: 'info',
                title: 'Erro',
                text: 'Você ainda não selecionou uma disciplina. Escolha uma para continuar.',
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
                    MySwal.fire({
                        title: "Cadastrado com sucesso",
                        icon: "success",
                        timer: 1500,
                        showConfirmButton: false
                    });
                    localStorage.setItem("numero-servico", JSON.stringify(response.data));
                    navigate("numero-servico");
                }
            } catch (error) {
                MySwal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Não foi possível fazer a solicitação. Tente novamente mais tarde.",
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

    const getDiscipline = async () => {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/DisciplinasHistorico/1412454`);
            const data = response.data;

            if (data.length > 0) {
                const formattedData = data.map((item, index) => ({
                    id: index + 1,
                    name: item.nomeCompleto,
                    codigo: item.disciplina
                }));

                setSelectedSubjects(formattedData);
            } else {
                setSelectedSubjects([]);
            }
        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Não foi possível buscar as disciplinas. Tente novamente mais tarde.',
                confirmButtonText: 'OK'
            });
        } finally {
            MySwal.close();
        }
    }

    const getDisciplineHistory = async () => {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/notaHistorico/busca?aluno=1412454&disciplina=${codigoDisciplina}`);
            const data = response.data;

            if (data.length > 0) {
                const formattedItems = data.map((item) => ({
                    nome: item.avaliacao,
                    valor: item.nota,
                }));
                setItems(formattedItems);
            } else {
                setItems([]);
            }
        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Não foi possível buscar as notas desta disciplina. Tente novamente mais tarde.',
                confirmButtonText: 'OK'
            });
        } finally {
            MySwal.close();
        }
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
                        <option value="" disabled hidden>Selecione uma disciplina</option>
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
