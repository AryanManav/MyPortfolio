import React from "react";
import "./PortfolioSections.css";

const skills = [
  { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "SCSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { name: "ReactJS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "NodeJS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "ExpressJS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "OOPs", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "DSA", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg" }
];

import chatImg from "../assets/chatimg.png";
import editorImg from "../assets/chatimg.png";
import portfolioImg from "../assets/chatimg.png";

const projects = [
  {
    name: "Chat Platform",
    desc: "Built a real-time client-agent chat app simulating support systems. Features include agent dashboards, and live messaging.",
    stack: ["React.js", "Socket.io", "Express.js"],
    image: chatImg,
  },
  {
    name: "Code Editor",
    desc: "A collaborative code editor with Monaco integration, supporting syntax highlighting and real-time execution for multiple languages.",
    stack: ["MERN", "Monaco Editor", "Compilex"],
    image: editorImg,
  },
  {
    name: "Portfolio Website",
    desc: "A modern portfolio built with React and deployed on Vercel, showcasing professional projects, skills, and contact information.",
    stack: ["React", "Tailwind CSS", "Vercel"],
    image: portfolioImg,
  },
];

const PortfolioSections = () => {
  return (
    <div className="portfolio-wrapper">
      <section className="tools-section fade-in">
        <h2 className="section-title slide-up">Tools & Technologies</h2>
        <p className="section-subtitle slide-up-delay">
          My technical playground, constantly evolving and expanding.
        </p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item zoom-in">
              <img src={skill.img} alt={skill.name} className="skill-logo" />
              <span className="skill-text">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="projects-section fade-in">
        <h2 className="section-title slide-up">My Projects</h2>
        <p className="section-subtitle slide-up-delay">
          A selection of my work, from deep learning models to full-stack applications.
        </p>
        <div className="projects-grid">
          {projects.map((proj) => (
            <div className="project-card pop-in" key={proj.name}>
              <div className="project-media">
                {proj.image ? (
                  <img src={proj.image} alt={`${proj.name} UI screenshot`} />
                ) : (
                  <div className="project-media-placeholder">Add screenshot</div>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{proj.name}</h3>
                <p className="project-desc">{proj.desc}</p>
                <div className="tech-stack">
                  <span className="stack-label">Tech Stack:</span>
                  {proj.stack.map((tech) => (
                    <span key={tech} className="stack-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioSections;
