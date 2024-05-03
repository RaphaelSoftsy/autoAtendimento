import { RiArrowGoBackLine } from 'react-icons/ri'
import './header.css'
import { FaBars } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {
    const navigate = useNavigate()

    return (
        <header className='header'>
            <span className="icon" onClick={() => navigate(props.route)}>
                <RiArrowGoBackLine className='icon-header' />
            </span>
            <h1> {props.txt} </h1>
            <span className="icon">
                <FaBars className='icon-header' />
            </span>
        </header>
    )
}

export default Header