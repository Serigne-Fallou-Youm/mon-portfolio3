import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/youm.jpg";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      
      <div className="logo">
        <img src={logo} alt="logo" />
        <h2>MonPortfolio</h2>
      </div>

      {/* Bouton menu mobile */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={`nav-center ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Accueil</Link>
        <Link to="/apropos" onClick={() => setOpen(false)}>À propos</Link>
        <Link to="/projets" onClick={() => setOpen(false)}>Projets</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <Link to="/inscription" className="btn-inscription">
          Inscription
        </Link>
      </div>


    </nav>
  )
}

export default Navbar