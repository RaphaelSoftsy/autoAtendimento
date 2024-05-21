import { FaQrcode } from 'react-icons/fa';
import './pix.css'
import DefaultButton from '../../../components/DefaultButton';
import QRCode from 'qrcode.react';
import { useEffect, useState } from 'react';

const Pix = () => {

    const [qrText, setQrText] = useState('');

    const total = localStorage.getItem("total");

    const style = {
        width: '200px',
        height: '200px'
    }

    useEffect(() => {
        setQrText("the-world-of-harry-potter.vercel.app/");
    }, []);

    return (
        <main className='pix'>
            <div className='container-pix'>
                <div className="amount-payable">
                    <span>Valor a Pagar</span>
                    <span className='total-pix'>R$ {total}</span>
                </div>
                <div className="icon-pix">
                    <FaQrcode />
                </div>
            </div>
            <div className='card-copia-pix'>
                <QRCode value={qrText} style={style}/>
                <DefaultButton
                    text="Copiar Código do PIX"
                    backgroundColor="#019ED3"
                    color='#fff'
                    onClick={() => qrText}
                />
            </div>
        </main>
    );

}

export default Pix;