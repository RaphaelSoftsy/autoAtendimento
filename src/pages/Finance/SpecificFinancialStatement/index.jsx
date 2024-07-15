import { useNavigate } from 'react-router-dom';
import CardSelectPeriod from '../../../components/CardSelectPeriod'
import './specificFinancialStatement.css'
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { url_base_local } from '../../../services/url_base';

const SpecificFinancialStatement = () => {

    const navegation = useNavigate();
    const MySwal = withReactContent(Swal);
    const [dataInicioSelecionada, setDataInicioSelecionada] = useState(null);
    const [dataFimSelecionada, setDataFimSelecionada] = useState(null);
    const [textValue, setTextValue] = useState('');

    const handleTextChange = (e) => {
        setTextValue(e.target.value);
    }

    const handleClick = async () => {
        console.log("Enviando Solicitação...");

        const inicioSelecionado = dataInicioSelecionada ? `${dataInicioSelecionada.getMonth() + 1}/${dataInicioSelecionada.getFullYear()}` : 'N/A';
        const fimSelecionado = dataFimSelecionada ? `${dataFimSelecionada.getMonth() + 1}/${dataFimSelecionada.getFullYear()}` : 'N/A';

        console.log(`Data de Início: ${inicioSelecionado}, Data de Fim: ${fimSelecionado}, Texto: ${textValue}`);

        if (!dataInicioSelecionada || !dataFimSelecionada || !textValue) {
            MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor, preencha todos os campos antes de enviar!",
            });
            return;
        }

        MySwal.showLoading();

        const dataToSend = {
            aluno: "2471074",
            obs: textValue,
            dtIni: inicioSelecionado,
            dtFim: fimSelecionado
        };

        console.log("Data to send:", JSON.stringify(dataToSend));

        try {
            const response = await axios.post(`${url_base_local}/`, dataToSend, {});

            if (response.status === 200) {
                const responseData = response.data;
                MySwal.close();
                MySwal.fire({
                    title: "Cadastrado com sucesso",
                    icon: "success",
                });
                localStorage.setItem("numero-servico", JSON.stringify(responseData));
                navegation("numero-servico");
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            MySwal.close();
            console.log(error);
            MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "Não foi possível realizar esse comando!",
            });
        }
    };

    return (
        <main className='specific-financial-statement'>
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

export default SpecificFinancialStatement