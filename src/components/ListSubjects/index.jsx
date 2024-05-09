import './listSubjects.css'
import { Link, useLocation } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import { useContext } from 'react';
import { DataContext } from '../../contexts/DataProvider';

const Subject = (props) => {
    const {setRouteHeader, routeHeader } = useContext(DataContext)
    const location = useLocation()

    return (
        <Link key={props.id} to={props.route} className='topic' onClick={() => {
            localStorage.setItem('routeHeader', location.pathname)
            setRouteHeader(location.pathname)
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