import './cardDeclaration.css'
import DefaultButton from '../DefaultButton';
import logo from '../../assets/logo-sumare-azul.png'

const CardDeclaration = ({ buttonProps, declarationText }) => {
    return (
        <div className='card-declaration'>
            <img src={logo} alt="logo da sumare" className='logo-sumare-azul' />
            <div className="declaration-content" dangerouslySetInnerHTML={{ __html: declarationText }} />
            {buttonProps.map((props, index) => (
                <DefaultButton key={index} {...props} />
            ))}
        </div>
    )
}

export default CardDeclaration;