import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Logo from '../../../assets/logo-sumare.svg';

const Verification = () => {

    const [codigo, setCodigo] = useState('');
    const [verification, setVerification] = useState([]);
    const navegation = useNavigate();
    const MySwal = withReactContent(Swal);
    const ra = localStorage.getItem('aluno-ra-senha');

    async function getVerification() {
        try {
            const response = await axios.get(`https://api-academico.sumare.edu.br/api-redefinir-senha/validatoken/aluno/${ra}/token/${codigo}`);
            const data = response.data;
            console.log('Dados Login:', data);

            if (data.includes('N')) {
                MySwal.fire({
                    icon: 'error',
                    title: 'Código Inválido',
                    text: 'O código inserido é inválido. Verifique e tente novamente.',
                    timer: 5000,
                    timerProgressBar: true,
                    showConfirmButton: true
                });
            } else {
                MySwal.fire({
                    icon: 'success',
                    title: 'Verificação Concluída',
                    text: 'Verificação bem-sucedida! Redirecionando para criar nova senha.',
                    timer: 3000,
                    timerProgressBar: true,
                    showConfirmButton: false
                }).then(() => {
                    localStorage.setItem("token", codigo);
                    navegation('/criar-nova-senha');
                });
            }

            setVerification(data);
        } catch (error) {
            console.error('Erro ao buscar login:', error);
            MySwal.fire({
                icon: 'error',
                title: 'Erro de Validação',
                text: 'Ocorreu um erro ao validar o código. Preencha novamente o campo e tente novamente.',
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false
            });
        }
    }

    const handleInputChange = (e) => {
        let value = e.target.value;

        value = value.replace(/[^\d]/g, '');
        setCodigo(value);
    };

    const handleNext = () => {
        getVerification();
    };

    return (
        <main className="forget-password">
            <img src={Logo} alt="logo sumaré" className="logo-sumare-password" />
            <div className="card-password">
                <h2>Verificação necessária</h2>
                <p>Para continuar, conclua esta etapa de verificação. Enviamos um código para o seu e-mail e via SMS para o seu número registrado.</p>
                <input
                    type="tel"
                    placeholder="Código"
                    className='input-codigo'
                    value={codigo}
                    onChange={handleInputChange}
                />
                <button className="button-password" onClick={handleNext}>Continuar</button>
                <span>Selecionar outra forma de envio</span>
            </div>
        </main>
    )
}

export default Verification;