import React from 'react';
import './About.css';
import cv from './Aryan-CV.pdf';

const About = () => {
  return (
    <section id="aboutsect" className="aboutsect">
      <div className="container">

        {/* Top: About Me full width */}
        <div className="row mb-5">
          <div className="about col-12 text-center">
            <h2>About Me</h2>
            <p className="biginfo">
              I'm a B.Tech student in Electrical Engineering at NIT Delhi with a passion for MERN stack development,
              problem-solving, and building clean, scalable web applications. I thrive on writing efficient code and crafting smooth UI/UX experiences.
            </p>
            <p className="smallinfo">New Delhi, Delhi</p>

            <a href={cv} download="Aryan_Manav_CV.pdf" className="cv-button mt-4">
              Download CV
            </a>
          </div>
        </div>

        {/* Bottom: About Cards */}
        <div className="row justify-content-center about-cards-row">

          <div className="col-md-4 col-sm-6 mb-4">
            <div className="about-card text-center">
              <h4 className="card-title">NIT Delhi</h4>
              <p className="card-subtitle">B.Tech in Electrical Engineering</p>
              <p className="card-meta">GPA: 7.88</p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 mb-4">
            <div className="about-card text-center">
              <h4 className="card-title">Coding Achievements</h4>
              <p className="card-subtitle">120+ LeetCode, GFG, TakeUForward</p>
              <p className="card-meta">Hackathons & Open Source</p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 mb-4">
            <div className="about-card text-center">
              <h4 className="card-title">Tech Stack</h4>
              <p className="card-subtitle">MERN, SCSS, Bootstrap</p>
              <p className="card-meta">Socket.io, Git, Vercel</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
