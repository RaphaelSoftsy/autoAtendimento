import { FaTimes } from "react-icons/fa";
import './filterModal.css'

const FilterModal = ({ isVisible, onClose, onClick }) => {
    if (!isVisible) return null;

    return (
        <div className="filter-modal">
            <div className="filter-modal-content">
                <button className="close-button" onClick={onClose}><FaTimes /></button>
                <h2>Filtrar por:</h2>
                <div>
                    <label>
                        <input type="checkbox" name="mensalidade" /> Mensalidades
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="acordo" /> Acordo
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="servicos" /> Serviços
                    </label>
                </div>
                <button className='filtrar' onClick={onClick}>Filtrar</button>
            </div>
        </div>
    );
};

export default FilterModal;