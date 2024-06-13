import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CardDeclaration from '../../../components/CardDeclaration';
import url_base from '../../../services/url_base';

const RegistrationDeclaration = () => {
    const navegation = useNavigate();
    const [declaration, setDeclaration] = useState('');
    const aluno = localStorage.getItem("aluno-ra");

    async function getDeclaration() {
        try {
            const response = await axios.get(`${url_base}/api-aluno/financeiro/declaracao-anual?ra=${aluno}`);
            const data = response.data.descricao;
            console.log('Dados da declaração:', data);
            setDeclaration(data);
        } catch (error) {
            console.error('Erro ao buscar declaração:', error);
        }
    }

    useEffect(() => {
        getDeclaration();
    }, [aluno]);

    const buttons = [
        {
            text: "Imprimir Declaração",
            backgroundColor: "var(--primary-light-blue)",
            color: '#fff',
            onClick: () => navegation("/")
        },
        {
            text: "Voltar para Serviços",
            backgroundColor: "var(--secondary-light-yellow)",
            color: '#fff',
            onClick: () => navegation("/")
        },
        {
            text: "Abrir Demanda",
            backgroundColor: "var(--secondary-light-red)",
            color: '#fff',
            onClick: () => navegation("/")
        },
        {
            text: "Finalizar Sessão",
            backgroundColor: "var(--secondary-light-red)",
            color: '#fff',
            onClick: () => navegation("/")
        }
    ];

    return (
        <main className='send-declaration-financial'>
            {declaration ? (
                <CardDeclaration buttonProps={buttons} declarationText={declaration} />
            ) : (
                <p>Carregando...</p>
            )}
        </main>
    );
}

export default RegistrationDeclaration;

