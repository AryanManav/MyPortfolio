import { EXPERIENCE } from "../data.js";
import "./WorkExperience.css";

const WorkExperience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <header className="section-head reveal">
          <span className="eyebrow">02 · Experience</span>
          <h2 className="section-title">Where I've worked</h2>
        </header>

        <ol className="timeline">
          {EXPERIENCE.map((job, i) => (
            <li className="job reveal" key={job.company} style={{ "--delay": `${i * 100}ms` }}>
              <div className="job-meta">
                <span className="job-period">{job.period}</span>
                {i === 0 && <span className="job-badge">Current</span>}
              </div>

              <div className="job-body">
                <h3 className="job-role">{job.role}</h3>
                <p className="job-company">{job.company}</p>
                <ul className="job-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="job-tags">
                  {job.tags.map((tag) => (
                    <span className="chip" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default WorkExperience;
