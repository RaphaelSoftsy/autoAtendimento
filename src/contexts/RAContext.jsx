import axios from 'axios';
import { createContext, useState, useContext, useEffect } from 'react';
import { url_base_local } from '../services/url_base';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const RAContext = createContext();

export const RAProvider = ({ children }) => {
  // const raList = [
  //   { id: 1, ra: '2471074', nomeCompleto: 'Raphael de Santana Lopes', name: '2471074 - ADS - Análise de Desenvolvimento de Sistemas - Semestre 2' },
  //   { id: 2, ra: '2471074', nomeCompleto: 'Raphael de Santana Lopes', name: '2471074 - Análise de Desenvolvimento de Sistemas - Semestre 3' },
  //   { id: 3, ra: '2471074', nomeCompleto: 'Raphael de Santana Lopes', name: '2471074 - Análise de Desenvolvimento de Sistemas - Semestre 4' }
  // ];

  const [raList, setRaList] = useState([]);
  const [currentRA, setCurrentRA] = useState(null);
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    const aluno = localStorage.getItem('aluno-ra');
    MySwal.showLoading();

    // Chamada à API diretamente no useEffect
    axios.get(`${url_base_local}/dadosAluno/${aluno}`)
      .then(response => {
        const data = response.data;

        // Substitui "aluno" por "ra" e remove completamente o campo "aluno"
        const updatedData = data.map(({ aluno, ...rest }) => ({
          ...rest,
          ra: aluno,
        }));

        console.log(updatedData);

        setRaList(updatedData);

        if (updatedData.length > 0) {
          setCurrentRA(updatedData[0]);
        }
      })
      .catch(error => {
        console.error('Erro ao buscar dados do aluno:', error);
        MySwal.fire('Erro', 'Não foi possível carregar os dados do aluno.', 'error');
      })
      .finally(() => {
        MySwal.close();
      });
  }, []);

  const selectRA = (ra) => {
    setCurrentRA(ra);
  };

  return (
    <RAContext.Provider value={{ raList, currentRA, selectRA }}>
      {children}
    </RAContext.Provider>
  );
};

export const useRA = () => {
  const context = useContext(RAContext);
  if (!context) {
    throw new Error('useRA must be used within a RAProvider');
  }
  return context;
};