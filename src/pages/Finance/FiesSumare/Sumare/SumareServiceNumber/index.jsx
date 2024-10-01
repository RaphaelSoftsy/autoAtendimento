import CardServiceNumberFin from "../../../../../components/CardServiceNumberFin";

const SumareServiceNumber = () => {
    const numberService = localStorage.getItem('numero-servico')
    return (
        <div>
            <div className="rescue-checks">
                <CardServiceNumberFin
                    number={numberService}
                />
            </div>
        </div>
    );
};

export default SumareServiceNumber;
