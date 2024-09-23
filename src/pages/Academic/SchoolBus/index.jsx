import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Footer from "../../../components/Footer";
import ListSubjectsCheck from "../../../components/ListSubjectsCheck";
import { useRA } from "../../../contexts/RAContext";
import { url_base_local } from "../../../services/url_base";
import './schoolBus.css';

const SchoolBus = () => {
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);
    const { currentRA } = useRA();

    const list = [
        {
            id: 1,
            name: 'Bilhete Único'
        }
    ];

    const handleSubjectSelect = (id) => {
        setSelectedSubjects(prevSelected => {
            const index = prevSelected.indexOf(id);
            if (index !== -1) {
                return prevSelected.filter(subjectId => subjectId !== id);
            } else {
                return [...prevSelected, id];
            }
        });
    };

    const handleNext = async () => {
        if (selectedSubjects.length === 0) {
            MySwal.fire({
                icon: 'info',
                title: 'Erro',
                text: 'Você não selecionou nada',
                confirmButtonText: 'OK'
            });
        } else {
            try {
                const selectedSubject = list.find(item => item.id === selectedSubjects[0]);

                const dataToSend = {
                    aluno: currentRA.ra,
                    valeTransporte: selectedSubject.name
                };

                const response = await axios.post(`${url_base_local}/transporteEscolar`, dataToSend);

                if (response.status === 200) {
                    const responseData = response.data;
                    MySwal.close();
                    MySwal.fire({
                        title: "Solicitação Enviada com Sucessso!",
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
                    text: 'Não foi possível fazer a solicitação. Tente novamente mais tarde.',
                    confirmButtonText: 'OK'
                });
            }
        }
    };

    return (
        <main className='main-perform-accord'>
            <div className="school-bus">
                <div className='list-subjects'>
                    <h1 className='title'>Qual deseja solicitar?</h1>
                    <ListSubjectsCheck
                        items={list}
                        selectedSubjects={selectedSubjects}
                        onSelect={handleSubjectSelect} />
                </div>
            </div>
            <Footer text="Solicitar Transporte" onClick={handleNext} />
        </main>
    );
};

export default SchoolBus;
