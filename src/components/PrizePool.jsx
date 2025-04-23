import React from 'react';
import './PrizePool.css';

const PrizePool = ({ pool }) => (
  <section id="prizepool">
    <div className="pixel-section-title">PRIZE POOL</div>
    <div className="prizepool-row">
      {pool.map((prize, idx) => (
        <div className="pixel-box" key={idx}>
          <div className="arrow">→</div>
          <div className="prize-title">{prize.title}</div>
          <div className="prize-desc">{prize.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default PrizePool;
