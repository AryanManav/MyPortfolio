import React from 'react'
import "./Resume.css"

import expressjs from "./expressjs.png"
import dsa from "./dsa.png"

const Resume = () => {
  return (
    <div id="resume" className="resume">
        <div className="vert">RESUME</div>

        <div className="bigcont">

          <div className="skills">
            <h2>Skills</h2>
            <div className="skillInfo">
              {[
                { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "SCSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
                { name: "ReactJS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "NodeJS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "ExpressJS", img: expressjs },
                { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                { name: "C", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
                { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "OOPs", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
                { name: "DSA", img: dsa }
              ].map((skill, index) => (
                <div className="sk" key={index}>
                  <p>{skill.name}</p>
                  <img src={skill.img} alt={skill.name} />
                </div>
              ))}
            </div>

          </div>

          <div className="projects">
            <h2>Projects</h2>
            <div className="projectinfo">
              <div className="project-card">
                <h3>Portfolio Website</h3>
                <p>A personal website to showcase my projects and skills.</p>
                <a href="YOUR_PORTFOLIO_LINK" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>

              <div className="project-card">
                <h3>Code Editor Website</h3>
                <p>A code editor built using the MERN stack with live collaboration.</p>
                <a href="YOUR_CODE_EDITOR_LINK" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>

          </div>

          <div className="education">
            <h2>Education</h2>
            <div className="educationinfo">
              <div className="education-card">
                <h3>NIT Delhi</h3>
                <p>B.Tech in Electrical Engineering</p>
                <p><strong>CGPA:</strong> 7.77</p>
              </div>

              <div className="education-card">
                <h3>KVSPG</h3>
                <p>CBSE Class XII</p>
                <p><strong>Percentage:</strong> 90.8%</p>
              </div>
            </div>

          </div>


          <div className="container6">
            <div className="certifications">
              <h2>Certifications & Achievements</h2>
              <div className="certi">
                <ul className="set1">
                  <li>• Certified Full-Stack Developer – Intellipaat/Udemy</li>
                  <li>• Leetcode: 300+ DSA Problems Solved (Java)</li>
                </ul>
                <ul className="set2">
                  <li>• Hackathon Participant (CodeChef, Codeforces)</li>
                  <li>• Google Cloud Study Jam – Hands-on experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div >
      </div >
  )
}

export default Resume
