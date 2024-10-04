import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import FilterModal from '../../../components/FilterModal';
import Footer from '../../../components/Footer';
import ListSubjectsCheck from '../../../components/ListSubjectsCheck';
import { useRA } from '../../../contexts/RAContext';
import { url_base_local } from '../../../services/url_base';
import { monthNames } from '../PerformPayment';
import './charges.css';

const Charges = () => {
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [filters, setFilters] = useState({
        MENSALIDADES: false,
        SERVIÇOS: false,
        ACORDOS: false,
        TODOS: true,
    });
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);
    const { currentRA } = useRA();

    const getPerformPayment = async () => {
        MySwal.showLoading();
        try {
            const response = await axios.get(`${url_base_local}/cobrancaAluno/busca?aluno=${currentRA.ra}&cpf=&vencidas=S&aVencer=S`);
            const data = response.data.cobrancas;

            console.log(data);

            if (data.length > 0) {
                const formattedData = data.map((item, index) => ({
                    id: index + 1,
                    name: `${item.tipoCobranca} ${monthNames[item.mes]}/${item.ano}`,
                    status: item.tipoCobranca
                }));

                setItems(formattedData);
            } else {
                setItems([]);
            }
        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Não foi possível buscar as cobranças do aluno. Tente novamente mais tarde.',
                confirmButtonText: 'OK'
            });
        } finally {
            MySwal.close();
        }
    };

    useEffect(() => {
        getPerformPayment();
    }, [currentRA]);

    const containsAcordo = (text) => {
        return text.toLowerCase().includes('acordo');
    };

    const filteredList = items.filter(item => {
        if (filters.TODOS) return true;
        return (filters.MENSALIDADES && item.status === 'MENSALIDADES') ||
            (filters.SERVIÇOS && item.status === 'SERVIÇOS') ||
            (filters.ACORDOS && containsAcordo(item.status));
    });

    const toggleFilter = () => {
        setIsFilterVisible(!isFilterVisible);
    };

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
        if (selectedSubjects.length === 0) {
            MySwal.fire({
                icon: 'info',
                title: 'Erro',
                text: 'Você não selecionou nada',
                confirmButtonText: 'OK'
            });
        } else {
            const selectedItem = items.find(item => item.id === selectedSubjects[0]);

            localStorage.setItem('cobranca-selecioanda', selectedItem.name);
            console.log(selectedItem.name);

            navigate('abrir-demanda');
        }
    };

    const applyFilters = (newFilters) => {
        if (newFilters.TODOS) {
            setFilters({
                TODOS: true,
                MENSALIDADES: false,
                SERVIÇOS: false,
                ACORDOS: false
            });
            toggleFilter();
            return;
        }

        const selectedFilter = Object.entries(newFilters).find(([_, value]) => value);

        if (!selectedFilter) {
            MySwal.fire({
                icon: 'info',
                title: 'Erro',
                text: 'Nenhum filtro foi selecionado.',
                confirmButtonText: 'OK'
            });
            return;
        }

        const filterName = selectedFilter[0];

        const filteredList = items.filter(item => {
            if (filterName === 'ACORDOS') {
                return containsAcordo(item.status);
            }
            return item.status === filterName;
        });

        if (filteredList.length === 0) {
            MySwal.fire({
                icon: 'info',
                title: 'Erro',
                text: `Não há ${filterName.toLowerCase()} nesta lista.`,
                confirmButtonText: 'OK'
            });
        } else {
            setFilters(newFilters);
        }
        toggleFilter();
    };

    return (
        <main className='main-perform-accord'>
            <div className="perform-accord">
                <div className='list-subjects'>
                    <div className='teste'>
                        <h1 className='title'>Selecione qual as opções que deseja:</h1>
                        <div className='filtro' onClick={toggleFilter}>
                            <FaFilter />
                            <span>Filtro</span>
                        </div>
                    </div>
                    <ListSubjectsCheck
                        items={filteredList}
                        selectedSubjects={selectedSubjects}
                        onSelect={handleSubjectSelect} />
                </div>
            </div>
            <Footer text="Avançar" onClick={handleNext} />
            <FilterModal
                isVisible={isFilterVisible}
                filters={filters}
                onApply={applyFilters}
                onClose={toggleFilter} />
        </main>
    )
}

export default Charges