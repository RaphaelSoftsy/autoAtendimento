import './performPayment.css'
import ItemsPayment from '../../../components/ItemsPayment';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const PerformPayment = () => {
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const navigate = useNavigate();

    const list = [
        {
            id: 1,
            name: 'Mensalidade Jan/234',
            valor: '79.90',
            status: 'Acordo'
        },
        {
            id: 2,
            name: 'Mensalidade Jan/235',
            valor: '139.90',
            status: 'Serviço'
        },
        {
            id: 3,
            name: 'Mensalidade Jan/236',
            valor: '138.90',
            status: 'Mensalidade'
        },
        {
            id: 4,
            name: 'Mensalidade Jan/237',
            valor: '155.90',
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

    const total = list.reduce((acc, curr) => {
        if (selectedSubjects.includes(curr.id)) {
            return acc + parseFloat(curr.valor.replace(',', '.'));
        }
        return acc;
    }, 0);

    const handleNext = () => {
        const selectedItems = list.filter(item => selectedSubjects.includes(item.id));
        localStorage.setItem("selectedItems", JSON.stringify(selectedItems));

        const formatValue = (value) => {
            return value.toFixed(2).replace('.', ',');
        };
        localStorage.setItem("total", formatValue(total));

        navigate('/financeiro/realizar-pagamento/detalhes-pagamento');
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
                        <span>R$ {total.toFixed(2)}</span>
                    </div>
                    <button onClick={handleNext} className='title-footer' > Próximo </button>
                </div>
            </footer>
        </>

    );

};

export default PerformPayment