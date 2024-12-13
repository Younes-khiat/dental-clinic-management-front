import React from 'react';
import './App.css';
import backgroundImage from './images/background.jpeg'; 
import logo from './logo.png'; 

const App = () => {
  return (
    <div className="app-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay"></div>
      <div className="header-bar">
  <div className="site-name">Perle Rare Dentaire</div>
  <div className="social-links">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
  </div>
</div>
      <div className="content-container">

        <div className="logo">
          <img src={logo} alt="Cabinet Dentaire Logo" />
        </div>
        <form class="login-form">
      <h2>Login Form</h2>
      <div class="form-group">
        <input type="email" placeholder="Email Address" required/>
      </div>
      <div class="form-group">
        <input type="password" placeholder="Password" required/>
      </div>
      <div class="form-group forgot-password">
        <a href="#">Forgot password?</a>
      </div>
      <button type="submit" class="btn">Login</button>
      <p class="signup-link">
        Create an account <a href="#">Signup now</a>
      </p>
    </form>
        <div className="contact">
          <h3>Contactez-nous</h3>
          <p>Téléphone : 020 31 58 73</p>
          <p>Email : contact@ardentys.com</p>
          <p>Adresse : Groupe propriété n°459 section 1 (CC3), Ouled Fayet, Alger</p>
        </div>
        <div className="testimonials">
          <h3>Avis de nos clients</h3>
          <div className="testimonial">
            <p><strong>Hamza Nassim Bensaïah :</strong> Je vous remercie vraiment pour votre dévouement et professionnalisme.</p>
          </div>
          <div className="testimonial">
            <p><strong>Mohector Hector :</strong> Dr, un artiste clinique au top bravo.</p>
          </div>
          <div className="testimonial">
            <p><strong>Samia Samia :</strong> Je tiens à remercier toute l'équipe de la clinique.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;