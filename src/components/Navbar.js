import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // Icône de profil de React Icons
import "./Navbar.css";

const Navbar = ({ doctorPhoto }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>DentalCare</h2>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/appointment">Prendre Rendez-vous</Link></li>
        <li><Link to="/stock">Gestion des Stocks</Link></li>
        <li><Link to="/prosthetics">Prothèses</Link></li>
        <li><Link to="/calendar">Calendrier</Link></li>
        <li><Link to="/roles">Gestion des Rôles</Link></li>

        {/* Icône de profil et lien vers la page de profil */}
        <li className="profile-icon">
          <Link to="/profile">
            {doctorPhoto ? (
              <img src={doctorPhoto} alt="Doctor's Profile" className="profile-img" />
            ) : (
              <FaUserCircle size={30} />
            )}
            <span className="profile-text">Mon Profil</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
