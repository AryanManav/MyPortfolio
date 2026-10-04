import { PiArrowUp } from "react-icons/pi";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Aryan Manav. Designed and built by me.</p>
        <a href="#home" className="back-top">
          Back to top <PiArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
