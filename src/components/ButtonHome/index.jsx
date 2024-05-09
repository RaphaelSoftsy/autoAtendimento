import { useContext } from 'react';
import './buttonHome.css'
import { Link, json } from 'react-router-dom';
import { DataContext } from '../../contexts/DataProvider';

const ButtonHome = (props) => {
    return (
        <Link to={props.rota} className='button-home' onClick={() => {
            localStorage.setItem('routeHeader', '/')
        }}>
            <img src={props.img} alt="" />
            <span>{props.name}</span>
        </Link>
    )
}

export default ButtonHome