# MindMesh Devlog

## 🗓️ 29 Avril 2025 — 🕛 Matin

---

### 🎯 Objectifs

- Définir le projet de remplacement de stage
- Trouver le nom officiel du projet
- Structurer la stack technique, l'organisation des dossiers, et le README
- Initier la base du projet MindMesh (backend & frontend)

---

### 🛠️ Actions réalisées

- **Nom du projet choisi** : `MindMesh`
- **Création du dépôt GitHub** : Initialisation du projet
- **Création de l’arborescence MERN + TypeScript** :
  - `/client` → Vite + React + TailwindCSS + TypeScript
  - `/server` → Express + TypeScript + Socket.IO + Mongoose
- **Installation des stacks principales** :
  - Vite, React, TailwindCSS
  - Express, Mongoose, Socket.IO, dotenv
- **Mise en place de la connexion MongoDB** :
  - Configuration du fichier `.env`
  - Connexion sécurisée via Mongoose
- **Création du modèle Mongoose `NeuralModel`** :
  - Définition de la structure des réseaux neuronaux en base
- **Création de la structure API REST** :
  - `POST /api/models` → Enregistrer un modèle
  - `GET /api/models` → Récupérer les modèles existants
- **Refactorisation propre** :
  - Séparation claire entre `routes/` et `controllers/`
- **Validation via Postman** :
  - Insertion d'un premier modèle test dans MongoDB
- **Premier Commit & Push GitHub** :
  - Sauvegarde de l'état fonctionnel du backend MindMesh

---

### 🧐 Résultats obtenus

- ✅ Projet initialisé et fonctionnel en local
- ✅ Connexion MongoDB établie et testée
- ✅ API de base pour la gestion de modèles operationnelle
- ✅ Organisation du backend pensée pour évoluer
- ✅ Base solide pour intégrer TensorFlow.js et Socket.IO

---

### 📝 Commentaires / Ressenti

> _Première session intense mais ultra productive.  
> MindMesh a franchi son premier seuil d'existence aujourd'hui.  
> L'ossature backend est propre, scalable, et prête à accueillir l'intelligence neuronale._  
> **– Vraith**
