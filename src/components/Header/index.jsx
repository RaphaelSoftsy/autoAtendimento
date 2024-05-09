import { RiArrowGoBackLine } from 'react-icons/ri'
import './header.css'
import { FaBars } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'
import { DataContext } from '../../contexts/DataProvider'
import { useContext } from 'react'

const Header = (props) => {
    const {setRouteHeader } = useContext(DataContext)
    const navigate = useNavigate()
    const location = useLocation()

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
                console.log(props.route);
                if(location.pathname == '/financeiro'){
                    navigate('/')
                }else{
                    navigate(oldLocation())
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