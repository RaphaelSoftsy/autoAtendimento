import { useNavigate } from 'react-router-dom';
import DefaultButton from '../DefaultButton';

const CardServiceNumberAva = (props) => {

    const navegation = useNavigate();

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
                onClick={() => navegation('/ava')}
            />
            <DefaultButton
                text="Finalizar Sessão"
                backgroundColor="var(--secondary-light-red)"
                color='#fff'
                onClick={() => navegation('/home')}
            />
        </div>
    );
};

export default CardServiceNumberAva;
