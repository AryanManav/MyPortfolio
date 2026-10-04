import { Typewriter } from "react-simple-typewriter";
import { PiArrowUpRight, PiGithubLogo, PiLinkedinLogo, PiMapPin } from "react-icons/pi";
import { PROFILE, ROLES } from "../data.js";
import portrait from "../assets/aryan.webp";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-location reveal">
            <PiMapPin aria-hidden="true" /> {PROFILE.location}
          </p>

          <h1 className="hero-name reveal" style={{ "--delay": "80ms" }}>
            Aryan <span>Manav</span>
          </h1>

          <p className="hero-role reveal" style={{ "--delay": "160ms" }}>
            <span className="visually-hidden">{ROLES.join(", ")}</span>
            <span aria-hidden="true">
              <Typewriter words={ROLES} loop={0} cursor cursorStyle="_" typeSpeed={65} deleteSpeed={40} delaySpeed={1600} />
            </span>
          </p>

          <p className="hero-lead reveal" style={{ "--delay": "240ms" }}>
            Electrical Engineering student at NIT Delhi who builds fast, accessible React interfaces and the Node
            backends behind them.
          </p>

          <div className="hero-actions reveal" style={{ "--delay": "320ms" }}>
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Resume <PiArrowUpRight aria-hidden="true" />
            </a>
            <div className="hero-social">
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub">
                <PiGithubLogo />
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn">
                <PiLinkedinLogo />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal" style={{ "--delay": "200ms" }}>
          <div className="hero-ring" aria-hidden="true" />
          <img src={portrait} alt="Portrait of Aryan Manav" width="489" height="1000" fetchpriority="high" />
        </div>
      </div>
    </section>
  );
};

export default Home;
