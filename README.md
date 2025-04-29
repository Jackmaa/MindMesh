# 🧠 MindMesh

> Plateforme MERN de comparaison de réseaux neuronaux - Fullstack TypeScript / TensorFlow.js / Socket.IO

[![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Build-Vite-purple?logo=vite)](https://vitejs.dev/)
[![Express](https://img.shields.io/badge/Backend-Express-black?logo=express)](https://expressjs.com/)
[![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb)](https://www.mongodb.com/)
[![Socket.IO](https://img.shields.io/badge/WebSocket-Socket.IO-black?logo=socket.io)](https://socket.io/)
[![TensorFlow.js](https://img.shields.io/badge/ML-TensorFlow.js-FF6F00?logo=tensorflow)](https://js.tensorflow.org/)

---

## 🚀 Stack Technique

- Frontend : **React** (Vite) + **TypeScript** + **TailwindCSS**
- Backend : **Express.js** + **TypeScript** + **Socket.IO**
- Base de données : **MongoDB** + **Mongoose**
- Machine Learning : **TensorFlow.js**
- Communication Temps Réel : **WebSocket (Socket.IO)**

---

## 📋 Fonctionnalités principales

- Création de réseaux neuronaux personnalisés (hidden layers, learning rate, etc.)
- Entraînement sur des datasets simples (XOR, AND, OR, sinus)
- Visualisation temps réel de la perte (“loss”) pendant l'entraînement
- Sauvegarde de modèles dans MongoDB (structure, poids, performances)
- Historique et comparaison de plusieurs modèles
- UI responsive, sobre et moderne

---

## 🛠 Installation locale

### 1. Cloner le repo

```bash
git clone https://github.com/Jackmaa/MindMesh.git
cd MindMesh
```

### 2. Setup du Backend

```bash
cd server
npm install
cp .env.example .env # créer et configurer le fichier .env
npm run dev
```

### 3. Setup du Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🌐 Variables d'environnement attendues (Backend)

```env
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/mindmesh
```

---

## 📁 Project Structure

/mindmesh
├── client/ # Frontend React (Vite + TailwindCSS + TS)
│ ├── src/
│ │ ├── components/ # Composants UI réutilisables
│ │ ├── pages/ # Pages principales (Dashboard, Compare, Details)
│ │ ├── services/ # Gestion des appels API
│ │ └── utils/ # Fonctions utilitaires
├── server/ # Backend Express + TypeScript
│ ├── src/
│ │ ├── controllers/ # Logique métier des routes API
│ │ ├── models/ # Modèles Mongoose
│ │ ├── routes/ # Définition des routes API REST
│ │ ├── services/ # Logique TensorFlow.js (entraînement, sauvegarde)
│ │ └── sockets/ # Gestion des événements WebSocket (Socket.IO)
├── public/ # Contenu statique si nécessaire
├── README.md
├── .env
├── package.json

## 📈 Roadmap (16 juin - 21 juillet)

- [x] Mise en place backend + frontend
- [ ] Entraînement TensorFlow.js simple (XOR)
- [ ] Suivi en temps réel via Socket.IO
- [ ] Stockage des modèles et historiques MongoDB
- [ ] Visualisation graphique des performances
- [ ] Système de comparaison multi-modèles
- [ ] Responsive + animations glitch/tech minimalistes
- [ ] Déploiement final sur Vercel / Render

---

## ✨ Esprit du projet

MindMesh vise à proposer une expérience claire et fluide pour comprendre, entraîner, et comparer des réseaux neuronaux simples à travers une interface moderne, tout en démontrant la maîtrise de la stack MERN, TypeScript, Socket.IO et TensorFlow.js.

---

## 🔗 Liens utiles

- [Documentation TensorFlow.js](https://js.tensorflow.org/)
- [Documentation Mongoose](https://mongoosejs.com/)
- [Documentation Vite](https://vitejs.dev/)
- [Documentation Socket.IO](https://socket.io/docs/)

---

> 🖖 Créé avec intensité, passion et discipline par **Vraith**.

```

```
