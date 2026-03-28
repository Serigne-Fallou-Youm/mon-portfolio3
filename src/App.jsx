import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";
import Inscription from "./pages/Inscription";
import ProjetDetails from "./pages/ProjetDetails";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/projet/:id" element={<ProjetDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;