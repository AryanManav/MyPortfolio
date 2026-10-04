import { STATS } from "../data.js";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div>
          <header className="section-head reveal">
            <span className="eyebrow">01 · About</span>
            <h2 className="section-title">
              I care about the details people <em>feel</em> but rarely notice.
            </h2>
          </header>

          <div className="about-copy reveal" style={{ "--delay": "100ms" }}>
            <p>
              I'm a B.Tech student in Electrical Engineering at NIT Delhi (class of 2027), and most of my time goes into
              building for the web with React, Next.js and Node. I like taking an interface from a Figma frame to
              production code that is quick to load, easy to maintain and comfortable to use, and wiring up the APIs and
              real-time features behind it.
            </p>
            <p>
              Outside of product work I practise problem-solving in Java on LeetCode and GeeksforGeeks, compete in
              hackathons and contribute to open source.
            </p>
          </div>
        </div>

        <dl className="stats">
          {STATS.map((stat, i) => (
            <div className="stat reveal" key={stat.label} style={{ "--delay": `${i * 80}ms` }}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default About;
