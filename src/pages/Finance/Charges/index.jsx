import './charges.css'
import { FaFilter, FaTimes } from 'react-icons/fa';
import ListSubjectsCheck from '../../../components/ListSubjectsCheck';
import Footer from '../../../components/Footer';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FilterModal from '../../../components/FilterModal';

const Charges = () => {
    // const list = [
    //     {
    //         id: 1,
    //         name: 'Mensalidades',
    //         route: '/financeiro/outros-assuntos/cobrança-indevida/mensalidades'
    //     },
    //     {
    //         id: 2,
    //         name: 'Serviços',
    //         route: '/financeiro/outros-assuntos/cobrança-indevida/servicos'
    //     },
    //     {
    //         id: 3,
    //         name: 'Acordo',
    //         route: '/financeiro/outros-assuntos/cobrança-indevida/acordo'
    //     },
    //     {
    //         id: 4,
    //         name: 'Todos',
    //         route: '/financeiro/outros-assuntos/cobrança-indevida/todos'
    //     },
    // ]

    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const navegation = useNavigate();
    const MySwal = withReactContent(Swal);

    const list = [
        {
            id: 1,
            name: 'Mensalidade Janeiro 2023'
        },
        {
            id: 2,
            name: 'Mensalidade Fevereiro 2023'
        },
        {
            id: 3,
            name: 'Serviço 155684 (Desc. Teste)'
        },
        {
            id: 4,
            name: 'Serviço 155684 (Desc. brev)'
        },
        {
            id: 5,
            name: 'Acordo 213123 (1/2) Janeiro'
        },
        {
            id: 6,
            name: 'Acordo 213123 (2/2) Fevereiro'
        }
    ];

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
            navegation('/');
        }
    };

    return (
        // <div className="charges">
        //     <div className='list-subjects'>
        //         <div className='teste'>
        //             <h1 className='title'>Selecione qual as opções que deseja:</h1>
        //             <div className='filtro'>
        //                 <FaFilter />
        //                 <span>Filtro</span>
        //             </div>

        //         </div>

        //         <ListSubjects itens={list} />
        //     </div>
        // </div>
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
                        items={list}
                        selectedSubjects={selectedSubjects}
                        onSelect={handleSubjectSelect} />
                </div>
            </div>
            <Footer text="Avançar" onClick={handleNext} />
            <FilterModal isVisible={isFilterVisible} onClose={toggleFilter} />
        </main>
    )
}

export default Charges