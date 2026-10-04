import "./Projects.css";

export default function Projects() {

  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
      title: "Commercial Building",
      location: "Gurgaon"
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      title: "Modern Residential House",
      location: "Ghaziabad"
    },
    {
      image:
        "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=800&q=80",
      title: "Industrial Project",
      location: "Indrapuram"
    }
  ];

  return (
    <section className="projects-section">

      <div className="section-heading">

        <p>OUR WORK</p>

        <h2>
          Recent <span>Projects</span>
        </h2>

        <div className="heading-line"></div>

      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img src={project.image} alt={project.title} />

            <div className="project-overlay">

              <div>
                <h3>{project.title}</h3>
                <p>📍 {project.location}</p>
              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}