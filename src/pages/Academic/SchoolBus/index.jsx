import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Footer from "../../../components/Footer";
import ListSubjectsCheck from "../../../components/ListSubjectsCheck";
import './schoolBus.css';


const SchoolBus = () => {

    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);

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

    const handleNext = () => {
        if (selectedSubjects.length === 0) {
            MySwal.fire({
                icon: 'info',
                title: 'Erro',
                text: 'Você não selecionou nada',
                confirmButtonText: 'OK'
            });
        } else {
            navigate('numero-servico');
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