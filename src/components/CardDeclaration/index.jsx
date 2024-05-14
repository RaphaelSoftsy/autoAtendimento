import './cardDeclaration.css'
import Declaracao from '../../assets/declaracaoMod.jpg';
import DefaultButton from '../DefaultButton';

const CardDeclaration = ({buttonProps}) => {
    return (
        <div className='card-declaration'>
            <img src={Declaracao} alt="Declaracao" className='declaracao'/>
            {buttonProps.map((props, index) => (
                <DefaultButton key={index} {...props} />
            ))}
        </div>
    )
}

export default CardDeclaration;