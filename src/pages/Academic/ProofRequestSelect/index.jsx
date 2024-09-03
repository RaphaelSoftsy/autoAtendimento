import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ListSubjects from '../../../components/ListSubjects';
import { useRA } from '../../../contexts/RAContext';
import { url_base_local } from '../../../services/url_base';

const ProofRequestSelect = () => {
    const { currentRA } = useRA();
    const MySwal = withReactContent(Swal);
    const [selectedSubjects, setSelectedSubjects] = useState([]);

    useEffect(() => {
        getProva();
    }, [currentRA]);

    async function getProva() {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/provasDisponiveis/ead?aluno=2480263&disciplina=00124_80`);
            const data = response.data;

            const formattedData = data.map((item, index) => {
                let route = '';

                if (item.valor === 0) {
                    route = '/numero-servico';
                } else {
                    route = '/pagamento';
                }

                return {
                    id: index + 1,
                    aluno: item.aluno,
                    name: item.prova,
                    valor: item.valor,
                    route: route
                };
            });

            setSelectedSubjects(formattedData);
        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Não foi possível buscar as provas disponíveis. Tente novamente mais tarde.',
                confirmButtonText: 'OK'
            });
        } finally {
            MySwal.close();
        }
    }

    const handleNext = (selectedName) => {
        localStorage.setItem('selectedSubject', selectedName);
    };

    return (
        <main className="proof-request">
            <div className='list-subjects'>
                <h1 className='title'>Selecione a prova que deseja solicitar</h1>
                <ListSubjects
                    itens={selectedSubjects}
                    onClick={handleNext}
                />
            </div>
        </main>
    )
}

export default ProofRequestSelect;
