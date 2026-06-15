import React from 'react';

export default function About() {
  return (
    <div className="container" style={{ padding: '6rem 20px', maxWidth: '900px' }}>
      <h2 style={{ fontSize: '3rem', fontWeight: '200', marginBottom: '3rem', borderBottom: '1px solid #eaeaea', paddingBottom: '1rem' }}>
        About Me
      </h2>

      {/* --- OBJECTIVE --- */}
      <section style={{ marginBottom: '4rem' }}>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: '0.9' }}>
          Motivated Full-Stack Developer seeking to bring a fresh, analytical perspective to innovative software projects. 
          A rapid learner who excels at asking critical questions to uncover core requirements, currently expanding 
          expertise in AI/ML to build intelligent, forward-thinking applications.
        </p>
      </section>

      {/* --- EXPERIENCE --- */}
      <section style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--monospace-font)' }}>Experience</h3>
        
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
            <h4 style={{ fontSize: '1.2rem', margin: 0 }}>IT Intern</h4>
            <span style={{ fontFamily: 'var(--monospace-font)', fontSize: '0.9rem', opacity: '0.7' }}>Dec 2024 - Jun 2025</span>
          </div>
          <p style={{ fontWeight: 'bold', color: 'var(--theme-accent)', margin: '0 0 1rem 0' }}>IREG - IT</p>
          <ul style={{ lineHeight: '1.8', opacity: '0.8', paddingLeft: '20px' }}>
            <li>Led requirement gathering sessions and authored comprehensive technical documentation to clearly define project scope.</li>
            <li>Conducted black-box testing on pre-deployment software, identifying bugs to ensure a seamless end-user experience.</li>
            <li>Contributed to front-end development by building and refining responsive user interface components.</li>
          </ul>
        </div>
      </section>

      {/* --- EDUCATION & CERTIFICATIONS --- */}
      <section style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--monospace-font)' }}>Background</h3>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>Bachelor of Business and Information Technology</h4>
          <p style={{ margin: 0, opacity: '0.8' }}>Punjab University, Lahore (Expected Graduation: May 2027)</p>
          <p style={{ margin: '0.2rem 0 0 0', opacity: '0.7', fontFamily: 'var(--monospace-font)' }}>CGPA: 3.76/4.0</p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>Certifications</h4>
          <p style={{ margin: 0, opacity: '0.8' }}>
            <strong>Google Cybersecurity Professional:</strong> Foundations, Risk Management, Networks, Linux & SQL
          </p>
        </div>
      </section>

      {/* --- TECHNICAL SKILLS GRID --- */}
      <section>
        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--monospace-font)' }}>Tech Stack</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
          gap: '15px',
          fontFamily: 'var(--monospace-font)',
          fontSize: '0.9rem'
        }}>
          {/* Skill items mapped out clearly */}
          {['JavaScript', 'React', 'Node.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'PHP', 'Python', 'C++', 'SQL (Oracle)', 'Git/GitHub', 'Linux (Bash)', 'Figma'].map(skill => (
            <div key={skill} style={{ border: '1px solid #eaeaea', padding: '10px', textAlign: 'center', opacity: '0.8' }}>
              {skill}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}