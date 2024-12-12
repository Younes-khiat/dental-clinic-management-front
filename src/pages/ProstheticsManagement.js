import React from "react";
import "./ProstheticsManagement.css";

const ProstheticsManagement = () => {
  const prostheticsData = [
    {
      id: 1,
      nom: "Prothèse Complète",
      description: "Prothèse idéale pour les patients édentés, offrant un sourire naturel.",
      image: "https://via.placeholder.com/150", // Espace réservé
    },
    {
      id: 2,
      nom: "Prothèse Partielle",
      description: "Prothèse adaptée pour remplacer quelques dents manquantes.",
      image: "https://via.placeholder.com/150", // Espace réservé
    },
    {
      id: 3,
      nom: "Bridge Dentaire",
      description: "Solution fixe pour remplacer une ou plusieurs dents adjacentes manquantes.",
      image: "https://via.placeholder.com/150", // Espace réservé
    },
  ];

  const clientProsthetics = [
    { id: 1, nomClient: "Jean Dupont", prothese: "Prothèse Complète", etat: "En cours" },
    { id: 2, nomClient: "Marie Curie", prothese: "Bridge Dentaire", etat: "Terminée" },
    { id: 3, nomClient: "Paul Valéry", prothese: "Prothèse Partielle", etat: "En attente" },
  ];

  return (
    <div className="prosthetics-management">
      <h1>Gestion des Prothèses</h1>

      {/* Section Prothèses */}
      <section className="prosthetics-gallery">
        <h2>Nos Prothèses</h2>
        <div className="prosthetics-cards">
          {prostheticsData.map((prothese) => (
            <div className="prosthetics-card" key={prothese.id}>
              <img src={prothese.image} alt={prothese.nom} />
              <h3>{prothese.nom}</h3>
              <p>{prothese.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section État des Prothèses des Clients */}
      <section className="client-prosthetics">
        <h2>État des Prothèses des Clients</h2>
        <table className="client-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom du Client</th>
              <th>Type de Prothèse</th>
              <th>État</th>
            </tr>
          </thead>
          <tbody>
            {clientProsthetics.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.nomClient}</td>
                <td>{client.prothese}</td>
                <td>{client.etat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ProstheticsManagement;
