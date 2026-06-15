import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoImage from '../assets/my-logo.png'; // Importing your new logo

const Navbar = () => {
  return (
    <nav className="portfolio-nav">
      <div className="container nav-wrapper">
        <Link to="/" className="nav-logo">
          <img src={logoImage} alt="Maira Tahir Logo" className="logo-img" />
        </Link>
        
        <div className="nav-links">
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>about</NavLink>
          <NavLink to="/featured" className={({ isActive }) => isActive ? 'active-link' : ''}>featured</NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active-link' : ''}>portfolio</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'active-link' : ''}>blog</NavLink>
        </div>
        
        <div className="nav-socials">
          <a href="mailto:mairatahir3@gmail.com" target="_blank" rel="noopener noreferrer">email</a>
          <a href="https://twitter.com/mairatahir" target="_blank" rel="noopener noreferrer">twitter</a>
          <a href="https://linkedin.com/in/mairatahir" target="_blank" rel="noopener noreferrer">linkedin</a>
          <a href="https://github.com/maira32" target="_blank" rel="noopener noreferrer">github</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;