import DefaultButton from "../../../components/DefaultButton";

const OpenCollection = () => {

    return (
        <main className="course-cancellation">
            <div className='card-cancellation'>
                <span><b>Você possui cobranças em aberto. Gostaria de realizar um acordo?</b></span>
                <DefaultButton
                    text="Sim"
                    backgroundColor="#019ED3"
                    color='#fff'
                    onClick={() => navegation("")}
                />
                <DefaultButton
                    text="Não"
                    backgroundColor="#DC143C"
                    color='#fff'
                    onClick={() => navegation("")}
                />
            </div>
            
        </main>
    );

}

export default OpenCollection;