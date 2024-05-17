import { Link } from 'react-router-dom'
import './footer.css'

const Footer = (props) => {

    return (
        <footer className='footer'>
            <Link key={props.id} to={props.route} className='title-footer' style={props.style} > {props.text} </Link>
        </footer>
    )
}

export default Footer