import Dropdown from '../Dropdown/Dropdown';
import TextArea from '../TextArea';
import DefaultButton from '../DefaultButton';
import InputUpload from '../InputUpload';

const CardRepayment = (props) => {
    const list = [
        { id: 1, name: 'janeiro a junho de 2024' },
        { id: 2, name: 'julho a dezembro 2024' }
    ]

    const list2 = [
        { id: 1, name: '123465 - cobrança do dia x' },
        { id: 2, name: '123769 - cobrança do dia x' }
    ]

    return (
        <div className="card-drop">
            <Dropdown
                id='dropdown-handbag'
                name='dropdown-handbag'
                itens={list}
                label='Selecionar plano de pagamento'
                onChange={props.setSelect}
            />
            <Dropdown
                id='dropdown-handbag'
                name='dropdown-handbag'
                itens={list2}
                label='Selecionar Cobrança'
                onChange={props.setSelect2}
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

export default CardRepayment;
