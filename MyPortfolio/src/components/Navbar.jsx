import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home"); // Default active section

  return (
    <nav className="nav">
      <ul>
        <li>
          <a
            href="#home"
            className={activeLink === "#home" ? "active" : ""}
            onClick={() => setActiveLink("#home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#aboutsect"
            className={activeLink === "#aboutsect" ? "active" : ""}
            onClick={() => setActiveLink("#aboutsect")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#resume"
            className={activeLink === "#resume" ? "active" : ""}
            onClick={() => setActiveLink("#resume")}
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeLink === "#contact" ? "active" : ""}
            onClick={() => setActiveLink("#contact")}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
