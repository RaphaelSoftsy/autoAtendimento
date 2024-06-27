import { useNavigate } from "react-router-dom";
import DefaultButton from "../../../components/DefaultButton";
import "./repayment.css"
import Dropdown from "../../../components/Dropdown/Dropdown";
import TextArea from "../../../components/TextArea";


const Repayment = () => {

    const navegation = useNavigate();

    const list = [
        {
            id: 1,
            name: 'janeiro a junho de 2024'
        },
        {
            id: 2,
            name: 'julho a dezembro 2024'
        }
    ]

    const list2 = [
        {
            id: 1,
            name: '123465 - cobrança do dia x'
        },
        {
            id: 2,
            name: '123769 - cobrança do dia x'
        }
    ]

    return (
        <main className="repayment">
            <div className='repayment-card'>
                <div className="card-request">
                    <Dropdown
                        id='dropdown-handbag'
                        name='dropdown-handbag'
                        itens={list}
                        label='Selecionar plano de pagamento'
                        onChange={(e) => setTypeScholarship(e.target.value)}
                    />
                    <Dropdown
                        id='dropdown-handbag'
                        name='dropdown-handbag'
                        itens={list2}
                        label='Selecionar Cobrança'
                        onChange={(e) => setTypeScholarship(e.target.value)}
                    />
                    <TextArea text='Descreva o por que da sua solicitação:' id='' />
                    <DefaultButton
                        text="Upload do PDF"
                        backgroundColor="var(--primary-light-blue)"
                        color='#fff'
                        onClick={() => navegation("/")}
                    />
                </div>
                <DefaultButton
                    text="Enviar Solicitação"
                    backgroundColor="var(--primary-light-blue)"
                    color='#fff'
                    onClick={() => navegation("/")}
                />
            </div>
        </main>
    );

}

export default Repayment;