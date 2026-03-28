import { useParams } from "react-router-dom";

function ProjetDetails() {
  const { id } = useParams();

  const projets = [
    {
      id: 1,
      title: "Site E-commerce",
      description: "Application complète avec panier et paiement.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Portfolio Personnel",
      description: "Portfolio moderne en React.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Dashboard Admin",
      description: "Interface admin avec gestion des données.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
  id: 4,
  title: "App Mobile UI",
  image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80",
},
    {
      id: 5,
      title: "Blog Platform",
      description: "Plateforme de blog avec gestion d'articles.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Landing Page",
      description: "Page marketing moderne et attractive.",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const projet = projets.find((p) => p.id === parseInt(id));

  if (!projet) {
    return <h2>Projet non trouvé</h2>;
  }

  return (
    <div className="details">
      <h1>{projet.title}</h1>
      <img src={projet.image} alt={projet.title} />
      <p>{projet.description}</p>
    </div>
  )
}

export default ProjetDetails