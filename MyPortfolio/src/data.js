// All site content, kept in sync with the resume (PROFILE.resume).
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
  leetcode: "https://leetcode.com/u/AryanManav/",
  resume: "https://drive.google.com/file/d/1L8w2y4N1E28hMkVE1aCyJQceSYTAW9EK/view",
};

export const ROLES = ["Full-Stack Developer", "Frontend Developer", "UI/UX Designer"];

export const STATS = [
  { value: "7.94", label: "CGPA, B.Tech at NIT Delhi" },
  { value: "150+", label: "LeetCode problems solved" },
  { value: "20+", label: "Modular React.js components built" },
  { value: "3", label: "National-level hackathons" },
];

export const EXPERIENCE = [
  {
    role: "UI/UX and Web Design Intern",
    company: "Acro Engineering Company",
    location: "New Delhi",
    period: "Jun 2025 — Present",
    points: [
      "Created and optimized 20+ modular React.js components, reducing code duplication by 30% and accelerating feature releases by 25%.",
      "Developed adaptive UI layouts with Bootstrap 5 and Figma across 4+ screen breakpoints, decreasing UI defects by 20% and strengthening cross-device consistency.",
      "Ran Agile sprints and iterative user testing over 3 release cycles, shortening feedback turnaround time by 10%.",
    ],
    tags: ["React.js", "Bootstrap 5", "Figma", "Agile"],
  },
  {
    role: "SCSS Framework and Limitless CSS Migration",
    company: "DWA Commerce",
    location: "Remote",
    period: "Jan 2024 — Mar 2024",
    points: [
      "Assembled a reusable SCSS framework and migrated Limitless CSS to version 4.0, reducing CSS redundancy by 40%.",
      "Conducted cross-browser optimization and responsive testing across 4+ browsers and devices, improving page load times by 25%.",
    ],
    tags: ["SCSS", "Limitless CSS 4.0", "Cross-Browser Testing"],
  },
];

export const PROJECTS = [
  {
    name: "Online Code Editor",
    subtitle: "MERN Stack",
    points: [
      "Built a multi-language online code editor supporting 10+ languages (Java, Python, C, C++, JavaScript, TypeScript, Go, Rust, Ruby, PHP) with live compilation and execution.",
      "Architected a hybrid execution engine with automatic fallback: code runs locally via the compile-run library when native compilers are available, and routes to the Judge0 cloud API for sandboxed execution otherwise, eliminating deployment failures on compiler-less cloud platforms.",
      "Engineered a test-case verification system that auto-generates language-specific execution harnesses around user solutions and normalizes output, validating submissions against 3+ test cases per problem.",
      "Integrated the Monaco Editor with syntax highlighting across all supported languages and enforced a 5-second execution timeout to prevent runaway processes.",
      "Tuned the interface with Tailwind CSS, reducing page load time by 20%.",
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js", "Monaco Editor", "Judge0 API", "Tailwind CSS"],
    live: "https://codemaster-editor.vercel.app/",
    code: "https://github.com/AryanManav/CodeEditor",
    image: codemasterImg,
  },
  {
    name: "PeerTalks",
    subtitle: "Real-Time Chat Platform",
    points: [
      "Co-developed a real-time peer-to-peer chat platform delivering instant, bidirectional messaging via Next.js, Node.js and Socket.io with low message latency of 150ms.",
      "Implemented secure user authentication and session management, restricting conversation access to authenticated users only.",
      "Added live WebSocket-based notifications for new messages and friend requests.",
      "Structured persistent chat history storage in MongoDB, supporting reliable retrieval of past conversations.",
      "Collaborated via Git and GitHub as a contributor, following modular code practices and resolving 10+ merge conflicts.",
    ],
    stack: ["Next.js", "Node.js", "Socket.io", "MongoDB"],
    code: "https://github.com/AryanManav/Converso",
    mockup: "chat",
  },
  {
    name: "Personal Portfolio Website",
    subtitle: "This site",
    points: [
      "Designed a responsive portfolio website in React, optimized for SEO and fast rendering.",
      "Deployed on Vercel, achieving a Lighthouse performance score of 90+ and a Time To First Byte (TTFB) under 300ms.",
    ],
    stack: ["React", "Vercel"],
    live: "https://aryan-portfolio-pi.vercel.app/",
    code: "https://github.com/AryanManav/MyPortfolio",
    image: portfolioImg,
  },
];

export const SKILLS = [
  {
    group: "Languages",
    items: [
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "C", icon: "devicon-c-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React.js", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
      { name: "Bootstrap 5", icon: "devicon-bootstrap-plain colored" },
      { name: "SCSS", icon: "devicon-sass-original colored" },
      { name: "Figma", icon: "devicon-figma-plain colored" },
      { name: "Responsive and Adaptive Design" },
      { name: "Component Architecture" },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "Django", icon: "devicon-django-plain" },
      { name: "Flask", icon: "devicon-flask-original" },
      { name: "Socket.io", icon: "devicon-socketio-original" },
      { name: "REST API Design" },
      { name: "Judge0 API Integration" },
      { name: "Sandboxed Code Execution" },
    ],
  },
  {
    group: "Databases",
    items: [
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Mongoose", icon: "devicon-mongoose-original colored" },
    ],
  },
  {
    group: "Tools & practices",
    items: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "Vercel", icon: "devicon-vercel-original" },
      { name: "Agile/Scrum" },
      { name: "Cross-Browser Testing" },
      { name: "Full-Stack Development" },
    ],
  },
  {
    group: "CS fundamentals",
    items: [
      { name: "Data Structures & Algorithms (Java)" },
      { name: "Object-Oriented Programming" },
      { name: "System Design Basics" },
    ],
  },
];

export const EDUCATION = [
  {
    school: "National Institute of Technology Delhi (NIT Delhi)",
    degree: "Bachelor of Technology (B.Tech) in Electrical Engineering",
    location: "New Delhi, India",
    period: "Aug 2023 — May 2027",
    score: "CGPA 7.94/10",
  },
  {
    school: "Kendriya Vidyalaya S.P.G. (KVSPG)",
    degree: "CBSE Class XII (Science Stream)",
    location: "New Delhi, India",
    period: "Apr 2022 — Mar 2023",
    score: "90.8%",
  },
];

export const ACHIEVEMENTS = [
  "Solved 150+ algorithmic problems on LeetCode, strengthening expertise in data structures, algorithms, and common coding interview patterns.",
  "Tackled 50+ additional data structure and algorithm problems on GeeksforGeeks and TakeUForward, sharpening code optimization skills.",
  "Contributed to open-source repositories via 5+ pull requests, including bug fixes and feature enhancements.",
  "Competed in 3 national-level hackathons, building full-stack solutions under time constraints.",
];
