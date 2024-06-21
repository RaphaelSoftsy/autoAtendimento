import { FaBarcode } from 'react-icons/fa';
import DefaultButton from '../../../../components/DefaultButton';
import GeneratorBarCode from '../../../../components/GeneratorBarCode';
import jsPDF from 'jspdf';
import { useState } from 'react';

const BoletoAccord = () => {

    const total = localStorage.getItem("totalAccord");
    const codigoBarra = localStorage.getItem("codigo-barra");

    const [buttonText, setButtonText] = useState('Copiar Linha Digitável');
    
    const copyToClipboard = () => {
        navigator.clipboard.writeText(codigoBarra);
        setButtonText('Copiado!');
        setTimeout(() => setButtonText('Copiar Linha Digitável'), 5000);
    };

    const downloadPdf = () => {
        const doc = new jsPDF();

        // Adiciona o texto ao PDF
        doc.text(`Valor a Pagar: R$ ${total}`, 10, 10);
        doc.text(`Código de Barras:`, 10, 20);

        // Gera o código de barras em um canvas
        const canvas = document.createElement('canvas');
        JsBarcode(canvas, codigoBarra, { format: 'CODE128', displayValue: false });

        // Adiciona o código de barras ao PDF
        const barcodeImage = canvas.toDataURL('image/png');
        doc.addImage(barcodeImage, 'PNG', 10, 30, 180, 30);

        // Baixa o PDF
        doc.save('boleto.pdf');
    };
    //     if (!pdf) {
    //         return;
    //     }

    //     const transporter = nodemailer.createTransport({
    //         service: 'gmail',
    //         port: 465,
    //         secure: false,
    //         logger: true,
    //         debug: true,
    //         secureConnection: false,
    //         auth: {
    //             user: 'seuemail@gmail.com',
    //             pass: 'suasenha'
    //         },
    //         tls: {
    //             rejectUnauthorized: false
    //         }
    //     });

    //     const mailOptions = {
    //         from: 'seuemail@gmail.com',
    //         to: 'email@example.com',
    //         subject: 'Boleto para pagamento',
    //         text: `Olá, segue o boleto para pagamento. Total a pagar: R$ ${total}, Código de Barras: ${codigoBarra}`,
    //         attachments: [{
    //             filename: 'boleto.pdf',
    //             content: pdf.output('blob')
    //         }]
    //     };

    //     transporter.sendMail(mailOptions, (error, info) => {
    //         if (error) {
    //             console.error('Erro ao enviar e-mail:', error);
    //         } else {
    //             console.log('E-mail enviado com sucesso!', info.response);
    //         }
    //     });
    // };
    // console.log(sendEmail);

    return (
        <main className='boleto'>
            <div className='container-pix'>
                <div className="amount-payable">
                    <span>Valor a Pagar</span>
                    <span className='total-boleto'>R$ {total}</span>
                </div>
                <div className="icon-boleto">
                    <FaBarcode />
                </div>
            </div>
            <div className='card-baixar-boleto'>
                <GeneratorBarCode />
                <span className='codigo-barra'>{codigoBarra}</span>
                <DefaultButton
                    text={buttonText}
                    backgroundColor="var(--primary-light-blue)"
                    color='#fff'
                    onClick={copyToClipboard}
                />
                <DefaultButton
                    text="Baixar Boleto"
                    backgroundColor="var(--primary-light-blue)"
                    color='#fff'
                    onClick={downloadPdf}
                />
                <DefaultButton
                    text="Enviar no E-mail"
                    backgroundColor="var(--primary-light-blue)"
                    color='#fff'
                />
            </div>
        </main>
    );

}

export default BoletoAccord;