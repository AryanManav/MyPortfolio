import { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import Resume from "./components/Resume.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"

function App() {
  const cursorRef = useRef(null);
  const position = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const requestRef = useRef(null);
  const [expandedSection, setExpandedSection] = useState(null);

  // Handle section click
  const handleSectionClick = (section) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  // Smooth cursor movement
  useEffect(() => {
    const moveCursor = (e) => {
      position.current = { x: e.pageX, y: e.pageY };
    };

    const updateCursor = () => {
      target.current.x += (position.current.x - target.current.x) * 0.1;
      target.current.y += (position.current.y - target.current.y) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(updateCursor);
    };

    window.addEventListener("mousemove", moveCursor);
    requestRef.current = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor"></div>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;