import React from 'react';
import './Contact.css';

const Contact = ({ heading, text }) => (
  <section id="contact">
    <div className="pixel-section-title">{heading}</div>
    <div className="contact-text">{text}</div>
  </section>
);

export default Contact;
