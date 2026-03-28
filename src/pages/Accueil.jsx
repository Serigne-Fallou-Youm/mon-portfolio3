import profile from "../assets/images/profile.jpg";
import { Link } from "react-router-dom";
function Accueil() {
  return (
    <section className="hero">

      <div className="hero-left">
        <h1>
          Salut, je suis <span>Serigne Fallou Youm</span>
        </h1>

        <p>Développeur Web spécialisé en React et Laravel, je transforme vos idées en
  applications modernes, performantes et élégantes.</p>

       <Link to="/projets" className="btn">
  Voir mes projets
</Link>
      </div>

      <div className="hero-right">
        <img src={profile} alt="profil" />
      </div>

    </section>
  )
}

export default Accueil