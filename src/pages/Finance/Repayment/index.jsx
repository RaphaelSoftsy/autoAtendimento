import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import CardRepayment from "../../../components/CardRepayment";
import { useRA } from "../../../contexts/RAContext";
import { url_base_local } from "../../../services/url_base";
import { convertToBase64 } from "../../Academic/ProgramContent";
import "./repayment.css";

const Repayment = () => {
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);
    const { currentRA } = useRA();
    const [selectedOptionFlat, setSelectedOptionFlat] = useState(null);
    const [selectedOptionCharge, setSelectedOptionCharge] = useState(null);

    const [formData, setFormData] = useState({
        aluno: currentRA.ra,
        obs: '',
        nomeArq: '',
        tamanhoArq: '',
        extensaoArq: '',
        tipoArq: '',
        arquivo: '',
        plano: '',
        cobranca: ''
    });

    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            aluno: currentRA.ra
        }));
    }, [currentRA]);

     useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            plano: selectedOptionFlat
        }));
    }, [selectedOptionFlat]);

    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            cobranca: selectedOptionCharge
        }));
    }, [selectedOptionCharge]);

    const handleChangeObservation = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            convertToBase64(file, (base64String) => {
                const imgSplit = base64String.split(',');
                setFormData(prevState => ({
                    ...prevState,
                    nomeArq: file.name,
                    tamanhoArq: file.size,
                    extensaoArq: file.name.split('.').pop().toUpperCase(),
                    tipoArq: file.type,
                    arquivo: imgSplit[1]
                }));
            });
        }
    };

    const handleSubmit = async () => {
        const errorMessage =
            !formData.plano && "Por favor, selecione um tipo de plano de pagamento!" ||
            !formData.cobranca && "Por favor, selecione uma cobrança!" ||
            !formData.obs.trim() && "Por favor, preencha a observação!" ||
            !formData.arquivo && "Por favor, selecione um arquivo antes de enviar!";

        if (errorMessage) {
            MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: errorMessage,
            });
            return;
        }

        MySwal.showLoading();

        const dataToSend = {
            ...formData,
            plano: selectedOptionFlat,
            cobranca: selectedOptionCharge
        };


        try {
            const response = await axios.post(`${url_base_local}/`, dataToSend);

            if (response.status === 200) {
                const responseData = response.data;
                MySwal.close();
                MySwal.fire({
                    title: "Solicitação Enviada com Sucesso!",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                });
                localStorage.setItem("numero-servico", JSON.stringify(responseData));
                navigate("numero-servico");
            }
        } catch (error) {
            MySwal.close();
            MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "Não foi possível fazer a solicitação. Tente novamente mais tarde.",
            });
        }
    };

    return (
        <main className="repayment">
            <CardRepayment
                text='Descreva sua solicitação:'
                setSelect={setSelectedOptionFlat}
                setSelect2={setSelectedOptionCharge}
                onChangeInputFile={handleFileChange}
                onClick={handleSubmit}
                textTextArea='Descreva o motivo da solicitação de reembolso, incluindo detalhes sobre o valor, serviço e justificativa. Anexe comprovantes ou documentos relevantes (obrigatório).'
                observation={formData.obs}
                onObservationChange={handleChangeObservation}
                selectedFileName={formData.nomeArq}
            />
            
        </main>
    );

}

export default Repayment;