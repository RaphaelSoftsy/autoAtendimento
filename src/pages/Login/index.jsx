import { Link, useNavigate } from "react-router-dom"
import './login.css'
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Login = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [ra, setRa] = useState('');
    const [senha, setSenha] = useState('');
    const [login, setLogin] = useState([]);
    const navegation = useNavigate();
    const MySwal = withReactContent(Swal);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    async function getLogin() {
        try {
            const response = await axios.get(`https://api-relatorios.sumare.edu.br/api-rel-split/login/interno?login=${ra}&senha=${senha}`);
            const data = response.data;
            console.log('Dados Login:', data);

            setLogin(data);
        } catch (error) {
            console.error('Erro ao buscar login:', error);
        }
    }

    useEffect(() => {
        if (ra && senha) {
            getLogin();
        }
    }, [ra, senha]);


    const handleNext = () => {
        if (!ra || !senha) {
            MySwal.fire({
                icon: 'info',
                title: 'Erro',
                text: 'Por favor, preencha todos os campos',
                confirmButtonText: 'OK'
            });
        } else {

            if (login === 'N') {
                MySwal.fire({
                    icon: 'info',
                    title: 'Erro',
                    text: 'Login ou senha inválidos',
                    confirmButtonText: 'OK'
                });
            } else {
                navegation('/home'); // Navega para a página inicial
            }
        }
    };
    


    return (
        <main className="auto-atendimento">
            <div className="login">
                <h1>Auto Atendimento</h1>
                <input
                    type="tel"
                    placeholder="RA"
                    className='input-ra-senha'
                    value={ra}
                    onChange={(e) => setRa(e.target.value)}
                />
                <div className="password-wrapper">
                    <input
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Senha"
                        className='input-ra-senha'
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <span className="eye-icon" onClick={togglePasswordVisibility}>
                        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                <Link to={'/esquecer-senha'}>Esqueceu a senha?</Link>

                <button className="button-login" onClick={handleNext}>Login</button>
            </div>
            <div className="white"></div>

        </main>
    )
}

export default Login;