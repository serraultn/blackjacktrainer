import React from 'react';

function StrategyChart() {
    return (
        <div className="strategy-chart">
            <h2>Basic Strategy Chart</h2>
            <img
                src={`${process.env.PUBLIC_URL}/strategy-page1.png`}
                alt="Strategy Page 1"
                style={{ maxWidth: '100%', marginBottom: '20px' }}
            />
            <img
                src={`${process.env.PUBLIC_URL}/strategy-page2.png`}
                alt="Strategy Page 2"
                style={{ maxWidth: '100%', marginBottom: '20px' }}
            />
            <img
                src={`${process.env.PUBLIC_URL}/strategy-page3.png`}
                alt="Strategy Page 3"
                style={{ maxWidth: '100%' }}
            />
        </div>
    );
}

export default StrategyChart;
