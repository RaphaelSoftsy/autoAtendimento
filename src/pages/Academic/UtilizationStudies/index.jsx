import './utilizationStudies.css'
import ListSubjects from '../../../components/ListSubjects';

const UtilizationStudies = () => {
    const list = [
        {
            id: 1,
            name: 'Aproveitar disciplinas cursadas na Sumare',
            route: '/academico/expedicao-de-documentos/aproveitamento-de-estudos/aproveitamento-disciplinas-cursadas-na-sumare'
        },
        {
            id: 2,
            name: 'Aproveitar disciplinas cursadas em outra(s) faculdade(s) e na Sumaré',
            route: '/academico/expedicao-de-documentos/aproveitamento-de-estudos/aproveitamento-disciplinas-cursadas-em-outras-faculdades-e-na-sumare'
        },
        {
            id: 3,
            name: 'Aproveitar disciplinas cursadas em outra(s) faculdade(s)',
            route: '/academico/expedicao-de-documentos/aproveitamento-de-estudos/aproveitamento-disciplinas-cursadas-em-outras-faculdades'
        }    
    ]

    return (
        <div className="utilization-studies">
            <div className='list-subjects'>
                <h1 className='title'>Sobre qual assunto deseja falar?</h1>
                <ListSubjects itens={list} />
            </div>
        </div>
    )
}

export default UtilizationStudies