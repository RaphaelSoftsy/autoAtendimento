import { useState } from 'react';
import './cardSelectPeriod.css';
import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from 'react-datepicker';
import { FaCalendarAlt } from "react-icons/fa";
import DefaultButton from '../DefaultButton';


const CardSelectPeriod = () => {

    const [dataInicioSelecionada, setDataInicioSelecionada] = useState(null);
    const [dataFimSelecionada, setDataFimSelecionada] = useState(null);

    return (
        <div className='card-select-period'>
            <h1>Selecionar o Período</h1>
            <div className="select-period-start">
                <span>Data Início:</span>
                <div className="select-period">
                    <FaCalendarAlt className="date-picker-icon" />
                    <ReactDatePicker
                        selected={dataInicioSelecionada}
                        onChange={date => setDataInicioSelecionada(date)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Selecione uma data"
                        className='date-picker'
                    />
                </div>
            </div>
            <div className="select-period-end">
                <span>Data Fim:</span>
                <div className="select-period">
                    <FaCalendarAlt className="date-picker-icon" />
                    <ReactDatePicker
                        selected={dataFimSelecionada}
                        onChange={date => setDataFimSelecionada(date)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Selecione uma data"
                        className='date-picker'
                    />
                </div>
            </div>
            <div className="description-request">
                <span>Descreva seu pedido:</span>
                <textarea name="" id=""></textarea>
            </div>
            <DefaultButton
                text="Enviar Solicitação"
                backgroundColor="var(--primary-light-blue)"
                color='#fff'
                onClick={() => navegation("/financeiro/adicionar-cartao")}
            />
        </div>
    )
}

export default CardSelectPeriod;