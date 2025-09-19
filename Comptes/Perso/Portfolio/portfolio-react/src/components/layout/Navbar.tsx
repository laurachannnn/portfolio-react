import React, { useState } from "react";
import "./Navbar.css"; // si tu veux un style dédié

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
  <nav className="navbar">
        <div className="navbar-container">
          <a href="#" className="navbar-logo">Laura CHANIOLLEAU</a>
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={menuOpen ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="#about" className="nav-link">A propos de moi</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">Mes compétences</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">Mes projets</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;