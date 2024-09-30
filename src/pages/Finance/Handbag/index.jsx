import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import CardDrop from "../../../components/CardDrop";
import { useRA } from "../../../contexts/RAContext";
import { url_base_local } from "../../../services/url_base";
import { convertToBase64 } from "../../Academic/ProgramContent";
import './handbag.css';

const Handbag = () => {
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);
    const { currentRA } = useRA();
    const [selectedOptionHandbag, setSelectedOptionHandbag] = useState(null);

    const [formData, setFormData] = useState({
        aluno: currentRA.ra,
        obs: '',
        nomeArq: '',
        tamanhoArq: '',
        extensaoArq: '',
        tipoArq: '',
        arquivo: '',
        tipoBolsa: null
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
            tipoBolsa: selectedOptionHandbag
        }));
    }, [selectedOptionHandbag]);

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
            !formData.tipoBolsa && "Por favor, selecione um tipo de bolsa!" ||
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

        try {
            const response = await axios.post(`${url_base_local}/solicitacaoBolsa`, formData);

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
        <main className="handbag">
            <CardDrop
                setSelect={setSelectedOptionHandbag}
                onChangeInputFile={handleFileChange}
                onClick={handleSubmit}
                textTextArea='Descreva o problema relacionado à bolsa de estudos, incluindo detalhes sobre valores, prazos ou informações incorretas. Anexe documentos relevantes, como comprovantes ou contratos (obrigatório).'
                observation={formData.obs}
                onObservationChange={handleChangeObservation}
                selectedFileName={formData.nomeArq}
            />
        </main>
    );
};

export default Handbag;
