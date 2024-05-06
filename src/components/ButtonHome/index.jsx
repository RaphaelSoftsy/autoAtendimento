import './buttonHome.css'
import { Link } from 'react-router-dom';

const ButtonHome = (props) => {
    return (
        <Link to={props.rota} className='button-home'>
            <img src={props.img} alt=""/>
            <span>{props.name}</span>
        </Link>
    )
}

export default ButtonHome