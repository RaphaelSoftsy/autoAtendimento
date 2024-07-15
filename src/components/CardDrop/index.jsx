import './cardDrop.css';
import Dropdown from '../Dropdown/Dropdown';
import TextArea from '../TextArea';

const CardDrop = ({ obs, setObs, setSelect, onChangeInputFile, selectedFile, selectedFileName }) => {
    const list = [
        {
            id: 1,
            name: 'Prouni'
        },
        {
            id: 2,
            name: 'Colaborador'
        },
        {
            id: 3,
            name: 'Mantenedora'
        }
    ];

    const handleObsChange = (e) => {
        setObs(e.target.value);
    };

    return (
        <>
            <div className="card-drop">
                <h2 className='bag-type'>Selecione o Tipo da Bolsa:</h2>
                <Dropdown
                    id='dropdown-handbag'
                    name='dropdown-handbag'
                    itens={list}
                    label=''
                    onChange={setSelect}
                />
                <TextArea
                    id=''
                    text='Descreva o porquê da sua solicitação:'
                    value={obs}
                    onChange={handleObsChange}
                />
                <label className="file-upload">
                    <input
                        type="file"
                        accept=".pdf,.doc,.png,.jpg"
                        onChange={onChangeInputFile}
                    />
                    {selectedFile ? (
                        <div className="file-info">
                            <p>{selectedFileName}</p>
                        </div>
                    ) : (
                        <p>Upload de arquivo (Coloque aqui se tiver)</p>
                    )}
                </label>
            </div>
        </>
    );
};

export default CardDrop;