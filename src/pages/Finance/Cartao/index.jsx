import './cartao.css'


const Cartao = () => {

    const total = localStorage.getItem("total");

    return (
        <>
            <main className='cartao'>
                <h1 class="title">Parcelamento:</h1>
                <div class="vista-parcela">
                    <p>A vista:</p>
                    <span>R$ 89,00 - Mensalidade Jan/23</span>
                    <span>R$ 89,00 - Mensalidade Fev/23</span>
                </div>
<br />
                <div class="vista-parcela">
                    <p>Selecione o Parcelamento:</p>
                    <span>R$ {total} - 2° via de Diploma em pele</span>
                    <select>
                        <option>1 a vista</option>
                        <option>2 parcelas</option>
                    </select>
                </div>
            </main>
            <footer className='footer-container'>
                <div className='footer-payment'>
                    <div className='total'>
                        <span>Total:</span>
                        <span>R$ {total}</span>
                    </div>
                    <button className='title-footer' > Próximo </button>
                </div>
            </footer>
        </>

    );

}

export default Cartao;