import CardServiceNumberAcad from '../../../components/CardServiceNumber';

const NotesServiceNumber = () => {

    const numberService = localStorage.getItem('numero-servico')

    return (
        <div>
            <div className="rescue-checks">
                <CardServiceNumberAcad
                    number={numberService}
                />
            </div>
        </div>
    );
};

export default NotesServiceNumber;
