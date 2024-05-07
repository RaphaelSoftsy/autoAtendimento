import { useContext } from 'react';
import './buttonHome.css'
import { Link } from 'react-router-dom';
import { DataContext } from '../../contexts/DataProvider';

const ButtonHome = (props) => {
    const { setTxtHeader } = useContext(DataContext)

    return (
        <Link to={props.rota} className='button-home' onClick={() => {
            localStorage.setItem('txtHeader', props.name)
            setTxtHeader(props.name)

            localStorage.setItem('routeHeader', '/')
        }}>
            <img src={props.img} alt="" />
            <span>{props.name}</span>
        </Link>
    )
}

export default ButtonHome