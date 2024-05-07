import { useContext } from 'react';
import './buttonHome.css'
import { Link } from 'react-router-dom';
import { DataContext } from '../../contexts/DataProvider';

const ButtonHome = (props) => {
    const {setTxtHeader} = useContext(DataContext)

    return (
        <Link to={props.rota} className='button-home' onClick={() => setTxtHeader(props.name)}>
            <img src={props.img} alt=""/>
            <span>{props.name}</span>
        </Link>
    )
}

export default ButtonHome