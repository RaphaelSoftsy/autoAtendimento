import './footer.css'

const Footer = (props) => {

    return (
        <footer className='footer'>
            <button
                key={props.id}
                to={props.route}
                className='title-footer'
                style={props.style}
                onClick={props.onClick}
            >
                {props.text}
            </button>
        </footer>
    )
}

export default Footer