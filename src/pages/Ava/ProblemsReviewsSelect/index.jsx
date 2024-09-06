import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ListSubjects from '../../../components/ListSubjects';
import { useRA } from '../../../contexts/RAContext';
import { url_base_local } from '../../../services/url_base';

const ProblemsReviewsSelect = () => {

    const baseRoute = '/ava/problemas-nas-avaliacoes/escolha/abrir-demanda';
    const { currentRA } = useRA();
    const [selectedSubjectName, setSelectedSubjectName] = useState(null);
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const disciplinaSelecionada = localStorage.getItem('disciplina-selecionada')
    const disciplinaSelecionadaName = localStorage.getItem('disciplina-selecionada-name')
    const MySwal = withReactContent(Swal);

    useEffect(() => {
        getAssessment();
    }, [currentRA]);

    console.log(disciplinaSelecionada);
    

    async function getAssessment() {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/lista/avaliacao?aluno=${currentRA.ra}&disciplina=${disciplinaSelecionada}`);
            const data = response.data;
            
            console.log(data);
            

            if (data.length > 0) {
                const formattedData = data.map((item, index) => ({
                    id: index + 1,
                    name: `${item.avaliacao} - ${item.nomeAvaliacao} - ${item.mensagem} `,
                    codigo: item.disciplina,
                    route: baseRoute
                }));

                setSelectedSubjects(formattedData);
            } else {
                setSelectedSubjects([]);
            }
        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Não foi possível buscar as avaliações. Tente novamente mais tarde.',
                confirmButtonText: 'OK'
            });
        } finally {
            MySwal.close();
        }
    }

    const handleSubjectClick = (name) => {
        setSelectedSubjectName(name);
        localStorage.setItem('avaliacao-selecionada', name);
    };

    return (
        <main className="problems-reviews">
            <div className='list-subjects'>
                {selectedSubjects.length > 0 ? (
                    <>
                        <h1 className='title'>Agora, selecione qual das avaliações seguintes deseja solucionar o problema :</h1>
                        <span>Disciplina - {disciplinaSelecionadaName}</span>
                        <br />
                        <div className='ajuste'>
                            <ListSubjects
                                itens={selectedSubjects}
                                onClick={handleSubjectClick}
                            />
                        </div>
                    </>
                ) : (
                    <p>Nenhuma avaliação encontrada para o aluno.</p>
                )
                }
            </div>
        </main>
    );
}

export default ProblemsReviewsSelect;
