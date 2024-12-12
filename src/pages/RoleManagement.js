import React, { useState } from "react";
import "./RoleManagement.css";

const RoleManagement = () => {
  // Exemple de données des utilisateurs
  const initialUsers = [
    { id: 1, nom: "Jean Dupont", role: "Admin" },
    { id: 2, nom: "Marie Curie", role: "Médecin" },
    { id: 3, nom: "Paul Valéry", role: "Assistant" },
    { id: 4, nom: "Sophie Germain", role: "Réceptionniste" },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [editingUserId, setEditingUserId] = useState(null);
  const [newRole, setNewRole] = useState("");

  // Activer le mode édition
  const handleEdit = (id, currentRole) => {
    setEditingUserId(id);
    setNewRole(currentRole);
  };

  // Sauvegarder les modifications
  const handleSave = (id) => {
    setUsers(users.map((user) => (user.id === id ? { ...user, role: newRole } : user)));
    setEditingUserId(null);
    setNewRole("");
  };

  return (
    <div className="role-management">
      <h1>Gestion des Rôles</h1>
      <table className="roles-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Rôle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nom}</td>
              <td>
                {editingUserId === user.id ? (
                  <select
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                  >
                    <option value="Admin">Admin</option>
                    <option value="Médecin">Médecin</option>
                    <option value="Assistant">Assistant</option>
                    <option value="Réceptionniste">Réceptionniste</option>
                  </select>
                ) : (
                  user.role
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <button className="btn-save" onClick={() => handleSave(user.id)}>
                    Sauvegarder
                  </button>
                ) : (
                  <button
                    className="btn-edit"
                    onClick={() => handleEdit(user.id, user.role)}
                  >
                    Modifier
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
