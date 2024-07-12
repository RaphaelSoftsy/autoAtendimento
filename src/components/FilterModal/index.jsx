import { FaTimes } from "react-icons/fa";
import './filterModal.css'
import { useEffect, useState } from "react";

const FilterModal = ({ isVisible, filters, onApply, onClose }) => {
    const [localFilters, setLocalFilters] = useState(filters);

    useEffect(() => {
        setLocalFilters(filters);
    }, [filters]);

    const handleFilterChange = (filterName) => {
        // Desmarca todos os outros filtros e seleciona apenas o filtro clicado
        const updatedFilters = {
            ...localFilters,
            MENSALIDADES: filterName === 'MENSALIDADES',
            ACORDOS: filterName === 'ACORDOS',
            SERVIÇOS: filterName === 'SERVIÇOS',
            TODOS: false, // Desmarca 'TODOS' ao selecionar qualquer outro filtro
        };
        setLocalFilters(updatedFilters);
    };

    const handleApply = () => {
        onApply(localFilters);
    };

    const handleSelectAll = () => {
        setLocalFilters({
            MENSALIDADES: false,
            SERVIÇOS: false,
            ACORDOS: false,
            TODOS: true,
        });
    };

    if (!isVisible) return null;

    return (
        <div className="filter-modal">
            <div className="filter-modal-content">
                <button className="close-button" onClick={onClose}><FaTimes /></button>
                <h2>Filtrar por:</h2>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={localFilters.MENSALIDADES}
                            onChange={() => handleFilterChange('MENSALIDADES')}
                        /> Mensalidades
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={localFilters.ACORDOS}
                            onChange={() => handleFilterChange('ACORDOS')}
                        /> Acordo
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={localFilters.SERVIÇOS}
                            onChange={() => handleFilterChange('SERVIÇOS')}
                        /> Serviços
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={localFilters.TODOS}
                            onChange={handleSelectAll}
                        /> Todos
                    </label>
                </div>
                <button className='filtrar' onClick={handleApply}>Filtrar</button>
            </div>
        </div>
    );
};

export default FilterModal;
