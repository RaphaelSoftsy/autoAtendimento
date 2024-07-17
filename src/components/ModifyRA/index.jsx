import React, { useContext } from 'react';
import './modifyRA.css';
import { RAContext } from '../../contexts/RAContext';

const ModifyRA = () => {
  const { raList, currentRA, selectRA } = useContext(RAContext);

  const handleSelectChange = (e) => {
    const selectedRA = raList.find(ra => ra.name === e.target.value);
    selectRA(selectedRA);
  };

  return (
    <div className="modify-ra">
      <select value={currentRA.name} onChange={handleSelectChange} className="custom-select-medium">
        {raList.map(item => (
          <option key={item.id} value={item.name} className='option-medium'>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default ModifyRA;
