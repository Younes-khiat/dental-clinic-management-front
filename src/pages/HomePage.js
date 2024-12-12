import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Section Hero */}
      <header className="hero-section">
        <h1>Bienvenue chez <span className="highlight">DentalCare</span></h1>
        <p>Un sourire sain commence ici. Découvrez nos services pour des soins dentaires de qualité.</p>
        <button className="cta-button">Prenez Rendez-vous</button>
      </header>

      {/* Section Services */}
      <section className="services-section">
        <h2>Nos Services</h2>
        <div className="services">
          <div className="service-card">
            <img src="https://via.placeholder.com/100" alt="Service 1" />
            <h3>Consultation Dentaire</h3>
            <p>Des consultations personnalisées pour diagnostiquer vos besoins dentaires.</p>
          </div>
          <div className="service-card">
            <img src="https://via.placeholder.com/100" alt="Service 2" />
            <h3>Implants Dentaires</h3>
            <p>Des implants de haute qualité pour un sourire éclatant et durable.</p>
          </div>
          <div className="service-card">
            <img src="https://via.placeholder.com/100" alt="Service 3" />
            <h3>Orthodontie</h3>
            <p>Des solutions modernes pour aligner vos dents et améliorer votre sourire.</p>
          </div>
        </div>
      </section>

      {/* Section Explicative */}
      <section className="about-section">
        <h2>Pourquoi choisir DentalCare ?</h2>
        <p>
          DentalCare est un cabinet moderne offrant des soins dentaires complets. Nos professionnels qualifiés 
          sont dédiés à fournir des traitements adaptés à chaque patient dans une ambiance chaleureuse et rassurante.
        </p>
        <ul className="features">
          <li>✔ Équipement de pointe</li>
          <li>✔ Hygiène irréprochable</li>
          <li>✔ Equipe qualifiée et expérimentée</li>
        </ul>
      </section>

      {/* Section Contact et Localisation */}
      <section className="contact-section">
        <h2>Contactez-nous</h2>
        <div className="contact-info">
          <div>
            <h3>Adresse :</h3>
            <p>123 Rue des Dentistes, Ville Exemplaire, Pays</p>
          </div>
          <div>
            <h3>Téléphone :</h3>
            <p>+33 1 23 45 67 89</p>
          </div>
          <div>
            <h3>Email :</h3>
            <p>contact@dentalcare.com</p>
          </div>
        </div>
        <div className="map">
          <h3>Localisation :</h3>
          <iframe
            title="DentalCare Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.61483878304!2d2.2769957270146833!3d48.85884430000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1c70c2b9b3%3A0x84f3e5f10000000!2sCabinet%20Dentaire!5e0!3m2!1sfr!2sfr!4v1691134204603"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
