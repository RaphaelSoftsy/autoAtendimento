import CardServiceNumberAva from '../../../components/CardServiceNumberAva';

const ProblemsActivitiesServiceNumber = () => {

    const numberService = localStorage.getItem('numero-servico')

    return (
        <div>
            <div className="rescue-checks">
                <CardServiceNumberAva
                    number={numberService}
                />
            </div>
        </div>
    );
};

export default ProblemsActivitiesServiceNumber;
