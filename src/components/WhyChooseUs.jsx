import {
  FaCheckCircle,
  FaUsers,
  FaProjectDiagram,
  FaTools,
  FaAward
} from "react-icons/fa";

import "./WhyChooseUs.css";

export default function WhyChooseUs() {

  return (
    <section className="why-section">

      <div className="why-content">

        <div className="why-left">

          <p className="small-title">
            WHY CHOOSE US
          </p>

          <h2>
            Building Trust,
            <span> Delivering Quality.</span>
          </h2>

          <p className="why-description">
            We provide dependable construction services and
            quality machinery with a focus on safety, reliability
            and customer satisfaction.
          </p>

          <div className="check-list">

            <div>
              <FaCheckCircle />
              <span>Experienced Professionals</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Quality Construction Equipment</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Transparent Pricing</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>On-Time Project Delivery</span>
            </div>

          </div>

        </div>

        <div className="stats-grid">

          <div>
            <FaProjectDiagram />
            <strong>250+</strong>
            <p>Projects</p>
          </div>

          <div>
            <FaUsers />
            <strong>180+</strong>
            <p>Happy Clients</p>
          </div>

          <div>
            <FaTools />
            <strong>50+</strong>
            <p>Machines</p>
          </div>

          <div>
            <FaAward />
            <strong>10+</strong>
            <p>Years Experience</p>
          </div>

        </div>

      </div>

    </section>
  );
}