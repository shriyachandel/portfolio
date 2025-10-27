import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./css/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [offset, setOffset] = useState(-120);

  useEffect(() => {
    const updateOffset = () => {
      if (window.innerWidth <= 768) {
        setOffset(-90);
      } else {
        setOffset(-120);
      }
    };
    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  // 👉 Function: Close menu after clicking a link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/shrii.jpeg" alt="Shriya Chandel" />
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={offset}
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={800}
              offset={offset}
              onClick={handleLinkClick}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={offset}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
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
