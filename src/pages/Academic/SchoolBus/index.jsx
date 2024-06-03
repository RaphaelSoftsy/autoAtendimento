import { useState } from "react";
import ListSubjectsCheck from "../../../components/ListSubjectsCheck";
import Footer from "../../../components/Footer";
import './schoolBus.css'


const SchoolBus = () => {
    const [selectedSubjects, setSelectedSubjects] = useState([]);

    const list = [
        {
            id: 1,
            name: 'Bilhete Unico'
        }
    ];

    const handleSubjectSelect = (id) => {
        setSelectedSubjects(prevSelected => {
            if (prevSelected.includes(id)) {
                return prevSelected.filter(subjectId => subjectId !== id);
            } else {
                return [...prevSelected, id];
            }
        });
    };
    
    return (
        <main className='main-perform-accord'>
            <div className="school-bus">
                <div className='list-subjects'>
                    <h1 className='title'>Qual deseja solicitar?</h1>
                    <ListSubjectsCheck
                        items={list}
                        selectedSubjects={selectedSubjects}
                        onSelect={handleSubjectSelect} />
                </div>
            </div>
            <div className='footer-container'>
                <Footer text="Avançar" route="/"/>
            </div>
        </main>

    );

};

export default SchoolBus;