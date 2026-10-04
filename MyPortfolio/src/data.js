import codemasterImg from "./assets/codemaster.webp";
import portfolioImg from "./assets/portfolio.webp";

export const PROFILE = {
  name: "Aryan Manav",
  email: "aryanmanav6@gmail.com",
  phone: "+91 70118 74366",
  phoneHref: "tel:+917011874366",
  location: "New Delhi, India",
  linkedin: "https://linkedin.com/in/aryanmanav",
  github: "https://github.com/AryanManav",
  resume: "https://drive.google.com/file/d/1L8w2y4N1E28hMkVE1aCyJQceSYTAW9EK/view?usp=drivesdk",
};

export const ROLES = ["Frontend Developer", "MERN Stack Developer", "UI/UX Designer"];

export const STATS = [
  { value: "7.88", label: "CGPA, B.Tech at NIT Delhi" },
  { value: "120+", label: "LeetCode problems solved" },
  { value: "20+", label: "Reusable React components shipped" },
  { value: "2", label: "Internships" },
];

export const EXPERIENCE = [
  {
    role: "UI/UX & Web Design Intern",
    company: "Acro Engineering Company",
    period: "Jun 2025 — Present",
    points: [
      "Designed a scalable interface system in Figma and implemented it with Bootstrap 5.",
      "Developed 20+ reusable React components.",
      "Worked in Agile sprints, shipping features through iterative review and testing.",
    ],
    tags: ["React", "Bootstrap 5", "Figma"],
  },
  {
    role: "SCSS Framework & CSS Migration",
    company: "DWA Commerce",
    period: "Jan 2024 — Mar 2024",
    points: [
      "Built a modular SCSS framework for the Limitless CSS 4.0 migration.",
      "Improved responsiveness and cross-browser compatibility across existing pages.",
    ],
    tags: ["SCSS", "CSS architecture"],
  },
];

export const PROJECTS = [
  {
    name: "CodeMaster Editor",
    summary:
      "A coding and algorithms platform. Run code in 10 languages, work through 100+ DSA practice problems with custom test cases, and pair-program live with another user over WebSockets.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Monaco Editor", "WebSockets"],
    live: "https://codemaster-editor.vercel.app/",
    image: codemasterImg,
  },
  {
    name: "Real-time Support Chat",
    summary:
      "A client-to-agent chat platform modelled on customer support desks, with an agent dashboard, live conversations and instant message delivery over WebSockets.",
    stack: ["React", "Socket.io", "Express", "Node.js"],
    mockup: "chat",
  },
  {
    name: "Personal Portfolio",
    summary:
      "This site. A hand-built React and Vite single-page portfolio with a custom design system, scroll-aware navigation and no UI framework.",
    stack: ["React", "Vite", "CSS"],
    live: "https://aryan-portfolio-pi.vercel.app/",
    code: "https://github.com/AryanManav/MyPortfolio",
    image: portfolioImg,
  },
];

export const SKILLS = [
  {
    group: "Frontend",
    items: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "SCSS", icon: "devicon-sass-original colored" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express", icon: "devicon-express-original" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Socket.io", icon: "devicon-socketio-original" },
    ],
  },
  {
    group: "Languages",
    items: [
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "C", icon: "devicon-c-plain colored" },
    ],
  },
  {
    group: "Tools & fundamentals",
    items: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Figma", icon: "devicon-figma-plain colored" },
      { name: "Vercel", icon: "devicon-vercel-original" },
      { name: "Data Structures & Algorithms" },
      { name: "Object-Oriented Programming" },
    ],
  },
];

export const EDUCATION = [
  {
    school: "National Institute of Technology, Delhi",
    degree: "B.Tech, Electrical Engineering",
    score: "CGPA 7.88",
  },
  {
    school: "KVSPG",
    degree: "CBSE Class XII",
    score: "90.8%",
  },
];

export const ACHIEVEMENTS = [
  "Solved 120+ problems on LeetCode and 50+ on GeeksforGeeks and TakeUForward.",
  "Contributed to open-source repositories and developer communities.",
  "Competed in national-level hackathons and coding contests.",
];
