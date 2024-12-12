import React, { useState } from "react";
import "./ProfilePage.css"; // Assurez-vous que ce fichier CSS existe

const ProfilePage = () => {
  const [doctor, setDoctor] = useState({
    name: "Dr. Dupont",
    specialty: "Dentiste Généraliste",
    email: "dupont@dentalcare.com",
    phone: "01 23 45 67 89",
    address: "123 Rue des Dentistes, Ville, Pays",
    photo: "", // Ajouter un état pour la photo du médecin
  });

  const [isEditing, setIsEditing] = useState(false); // Mode édition activé/désactivé
  const [newDoctorData, setNewDoctorData] = useState(doctor);
  const [imagePreview, setImagePreview] = useState(null); // Pour afficher l'aperçu de l'image

  // Fonction pour gérer le changement dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDoctorData({ ...newDoctorData, [name]: value });
  };

  // Fonction pour gérer le téléchargement de la photo
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Affiche l'aperçu de l'image
        setNewDoctorData({ ...newDoctorData, photo: reader.result }); // Met à jour l'état
      };
      reader.readAsDataURL(file);
    }
  };

  // Fonction pour activer le mode édition
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Fonction pour sauvegarder les modifications
  const handleSave = () => {
    setDoctor(newDoctorData);
    setIsEditing(false);
  };

  // Fonction pour annuler les modifications
  const handleCancel = () => {
    setNewDoctorData(doctor);
    setIsEditing(false);
  };

  // Fonction de déconnexion (simulée)
  const handleLogout = () => {
    // Logique de déconnexion
    alert("Déconnecté avec succès.");
  };

  return (
    <div className="profile-page">
      <h1>Profil de {doctor.name}</h1>

      {/* Affichage de l'image de profil */}
      <div className="profile-photo">
        {imagePreview ? (
          <img src={imagePreview} alt="Doctor's profile" className="profile-img" />
        ) : (
          <div className="profile-placeholder">Pas d'image</div>
        )}
      </div>

      {/* Formulaire de profil - Mode lecture ou édition */}
      <div className="profile-info">
        {isEditing ? (
          <div>
            <label>
              Nom :
              <input
                type="text"
                name="name"
                value={newDoctorData.name}
                onChange={handleChange}
              />
            </label>

            <label>
              Spécialité :
              <input
                type="text"
                name="specialty"
                value={newDoctorData.specialty}
                onChange={handleChange}
              />
            </label>

            <label>
              Email :
              <input
                type="email"
                name="email"
                value={newDoctorData.email}
                onChange={handleChange}
              />
            </label>

            <label>
              Téléphone :
              <input
                type="text"
                name="phone"
                value={newDoctorData.phone}
                onChange={handleChange}
              />
            </label>

            <label>
              Adresse :
              <input
                type="text"
                name="address"
                value={newDoctorData.address}
                onChange={handleChange}
              />
            </label>

            <label>
              Photo du Profil :
              <input
                type="file"
                name="photo"
                onChange={handleImageChange}
                accept="image/*"
              />
            </label>

            <button onClick={handleSave} className="save-button">Sauvegarder</button>
            <button onClick={handleCancel} className="cancel-button">Annuler</button>
          </div>
        ) : (
          <div>
            <p><strong>Nom :</strong> {doctor.name}</p>
            <p><strong>Spécialité :</strong> {doctor.specialty}</p>
            <p><strong>Email :</strong> {doctor.email}</p>
            <p><strong>Téléphone :</strong> {doctor.phone}</p>
            <p><strong>Adresse :</strong> {doctor.address}</p>

            <button onClick={handleEdit} className="edit-button">Modifier</button>
          </div>
        )}
      </div>

      <button onClick={handleLogout} className="logout-button">Déconnexion</button>
    </div>
  );
};

export default ProfilePage;
