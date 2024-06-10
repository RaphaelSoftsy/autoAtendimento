import { useNavigate } from 'react-router-dom';
import Footer from '../../../components/Footer'
import './financialStatement.css'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useState } from 'react';

const FinancialStatement = () => {

    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);

    const [selectedYear, setSelectedYear] = useState('');

    const handleNext = () => {
        if (selectedYear === '') {
            MySwal.fire({
                icon: 'info',
                title: 'Erro',
                text: 'Você não selecionou um período',
                confirmButtonText: 'OK'
            });
        } else {
            localStorage.setItem("selectedYear", selectedYear);
            navigate('/financeiro/solicitar-documentos/declaracao-financeira/emitir-declaracao');
        }
    };

    const handleSelectChange = (e) => {
        setSelectedYear(e.target.value);
    };

    return (
        <>
            <main className='financial-statement'>
                <div className='list-subjects'>
                    <h1 className='title'>Selecione o Ano e Periodo desejado</h1>
                    <div className='select-year'>
                        <p>Selecione o Ano</p>
                        <select value={selectedYear} onChange={handleSelectChange}>
                            <option value='' disabled hidden>Selecione um período</option>
                            <option value='Janeiro a Junho de 2022'>Janeiro a Junho de 2022</option>
                            <option value='Junho a Dezembro de 2022'>Junho a Dezembro de 2022</option>
                        </select>
                    </div>
                </div>
            </main>
            <Footer text='Emitir Declação' onClick={handleNext} />
        </>
    )
}


export default FinancialStatement