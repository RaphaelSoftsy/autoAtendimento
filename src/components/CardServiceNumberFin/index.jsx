import { useNavigate } from 'react-router-dom';
import DefaultButton from '../DefaultButton';
import './cardServiceNumber.css';

const CardServiceNumberFin = (props) => {
    const navigate = useNavigate();

    return (
        <div className='card-service-number'>
            <h2>Solicitação Enviada</h2>
            <span>Nesse momento será realizado uma solicitação de serviço dentro do Lyceum (Aluno Online);</span>
            <div className='service-number'>
                <p>Solicitação numero:</p>
                <span>{props.number}</span>
            </div>
            <DefaultButton
                text="Voltar para Serviço"
                backgroundColor="var(--secondary-light-yellow)"
                color='#fff'
                onClick={() => navigate('/financeiro')}
            />
            <DefaultButton
                text="Finalizar Sessão"
                backgroundColor="var(--secondary-light-red)"
                color='#fff'
                onClick={() => navigate('/home')}
            />
        </div>
    );
};

export default CardServiceNumberFin;
