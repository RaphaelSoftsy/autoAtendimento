import './listSubjects.css'
import { Link, useRoutes } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import { useContext } from 'react';
import { DataContext } from '../../contexts/DataProvider';

const Subject = (props) => {
    const {setTxtHeader} = useContext(DataContext)

    return (
        <Link key={props.id} to={props.route} className='topics' onClick={() => setTxtHeader(props.name)}>
            <span>{props.name}</span>
            <FaChevronRight />
        </Link>
    )
}

const ListSubjects = (props) => {
    return(
        <ul className='list'>
            {props.itens.map( subject => (
                <Subject key={subject.id} route={subject.route} name={subject.name} />
            ))}	
        </ul>
    )
}

export default ListSubjects