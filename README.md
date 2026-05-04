# Yowl — Social App for Gamers (Product Design + MVP)

A social web application designed for gamers, allowing users to publish and interact with short content. Built following a full product design process: user research, personas, wireframes, mockups, prototype, user testing, and MVP development.

## What it does

Yowl is a gaming-focused social platform where users can:
- Create an account and log in
- Publish posts (text, reactions)
- Browse a global feed and game-specific feeds (League of Legends, Valorant, etc.)
- Find and follow other players ("mates")
- Chat in rank-based global chatrooms (Gold, Platinum, etc.)

## Repository structure

```
├── docs/
│   ├── 01_research/        # Benchmark, interviews, problem statement, objectives
│   ├── 02_personas/        # User personas (casual gamer, competitive player, parents)
│   ├── 03_user_journey/    # Main usage scenario with friction points
│   ├── 04_wireframes/      # Low-fidelity wireframes (PDF)
│   ├── 05_mockups/         # High-fidelity mockups with design justifications
│   ├── 06_prototype/       # Clickable prototype description and screenshots
│   ├── 07_feedback/        # User testing protocol and feedback summary
│   ├── 08_prioritization/  # MoSCoW matrix and MVP definition
│   └── 09_pitch/           # (pitch deck folder)
└── mvp/
    └── yowl/               # Next.js MVP source code
```

## MVP — Tech stack

- **Frontend**: Next.js (React), Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB (via Mongoose)
- **Deployment**: local (`npm run dev`)

## Run the MVP locally

```bash
cd mvp/yowl
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

You need a `.env.local` file with your MongoDB connection string:

```
MONGODB_URI=your_mongodb_connection_string
```

## Product Design process

This project followed a structured UX process:

1. **Research** — benchmarked existing platforms, interviewed classmates to identify needs
2. **Personas** — 3 user profiles (casual gamer, competitive player, parents/supervisors)
3. **User journey** — mapped the main flow with friction points
4. **Wireframes & Mockups** — low and high fidelity screens designed in Figma
5. **Prototype** — clickable prototype tested with peers
6. **Feedback** — collected from 3-5 testers, iterated on pain points
7. **Prioritization** — MoSCoW matrix to define MVP scope
8. **MVP** — implemented the core user flow

## Project context

Built as part of an Epitech Product Design project. The focus was on the design process and methodology, not just the final product.
