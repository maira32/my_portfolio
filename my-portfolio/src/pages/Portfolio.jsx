
export default function Portfolio() {
  return (
    <div className="container" style={{ padding: '6rem 20px', maxWidth: '900px' }}>
      <h2 style={{ fontSize: '3rem', fontWeight: '200', marginBottom: '3rem', borderBottom: '1px solid #eaeaea', paddingBottom: '1rem' }}>
        Selected Engineering Work
      </h2>

      {/* --- PROJECT 1: LOGICBOT --- */}
      <div className="portfolio-item" style={{ marginBottom: '5rem' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--monospace-font)' }}>
          LogicBot
        </h3>
        <p style={{ fontWeight: 'bold', color: 'var(--theme-accent)', marginBottom: '1.5rem' }}>
          Algorithmic Logic Prover
        </p>
        <p style={{ fontSize: '1.1rem', opacity: '0.8', lineHeight: '1.8' }}>
          Engineered an advanced algorithmic logic prover designed to rigorously verify logical validity. 
          The core architecture utilizes complex rules of inference and replacement to process and validate logical statements. 
          This project required managing significant computational complexity and designing algorithms capable of handling 
          multi-step logical deductions with strict accuracy.
        </p>
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '15px', fontFamily: 'var(--monospace-font)', fontSize: '0.9rem', opacity: '0.7' }}>
          <span>#Algorithms</span>
          <span>#DiscreteMath</span>
          <span>#Python</span>
        </div>
      </div>

      {/* --- PROJECT 2: IVORY --- */}
      <div className="portfolio-item" style={{ marginBottom: '5rem' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--monospace-font)' }}>
          Ivory
        </h3>
        <p style={{ fontWeight: 'bold', color: 'var(--theme-accent)', marginBottom: '1.5rem' }}>
          Full-Stack E-Commerce Architecture
        </p>
        <p style={{ fontSize: '1.1rem', opacity: '0.8', lineHeight: '1.8' }}>
          Architected and launched a complete e-commerce platform. The back-end relies on robust database routing 
          and seamless WordPress/WooCommerce integration to manage state and handle transactions securely. For the front-end, 
          I implemented a strict minimalist design aesthetic using Kadence and Eshop themes, prioritizing a frictionless user experience and fast load times.
        </p>
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '15px', fontFamily: 'var(--monospace-font)', fontSize: '0.9rem', opacity: '0.7' }}>
          <span>#FullStack</span>
          <span>#WordPress</span>
          <span>#CSS3</span>
        </div>
      </div>

      {/* --- PROJECT 3: AI CHATBOT --- */}
      <div className="portfolio-item" style={{ marginBottom: '5rem' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--monospace-font)' }}>
          AI ChatBot
        </h3>
        <p style={{ fontWeight: 'bold', color: 'var(--theme-accent)', marginBottom: '1.5rem' }}>
          Interactive React Application
        </p>
        <p style={{ fontSize: '1.1rem', opacity: '0.8', lineHeight: '1.8' }}>
          Built a responsive chatbot application with an interactive UI featuring light and dark mode functionality. 
          Developed asynchronous query handling to provide real-time responses to user inputs, ensuring a seamless and dynamic conversational experience.
        </p>
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '15px', fontFamily: 'var(--monospace-font)', fontSize: '0.9rem', opacity: '0.7' }}>
          <span>#React</span>
          <span>#CSS3</span>
          <span>#AsyncLogic</span>
        </div>
      </div>

      {/* --- PROJECT 4: STUDENT DATABASE MANAGEMENT --- */}
      <div className="portfolio-item" style={{ marginBottom: '5rem' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--monospace-font)' }}>
          Student Database Management
        </h3>
        <p style={{ fontWeight: 'bold', color: 'var(--theme-accent)', marginBottom: '1.5rem' }}>
          Relational Database Architecture
        </p>
        <p style={{ fontSize: '1.1rem', opacity: '0.8', lineHeight: '1.8' }}>
          Designed a relational database to store and query student records efficiently using Oracle. 
          Implemented complex SQL queries for precise data retrieval, ensuring high data integrity and optimized query performance across the management system.
        </p>
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '15px', fontFamily: 'var(--monospace-font)', fontSize: '0.9rem', opacity: '0.7' }}>
          <span>#Oracle</span>
          <span>#SQL</span>
          <span>#MSAccess</span>
        </div>
      </div>

      {/* --- PROJECT 5: CURRENCY CONVERTER --- */}
      <div className="portfolio-item">
        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--monospace-font)' }}>
          Currency Converter
        </h3>
        <p style={{ fontWeight: 'bold', color: 'var(--theme-accent)', marginBottom: '1.5rem' }}>
          API-Driven Web Utility
        </p>
        <p style={{ fontSize: '1.1rem', opacity: '0.8', lineHeight: '1.8' }}>
          Developed a responsive tool for real-time currency conversion. Integrated the ExchangeRate API to fetch live financial data, 
          wrapping the backend logic in a clean, mobile-first interface designed using HTML5, CSS3, and modern JavaScript.
        </p>
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '15px', fontFamily: 'var(--monospace-font)', fontSize: '0.9rem', opacity: '0.7' }}>
          <span>#HTML5</span>
          <span>#JavaScript</span>
          <span>#REST_API</span>
        </div>
      </div>

    </div>
  );
}