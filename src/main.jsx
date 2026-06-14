import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BookOpen,
  Code2,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";
import "./styles.css";

const assetBase = import.meta.env.BASE_URL;

const profile = {
  name: "Thummala Harshith Reddy",
  title: "First Year B.Tech CSE Student",
  university: "KLH University",
  branch: "Computer Science and Engineering",
  email: "thummala.harshith@klh.edu.in",
  github: "https://github.com/harshiththummala08-sys",
  linkedin:
    "https://www.linkedin.com/in/harshith-thummala-4a87283ab?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  resume: `${assetBase}Thummala-Harshith-Reddy-Resume.pdf`,
};

const skills = [
  { group: "Languages", items: ["Java", "C", "Python", "JavaScript"] },
  { group: "Frontend", items: ["React", "HTML", "CSS", "Responsive UI"] },
  { group: "Core Practice", items: ["DSA", "Problem Solving", "GitHub"] },
];

const projects = [
  {
    title: "Fittrack Pro",
    type: "Fitness Tracking Website",
    text: "A frontend fitness project focused on health tracking, workout presentation, and a clean user-facing layout.",
    live: "https://harshiththummala08-sys.github.io/Fittrack-pro/",
    repo: "https://github.com/harshiththummala08-sys/Fittrack-pro",
    stack: ["JavaScript", "CSS", "HTML"],
  },
  {
    title: "Harshith Portfolio",
    type: "Personal Portfolio",
    text: "An earlier personal portfolio project built with HTML and CSS to introduce profile details and basic frontend skills.",
    live: "https://harshiththummala08-sys.github.io/harshith/",
    repo: "https://github.com/harshiththummala08-sys/harshith",
    stack: ["HTML", "CSS"],
  },
  {
    title: "Gym Project",
    type: "Gym Website",
    text: "A gym-themed frontend website with HTML, CSS, and basic JavaScript for layout and interaction practice.",
    live: "https://harshiththummala08-sys.github.io/projectgymharshith/",
    repo: "https://github.com/harshiththummala08-sys/projectgymharshith",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "DSA Project",
    type: "Data Structures Practice",
    text: "A Java-based project connected to data structures and algorithm learning.",
    live: "",
    repo: "https://github.com/harshiththummala08-sys/dsapoject",
    stack: ["Java", "DSA"],
  },
  {
    title: "Sorting Comparison",
    type: "Algorithm Visual/Comparison",
    text: "A sorting comparison project for understanding how different sorting methods behave.",
    live: "https://harshiththummala08-sys.github.io/SortingComparision/",
    repo: "https://github.com/harshiththummala08-sys/SortingComparision",
    stack: ["HTML", "Algorithms"],
  },
  {
    title: "Shoes",
    type: "Product Frontend",
    text: "A shoes-themed frontend project for practicing product page design and responsive web layout.",
    live: "https://harshiththummala08-sys.github.io/shoes/",
    repo: "https://github.com/harshiththummala08-sys/shoes",
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

function Nav({ activeView, setActiveView }) {
  const links = ["Home", "About", "Skills", "Projects", "Education", "Contact"];
  return (
    <header className="topbar">
      <button className="brand" type="button" onClick={() => setActiveView("Home")} aria-label="Home">
        HR
      </button>
      <nav>
        {links.map((link) => (
          <button
            className={activeView === link ? "active" : ""}
            key={link}
            type="button"
            onClick={() => setActiveView(link)}
          >
            {link}
          </button>
        ))}
      </nav>
      <a className="iconButton" href={profile.resume} download aria-label="Download resume">
        <Download size={18} />
      </a>
    </header>
  );
}

function Hero({ setActiveView }) {
  return (
    <section className="hero" id="home">
      <div className="heroText">
        <p className="eyebrow">
          <Sparkles size={17} />
          First year B.Tech CSE student at KLH University
        </p>
        <h1>{profile.name}</h1>
        <p className="lead">
          I am a first-year B.Tech student in Computer Science and Engineering
          at KLH University, building a strong base in programming, frontend
          development, and data structures.
        </p>
        <div className="actions">
          <button className="primary" type="button" onClick={() => setActiveView("Projects")}>
            View Projects <ArrowUpRight size={18} />
          </button>
          <a className="secondary" href={profile.resume} download>
            Download Resume <Download size={18} />
          </a>
        </div>
        <div className="quickStats" aria-label="Profile highlights">
          <span>
            <strong>8+</strong>
            Skills
          </span>
          <span>
            <strong>1st Year</strong>
            B.Tech CSE
          </span>
          <span>
            <strong>React</strong>
            Frontend
          </span>
        </div>
      </div>

      <div className="portraitPanel">
        <div className="portraitFrame">
          <img
            src={`${assetBase}assets/profile.jpg`}
            alt="Thummala Harshith Reddy"
            onError={(event) => event.currentTarget.remove()}
          />
          <div className="portraitFallback">HR</div>
        </div>
        <div className="focusCard">
          <Code2 size={20} />
          <span>Currently focused on React, DSA, Java, Python, and clean frontend projects.</span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="pageView aboutView">
      <div className="sectionTitle split">
        <div>
          <span>About</span>
          <h2>All about me.</h2>
        </div>
        <p>
          My name is {profile.name}. I am a first-year B.Tech student at
          {` ${profile.university}`} in the {profile.branch} branch.
        </p>
      </div>
      <div className="aboutGrid">
        <article className="aboutCard aboutMain">
          <h3>Who I am</h3>
          <p>
            I am an enthusiastic CSE student who is interested in software
            development, web technologies, and problem solving. I am currently
            learning how to build useful frontend projects with React,
            JavaScript, HTML, and CSS while also improving my programming
            foundation with Java, C, Python, and DSA.
          </p>
          <p>
            As a first-year student, my main goal is to grow step by step:
            understand core computer science concepts, practice coding
            regularly, build projects, and become ready for internships and
            real-world development work.
          </p>
        </article>
        <article className="aboutCard">
          <h3>Education</h3>
          <p>{profile.university}</p>
          <strong>B.Tech - Computer Science and Engineering</strong>
          <span>First Year Student</span>
        </article>
        <article className="aboutCard">
          <h3>What I am learning</h3>
          <p>
            React, JavaScript, Java, Python, C, HTML, CSS, DSA, responsive
            design, GitHub projects, and frontend development basics.
          </p>
        </article>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="sectionBlock">
      <div className="sectionTitle">
        <span>Skills</span>
        <h2>Tools I am building confidence with.</h2>
      </div>
      <div className="skillGrid">
        {skills.map((skill) => (
          <article className="skillCard" key={skill.group}>
            <h3>{skill.group}</h3>
            <div>
              {skill.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="pageView">
      <div className="sectionTitle split">
        <div>
          <span>Projects</span>
          <h2>All selected GitHub projects are now listed here.</h2>
          <p>
            These are the project links you shared, with live pages wherever a
            GitHub Pages link is available.
          </p>
        </div>
        <a className="textLink" href={profile.github} target="_blank" rel="noreferrer">
          GitHub <Github size={18} />
        </a>
      </div>
      <div className="projectGrid">
        {projects.map((project, index) => (
          <article className="projectCard" key={project.title}>
            <span className="projectNumber">{String(index + 1).padStart(2, "0")}</span>
            <p className="projectType">{project.type}</p>
            <h3>{project.title}</h3>
            <p>{project.text}</p>
            <div className="stackList">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="projectLinks">
              {project.live ? (
                <a href={project.live} target="_blank" rel="noreferrer">
                  <MonitorSmartphone size={17} /> Live
                </a>
              ) : null}
              <a href={project.repo} target="_blank" rel="noreferrer">
                <Github size={17} /> Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="sectionBlock twoColumn">
      <div className="sectionTitle">
        <span>Education</span>
        <h2>Learning path.</h2>
      </div>
      <div className="timeline">
        <article>
          <GraduationCap size={24} />
          <div>
            <h3>B.Tech Student</h3>
            <p>
              First-year B.Tech student in Computer Science and Engineering at
              KLH University, building a base in programming, frontend
              development, data structures, and software development projects.
            </p>
          </div>
        </article>
        <article>
          <BookOpen size={24} />
          <div>
            <h3>No professional experience yet</h3>
            <p>
              Focused on learning, practice projects, GitHub work, and preparing
              for internship opportunities.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contactSection">
      <div>
        <span className="eyebrow small">
          <MapPin size={16} />
          Available for student projects
        </span>
        <h2>Let us connect.</h2>
        <p>
          Reach out for projects, learning opportunities, internship discussions,
          or collaboration.
        </p>
      </div>
      <div className="contactCards">
        <a href={`mailto:${profile.email}`}>
          <Mail size={20} />
          <span>{profile.email}</span>
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          <Github size={20} />
          <span>GitHub profile</span>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={20} />
          <span>LinkedIn profile</span>
        </a>
      </div>
    </section>
  );
}

function BottomShowcase({ setActiveView }) {
  return (
    <section className="bottomShowcase">
      <div>
        <span className="eyebrow small">
          <Github size={16} />
          GitHub Portfolio
        </span>
        <h2>Explore my projects and resume.</h2>
        <p>
          This portfolio is built with React and includes my live projects,
          resume, contact links, and first-year B.Tech CSE profile.
        </p>
      </div>
      <div className="bottomActions">
        <button className="primary" type="button" onClick={() => setActiveView("Projects")}>
          See Projects <ArrowUpRight size={18} />
        </button>
        <a className="secondary" href={profile.github} target="_blank" rel="noreferrer">
          GitHub Profile <Github size={18} />
        </a>
        <a className="secondary" href={profile.resume} download>
          Resume <Download size={18} />
        </a>
      </div>
    </section>
  );
}

function App() {
  const [activeView, setActiveView] = React.useState("Home");
  const views = {
    Home: <Hero setActiveView={setActiveView} />,
    About: <About />,
    Skills: <Skills />,
    Projects: <Projects />,
    Education: <Education />,
    Contact: <Contact />,
  };

  return (
    <>
      <Nav activeView={activeView} setActiveView={setActiveView} />
      <main>{views[activeView]}</main>
      <BottomShowcase setActiveView={setActiveView} />
      <footer>Built with React for {profile.name}.</footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
