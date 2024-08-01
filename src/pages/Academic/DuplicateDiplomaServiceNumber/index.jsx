import CardServiceNumberPag from '../../../components/CardServiceNumberPag';

const DuplicateDiplomaServiceNumber = () => {

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

export default DuplicateDiplomaServiceNumber;
