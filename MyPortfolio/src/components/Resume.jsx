import { PiArrowUpRight } from "react-icons/pi";
import { ACHIEVEMENTS, EDUCATION, PROFILE } from "../data.js";
import "./Resume.css";

const Resume = () => {
  return (
    <section id="resume" className="section">
      <div className="container resume-grid">
        <div>
          <header className="section-head reveal">
            <span className="eyebrow">05 · Education</span>
            <h2 className="section-title">Education</h2>
          </header>

          <ul className="edu-list">
            {EDUCATION.map((edu, i) => (
              <li className="edu reveal" key={edu.school} style={{ "--delay": `${i * 80}ms` }}>
                <div>
                  <h3 className="edu-school">{edu.school}</h3>
                  <p className="edu-degree">{edu.degree}</p>
                  <p className="edu-period">{edu.period} · {edu.location}</p>
                </div>
                <span className="edu-score">{edu.score}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <header className="section-head reveal">
            <span className="eyebrow">06 · Achievements</span>
            <h2 className="section-title">Achievements</h2>
          </header>

          <ul className="achievements">
            {ACHIEVEMENTS.map((item, i) => (
              <li className="reveal" key={item} style={{ "--delay": `${i * 80}ms` }}>
                {item}
              </li>
            ))}
          </ul>

          <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost resume-btn reveal">
            Full resume <PiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
