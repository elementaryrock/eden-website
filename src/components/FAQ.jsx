import React from 'react';
import './FAQ.css';

const FAQ = ({ heading, text }) => (
  <section id="faq">
    <div className="pixel-section-title">{heading}</div>
    <div className="faq-text">{text}</div>
  </section>
);

export default FAQ;
