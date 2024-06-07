import { FaQrcode } from 'react-icons/fa';
import DefaultButton from '../../../../components/DefaultButton';
import QRCode from 'qrcode.react';
import { useEffect, useState } from 'react';

const PixAccord = () => {

    const list = 
        {
            success: true,
            pixQRCode: "00020101021226820014br.gov.bcb.pix2560pix.stone.com.br/pix/v2/79e16d48-2994-4208-bc32-0cc15c5631f1520400005303986540599.005802BR5914Conta primaria6014RIO DE JANEIRO62290525paclwgr3j59doc71flndux81f6304E547",
            tid: "2743999140"
        };

    const [qrText, setQrText] = useState('');

    const total = localStorage.getItem("totalAccord");

    const [buttonText, setButtonText] = useState('Copiar');

    const style = {
        width: '200px',
        height: '200px'
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(list.pixQRCode);
        setButtonText('Copiado!');
        setTimeout(() => setButtonText('Copiar Linha Digitável'), 5000);
    };

    useEffect(() => {
        setQrText(list.pixQRCode);
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
                <QRCode value={qrText} style={style} />
                <DefaultButton
                    text= {buttonText}
                    backgroundColor="#019ED3"
                    color='#fff'
                    onClick={copyToClipboard}
                />
            </div>
        </main>
    );

}

export default PixAccord;