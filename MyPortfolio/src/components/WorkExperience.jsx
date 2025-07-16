import React from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="experience-heading">Work Experience</h2>

        <div className="experience-item">
          <h3 className="role">UI/UX & Web Design Intern</h3>
          <span className="company">Acro Engineering Company</span>
          <span className="duration">Jun 2025 – Present</span>
          <ul className="details">
            <li>Designed scalable UI using Bootstrap 5 and Figma.</li>
            <li>Developed 20+ reusable React components.</li>
            <li>Participated in Agile sprints and iterative testing.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3 className="role">SCSS Framework & CSS Migration</h3>
          <span className="company">DWA Commerce</span>
          <span className="duration">Jan 2024 – Mar 2024</span>
          <ul className="details">
            <li>Built a modular SCSS framework for Limitless CSS 4.0.</li>
            <li>Improved responsiveness & cross-browser compatibility.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
