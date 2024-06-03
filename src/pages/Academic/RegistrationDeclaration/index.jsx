import CardDeclaration from '../../../components/CardDeclaration'

const RegistrationDeclaration = () => {

    const buttons = [
        {
            text: "Imprimir Declaração",
            backgroundColor: "#019ED3",
            color: '#fff',
            onClick: () => navegation("/")
        },
        {
            text: "Voltar para Serviços",
            backgroundColor: "#EEAD2D",
            color: '#fff',
            onClick: () => navegation("/")
        },
        {
            text: "Abrir Demanda",
            backgroundColor: "#dc143c",
            color: '#fff',
            onClick: () => navegation("/")
        },
        {
            text: "Finalizar Sessão",
            backgroundColor: "#dc143c",
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


export default RegistrationDeclaration