import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure this path is correct

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${menuOpen ? 'sticky' : ''}`}>
      <Link to="/" className="logo">
        <img src="/assets/images/CL Media logo.png" alt="CL Media" />
      </Link>

      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? '✖' : '☰'}
      </button>

      <nav className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <Link to="/" className="active_nav">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/explorations">Explorations</Link>
        <Link to="/research">Research</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};
