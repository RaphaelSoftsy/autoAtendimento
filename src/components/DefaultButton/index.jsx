import './defaultButton.css'

const DefaultButton = (props) => {
    const style = {
        backgroundColor: props.backgroundColor,
        color: props.color
    }

    return(
        <div style={style} onClick={props.onClick} className='default-button'>{props.txt}</div>
    )
}

export default DefaultButton;