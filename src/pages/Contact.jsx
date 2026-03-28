import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé !");
  };

  return (
    <div className="contact-page">
      <h1>Contact</h1>

      <div className="contact-wrapper">

        <div className="contact-info">
          <div className="contact-card">
            <h3>Email</h3>
            <p>youmserignefallou17@gmail.com</p>
          </div>

          <div className="contact-card">
            <h3>Téléphone</h3>
            <p>+221 76 631 25 18</p>
          </div>

          <div className="contact-card">
            <h3>Localisation</h3>
            <p>Thies, Sénégal</p>
          </div>

          <div className="contact-card">
            <h3>Réseaux sociaux</h3>
            <p>WhatsApp • GitHub • Facebook</p>
          </div>
        </div>

        <div className="contact-form-box">
          <h2>Envoyer un message</h2>

          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Nom complet"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Votre message..."
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Envoyer</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact