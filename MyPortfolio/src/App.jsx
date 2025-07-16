import { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import Resume from "./components/Resume.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import WorkExperience from "./components/WorkExperience.jsx"

function App() {
  const cursorRef = useRef(null);
  const position = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const requestRef = useRef(null);
  const [expandedSection, setExpandedSection] = useState(null);


  return (
    <>
      <div ref={cursorRef} className="custom-cursor"></div>
      <Navbar />
      <Home />
      <About />
      <WorkExperience />
      <Resume />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;