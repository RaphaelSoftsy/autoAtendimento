import './performPayment.css'
import ItemsPayment from '../../../components/ItemsPayment';
import { Link } from 'react-router-dom'
import { useState } from 'react';

const PerformPayment = () => {
    const [selectedSubjects, setSelectedSubjects] = useState([]);

    const list = [
        {
            id: 1,
            name: 'Mensalidade Jan/23',
            valor: '79.90',
            status: 'Acordo'
        },
        {
            id: 2,
            name: 'Mensalidade Jan/23',
            valor: '139.90',
            status: 'Serviço'
        },
        {
            id: 3,
            name: 'Mensalidade Jan/23',
            valor: '138.90',
            status: 'Mensalidade'
        },
        {
            id: 4,
            name: 'Mensalidade Jan/23',
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

    return (
        <>
            <div className="perform-payment">
                <div className='list-subjects'>
                    <h1 className='title'>Escolha os itens para pagamento</h1>
                    <ItemsPayment
                        items={list}
                        selectedSubjects={selectedSubjects}
                        onSelect={handleSubjectSelect} />
                </div>
            </div>
            <div className='footer-container'>
                <footer className='footer-payment'>
                    <div className='total'>
                        <span>Total:</span>
                        <span>R$ {total.toFixed(2)}</span>
                    </div>
                    <Link to='' className='title-footer' > Próximo </Link>
                </footer>
            </div>
        </>

    );

};

export default PerformPayment