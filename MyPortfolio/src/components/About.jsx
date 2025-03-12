import React from 'react'
import "./About.css"
import aryan from "./aryan.jpg"


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

          </div>

        </div>
      </div>
  )
}

export default About
