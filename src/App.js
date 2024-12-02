import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './components/Game';
import StrategyChart from './components/StrategyChart';
import Header from './components/Header';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Game />} />
                <Route path="/strategy-chart" element={<StrategyChart />} />
            </Routes>
        </Router>
    );
}

export default App;