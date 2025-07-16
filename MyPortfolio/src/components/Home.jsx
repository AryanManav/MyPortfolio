import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";
import aryanbw from "../assets/aryan.png";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-md-5">
            <h1 className="aryan">Aryan <span>Manav</span></h1>

            <div className="profession">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "UI/UX Designer",
                  "MERN Stack Developer",
                  "Tech Enthusiast",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="col-md-7 text-center">
            <img
              src={aryanbw}
              alt="Aryan Manav"
              className="profile-image img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
