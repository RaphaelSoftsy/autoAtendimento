import { RiArrowGoBackLine } from 'react-icons/ri'
import './header.css'
import { FaBars } from 'react-icons/fa'

const HeaderAcd = () => {
    return (
        <header className='header-acd'>
            <span className="icon">
                <RiArrowGoBackLine className='icon-header' />
            </span>
            <h1>Acadêmico</h1>
            <span className="icon">
                <FaBars className='icon-header' />
            </span>
        </header>
    )
}

export default HeaderAcd