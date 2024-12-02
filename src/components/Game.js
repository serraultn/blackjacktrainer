import React, { useState, useEffect } from 'react';
import scenarios from '../data/scenarios';
import Card from './Card';

function Game() {
    const [currentScenario, setCurrentScenario] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [userChoice, setUserChoice] = useState('');
    const [progress, setProgress] = useState({ correct: 0, total: 0 });

    useEffect(() => {
        generateRandomScenario();
    }, []);

    const generateRandomScenario = () => {
        const randomIndex = Math.floor(Math.random() * scenarios.length);
        setCurrentScenario(scenarios[randomIndex]);
        setShowResult(false);
        setUserChoice('');
    };

    const handleChoice = (choice) => {
        setUserChoice(choice);
        setShowResult(true);

        setProgress((prev) => ({
            correct: prev.correct + (choice === currentScenario.action ? 1 : 0),
            total: prev.total + 1,
        }));
    };

    return (
        <div className="game">
            <div className="scenario">
                <h2>Dealer's Up Card:</h2>
                <Card value={currentScenario.dealerCard} />
                <h2>Your Hand:</h2>
                <div className="player-cards">
                    {currentScenario.playerCards &&
                        currentScenario.playerCards.map((card, index) => (
                            <Card key={index} value={card} />
                        ))}
                </div>
            </div>

            {!showResult ? (
                <div className="choices">
                    <button onClick={() => handleChoice('H')}>Hit</button>
                    <button onClick={() => handleChoice('S')}>Stand</button>
                    <button onClick={() => handleChoice('D')}>Double</button>
                    <button onClick={() => handleChoice('SP')}>Split</button>
                </div>
            ) : (
                <div className="result">
                    <p>
                        You chose: <strong>{userChoice}</strong>
                    </p>
                    <p>
                        Correct action: <strong>{currentScenario.action}</strong>
                    </p>
                    {userChoice === currentScenario.action ? (
                        <p className="correct">Correct!</p>
                    ) : (
                        <p className="incorrect">Incorrect.</p>
                    )}
                    <button onClick={generateRandomScenario}>Next Scenario</button>
                </div>
            )}

            <div className="progress">
                <p>
                    Progress: {progress.correct} correct out of {progress.total} attempts
                </p>
            </div>
        </div>
    );
}

export default Game;
