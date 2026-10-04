import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-tag">
          CONSTRUCTION • MACHINERY • ELECTRICAL
        </p>

        <h1>
          Building Your
          <span> Vision</span>
        </h1>

        <p className="hero-text">
          Reliable construction services and quality machinery
          rentals for residential and commercial projects.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Explore Services
          </button>

          <button className="secondary-btn">
            Rent a Machine
          </button>
        </div>

        <div className="hero-stats">
          <div>
            <h3>250+</h3>
            <p>Projects</p>
          </div>

          <div>
            <h3>50+</h3>
            <p>Machines</p>
          </div>

          <div>
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
        </div>

      </div>

    </section>
  );
}