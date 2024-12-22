import React from 'react';
import './App.css';
import backgroundImage from './images/background.jpeg'; 
import logo from './images/logo512.png';
const App = () => {
  return (
    <div className="app-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay"></div>
      <div className="header-bar">
      <div className="logo">
          <img src={logo} alt="Cabinet Dentaire Logo"className="site-logo" />
        </div>
        <div className="site-name">Perle Rare Dentaire</div>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <br></br> <br></br>
      <div className="content-container">
        <aside className="sidebar">
          <h3>Nos Spécialités</h3>
          <ul>
            <li>Implants dentaires</li>
            <li>Orthodontie</li>
            <li>Blanchiment des dents</li>
            <li>Soins esthétiques</li>
          </ul>
          <div className="contact">
            <h3>Contactez-nous</h3>
            <p><strong>Téléphone :</strong> 020 31 58 73</p>
            <p><strong>Email :</strong> contact@ardentys.com</p>
            <p><strong>Adresse :</strong> Groupe propriété n°459 section 1 (CC3), Ouled Fayet, Alger</p>
          </div>
          <div className="testimonials">
            <h3>Avis de nos clients</h3>
            <div className="testimonial">
              <p><strong>Hamza Nassim Bensaïah :</strong> Je vous remercie vraiment pour votre dévouement et professionnalisme.</p>
              <div className="stars">★★★★★</div>
            </div>
            <div className="testimonial">
              <p><strong>Mohector Hector :</strong> Dr, un artiste clinique au top bravo.</p>
              <div className="stars">★★★★☆</div>
            </div>
            <div className="testimonial">
              <p><strong>Samia Samia :</strong> Je tiens à remercier toute l'équipe de la clinique.</p>
              <div className="stars">★★★★★</div>
            </div>
          </div>
        </aside>
        <div className="main-content">
          <div className="form-header">
            <button className="tab active">Login</button>
            <button className="tab">Signup</button>
          </div>
          <form className="login-form">
            <h2>Login Form</h2>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="form-group forgot-password">
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="btn">Login</button>
            <p className="signup-link">
              Create an account <a href="#">Signup now</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
