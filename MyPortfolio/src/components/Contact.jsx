import { useEffect, useRef, useState } from "react";
import { PiCheck, PiCopy, PiGithubLogo, PiLinkedinLogo, PiPhone } from "react-icons/pi";
import { SiLeetcode } from "react-icons/si";
import { PROFILE } from "../data.js";
import "./Contact.css";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-panel reveal">
          <span className="eyebrow">07 · Contact</span>
          <h2 className="contact-title">
            Have a role or a project in mind? <span>Let's talk.</span>
          </h2>
          <p className="section-lead">
            I'm open to frontend and full-stack opportunities. The fastest way to reach me is email.
          </p>

          <div className="contact-email">
            <a href={`mailto:${PROFILE.email}`} className="email-link">
              {PROFILE.email}
            </a>
            <button type="button" className="copy-btn" onClick={copyEmail} aria-live="polite">
              {copied ? <PiCheck aria-hidden="true" /> : <PiCopy aria-hidden="true" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <div className="contact-row">
            <a href={PROFILE.phoneHref} className="contact-phone">
              <PiPhone aria-hidden="true" /> {PROFILE.phone}
            </a>
            <div className="contact-social">
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn">
                <PiLinkedinLogo />
              </a>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub">
                <PiGithubLogo />
              </a>
              <a href={PROFILE.leetcode} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LeetCode">
                <SiLeetcode />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
