import './listSubjects.css'
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";

const Subject = (props) => {
    return (
        <Link to={props.rota} className='topics'>
            <span>{props.name}</span>
            <FaChevronRight />
        </Link>
    )
}

const ListSubjects = (props) => {
    return(
        <ul className='list'>
            {props.itens.map( subject => (
                <Subject rota={subject.rota} name={subject.name} />
            ))}	
        </ul>
    )
}

export default ListSubjects