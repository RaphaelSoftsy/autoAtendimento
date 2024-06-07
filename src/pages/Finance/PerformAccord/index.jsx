import './performAccord.css'
import ListSubjectsCheck from '../../../components/ListSubjectsCheck';
import Footer from '../../../components/Footer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const PerformAccord = () => {

    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);

    const list = [
        {
            id: 1,
            name: 'Mensalidade Jan/23',
            valor: '79,99',
            status: 'Acordo'
        },
        {
            id: 2,
            name: 'Mensalidade Fev/23',
            valor: '79,98',
            status: 'Acordo'
        },
        {
            id: 3,
            name: 'Mensalidade Mar/23',
            valor: '79,97',
            status: 'Acordo'
        }
    ];

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

    const total = selectedSubjects.reduce((acc, id) => {
        const item = list.find(item => item.id === id);
        return acc + parseFloat(item.valor.replace(',', '.'));
    }, 0);

    const formatValue = (value) => {
        return value.toFixed(2).replace('.', ',');
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
            const selectedItems = list.filter(item => selectedSubjects.includes(item.id));
            localStorage.setItem("selectedItemsAccord", JSON.stringify(selectedItems));

            localStorage.setItem("totalAccord", formatValue(total));

            navigate('/financeiro/realizar-acordo/detalhes-pagamento');
        }
    };
    
    return (
        <main className='main-perform-accord'>
            <div className="perform-accord">
                <div className='list-subjects'>
                    <h1 className='title'>Selecione as cobranças que você deseja incluir no acordo:</h1>
                    <ListSubjectsCheck
                        items={list}
                        selectedSubjects={selectedSubjects}
                        onSelect={handleSubjectSelect} />
                </div>
            </div>
            <div className='footer-container'>
                <Footer text="Avançar" onClick={handleNext}/>
            </div>
        </main>

    );

};

export default PerformAccord