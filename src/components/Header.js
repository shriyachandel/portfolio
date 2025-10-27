import React, { useState } from "react";
import { Link } from "react-scroll";
import "./css/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src="/shrii.jpeg" alt="Shriya Chandel" />
       
        </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
           <li><Link to="about" smooth={true} duration={500}>About</Link></li>
           <li><Link to="projects" smooth={true} duration={800}>Projects</Link></li>
           <li><Link to="contact" smooth={true} duration={800}>Contact</Link></li>
        </ul>
      </nav>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
