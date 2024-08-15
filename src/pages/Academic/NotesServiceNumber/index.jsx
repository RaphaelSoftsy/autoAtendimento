import CardServiceNumberPag from '../../../components/CardServiceNumberPag';

const NotesServiceNumber = () => {

    const numberService = localStorage.getItem('numero-servico')

    return (
        <div className='main-perform-accord'>
            <div className="rescue-checks">
                <CardServiceNumberPag
                    number={numberService}
                />
            </div>
        </div>
    );
};

export default NotesServiceNumber;
