import './cardDeclaration.css';
import DefaultButton from '../DefaultButton';
import logo from '../../assets/logo-sumare-azul.png';
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';

const CardDeclaration = ({ buttonProps, declarationText }) => {
    const printRef = useRef();

    return (
        <main className='card-declaration'>
            <img src={logo} alt="logo da sumare" className='logo-sumare-azul' />
            <div className="declaration-content" dangerouslySetInnerHTML={{ __html: declarationText }} />
            <ReactToPrint
                trigger={() => (
                    <DefaultButton
                        text="Imprimir Declaração"
                        backgroundColor="var(--primary-light-blue)"
                        color='#fff'
                    />
                )}
                content={() => printRef.current}
            />
            {buttonProps.map((props, index) => (
                <DefaultButton key={index} {...props} />
            ))}
            <div style={{ display: 'none' }}>
                <div ref={printRef} className='print-area-declaration'>
                    <img src={logo} alt="logo da sumare" className='logo-sumare-azul' />
                    <div className="declaration-content-print" dangerouslySetInnerHTML={{ __html: declarationText }} />
                </div>
            </div>
        </main>
    );
}

export default CardDeclaration;
