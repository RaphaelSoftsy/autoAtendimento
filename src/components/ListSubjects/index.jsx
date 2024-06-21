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
            if(props.onClick() != undefined){
                props.onClick()
            }
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
                <Subject key={subject.id} onClick={props.onClick} route={subject.route} name={subject.name} />
            ))}
        </ul>
    )
}

export default ListSubjects

// const Subject = ({ id, route, name, valor, onSelect }) => {
//     const { setRouteHeader, routeHeader } = useContext(DataContext);
//     const location = useLocation();

//     const handleClick = () => {
//         onSelect(route, valor);
//     };

//     return (
//         <Link 
//             key={id} 
//             to={route} 
//             className='topic' 
//             onClick={() => {
//                 handleClick();
//                 localStorage.setItem('routeHeader', location.pathname);
//                 setRouteHeader(location.pathname);
//             }}
//         >
//             <span>{name}</span>
//             <FaChevronRight />
//         </Link>
//     );
// };

// const ListSubjects = ({ itens, onOptionSelect }) => {
//     return (
//         <ul className='list'>
//             {itens.map(subject => (
//                 <Subject 
//                     key={subject.id} 
//                     route={subject.route} 
//                     name={subject.name} 
//                     valor={subject.valor}
//                     onSelect={onOptionSelect}
//                 />
//             ))}
//         </ul>
//     );
// };

// export default ListSubjects;