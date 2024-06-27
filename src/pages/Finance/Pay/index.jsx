import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import './pay.css';
import animationData from '../../../animation/done.json';
import DefaultButton from '../../../components/DefaultButton';
import { useNavigate } from 'react-router-dom';

const Pay = () => {

    /*precisa de um botao para enviar para o email ou fazer a logica automatica*/

    const navegation = useNavigate()

    const [animationState, setAnimationState] = useState({
        isStopped: true,
        isPaused: false,
    });

    useEffect(() => {
        setAnimationState({ ...animationState, isStopped: false });
    }, []);

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <main className='pay'>
            <div className="card-pay">
                <div className='animation'>
                    <Lottie
                        options={defaultOptions}
                        height={250}
                        width={250}
                        isStopped={animationState.isStopped}
                        isPaused={animationState.isPaused}
                    />
                </div>
                <div className="buttons">
                    <DefaultButton
                        text="Ir para Início"
                        backgroundColor="var(--primary-light-blue)"
                        onClick={() => navegation("/home")}
                    />
                    <DefaultButton
                        text="Finalizar Sessão"
                        backgroundColor="var(--secondary-light-red)"
                        onClick={() => navegation("/financeiro")}
                    />
                </div>
            </div>
        </main>
    );
};

export default Pay;
