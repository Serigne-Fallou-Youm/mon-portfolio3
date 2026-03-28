import fadal from "../assets/images/fadal.jpg";

function Apropos() {
  return (
    <div className="about-page">
      <h1>À propos de moi</h1>

      <div className="about-content">
        <img src={fadal} alt="profil" />

        <p>
          Je m'appelle <strong>Serigne Fallou Youm</strong>, passionné par le développement web et la création d’interfaces modernes et performantes.
          <br /><br />
          J’aime concevoir des applications web propres, intuitives et adaptées aux besoins des utilisateurs.
          <br /><br />
          Actuellement, je travaille avec des technologies comme <strong>React</strong> et je continue d’apprendre chaque jour.
          <br /><br />
          Mon objectif est de devenir un développeur complet capable de réaliser des projets professionnels de qualité.
        </p>
      </div>
    </div>
  )
}

export default Apropos