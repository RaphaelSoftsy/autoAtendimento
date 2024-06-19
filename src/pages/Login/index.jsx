import { Link } from "react-router-dom"
import './login.css'
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    
    return (
        <main className="auto-atendimento">
            <div className="login">
                <h1>Auto Atendimento</h1>
                <input type="tel" placeholder="RA" className='input-ra-senha' />
                <div className="password-wrapper">
                    <input 
                        type={passwordVisible ? "text" : "password"} 
                        placeholder="Senha" 
                        className='input-ra-senha' 
                    />
                    <span className="eye-icon" onClick={togglePasswordVisibility}>
                        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

                <Link to={'/home'} className="button-login">Login</Link>
            </div>
            <div className="white"></div>

        </main>
    )
}

export default Login;