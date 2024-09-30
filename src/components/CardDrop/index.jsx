import DefaultButton from '../DefaultButton';
import Dropdown from '../Dropdown/Dropdown';
import InputUpload from '../InputUpload';
import TextArea from '../TextArea';
import './cardDrop.css';

const CardDrop = (props) => {
    const list = [
        { id: 1, name: 'Prouni' },
        { id: 2, name: 'Colaborador' },
        { id: 3, name: 'Mantenedora' }
    ];

    return (
        <div className="card-drop">
            <Dropdown
                id='dropdown-handbag'
                name='dropdown-handbag'
                text='Escolha o tipo de Bolsa'
                itens={list}
                label='Selecione o Tipo da Bolsa:'
                onChange={props.setSelect}
            />
            <TextArea
                text={props.textTextArea}
                id="observation"
                value={props.observation}
                onChange={props.onObservationChange}
            />
            <InputUpload
                onChangeInputFile={props.onChangeInputFile}
                selectedFileName={props.selectedFileName}
            />
            <div className="button-group">
                <DefaultButton
                    text="Enviar Solicitação"
                    backgroundColor="var(--primary-light-blue)"
                    color='#fff'
                    onClick={props.onClick}
                />
            </div>
        </div>
    );
};

export default CardDrop;
