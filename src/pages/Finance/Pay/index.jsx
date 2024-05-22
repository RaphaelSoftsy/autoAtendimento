import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import './pay.css';
import animationData from '../../../animation/done.json';
import DefaultButton from '../../../components/DefaultButton';

const Pay = () => {
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
                        text="Ir para Inicio"
                        backgroundColor="#019ED3"
                        onClick={() => navegation("/financeiro")}
                    />
                    <DefaultButton
                        text="Finalizar Sessão"
                        backgroundColor="#DC143C"
                        onClick={() => navegation("/")}
                    />
                </div>
            </div>
        </main>
    );
};

export default Pay;
