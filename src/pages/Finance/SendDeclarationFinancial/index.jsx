import { useNavigate } from 'react-router-dom';
import CardDeclaration from '../../../components/CardDeclaration'
import './sendDeclarationFinancial.css'

const SendDeclarationFinancial = () => {

    const navegation = useNavigate();

    const buttons = [
        {
            text: "Imprimir Declaração",
            backgroundColor: "var(--primary-light-blue)",
            color: '#fff',
            onClick: () => navegation("/")
        },
        {
            text: "Voltar para Serviços",
            backgroundColor: "var(--secondary-light-yellow)",
            color: '#fff',
            onClick: () => navegation("/")
        },
        {
            text: "Abrir Demanda",
            backgroundColor: "var(--secondary-light-red)",
            color: '#fff',
            onClick: () => navegation("/")
        },
        {
            text: "Finalizar Sessão",
            backgroundColor: "var(--secondary-light-red)",
            color: '#fff',
            onClick: () => navegation("/")
        }
    ];

    return (
        <>
            <main className='send-declaration-financial'>
                <CardDeclaration buttonProps={buttons}/>
            </main>
        </>
    )
}


export default SendDeclarationFinancial