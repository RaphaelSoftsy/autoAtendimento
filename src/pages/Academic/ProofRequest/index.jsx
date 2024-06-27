import './proofRequest.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import Footer from '../../../components/Footer';
import ListCheckButton from '../../../components/ListCheckButton';

const ProofRequest = () => {
    const list = [
        {
            id: 1,
            name: 'Disciplina 1',
            provasub: true,
            provahb: true
        },
        {
            id: 2,
            name: 'Disciplina 2',
            provasub: false,
            provahb: true
        }
    ];

    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);

    const handleSubjectSelect = (id, multiple) => {
        if (multiple) {
            setSelectedSubjects(prevSelected => {
                const index = prevSelected.indexOf(id);
                if (index !== -1) {
                    return prevSelected.filter(subjectId => subjectId !== id);
                } else {
                    return [...prevSelected, id];
                }
            });
        } else {
            setSelectedSubjects([id]);
        }
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
            const selectedProof = list.filter(item => selectedSubjects.includes(item.id));
            localStorage.setItem("selectedProof", JSON.stringify(selectedProof));

            navigate('/academico/solicitacoes-academicas/solicitacao-de-prova/escolha');
        }
    };

    return (
        <>
            <main className="proof-request">
                <div className='list-subjects'>
                    <h1 className='title'>De qual disciplina?</h1>
                    <h4 className='title'>Se já houver solicitação da disciplina aberta, levar para a tela de senha com a opção de abrir demanda</h4>
                    <ListCheckButton
                        items={list}
                        selectedSubjects={selectedSubjects}
                        onSelect={handleSubjectSelect}
                        multiple={false}
                        text="Não achou a disciplina que está procurando?"
                    />
                </div>
            </main>
            <Footer text='Avançar' onClick={handleNext} />
        </>
    );
};

export default ProofRequest;
