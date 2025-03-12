import { useEffect, useRef, useState } from "react";
import "./App.css";
import aryan from "./aryan.jpg"
import aryanbw from "./aryanbw.jpg"
import expressjs from "./expressjs.png"
import dsa from "./dsa.png"
import Navbar from "./components/Navbar.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  const cursorRef = useRef(null);
  const position = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const requestRef = useRef(null);
  const [expandedSection, setExpandedSection] = useState(null);

  // Handle section click
  const handleSectionClick = (section) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  // Smooth cursor movement
  useEffect(() => {
    const moveCursor = (e) => {
      position.current = { x: e.pageX, y: e.pageY };
    };

    const updateCursor = () => {
      target.current.x += (position.current.x - target.current.x) * 0.1;
      target.current.y += (position.current.y - target.current.y) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(updateCursor);
    };

    window.addEventListener("mousemove", moveCursor);
    requestRef.current = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor"></div>

      <Navbar />

      <div id="home" className="home">
        <div className="container1">
          <div className="left">
            <div className="aryan">Aryan</div>
            <div className="manav">Manav</div>
          </div>
          <div className="right">
            <img src={aryanbw} alt="Aryan Manav" className="profile-image" />
          </div>
        </div>
      </div>

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

          </div>

        </div>
      </div>

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

      <Contact/>

      <Footer/>
    </>
  );
}

export default App;