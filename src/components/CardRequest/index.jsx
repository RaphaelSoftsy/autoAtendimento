import './cardRequest.css';
import DefaultButton from '../DefaultButton';
import { useNavigate } from 'react-router-dom';
import TextArea from '../TextArea';

const CardRequest = (props) => {

    const navegation = useNavigate();

    return (
        <>
            <div className="card-request">
                <TextArea text ={props.text} id= {props.id}/>
                <DefaultButton
                    text="Upload do PDF"
                    backgroundColor="var(--primary-light-blue)"
                    color='#fff'
                    onClick={() => navegation("/")}
                />
            </div>
        </>
    );
}

export default CardRequest;