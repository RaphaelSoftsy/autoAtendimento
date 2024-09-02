import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ListArrow from '../../../components/ListArrow';
import { useRA } from '../../../contexts/RAContext';
import { url_base_local } from '../../../services/url_base';

const Diplomas = () => {
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);
    const { currentRA } = useRA();
    const [selectedSubjects, setSelectedSubjects] = useState([]);

    useEffect(() => {
        if (currentRA.sitAluno === 'CONCLUIDO') {
            MySwal.fire({
                icon: 'warning',
                title: 'Atenção!',
                text: 'É preciso concluir o curso antes de acessar esta tela.',
                showConfirmButton: false,
                timer: 3000,
            });

            setTimeout(() => {
                navigate("/academico/solicitacoes-academicas");
            }, 3000);
        }
    }, [currentRA]);

    useEffect(() => {
        getDiploma();
    }, [currentRA]);

    const handleSubmit = async () => {
        MySwal.showLoading();

        const dataToSend = {
            aluno: currentRA.ra
        };

        try {
            const response = await axios.post(`${url_base_local}/diplomaImpresso`, dataToSend);

            if (response.status === 200) {
                const responseData = response.data;
                MySwal.close();
                MySwal.fire({
                    title: "Cadastrado com sucesso",
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
                icon: 'error',
                title: 'Erro',
                text: 'Não foi possível solicitar o diploma impresso. Tente novamente mais tarde.',
                confirmButtonText: 'OK'
            });
        }
    };

    async function getDiploma() {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/solicitaDiploma/${currentRA.ra}`);
            const data = response.data;

            setSelectedSubjects(data);
        } catch (error) {
            MySwal.close();
            MySwal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Não foi possível solicitar o diploma impresso. Tente novamente mais tarde.',
                confirmButtonText: 'OK'
            });
        }
    }

    const list = [
        {
            id: 1,
            name: 'Diploma Impresso',
            detalhes: 'Serviço exclusivo para o(a) aluno(a) de GRADUAÇÃO que já recebeu o diploma digital e deseja ter a impressão da via física do documento, em papel especial, para fins de apresentação decorativa. A retirada deverá ser realizada exclusivamente pelo aluno (portanto documento oficial com foto), ou pelo procurador (mediante apresentação de Procuração Pública), no endereço do atendimento da Sede. A retirada deve ser feita imprescindivelmente em até 60 dias APÓS A NOTIFICAÇÃO da disponibilidade.',
            text_button: 'Solicitar',
            onClick: handleSubmit,
        },
        {
            id: 2,
            name: 'Colação de Grau Especial',
            detalhes: 'Anexar em 1 único PDF: RG, Cert. Nascimento ou Casamento, *Histórico Escolar do Ensino Médio com Certificado de Conclusão; *Boletim de Ocorrência (Referente a perda ou roubo do Diploma); * Caso tenha solicitado "Aproveitamento de Estudos", também deverá ser anexado o Histórico Escolar da outra Instituição de Ensino Superior. É de total responsabilidade do(a) aluno(a), os dados pessoais que constarão no Diploma, pois estarão de acordo com os documentos anexados.',
            text_button: 'Solicitar',
            route: "/academico/solicitacoes-academicas/diplomas/colacao-de-grau-especial"
        }
    ];

    if (selectedSubjects.length > 0) {
        list.push({
            id: 3,
            name: 'Segunda via de Diploma',
            detalhes: 'O Diploma em pele da Sumaré é confeccionado em pele de carneiro de forma artesanal seguindo os modelos de certificado mais tradicionais e sofisticados.',
            text_button: 'Solicitar',
            route: "/academico/solicitacoes-academicas/diplomas/segunda-via-de-diploma"
        });
    }

    return (
        <main className="perform-payment">
            <div className='list-subjects'>
                <h1 className='title'>Escolha uma das opções de diploma abaixo.</h1>
                <ListArrow items={list} />
            </div>
        </main>
    );
};

export default Diplomas;
