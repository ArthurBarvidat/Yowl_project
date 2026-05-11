# Yowl — Application Sociale pour Gamers (Product Design + MVP)

Application web sociale conçue pour les joueurs, permettant de publier et d'interagir avec du contenu court. Réalisée en suivant un processus complet de product design : recherche utilisateur, personas, wireframes, maquettes, prototype, tests utilisateurs et développement MVP.

## Fonctionnalités

Yowl est une plateforme sociale orientée gaming où les utilisateurs peuvent :
- Créer un compte et se connecter
- Publier des posts (texte, réactions)
- Parcourir un fil global et des fils par jeu (League of Legends, Valorant, etc.)
- Trouver et suivre d'autres joueurs ("mates")
- Discuter dans des salons globaux par rang (Gold, Platine, etc.)

## Structure du projet

```
├── docs/
│   ├── 01_research/        # Benchmark, interviews, problématique, objectifs
│   ├── 02_personas/        # Personas (joueur casual, joueur compétitif, parents)
│   ├── 03_user_journey/    # Scénario principal avec points de friction
│   ├── 04_wireframes/      # Wireframes basse fidélité (PDF)
│   ├── 05_mockups/         # Maquettes haute fidélité avec justifications design
│   ├── 06_prototype/       # Description du prototype cliquable et captures
│   ├── 07_feedback/        # Protocole de test et synthèse des retours
│   ├── 08_prioritization/  # Matrice MoSCoW et définition du MVP
│   └── 09_pitch/           # Dossier pitch
└── mvp/
    └── yowl/               # Code source MVP Next.js
```

## Stack technique — MVP

- **Frontend** : Next.js (React), Tailwind CSS
- **Backend** : Next.js API Routes
- **Base de données** : MongoDB (via Mongoose)
- **Médias** : Cloudinary (upload d'images)

## Lancer le MVP en local

```bash
cd mvp/yowl
npm install
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

Fichier `.env.local` requis avec la chaîne de connexion MongoDB :

```
MONGODB_URI=your_mongodb_connection_string
```

## Processus de Product Design

Ce projet suit une démarche UX structurée :

1. **Recherche** — benchmark des plateformes existantes, interviews pour identifier les besoins
2. **Personas** — 3 profils utilisateurs (joueur casual, joueur compétitif, parents/superviseurs)
3. **User Journey** — cartographie du parcours principal avec points de friction
4. **Wireframes & Maquettes** — écrans basse et haute fidélité conçus sur Figma
5. **Prototype** — prototype cliquable testé avec des pairs
6. **Feedback** — collecte auprès de 3 à 5 testeurs, itérations sur les points de douleur
7. **Priorisation** — matrice MoSCoW pour définir le périmètre du MVP
8. **MVP** — implémentation du parcours utilisateur principal

## Contexte du projet

Réalisé dans le cadre du module Product Design Epitech. L'accent est mis sur la démarche et la méthodologie design, pas seulement sur le produit final.
