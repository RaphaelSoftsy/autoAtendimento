import React, { createContext, useState, useContext } from 'react';

export const RAContext = createContext();

export const RAProvider = ({ children }) => {
  const raList = [
    { id: 1, ra: '2473474', nomeCompleto: 'Millena Ferreira de Sousa', name: '2473474 - Millena Ferreira de Sousa - Análise de Desenvolvimento de Sistemas - Semestre 2' },
    { id: 2, ra: '2014111', nomeCompleto: 'Luiz Gustavo da Silva', name: '2014111 - Luiz Gustavo da Silva - Análise de Desenvolvimento de Sistemas - Semestre 3' },
    { id: 3, ra: '2472878', nomeCompleto: 'Paula Blesa Staniukaiti', name: '2472878 - Paula Blesa Staniukaitis - Análise de Desenvolvimento de Sistemas - Semestre 4' }
  ];

  const [currentRA, setCurrentRA] = useState(raList[0]);  // Define o primeiro RA como padrão

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