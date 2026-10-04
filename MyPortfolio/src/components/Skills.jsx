import { SKILLS } from "../data.js";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <header className="section-head reveal">
          <span className="eyebrow">04 · Skills</span>
          <h2 className="section-title">Tools I work with</h2>
        </header>

        <div className="skill-groups">
          {SKILLS.map((group, i) => (
            <div className="skill-group reveal" key={group.group} style={{ "--delay": `${i * 70}ms` }}>
              <h3 className="skill-group-title">{group.group}</h3>
              <ul className="skill-list">
                {group.items.map((skill) => (
                  <li className="skill" key={skill.name}>
                    {skill.icon && <i className={skill.icon} aria-hidden="true" />}
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
