import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Logo" className="logo-icon" />
            <div className="logo-text">
              <span className="logo-title">Breast Cancer Detection</span>
              <span className="logo-subtitle">FAST-NU</span>
            </div>
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/project" 
              className={`nav-link ${isActive('/project') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Project
            </Link>
            <Link 
              to="/demo" 
              className={`nav-link ${isActive('/demo') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </Link>
            <Link 
              to="/team" 
              className={`nav-link ${isActive('/team') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
          </nav>

          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
