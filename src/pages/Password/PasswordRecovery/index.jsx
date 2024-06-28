import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import Logo from '../../../assets/logo-sumare.svg';

const PasswordRecovery = () => {

    const [aluno, setAluno] = useState([]);
    const navegation = useNavigate();
    const ra = localStorage.getItem('aluno-ra-senha');
    console.log(ra);

    async function getAlunoRa() {
        try {
            const response = await axios.get(`https://api-academico.sumare.edu.br/api-redefinir-senha/listarContatosAluno/aluno/${ra}`);
            const data = response.data;
            console.log('Dados Aluno:', data);

            setAluno(data);
        } catch (error) {
            console.error('Erro ao buscar aluno:', error);
        }
    }

    useEffect(() => {
        if (ra) {
            getAlunoRa();
        }
    }, [ra]);

    const handleSms = () => {
        enviarTokenSMS();
        navegation('/verificacao');
    };

    const handleEmail = () => {
        enviarTokenEmail();
        navegation('/verificacao');
    };

    async function enviarTokenSMS() {
        try {
            const response = await axios.post(`https://api-academico.sumare.edu.br/api-redefinir-senha/geradortoken/enviar-token-sms/${aluno[0][0]}/${ra}`);
            const data = response.data;
            console.log('Resposta da API SMS:', data);
        } catch (error) {
            console.error('Erro ao enviar token SMS:', error);
        }
    }

    async function enviarTokenEmail() {
        try {
            const response = await axios.post(`https://api-academico.sumare.edu.br/api-redefinir-senha/geradortoken/enviar-token-email/${aluno[1][0]}/${ra}`);
            const data = response.data;
            console.log('Resposta da API Email:', data);
        } catch (error) {
            console.error('Erro ao enviar token Email:', error);
        }
    }

    

    return (
        <main className="forget-password">
            <img src={Logo} alt="logo sumaré" className="logo-sumare-password"/>
            <div className="card-password">
                <h2>Recuperação de Senha</h2>
                <p>Selecione abaixo a forma que deseja receber o Token recuperação de senha:</p>
                {aluno && aluno.length >= 2 && (
                    <>
                        <button className="button-password" onClick={handleSms}>SMS: {aluno[0][0]} </button>
                        <button className="button-password" onClick={handleEmail}>Email: {aluno[1][0]}</button>
                    </>
                )}
                <span>Se você não usa mais o endereço de e-mail e telefone associado á seu registro Academico, entre em contato com o Atendimento sumaré em (definir o tipo de atendimento) para ajudar a restaurar o acesso á sua conta.</span>
            </div>
        </main>
    )
}

export default PasswordRecovery;