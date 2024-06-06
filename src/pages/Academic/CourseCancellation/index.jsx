import { useNavigate } from "react-router-dom";
import DefaultButton from "../../../components/DefaultButton";
import "./courseCancellation.css"
import Modal from 'react-modal';
import { useState } from "react";

const CourseCancellation = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [hasPendingFees, setHasPendingFees] = useState(true);
    const navigate = useNavigate();

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleCancelCourse = () => {
        if (hasPendingFees) {
            alert("Você possui mensalidades pendentes.");
            navigate("/academico/cancelamento-do-curso/cobrancas");
        } else {
            alert("Seguir");
        }
        closeModal();
    };

    return (
        <main className="course-cancellation">
            <div className='card-cancellation'>
                <span>Seu curso atual: <b>Administração</b></span>
                <span>Seu semestre atual: <b>8 Semestre</b></span>
                <span>Polo: Sumaré <b>Av Dr.Arnald</b></span>
                <span>Situação Financeira <b>Inadimplente</b></span>
                <DefaultButton
                    text="Cancelar Curso"
                    backgroundColor="#DC143C"
                    color='#fff'
                    onClick={openModal}
                />

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Confirmar Cancelamento"
                    className="modal-cancellation"
                    overlayClassName="overlay"
                >
                    <div className='modal-content'>
                        <span onClick={closeModal} className='close-modal-button'>&times;</span>
                        <h2>Deseja mesmo cancelar o curso?</h2>
                        <div className='modal-actions'>
                            <button onClick={handleCancelCourse} className='modal-button confirm'>Sim</button>
                            <button onClick={closeModal} className='modal-button cancel'>Não</button>
                        </div>
                    </div>
                </Modal>
            </div>
        </main>
    );

}

export default CourseCancellation;