import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './forgetPassword.css'
import Logo from '../../../assets/logo-sumare.svg';

const ForgetPassword = () => {

    const [ra, setRa] = useState('');
    const [aluno, setAluno] = useState([]);
    const navegation = useNavigate();
    const MySwal = withReactContent(Swal);

    // async function getAluno() {
    //     try {
    //         const response = await axios.get(`https://api-relatorios.sumare.edu.br/api-rel-split/login/interno?login=${ra}&senha=${senha}`);
    //         const data = response.data;
    //         console.log('Dados Aluno:', data);

    //         setLogin(data);
    //     } catch (error) {
    //         console.error('Erro ao buscar aluno:', error);
    //     }
    // }

    // useEffect(() => {
    //         getAluno();
    // }, []);


    const handleInputChange = (e) => {
        let value = e.target.value;

        value = value.replace(/[^\d]/g, '');
        setRa(value);
    };

    const handleNext = () => {
        if (ra.length >= 7 && !isNaN(ra)) {
            localStorage.setItem("aluno-ra-senha", ra);
            console.log(ra);
            navegation('/recuperacao-senha');
        } else {
            MySwal.fire({
                icon: 'error',
                title: 'Erro de Validação',
                text: 'O RA deve conter pelo menos 7 caracteres numéricos.',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <main className="forget-password">
            <img src={Logo} alt="logo sumaré" className="logo-sumare-password"/>
            <div className="card-password">
                <h2>Acesso</h2>
                <p>Para recuperar sua senha, digite seu RA e siga as instruções fornecidas.</p>
                <input
                    type="tel"
                    placeholder="RA"
                    className='input-ra'
                    value={ra}
                    onChange={handleInputChange}
                />
                <button className="button-password" onClick={handleNext}>Continuar</button>
            </div>
        </main>
    )
}

export default ForgetPassword;