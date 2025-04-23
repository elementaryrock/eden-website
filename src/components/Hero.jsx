import React from 'react';
import './Hero.css';

const Hero = ({ title, subtitle, heroImage, description, buttonText }) => (
  <section className="hero-section" id="home">
    <div className="hero-bg">
      <div className="city-skyline" />
    </div>
    <div className="hero-content">
      <div className="pixel-title">{title}</div>
      <div className="pixel-subtitle">{subtitle}</div>
      {heroImage && heroImage.src && (
        <img 
          src={heroImage.src} 
          alt={heroImage.alt || "Hero section image"} 
          style={{ maxWidth: '320px', width: '90%', margin: '16px auto', display: 'block', borderRadius: '12px' }}
        />
      )}
      <p>{description}</p>
      <button className="btn">{buttonText}</button>
    </div>
  </section>
);

export default Hero;
