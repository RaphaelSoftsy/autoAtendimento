import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Logo from '../../../assets/logo-sumare.svg';

const CreateNewPassword = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordVisible2, setPasswordVisible2] = useState(false);
    const [senha, setSenha] = useState('');
    const [senha2, setSenha2] = useState('');
    const [newPassword, setNewPassword] = useState([]);
    const navegation = useNavigate();
    const MySwal = withReactContent(Swal);
    const ra = localStorage.getItem('aluno-ra-senha');
    const token = localStorage.getItem('token');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const togglePasswordVisibility2 = () => {
        setPasswordVisible2(!passwordVisible2);
    }; 

    async function postNewPassword() {
        try {
            const response = await axios.post(`https://api-academico.sumare.edu.br/api-bff-redefinir-senha/v1/alterarSenha`, {
                aluno: ra,
                senha: senha,
                token: token
            })
            const data = response.data;
            console.log('Dados Login:', data);

            if (data.success) {
                MySwal.fire({
                    icon: 'success',
                    title: 'Senha Alterada!',
                    confirmButtonText: 'Ir para o Login',
                    timer: 5000,
                    timerProgressBar: true,
                    showConfirmButton: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        navegation('/home');
                    }
                });
            } else {
                MySwal.fire({
                    icon: 'error',
                    title: 'Erro ao alterar senha',
                    text: 'Ocorreu um erro ao tentar alterar a senha.',
                    confirmButtonText: 'OK',
                });
            }

            setNewPassword(data);
        } catch (error) {
            console.error('Erro ao buscar login:', error);

            MySwal.fire({
                icon: 'error',
                title: 'Erro ao alterar senha',
                text: 'Ocorreu um erro ao tentar alterar a senha. Por favor, tente novamente mais tarde.',
                confirmButtonText: 'OK',
            });
        }
    }


    const handleNext = async () => {

        if (!senha || !senha2) {
            MySwal.fire({
                icon: 'error',
                title: 'Campos vazios',
                text: 'Preencha todos os campos para continuar.',
                confirmButtonText: 'OK',
            });
        } else if (senha.length < 6) {
            MySwal.fire({
                icon: 'error',
                title: 'Senha muito curta',
                text: 'A nova senha deve ter pelo menos 6 caracteres.',
                confirmButtonText: 'OK',
            });
        } else if (senha !== senha2) {
            MySwal.fire({
                icon: 'info',
                title: 'Senhas diferentes',
                text: 'Os campos de senha não coincidem. Por favor, verifique.',
                confirmButtonText: 'OK',
            });
        } else {
            postNewPassword();
        }
    }

    return (
        <main className="forget-password">
            <img src={Logo} alt="logo sumaré" className="logo-sumare-password" />
            <div className="card-password">
                <h2>Verificação necessária</h2>
                <p>Para continuar, conclua esta etapa de verificação. Enviamos um código para o seu e-mail e via SMS para o seu número registrado.</p>
                <div className="password-wrapper">
                    <input
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Nova Senha"
                        className='input-senha'
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <span className="eye-icon" onClick={togglePasswordVisibility}>
                        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                <div className="password-wrapper">
                    <input
                        type={passwordVisible2 ? "text" : "password"}
                        placeholder="Confirmação de Senha"
                        className='input-senha'
                        value={senha2}
                        onChange={(e) => setSenha2(e.target.value)}
                    />
                    <span className="eye-icon" onClick={togglePasswordVisibility2}>
                        {passwordVisible2 ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                <button className="button-password" onClick={handleNext}>Salvar</button>
            </div>
        </main>
    )
}

export default CreateNewPassword;