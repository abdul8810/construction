import { useState } from "react";
import { FiMenu, FiX, FiSearch, FiMessageCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
       <span>Build</span>Pro
       <small>CONSTRUCTION & RENTAL</small>
        </Link>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
         <Link to="/">Home</Link>
         <Link to="/services">Services</Link>
         <Link to="/machines">Machines</Link>
         <Link to="/projects">Projects</Link>
         <Link to="/about">About</Link>
         <Link to="/contact">Contact</Link>
      </div>

      <div className="nav-actions">

        <div className="search-box">
          <input placeholder="Search machines..." />
          <FiSearch />
        </div>

        <button className="quote-btn">
          <FiMessageCircle />
          Get a Quote
        </button>

      </div>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

    </nav>
  );
}