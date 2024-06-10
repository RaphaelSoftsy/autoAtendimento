import './footer.css'

const Footer = (props) => {

    return (
        <footer className="footer-container">
            <div className='footer'>
                <button
                    key={props.id}
                    to={props.route}
                    className='title-footer'
                    style={props.style}
                    onClick={props.onClick}
                >
                    {props.text}
                </button>
            </div>
        </footer>
    )
}

export default Footer