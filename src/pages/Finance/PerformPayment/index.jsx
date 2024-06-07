import './performPayment.css'
import ItemsPayment from '../../../components/ItemsPayment';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const PerformPayment = () => {
    
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const navigate = useNavigate();

    const MySwal = withReactContent(Swal);

    const list = [
        {
            id: 1,
            name: 'Mensalidade Jan/234',
            valor: '79,90',
            status: 'Acordo'
        },
        {
            id: 2,
            name: 'Mensalidade Jan/235',
            valor: '139,90',
            status: 'Serviço'
        },
        {
            id: 3,
            name: 'Mensalidade Jan/236',
            valor: '138,90',
            status: 'Mensalidade'
        },
        {
            id: 4,
            name: 'Mensalidade Jan/237',
            valor: '155,90',
            status: 'Outros'
        }
    ];

    const handleSubjectSelect = (id) => {
        setSelectedSubjects(prevSelected => {
            if (prevSelected.includes(id)) {
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
            localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
    
            localStorage.setItem("total", formatValue(total));
    
            navigate('/financeiro/realizar-pagamento/detalhes-pagamento');
        }
    };

    return (
        <>
            <main className="perform-payment">
                <div className='list-subjects'>
                    <h1 className='title'>Escolha os itens para pagamento</h1>
                    <ItemsPayment
                        items={list}
                        selectedSubjects={selectedSubjects}
                        onSelect={handleSubjectSelect} />
                </div>
            </main>
            <footer className='footer-container'>
                <div className='footer-payment'>
                    <div className='total'>
                        <span>Total:</span>
                        <span>R$ {formatValue(total)}</span>
                    </div>
                    <button onClick={handleNext} className='title-footer' > Próximo </button>
                </div>
            </footer>
        </>

    );

};

export default PerformPayment