import CardServiceNumberAcad from "../../../../../components/CardServiceNumber";

const FiesServiceNumber = () => {

    const numberService = localStorage.getItem('numero-servico')

    return (
        <div>
            <div className="rescue-checks">
                <CardServiceNumberAcad
                    number= {numberService}
                />
            </div>
        </div>
    );
};

export default FiesServiceNumber;
