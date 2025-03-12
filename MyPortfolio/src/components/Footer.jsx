import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">

          {/* Left Section: Navigation Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#aboutsect">About</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Right Section: Contact Info */}
          <div className="footer-contact">
            <h3>Contact</h3>
            <p><a href="mailto:aryanmanav6@gmail.com">aryanmanav6@gmail.com</a></p>
            <p><a href="tel:+917011874366">+91-7011874366</a></p>

            <div className="social-icons">
              <a href="https://www.linkedin.com/in/aryanmanav/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/AryanManav" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="footer-bottom">
          <p>© 2025 Aryan Manav. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
