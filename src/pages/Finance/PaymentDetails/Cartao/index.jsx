import { Link } from 'react-router-dom';
import './cartao.css'
import { useState } from 'react';

const Cartao = () => {

    const selectedItems = JSON.parse(localStorage.getItem("selectedItems") || "[]");
    const total = localStorage.getItem("total");

    const formatValue = (value) => {
        return value.replace(',', '.');
    };

    const [parcelas, setParcelas] = useState(1);

    const handleParcelasChange = (e) => {
        setParcelas(parseInt(e.target.value, 10));
    };

    return (
        <>
            <main className='cartao'>
                <h1>Parcelamento:</h1>
                <div class="vista-parcela">
                    <p>A vista:</p>
                    {selectedItems.map(item => (
                        <span key={item.id}>R$ {item.valor} - {item.name} </span>
                    ))}
                </div>
                <div class="vista-parcela">
                    <p>Selecione o Parcelamento:</p>
                    <span>R$ {total} - 2° via de Diploma em pele</span>
                    <select value={parcelas} onChange={handleParcelasChange}>
                        <option value={1}>1 à vista</option>
                        <option value={2}>2x de R$ {(formatValue(total) / 2).toFixed(2).replace('.', ',')}</option>
                        <option value={3}>3x de R$ {(formatValue(total) / 3).toFixed(2).replace('.', ',')}</option>
                        <option value={4}>4x de R$ {(formatValue(total) / 4).toFixed(2).replace('.', ',')}</option>
                    </select>
                </div>
            </main>
            <footer className='footer-container'>
                <div className='footer-payment'>
                    <div className='total'>
                        <span>Total:</span>
                        <span>R$ {(formatValue(total) / parcelas).toFixed(2).replace('.', ',')}</span>
                    </div>
                    <Link to='/financeiro/realizar-pagamento/detalhes-pagamento/cartao/escolha' className='title-footer' > Próximo </Link>
                </div>
            </footer>
        </>

    );

}

export default Cartao;