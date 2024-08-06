import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import CardMyRequest from "../../../components/CardMyRequest";
import Header from "../../../components/Header";
import { url_base_local } from "../../../services/url_base";
import './myRequest.css';

const MyRequests = () => {

    const [nameHeader] = useState('Minhas Solicitações')
    const [myResquest, setMyResquest] = useState([]);
    const aluno = '2471074'
    const MySwal = withReactContent(Swal);

    async function getMyRequests() {

        MySwal.showLoading()

        try {
            const response = await axios.get(`${url_base_local}/minhasSolicitacoes/${aluno}`);
            const data = response.data;
            console.log('Dados da declaração:', data);

            setMyResquest(data.reverse());
        } catch (error) {
            console.error('Erro ao buscar declaração:', error);
        }
        MySwal.close()
    }

    useEffect(() => {
        getMyRequests();
    }, [aluno]);

    return (
        <>
            <Header txt={nameHeader} />
            <main className="my-request">
                {myResquest.map((item) => (
                    <CardMyRequest 
                        key={item.id} 
                        solicitacao={item.solicitacao} 
                        data={item.data} 
                        descricao={item.descricao} 
                    />
                ))}
            </main>
        </>
    );
}

export default MyRequests;
