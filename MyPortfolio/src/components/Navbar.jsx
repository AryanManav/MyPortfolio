import { useEffect, useState } from "react";
import { PiArrowUpRight, PiList, PiX } from "react-icons/pi";
import { PROFILE } from "../data.js";
import "./Navbar.css";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll-spy: highlight the link of the section crossing the upper third of the viewport.
  useEffect(() => {
    const sections = ["home", ...LINKS.map((l) => l.id), "resume"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Education lives between Skills and Contact; keep Skills lit while it is in view.
            const id = entry.target.id === "resume" ? "skills" : entry.target.id;
            setActive(id === "home" ? "" : id);
          }
        });
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "is-open" : ""}`}>
      <nav className="container nav-inner" aria-label="Primary">
        <a href="#home" className="brand" onClick={close} aria-label="Aryan Manav, back to top">
          <span className="brand-mark">AM</span>
          <span className="brand-name">Aryan Manav</span>
        </a>

        <ul className="nav-links" id="nav-menu">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? "active" : ""}
                aria-current={active === link.id ? "true" : undefined}
                onClick={close}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-cta">
            <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer" className="btn btn-primary" onClick={close}>
              Resume <PiArrowUpRight aria-hidden="true" />
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <PiX /> : <PiList />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
