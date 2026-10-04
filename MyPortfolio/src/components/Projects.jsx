import { PiArrowUpRight, PiGithubLogo } from "react-icons/pi";
import { PROFILE, PROJECTS } from "../data.js";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <header className="section-head reveal">
          <span className="eyebrow">03 · Projects</span>
          <h2 className="section-title">Selected work</h2>
          <p className="section-lead">
            Full-stack builds where I owned the product end to end, from the interface down to the API and data layer.
          </p>
        </header>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <article
              className={`project reveal ${i === 0 ? "project-featured" : ""}`}
              key={project.name}
              style={{ "--delay": `${(i % 2) * 100}ms` }}
            >
              <div className="project-media" aria-hidden={!project.image}>
                {project.image ? (
                  <img src={project.image} alt={`Screenshot of ${project.name}`} loading="lazy" />
                ) : (
                  <div className="project-placeholder">
                    <span className="window-dots"><i /><i /><i /></span>
                    {project.mockup === "chat" ? (
                      <div className="chat-mock">
                        <p className="bubble from-client">Hi, my order hasn't arrived yet.</p>
                        <p className="bubble from-agent">Sorry about that. Let me check it for you.</p>
                        <p className="bubble from-agent">It's out for delivery and arrives today.</p>
                        <span className="typing"><i /><i /><i /></span>
                      </div>
                    ) : (
                      <span className="placeholder-name">{project.name}</span>
                    )}
                  </div>
                )}
              </div>

              <div className="project-body">
                <span className="project-index">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="project-title">{project.name}</h3>
                <p className="project-summary">{project.summary}</p>

                <ul className="project-stack" aria-label="Tech stack">
                  {project.stack.map((tech) => (
                    <li className="chip" key={tech}>{tech}</li>
                  ))}
                </ul>

                {(project.live || project.code) && (
                  <div className="project-links">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-link">
                        Live site <PiArrowUpRight aria-hidden="true" />
                      </a>
                    )}
                    {project.code && (
                      <a href={project.code} target="_blank" rel="noopener noreferrer" className="text-link">
                        Source <PiGithubLogo aria-hidden="true" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost projects-more reveal">
          More on GitHub <PiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
