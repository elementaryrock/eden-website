import React from 'react';
import './Navbar.css';

const Navbar = ({ items }) => (
  <nav className="navbar">
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>
          <a href={item.link}>{item.label}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
