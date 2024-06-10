import ListSubjectsCheck from '../../../../components/ListSubjectsCheck';
import Footer from '../../../../components/Footer';
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';

const ServiceCharges = () => {
    
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const navegation = useNavigate();
    const MySwal = withReactContent(Swal);

    const list = [
        {
            id: 1,
            name: 'Serviço 155684 (Dec.Finan)'
        },
        {
            id: 2,
            name: 'Serviço 90192 (Desc. brev)'
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
            navegation('/');
        }
    };

    return (
        <main className='main-perform-accord'>
            <div className="perform-accord">
                <div className='list-subjects'>
                    <h1 className='title'>Selecione qual as opções que deseja:</h1>
                    <ListSubjectsCheck
                        items={list}
                        selectedSubjects={selectedSubjects}
                        onSelect={handleSubjectSelect} />
                </div>
            </div>
            <Footer text="Avançar" onClick={handleNext} />
        </main>
    );
};

export default ServiceCharges;