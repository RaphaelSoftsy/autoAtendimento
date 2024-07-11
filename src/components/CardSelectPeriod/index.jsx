import './cardSelectPeriod.css';
import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import { FaCalendarAlt } from "react-icons/fa";
import DefaultButton from '../DefaultButton';
import TextArea from '../TextArea';

registerLocale('pt', pt);

const CardSelectPeriod = ({
    onClick,
    dataInicioSelecionada,
    setDataInicioSelecionada,
    dataFimSelecionada,
    setDataFimSelecionada,
    onChangeTextArea,
    value
}) => {

    return (
        <div className='card-select-period'>
            <h1>Selecionar o Período</h1>
            <div className="select-period-start">
                <span>Data Início:</span>
                <div className="select-period">
                    <ReactDatePicker
                        selected={dataInicioSelecionada}
                        onChange={(date) => setDataInicioSelecionada(date)}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        showFullMonthYearPicker
                        locale="pt"
                        className="date-picker"
                        placeholderText="Selecionar data"
                    />
                     <FaCalendarAlt className="date-picker-icon" />
                </div>
            </div>
            <div className="select-period-end">
                <span>Data Fim:</span>
                <div className="select-period">
                    <ReactDatePicker
                        selected={dataFimSelecionada}
                        onChange={(date) => setDataFimSelecionada(date)}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        showFullMonthYearPicker
                        locale="pt"
                        className="date-picker"
                        placeholderText="Selecionar data"
                    />
                    <FaCalendarAlt className="date-picker-icon" />
                </div>
            </div>
            <TextArea
                text='Descreva seu pedido:'
                id=''
                value={value}
                onChange={onChangeTextArea}
            />
            <DefaultButton
                text="Enviar Solicitação"
                backgroundColor="var(--primary-light-blue)"
                color='#fff'
                onClick={onClick}
            />
        </div>
    )
}

export default CardSelectPeriod;
