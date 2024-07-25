import CardServiceNumber from '../../../components/CardServiceNumber';

const AcademicSpecificDeclarationServiceNumber  = () => {

    const numberService = localStorage.getItem('numero-servico')

    return (
        <div className='main-perform-accord'>
            <div className="rescue-checks">
                <CardServiceNumber
                    number= {numberService}
                />
            </div>
        </div>
    );
};

export default AcademicSpecificDeclarationServiceNumber ;
