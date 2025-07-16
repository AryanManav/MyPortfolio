import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact d-flex justify-content-center align-items-center">
      <div className="contact-card text-center">
        <h2 className="contact-title">
          Get In <span className="highlight">Touch</span>
        </h2>
        <p className="contact-subtitle">
          Have a project in mind or just want to say hello? Let’s connect.
        </p>

        <div className="contact-details-row">
          <div className="contact-line">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:aryanmanav6@gmail.com">aryanmanav6@gmail.com</a>
          </div>
          <div className="contact-line">
            <FaPhone className="contact-icon" />
            <a href="tel:+917011874366">+91 7011874366</a>
          </div>
        </div>

        <hr className="contact-divider" />

        <div className="social-icons">
          <a href="https://linkedin.com/in/aryanmanav" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/AryanManav" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
