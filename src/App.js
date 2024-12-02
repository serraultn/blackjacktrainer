import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Game from './components/Game';
import StrategyChart from './components/StrategyChart';
import Header from './components/Header';

function App() {
    return (
        <Router basename="/blackjacktrainer">
            <Header />
            <Routes>
                <Route path="/" element={<Game />} />
                <Route path="/strategy-chart" element={<StrategyChart />} />
                <Route path="*" element={<Navigate to="/" />} /> {/* Redirect to Game */}
            </Routes>
        </Router>
    );
}

export default App;
