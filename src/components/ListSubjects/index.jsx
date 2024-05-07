import './listSubjects.css'
import { Link, useLocation, useRoutes } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import { useContext } from 'react';
import { DataContext } from '../../contexts/DataProvider';

const Subject = (props) => {
    const { txtHeader, setTxtHeader, setRouteHeader, setOldTextHeader } = useContext(DataContext)
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
        <Link key={props.id} to={props.route} className='topics' onClick={() => {
            //setOldTextHeader(txtHeader)

            localStorage.setItem('txtHeader', props.name)
            setTxtHeader(props.name)

            localStorage.setItem('routeHeader', oldLocation())
            setRouteHeader(oldLocation())
        }}>
            <span>{props.name}</span>
            <FaChevronRight />
        </Link>
    )
}

const ListSubjects = (props) => {
    return (
        <ul className='list'>
            {props.itens.map(subject => (
                <Subject key={subject.id} route={subject.route} name={subject.name} />
            ))}
        </ul>
    )
}

export default ListSubjects