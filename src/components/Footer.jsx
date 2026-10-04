import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp
} from "react-icons/fa";

import "./Footer.css";

export default function Footer() {

  return (
    <footer className="footer">

      <div className="footer-grid">

        <div className="footer-about">

          <h2>
            <span>Build</span>Pro
          </h2>

          <p>
            Construction services, machinery rental and
            electrical solutions for residential and
            commercial projects.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>

        </div>

        <div>
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/machines">Machines</a>
          <a href="/projects">Projects</a>
        </div>

        <div>
          <h3>Services</h3>
          <a href="#">Construction</a>
          <a href="#">Electrical Work</a>
          <a href="#">Renovation</a>
          <a href="#">Machine Rental</a>
        </div>

        <div>
          <h3>Contact</h3>
          <p>📍 Ghaziabad,Noida,Indrapuram,NCR Delhi</p>
          <p>📞 +91 8810246829</p>
          <p>✉ arahman98469@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 BuildPro. All Rights Reserved.
      </div>

    </footer>
  );
}