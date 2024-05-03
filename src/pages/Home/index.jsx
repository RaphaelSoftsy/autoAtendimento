import './home.css'
import { FaBars } from "react-icons/fa";
import logo from '../../assets/logo-sumare.svg'

const Home = () => {
    return (
        <div>
            <header>
                <FaBars className='bars' />
            </header>
            <main>
                <figure>
                    <img src={logo} alt="logo da sumare" className='logo-sumare' />
                </figure>
                <h2>Teste 2</h2>
            </main>
        </div>
    )
}

export default Home