import { useNavigate } from 'react-router-dom';
import CardSelectPeriod from '../../../components/CardSelectPeriod'
import './dischargeDeclaration.css'
import { useState } from 'react';

const DischargeDeclaration = () => {

    const navegation = useNavigate();
    const [dataInicioSelecionada, setDataInicioSelecionada] = useState(null);
    const [dataFimSelecionada, setDataFimSelecionada] = useState(null);
    const [textValue, setTextValue] = useState('');

    const handleTextChange = (e) => {
        setTextValue(e.target.value);
    }

    const handleClick = () => {
        console.log("Enviando Solicitação...");

        const inicioSelecionado = dataInicioSelecionada ? `${dataInicioSelecionada.getMonth() + 1}/${dataInicioSelecionada.getFullYear()}` : 'N/A';
        const fimSelecionado = dataFimSelecionada ? `${dataFimSelecionada.getMonth() + 1}/${dataFimSelecionada.getFullYear()}` : 'N/A';

        console.log(`Data de Início: ${inicioSelecionado}, Data de Fim: ${fimSelecionado}, Texto: ${textValue}`);
    }

    return (
        <main className='discharge-declaration'>
            <CardSelectPeriod
                onClick={handleClick}
                dataInicioSelecionada={dataInicioSelecionada}
                setDataInicioSelecionada={setDataInicioSelecionada}
                dataFimSelecionada={dataFimSelecionada}
                setDataFimSelecionada={setDataFimSelecionada}
                onChangeTextArea={handleTextChange}
                value={textValue}
            />
        </main>
    )
}

export default DischargeDeclaration