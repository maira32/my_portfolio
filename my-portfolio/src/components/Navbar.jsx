import { NavLink, Link } from 'react-router-dom';
import logoImage from '../assets/logo.png'; // Importing your new logo

const Navbar = () => {
  return (
    <nav className="portfolio-nav">
      <div className="container nav-wrapper">
        <Link to="/" className="nav-logo">
          <img src={logoImage} alt="Maira Tahir Logo" className="logo-img" />
        </Link>
        
        <div className="nav-links">
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>About</NavLink>
          <NavLink to="/featured" className={({ isActive }) => isActive ? 'active-link' : ''}>Featured</NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active-link' : ''}>Portfolio</NavLink>
        </div>
        
        <div className="nav-socials">
          <a href="mailto:mairatahir3@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
          <a href="https://www.linkedin.com/in/maira-tahir-380a38308" target="_blank" rel="noopener noreferrer">Linkedin</a>
          <a href="https://github.com/maira32" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;