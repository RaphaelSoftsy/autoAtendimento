import React, { createContext, useState, useContext } from 'react';

export const RAContext = createContext();

export const RAProvider = ({ children }) => {
  const raList = [
    { id: 1, ra: '2471074', nomeCompleto: 'Raphael de Santana Lopes', name: '2471074 - ADS - Análise de Desenvolvimento de Sistemas - Semestre 2' },
    { id: 2, ra: '2471074', nomeCompleto: 'Raphael de Santana Lopes', name: '2471074 - Análise de Desenvolvimento de Sistemas - Semestre 3' },
    { id: 3, ra: '2471074', nomeCompleto: 'Raphael de Santana Lopes', name: '2471074 - Análise de Desenvolvimento de Sistemas - Semestre 4' }
  ];

  const [currentRA, setCurrentRA] = useState(raList[0]);

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