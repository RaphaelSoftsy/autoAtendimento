import { useContext } from 'react';
import './buttonHome.css'
import { Link, json } from 'react-router-dom';
import { DataContext } from '../../contexts/DataProvider';

const ButtonHome = (props) => {
    const { setTxtHeader } = useContext(DataContext)

    return (
        <Link to={props.rota} className='button-home' onClick={() => {
            const listHeader = [props.name]
            setTxtHeader(listHeader)
            localStorage.setItem('txtHeader', JSON.stringify(listHeader))

            localStorage.setItem('routeHeader', '/')
        }}>
            <img src={props.img} alt="" />
            <span>{props.name}</span>
        </Link>
    )
}

export default ButtonHome