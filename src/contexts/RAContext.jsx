import axios from 'axios';
import { createContext, useState, useContext, useEffect } from 'react';
import { url_base_local } from '../services/url_base';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const RAContext = createContext();

export const RAProvider = ({ children }) => {

  const [raList, setRaList] = useState([]);
  const [currentRA, setCurrentRA] = useState(null);
  const MySwal = withReactContent(Swal);

  const updateRAContext = () => {
    const aluno = localStorage.getItem('aluno-ra');
    MySwal.showLoading();
  
    axios.get(`${url_base_local}/dadosAluno/${aluno}`)
      .then(response => {
        const data = response.data;
  
        const updatedData = data.map(({ aluno, ...rest }) => ({
          ...rest,
          ra: aluno,
        }));
  
        const sortedData = updatedData.sort((a) => (a.ra === aluno ? -1 : 1));
  
        setRaList(sortedData);
  
        if (sortedData.length > 0) {
          setCurrentRA(sortedData[0]);
        }
      })
      .catch(error => {
        console.error('Erro ao buscar dados do aluno:', error);
        MySwal.fire('Erro', 'Não foi possível carregar os dados do aluno.', 'error');
      })
      .finally(() => {
        MySwal.close();
      });
  };
  
  useEffect(() => {
    updateRAContext();
  }, []);
  

  const selectRA = (ra) => {
    setCurrentRA(ra);
  };

  return (
    <RAContext.Provider value={{ raList, currentRA, selectRA, updateRAContext}}>
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