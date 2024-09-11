import CardServiceNumberPag from '../../../components/CardServiceNumberPag';

const PrintedDiplomaServiceNumber = () => {

    const numberService = localStorage.getItem('numero-servico')

    return (
        <div>
            <div className="rescue-checks">
                <CardServiceNumberPag
                    number={numberService}
                />
            </div>
        </div>
    );
};

export default PrintedDiplomaServiceNumber;
