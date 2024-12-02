import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <h1>Blackjack Strategy Trainer</h1>
            <nav>
                <Link to="/">Game</Link>
                <Link to="/strategy-chart">Strategy Chart</Link>
            </nav>
        </header>
    );
}

export default Header;
