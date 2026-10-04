import {
  FaBuilding,
  FaBolt,
  FaTools,
  FaPaintRoller,
  FaHardHat,
  FaTruck
} from "react-icons/fa";

import "./Services.css";

export default function Services() {
  const services = [
    {
      icon: <FaBuilding />,
      title: "Building Construction",
      text: "Complete residential and commercial construction services."
    },
    {
      icon: <FaBolt />,
      title: "Electrical Work",
      text: "Professional electrical installation, wiring and maintenance."
    },
    {
      icon: <FaTools />,
      title: "Renovation",
      text: "Modern renovation solutions for homes and commercial spaces."
    },
    {
      icon: <FaPaintRoller />,
      title: "Painting Work",
      text: "Interior and exterior painting with quality finishing."
    },
    {
      icon: <FaHardHat />,
      title: "Site Development",
      text: "Reliable construction and site development solutions."
    },
    {
      icon: <FaTruck />,
      title: "Equipment Rental",
      text: "Construction machines and equipment available for rent."
    }
  ];

  return (
    <section className="services-section">

      <div className="section-heading">
        <p>WHAT WE DO</p>
        <h2>Our <span>Services</span></h2>
        <div className="heading-line"></div>
        <p className="heading-text">
          Complete construction and equipment solutions under one roof.
        </p>
      </div>

      <div className="services-grid">

        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.text}</p>

            <button>
              Learn More →
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}