import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Style par défaut de React Calendar
import "./AppointmentPage.css"; // Style personnalisé

const AppointmentPage = () => {
  // État des rendez-vous
  const [appointments, setAppointments] = useState([]);

  // État du formulaire
  const [formData, setFormData] = useState({
    name: "",
    date: new Date(),
    time: "",
    reason: "",
  });

  // Gérer le changement dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Gérer la sélection de la date
  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  // Ajouter un rendez-vous
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.time && formData.reason) {
      setAppointments([
        ...appointments,
        { ...formData, id: appointments.length + 1 },
      ]);
      setFormData({
        name: "",
        date: new Date(),
        time: "",
        reason: "",
      });
    } else {
      alert("Tous les champs doivent être remplis.");
    }
  };

  return (
    <div className="appointment-page">
      <h1>Prendre un Rendez-vous</h1>

      {/* Formulaire de rendez-vous */}
      <form onSubmit={handleSubmit} className="appointment-form">
        <label>
          Nom :
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Date :
          <Calendar onChange={handleDateChange} value={formData.date} />
        </label>

        <label>
          Heure :
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionner une heure</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
          </select>
        </label>

        <label>
          Raison :
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="btn-submit">Confirmer le rendez-vous</button>
      </form>

      {/* Liste des rendez-vous pris */}
      <div className="appointments-list">
        <h2>Rendez-vous pris</h2>
        {appointments.length > 0 ? (
          <ul>
            {appointments.map((appointment) => (
              <li key={appointment.id}>
                <p>
                  <strong>{appointment.name}</strong> - {appointment.reason}
                  <br />
                  <strong>Date :</strong> {appointment.date.toLocaleDateString()} -{" "}
                  <strong>Heure :</strong> {appointment.time}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucun rendez-vous pris pour le moment.</p>
        )}
      </div>
    </div>
  );
};

export default AppointmentPage;
