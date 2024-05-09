import { RiArrowGoBackLine } from 'react-icons/ri'
import './header.css'
import { FaBars } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'
import { DataContext } from '../../contexts/DataProvider'
import { useContext } from 'react'

const Header = (props) => {
    const { setTxtHeader, txtHeader, setRouteHeader } = useContext(DataContext)
    const navigate = useNavigate()
    const location = useLocation()
    
    return (
        <header className='header'>
            <span className="icon" onClick={() => {
                const txt = txtHeader
                setTxtHeader(txt.splice(0, 1))
                if(location.pathname == '/financeiro'){
                    navigate('/')
                }else{
                    navigate(props.route)
                }
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