import './buttonMenu.css'

const ButtonHome = (props) => {
    return (
        <div className='button-home'>
            <img src={props.img} alt=""/>
            <span>{props.name}</span>
        </div>
    )
}

export default ButtonHome