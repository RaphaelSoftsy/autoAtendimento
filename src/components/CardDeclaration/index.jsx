import { useRef } from 'react';
import logo from '../../assets/logo-sumare-azul.png';
import DefaultButton from '../DefaultButton';
import './cardDeclaration.css';

const CardDeclaration = ({ buttonProps, declarationText }) => {
    const printRef = useRef();

    return (
        <main className='card-declaration'>
            <img src={logo} alt="logo da sumare" className='logo-sumare-azul' />
            <div className="declaration-content" ref={printRef}>
                {declarationText}
            </div>

            {buttonProps.map((props, index) => (
                <DefaultButton key={index} {...props} />
            ))}
        </main>
    );
}

export default CardDeclaration;
