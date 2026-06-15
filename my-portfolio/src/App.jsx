import React from 'react';
import './App.css'; // This is where we will add our minimalist CSS later

// --- 1. HERO SECTION ---
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1>Maira Tahir</h1>
        <h2>Full-Stack Developer</h2>
        <p>Building scalable web applications, secure back-ends, and algorithmic tools.</p>
        
        {/* Kept text-only to align with the minimalist, logo-free directive */}
        <div className="contact-links">
          <a href="mailto:your.email@example.com">Email Me</a>
          <a href="https://github.com/yourusername">GitHub</a>
        </div>
      </div>
    </section>
  );
};

// --- 2. TECH STACK SECTION ---
const TechStack = () => {
  const technologies = [
    "JavaScript", "React", "HTML5", "CSS3", "Python", "PHP", "JSON"
  ];

  return (
    <section className="tech-section">
      <div className="container">
        <h3>Core Technologies</h3>
        <ul className="tech-grid">
          {technologies.map((tech, index) => (
            <li key={index} className="tech-item">{tech}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// --- 3. PROJECTS SECTION ---
const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <h3>Engineering Projects</h3>
        
        <div className="project-card">
          <h4>LogicBot</h4>
          <p className="project-role">Algorithm Developer</p>
          <p>
            An algorithmic logic prover engineered to verify logical validity. 
            Built using rules of inference and replacement to handle complex computational logic and process management.
          </p>
        </div>

        <div className="project-card">
          <h4>Ivory</h4>
          <p className="project-role">Full-Stack Architect</p>
          <p>
            A high-performance e-commerce platform. Architected the back-end routing, database integration, 
            and designed a minimalist, user-focused front-end interface.
          </p>
        </div>
      </div>
    </section>
  );
};

// --- 4. EXPERIENCE SECTION ---
const Experience = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <h3>Professional Experience</h3>
        
        <div className="experience-card">
          <h4>IT Intern</h4>
          <p className="company">IREG-IT</p>
          <p>
            Managed internal technical documentation and facilitated seamless software deployment 
            and system updates across local infrastructures.
          </p>
        </div>

        <div className="experience-card">
          <h4>Cybersecurity Intern</h4>
          <p className="company">Confidential / Undisclosed</p>
          <p>
            Completed a focused six-week engagement specializing in risk management, 
            system auditing, and security protocol verification.
          </p>
        </div>
      </div>
    </section>
  );
};

// --- MAIN APP COMPONENT ---
export default function App() {
  return (
    <div className="portfolio-wrapper">
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      
      <footer className="portfolio-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Maira Tahir. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}