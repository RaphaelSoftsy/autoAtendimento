import { RiArrowGoBackLine } from 'react-icons/ri'
import './header.css'
import { FaBars } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'
import { DataContext } from '../../contexts/DataProvider'
import { useContext, useState } from 'react'
import Menu from '../Menu'

const Header = (props) => {
    const { setRouteHeader } = useContext(DataContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [menuVisible, setMenuVisible] = useState(false)

    function oldLocation() {
        const nowPath = location.pathname
        let arrayPath = nowPath.split('/')

        let lengthPath = (arrayPath.length - 1)
        arrayPath.splice(lengthPath, 1)

        let arrayOldPath = []
        arrayPath.forEach((path, index) => {
            if (path.length > 0) {
                arrayOldPath.push('/')
                arrayOldPath.push(path)
            }
        })

        const oldPath = arrayOldPath.filter((item, index) => item !== ';').join('')
        return oldPath
    }

    return (
        <header className='header'>
            <span className="icon" onClick={() => {
                if (location.pathname === '/financeiro' || location.pathname === '/academico' || location.pathname === '/ava') {
                    navigate('/home')
                } else {
                    navigate(oldLocation())
                }
            }}>
                <RiArrowGoBackLine className='icon-header' />
            </span>
            <h1> {props.txt} </h1>
            <span className="icon" onClick={() => setMenuVisible(!menuVisible)}>
                <FaBars className='icon-header' />
            </span>
            {menuVisible && <Menu />}
        </header>
    )
}

export default Header
