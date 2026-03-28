import { Link } from "react-router-dom";

function Projets() {
  const projets = [
    {
      id: 1,
      title: "Site E-commerce",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Portfolio Personnel",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Dashboard Admin",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
  id: 4,
  title: "App Mobile UI",
  image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80",
},
    {
      id: 5,
      title: "Blog Platform",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Landing Page",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <div className="projets">
      <h1>Mes Projets</h1>

      <div className="projets-grid">
        {projets.map((proj) => (
          <div className="card" key={proj.id}>
            <img src={proj.image} alt={proj.title} />

            {/* Overlay */}
            <div className="overlay">
              <h3>{proj.title}</h3>

              <div className="buttons">
                <Link to={`/projet/${proj.id}`} className="btn">
                  Voir projet
                </Link>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="btn github"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projets