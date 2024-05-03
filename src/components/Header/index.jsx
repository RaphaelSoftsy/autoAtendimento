import { RiArrowGoBackLine } from 'react-icons/ri'
import './header.css'
import { FaBars } from 'react-icons/fa'

const Header = (props) => {
    return (
        <header className='header'>
            <span className="icon">
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