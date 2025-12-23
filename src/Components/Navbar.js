import { Link } from "react-router-dom";
import { useState } from "react";


function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Aswin&apos;s Portfolio</h2>

      <img
        src= "https://icon-library.com/images/menu-icon-png-3-lines/menu-icon-png-3-lines-5.jpg"
        alt="menu"
        className="menu-icon"
        onClick={() => setOpen(!open)}
      />

      {/* Nav Links */}
      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
        <li><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
        <li><Link to="/skills" onClick={() => setOpen(false)}>Skills</Link></li>
        <li><Link to="/platforms" onClick={() => setOpen(false)}>Platforms</Link></li>
        <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
