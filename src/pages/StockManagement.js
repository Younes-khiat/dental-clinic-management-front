import React, { useState } from "react";
import "./StockManagement.css";

const StockManagement = () => {
  // Exemple de données du stock
  const initialStockData = [
    { id: 1, nom: "Prothèse A", quantité: 10, prix: 120 },
    { id: 2, nom: "Prothèse B", quantité: 5, prix: 200 },
    { id: 3, nom: "Prothèse C", quantité: 20, prix: 80 },
    { id: 4, nom: "Prothèse D", quantité: 15, prix: 150 },
  ];

  const [stockData, setStockData] = useState(initialStockData);
  const [search, setSearch] = useState("");

  // Gestion de la recherche
  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  // Filtrage des données
  const filteredData = stockData.filter((item) =>
    item.nom.toLowerCase().includes(search)
  );

  return (
    <div className="stock-management">
      <h1>Gestion des Stocks</h1>

      {/* Barre de recherche */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={search}
          onChange={handleSearch}
        />
      </div>

      {/* Tableau de gestion des stocks */}
      <table className="stock-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom du Produit</th>
            <th>Quantité</th>
            <th>Prix (€)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nom}</td>
              <td>{item.quantité}</td>
              <td>{item.prix}</td>
              <td>
                <button className="btn-edit">Modifier</button>
                <button className="btn-delete">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockManagement;
