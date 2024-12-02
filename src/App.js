import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './components/Game';
import StrategyChart from './components/StrategyChart';
import Header from './components/Header';
import './App.css'; // Optional: if you have App.css for styling

function App() {
    return (
        <Router basename="/blackjacktrainer">
            <Header />
            <Routes>
                <Route path="/" element={<Game />} />
                <Route path="/strategy-chart" element={<StrategyChart />} />
            </Routes>
        </Router>
    );
}

export default App;
