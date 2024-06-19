import './home.css'
import { FaBars } from "react-icons/fa";
import logo from '../../assets/logo-sumare.svg'
import notebook from '../../assets/notebook.png'
import financas from '../../assets/financas.png'
import cap from '../../assets/cap.png'
import ButtonHome from '../../components/ButtonHome';

const Home = () => {

    const aluno = '2470005';

    localStorage.setItem("aluno-ra", aluno);

    return (
        <div>
            <header>
                <span className='icon-bars'>
                    <FaBars className='bars' />
                </span>
            </header>
            <main>
                <figure>
                    <img src={logo} alt="logo da sumare" className='logo-sumare' />
                </figure>
                <h1>Sobre qual assunto deseja falar?</h1>
                <div className='lista-assuntos'>
                    <ButtonHome name="Financeiro" img= {financas} rota={"/financeiro"} />
                    <ButtonHome name="Acadêmico" img= {cap} rota={"/academico"} />
                    <ButtonHome name="AVA" img= {notebook} rota={"/ava"} />
                    <ButtonHome name="Problemas na matrícula" img= {notebook} rota={"/home"} />
                </div>
               
            </main>
        </div>
    )
}

export default Home