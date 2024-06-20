import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './modifyRA.css';
import { useNavigate } from 'react-router-dom';

const ModifyRA = () => {

    const navegation = useNavigate();

    const [selectedYear, setSelectedYear] = useState('');

    const list = [
        {
            id: 1,
            name: '24253647 - Millena Ferreira de Sousa - Análise de Desenvolvimento de Sistemas - Semestre 2'
        },
        {
            id: 2,
            name: '56763647 - Luiz Gustavo da Silva - Análise de Desenvolvimento de Sistemas - Semestre 3'
        },
        {
            id: 3,
            name: '24567647 - Paula Blesa Staniukaitis - Análise de Desenvolvimento de Sistemas - Semestre 4'
        }
    ]

    const handleSelectChange = (e) => {
        setSelectedYear(e.target.value);
    };

    return (
        <div className="modify-ra">
            {/* <div className="details-ra">
                <div>Nome: Millena Ferreira</div>
                <div>RA: 982739824</div>
                <div>Curso: ADS</div>
                <div>Semestre: 2 semestre</div>
            </div>
            <button className='alterar-ra'>Alterar RA</button> */}
            <select value={selectedYear} onChange={handleSelectChange} className="custom-select-medium">
                {list.map(item => (
                    <option key={item.id} value={item.name} className='option-medium'>{item.name}</option>
                ))}
            </select>
        </div>
    );
}

export default ModifyRA;
