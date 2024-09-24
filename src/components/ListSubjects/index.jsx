import './listSubjects.css'
import { Link, useLocation } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import { useContext } from 'react';
import { DataContext } from '../../contexts/DataProvider';

const Subject = (props) => {
    console.log(props);
    const {setRouteHeader, routeHeader } = useContext(DataContext)
    const location = useLocation()

    return (
        <Link
            key={props.id}
            to={props.route}
            className='topic'
            onClick={() => {
                localStorage.setItem('routeHeader', location.pathname)
                setRouteHeader(location.pathname)
                if (props.onClick) {
                    props.onClick(props.name);
                }
            }}
        >
            <span>{props.name}</span>
            {!props.seta && <FaChevronRight />}
        </Link>
    )
}

const ListSubjects = (props) => {
    return (
        <ul className='list'>
            {props.itens.map(subject => (
                <Subject
                    key={subject.id}
                    onClick={props.onClick}
                    route={subject.route}
                    name={subject.name}
                    seta={subject.seta}
                />
            ))}
        </ul>
    )
}

export default ListSubjects