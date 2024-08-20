import './cardDrop.css';
import Dropdown from '../Dropdown/Dropdown';
import TextArea from '../TextArea';
import DefaultButton from '../DefaultButton';
import InputUpload from '../InputUpload';

const CardDrop = (props) => {
    const list = [
        { id: 1, name: 'Prouni' },
        { id: 2, name: 'Colaborador' },
        { id: 3, name: 'Mantenedora' }
    ];

    return (
        <div className="card-drop">
            <h2>Selecione o Tipo da Bolsa:</h2>
            <Dropdown
                id='dropdown-handbag'
                name='dropdown-handbag'
                itens={list}
                label=''
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
