import { RiArrowGoBackLine } from 'react-icons/ri'
import './header.css'
import { FaBars } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../contexts/DataProvider'
import { useContext } from 'react'

const Header = (props) => {
    const { setTxtHeader, oldTxtHeader } = useContext(DataContext)
    const navigate = useNavigate()
    
    //console.log(oldTxtHeader);
    return (
        <header className='header'>
            <span className="icon" onClick={() => {
                navigate(props.route)
            }}>
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