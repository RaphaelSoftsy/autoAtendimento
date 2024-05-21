import Footer from '../../../components/Footer'
import './financialStatement.css'

const FinancialStatement = () => {
    return (
        <>
            <main className='financial-statement'>
                <div className='list-subjects'>
                    <h1 className='title'>Selecione o Ano e Periodo desejado</h1>
                    <div className='select-year'>
                        <p>Selecione o Ano</p>
                        <select>
                            <option>Janeiro a Junho de 2022</option>
                            <option>Junho a Dezembro de 2022</option>
                        </select>
                    </div>
                </div>
            </main>
            <div className="footer-container">
                <Footer text='Emitir Declação' route='/financeiro/solicitar-documentos/declaracao-financeira/emitir-declaracao' />
            </div>
        </>
    )
}


export default FinancialStatement