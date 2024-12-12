import React, { useState } from "react";
import Calendar from "react-calendar"; // Importez React Calendar
import "react-calendar/dist/Calendar.css"; // Style par défaut de React Calendar
import "./CalendarPage.css"; // Style personnalisé

const CalendarPage = () => {
  // État pour la date sélectionnée
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Données des rendez-vous
  const appointments = [
    { id: 1, medecin: "Dr. Dupont", date: "2024-12-01", heure: "10:00", patient: "Jean Dupuis" },
    { id: 2, medecin: "Dr. Martin", date: "2024-12-01", heure: "11:00", patient: "Marie Curie" },
    { id: 3, medecin: "Dr. Dupont", date: "2024-12-02", heure: "09:30", patient: "Paul Valéry" },
    { id: 4, medecin: "Dr. Martin", date: "2024-12-02", heure: "14:00", patient: "Sophie Germain" },
  ];

  // Convertit la date sélectionnée au format "YYYY-MM-DD"
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Filtrer les rendez-vous pour la date sélectionnée
  const filteredAppointments = appointments.filter(
    (appointment) => appointment.date === formatDate(selectedDate)
  );

  return (
    <div className="calendar-page">
      <h1>Calendrier des Rendez-vous</h1>

      {/* Composant Calendrier */}
      <div className="calendar-container">
        <Calendar onChange={setSelectedDate} value={selectedDate} />
      </div>

      {/* Affichage des rendez-vous */}
      <div className="appointments-container">
        <h2>Rendez-vous pour le {formatDate(selectedDate)}</h2>
        {filteredAppointments.length > 0 ? (
          <ul className="appointments-list">
            {filteredAppointments.map((appointment) => (
              <li key={appointment.id} className="appointment-item">
                <p><strong>Médecin :</strong> {appointment.medecin}</p>
                <p><strong>Patient :</strong> {appointment.patient}</p>
                <p><strong>Heure :</strong> {appointment.heure}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucun rendez-vous pour cette date.</p>
        )}
      </div>
    </div>
  );
};

export default CalendarPage;
