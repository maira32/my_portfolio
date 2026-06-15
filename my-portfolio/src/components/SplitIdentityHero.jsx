import splitIdentityImage from '../assets/split-identity-face.png'; // Make sure this image exists!

const SplitIdentityHero = () => {
  return (
    <header className="split-identity-hero">
      <div className="container split-wrapper">
        
        {/* Left Side: Designer */}
        <div className="designer-column">
          <h3>designer</h3>
          <p>
            Full-Stack Developer focused on building beautiful, functional user experiences. 
            Blending technical rigor with an intuitive, minimalist design aesthetic.
          </p>
        </div>

        {/* Central Complex Image */}
        <div className="central-image-container">
          <img src={splitIdentityImage} alt="Maira Tahir: Split identity of Designer and Coder" className="split-face" />
        </div>

        {/* Right Side: <coder> */}
        <div className="coder-column">
          {/* Note the use of HTML entity &lt; and &gt; to render <coder> */}
          <h3>&lt;coder&gt;</h3>
          <p>
            An algorithmic logic prover engineer. Logic verification expert and Python/React developer 
            who prioritizes clean, elegant, and efficient code solutions.
          </p>
        </div>

      </div>
    </header>
  );
};

export default SplitIdentityHero;