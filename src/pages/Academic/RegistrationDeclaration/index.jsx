import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CardDeclaration from '../../../components/CardDeclaration';
import { url_base_hospedada, url_base_local } from '../../../services/url_base';

const RegistrationDeclaration = () => {
    const navigate = useNavigate();
    const [declaration, setDeclaration] = useState('');
    //const aluno = localStorage.getItem("aluno-ra");
const aluno = "2471074"

    async function getDeclaration() {
        try {
            const response = await axios.get(`https://api-academico.sumare.edu.br/api-documento/documentos/matricula?aluno=2471074`);
            const data = response.data[0];
            console.log('Dados da declaração:', data);
            setDeclaration(data);
        } catch (error) {
            console.error('Erro ao buscar declaração:', error);
        }
    }

    useEffect(() => {
        getDeclaration();
    }, [aluno]);

    const generateDeclarationHTML = (data) => {
        return `
            <p><strong>Reconhecido pela Portaria nº 178, de 06/05/2024, publicada no D.O.U de 07/05/2024, pag. 32</strong></p>
            <p>Declaro, para fins de direito e todos os efeitos, que ${data.nome} - RA ${data.aluno}, RG nº ${data.rg}, é aluno(a) regularmente matriculado(a) no curso ${data.curso}, no 2º semestre civil de ${data.semestreAno} e duração de ${data.duracaoExten} (${data.duracao}) semestres letivos.</p>
            <p><img src="" alt="QR Code" /></p>
            <p>São Paulo, ${data.dia} de ${data.mes} de ${data.ano}</p>
            <p>Documento com validade de 30 dias a partir da data de emissão.</p>
            <p>Este documento foi gerado eletronicamente e pode ser validado no site da instituição.</p>
        `;
    };

    const buttons = [
        {
            text: "Voltar para Serviços",
            backgroundColor: "var(--secondary-light-yellow)",
            color: '#fff',
            onClick: () => navigate("/")
        },
        {
            text: "Relatar Problema",
            backgroundColor: "var(--secondary-light-red)",
            color: '#fff',
            onClick: () => navigate("/")
        },
        {
            text: "Finalizar Sessão",
            backgroundColor: "var(--secondary-light-red)",
            color: '#fff',
            onClick: () => navigate("/")
        }
    ];

    return (
        <main className='send-declaration-financial'>
            {declaration ? (
                <CardDeclaration buttonProps={buttons} declarationText={generateDeclarationHTML(declaration)} />
            ) : (
                <p>Carregando...</p>
            )}
        </main>
    );
}

export default RegistrationDeclaration;
