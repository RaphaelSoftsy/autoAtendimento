import ListSubjects from '../../../components/ListSubjects';
import './subjectAva.css';

const SubjectFinance = () => {
    const list = [
        {
            id: 1,
            name: 'Problemas com Acesso ao AVA',
            route: '/ava/problemas-com-acesso-ao-ava'
        },
        {
            id: 2,
            name: 'Problemas com Acesso as disciplinas',
            route: '/ava/problemas-com-acesso-as-disciplinas'
        },
        {
            id: 3,
            name: 'Problemas na Atividade',
            route: '/ava/problemas-na-atividade'
        },
        {
            id: 4,
            name: 'Problemas nas avaliações',
            route: '/ava/problemas-nas-avaliacoes'
        },
        {
            id: 5,
            name: 'Tutoria',
            route: '/ava/tutoria'
        }
    ]

    return (
        <main className="ava">
            <div className='list-subjects'>
                <h1 className='title'>Sobre qual assunto deseja falar?</h1>
                <ListSubjects itens={list} />
            </div>
        </main>
    )
}

export default SubjectFinance