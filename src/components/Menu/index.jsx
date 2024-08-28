import { useContext, useState } from 'react';
import './menu.css';
import { RAContext } from '../../contexts/RAContext';

const Menu = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const { raList, currentRA, selectRA } = useContext(RAContext);

    console.log('RA List:', raList);
    console.log('Current RA:', currentRA);

    const handleSelectChange = (e) => {
        const selectedRA = raList.find(ra => ra.ra === e.target.value);
        selectRA(selectedRA);
        console.log(`RA selecionado: ${selectedRA.ra}`);
        handleModalClose();
    };

    return (
        <div className="menu">
            <ul>
                <li><a href="/perfil">Perfil</a></li>
                <li><a href="/minhas-solicitacoes">Minhas Solicitações</a></li>
                <li><a href="#" onClick={handleModalOpen}>Alterar RA</a></li>
                <li><a href="/configuracoes">Configurações</a></li>
                <li><a href="/notificacoes">Notificações</a></li>
                <li><a href="/">Sair</a></li>
            </ul>
            <Modal isOpen={isModalOpen} onClose={handleModalClose}>
                <div className='select-content'>
                    <div className='ra-details'>
                        <h3>Nome: {currentRA?.nomeCompleto}</h3>
                        <h3>RA Atual: {currentRA?.ra}</h3>
                    </div>
                    <select
                        value={currentRA?.ra || ''}
                        onChange={handleSelectChange}
                        className="custom-select"
                    >
                        {raList.map(item => (
                            <option key={item.ra} value={item.ra} className='option'>
                                {`${item.ra} - ${item.curso}`}
                            </option>
                        ))}
                    </select>
                </div>
            </Modal>
        </div>
    );
}

export default Menu;

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content-menu">
                <div className='select-ra'>
                    <h2>Selecione o RA</h2>
                    <button onClick={onClose} className="close-button-outside">X</button>
                </div>
                <div className='select-data'>
                    {children}
                </div>
            </div>
        </div>
    );
};
