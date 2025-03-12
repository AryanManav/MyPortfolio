import React from 'react';
import "./About.css";
import aryan from "./aryan.jpg";
import cv from "./Aryan-CV.pdf"; // Ensure you have the CV file in the correct path

const About = () => {
  return (
    <div id="aboutsect" className="aboutsect">
      <div className="aboutme">
        <div className="myphoto">
          <img src={aryan} alt="Aryan Manav" className="profile-imag" />
        </div>
        <div className="about">
          <h2>About Me</h2>
          <p className="biginfo">
            Motivated B.Tech student in Electrical Engineering with experience in MERN stack development, DSA, and problem-solving.
            Passionate about scalable web applications and efficient coding.
          </p>
          <p className="smallinfo">Delhi, India</p>
          <div className="contact-details">
            <p><strong>Email:</strong> <a href="aryanmanav6@gmail.com">aryanmanav6@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+7011874366">+91 7011874366</a></p>
          </div>
          <a href={cv} download="Aryan_Manav_CV.pdf" className="cv-button">Download CV</a>
        </div>
      </div>
    </div>
  );
};

export default About;
