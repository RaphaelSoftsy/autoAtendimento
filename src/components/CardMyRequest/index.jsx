import './cardMyRequest.css'

const CardMyRequest = (props) => {

    const dataFormatada = props.data.split(' ')[0];

    return (
        <div className='card-my-request'>
            <div className="subtitle">
                <p>Número Solicitação:<strong> {props.solicitacao}</strong></p>
                <p className='data'>Data: <strong>{dataFormatada}</strong></p>
            </div>
            <p>{props.descricao}</p>
        </div>
    );
};

export default CardMyRequest;