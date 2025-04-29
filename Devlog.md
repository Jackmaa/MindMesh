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

---

# 🔠 Template pour les prochaines entrées

## 🗓️ [29 Avril 2025] — 🕛 [Après-midi /]

---

### 🎯 Objectifs

- [Renforcer la robustesse de la fonction trainModel]
- [Typage complet et sécurisé avec TypeScript]
- [Optimisation de la gestion mémoire avec TensorFlow.js]
- [Préparation d’un système de monitoring de l’entraînement (callback externe)]
- [Nettoyage et modularisation du code d'entraînement]

---

### 🛠️ Actions réalisées

- [Nettoyage et modularisation du code d'entraînement]
  - - [Correction du typage du paramètre onEpochEnd]
  - - [Ajout d'un support pour callback externe pendant l'entraînement]
- [Gestion mémoire améliorée :]
  - - [Encapsulation de la génération de xs et ys dans tf.tidy()]
  - - [Utilisation explicite de dispose() après l'entraînement pour éviter les fuites]
- [Création d'une fonction serializeWeights(model) :]
  - - [Transformation sûre des poids TensorFlow en tableaux JS natifs]
- [Validation complète du typage :]
- - [ Correction du type de retour de serializeWeights pour supporter toutes les dimensions possibles (number | number[] | number[][] | number[][][])]

---

### 🧐 Résultats obtenus

- ✅ Fonction trainModel 100% typée et sécurisée
- ✅ Libération systématique des Tensors pour éviter les memory leaks
- ✅ Architecture prête pour un suivi en temps réel du training (live loss monitoring)
- ✅ Base d’entraînement propre, claire et extensible pour MindMesh

---

### 📝 Commentaires / Ressenti

> _Session de l'après-midi focalisée sur la propreté et la rigueur.
> Le moteur d'entraînement neuronal est prêt à encaisser des itérations sérieuses.
> Typage strict, mémoire propre, et architecture souple pour la suite.
> MindMesh a désormais un cœur d'entraînement solide._ > **– Vraith**

---
