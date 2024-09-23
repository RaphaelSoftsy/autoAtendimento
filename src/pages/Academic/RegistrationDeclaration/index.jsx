import axios from 'axios';
import QRCode from 'qrcode.react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import CardDeclaration from '../../../components/CardDeclaration';
import { useRA } from '../../../contexts/RAContext';
import { url_base_hospedada } from '../../../services/url_base';

const RegistrationDeclaration = () => {
    const navigate = useNavigate();
    const [registrationDeclaration, setRegistrationDeclaration] = useState('');
    const { currentRA } = useRA();
    const MySwal = withReactContent(Swal);
    const ra = localStorage.getItem('aluno-ra')
    const encodedRa = btoa(ra);

    async function getDeclaration() {
        try {
            const response = await axios.get(`${url_base_hospedada}/api-documento/documentos/matricula?aluno=${ra}`);
            const data = response.data;

            if (data.length > 0) {
                setRegistrationDeclaration(data[0]);
            } else {
                setRegistrationDeclaration([]);
            }
        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Não foi possível buscar os documentos da matrícula. Tente novamente mais tarde.',
                confirmButtonText: 'OK'
            });
        } finally {
            MySwal.close();
        }
    }

    useEffect(() => {
        getDeclaration();
    }, [ra]);

    const generateDeclarationHTML = (data) => {
        return (
            <>
                <p><strong>Reconhecido pela Portaria nº 178, de 06/05/2024, publicada no D.O.U de 07/05/2024, pag. 32</strong></p>
                <p style={{ textAlign: 'justify' }}>
                    Declaro, para fins de direito e todos os efeitos, que {data.nome} - RA {data.aluno}, RG nº {data.rg},
                    é aluno(a) regularmente matriculado(a) no curso {data.curso}, no 2º semestre civil de {data.semestreAno} e 
                    duração de {data.duracaoExten} ({data.duracao}) semestres letivos.
                </p>
                <div style={{ textAlign: 'center' }}>
                    <QRCode value={`https://sumare.edu.br/confirma-matricula?id=${encodedRa}`} size={128} />
                </div>
                <p>Emitido : {data.dia} de {data.mes} de {data.ano}</p>
                <p>Documento com validade de 30 dias a partir da data de emissão.</p>
                <p>Este documento foi gerado eletronicamente e pode ser validado no site da instituição.</p>
            </>
        );
    };

    const buttons = [
        {
            text: "Imprimir Declaração",
            backgroundColor: "var(--primary-light-blue)",
            color: '#fff',
            onClick: () => {
                window.location.href = `https://sumare.edu.br/declaracao-matricula.html?id=${encodedRa}`;
            }
        },
        {
            text: "Relatar Problema",
            backgroundColor: "var(--secondary-light-red)",
            color: '#fff',
            onClick: () => navigate("abrir-demanda")
        },
        {
            text: "Voltar para Serviços",
            backgroundColor: "var(--secondary-light-yellow)",
            color: '#fff',
            onClick: () => navigate("/academico")
        }
    ];

    return (
        <main className='send-declaration-financial'>
            {registrationDeclaration ? (
                <CardDeclaration buttonProps={buttons} declarationText={generateDeclarationHTML(registrationDeclaration)} />
            ) : (
                <p>Carregando...</p>
            )}
        </main>
    );
}

export default RegistrationDeclaration;
