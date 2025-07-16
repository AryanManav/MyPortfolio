import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setActiveLink(section);
    setMenuOpen(false); // Close menu on click (mobile)
  };

  return (
    <nav className="nav">
      <div className="container">
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          &#9776;
        </div>

        <ul className={menuOpen ? "open" : ""}>
          <li>
            <a
              href="#home"
              className={activeLink === "#home" ? "active" : ""}
              onClick={() => handleNavClick("#home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#aboutsect"
              className={activeLink === "#aboutsect" ? "active" : ""}
              onClick={() => handleNavClick("#aboutsect")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={activeLink === "#experience" ? "active" : ""}
              onClick={() => handleNavClick("#experience")}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className={activeLink === "#resume" ? "active" : ""}
              onClick={() => handleNavClick("#resume")}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeLink === "#contact" ? "active" : ""}
              onClick={() => handleNavClick("#contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
