import React from 'react';
import './Hero.css';

const Hero = ({ title, subtitle, description, buttonText }) => (
  <section className="hero-section" id="home">
    <div className="hero-bg">
      <div className="city-skyline" />
    </div>
    <div className="hero-content">
      <div className="pixel-title">{title}</div>
      <div className="pixel-subtitle">{subtitle}</div>
      <p>{description}</p>
      <button className="btn">{buttonText}</button>
    </div>
  </section>
);

export default Hero;
