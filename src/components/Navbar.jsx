import { Link } from "react-router-dom";
import logo from "../assets/images/youm.jpg";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <img src={logo} alt="logo" />
        <h2>MonPortfolio</h2>
      </div>

      <div className="nav-center">
        <Link to="/">Accueil</Link>
        <Link to="/apropos">À propos</Link>
        <Link to="/projets">Projets</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="nav-right">
        <Link to="/inscription" className="btn-inscription">
          Inscription
        </Link>
      </div>

    </nav>
  )
}

export default Navbar