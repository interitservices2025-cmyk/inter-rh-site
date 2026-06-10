# INTER-RH — Site Web Officiel

Site web officiel du cabinet **INTER-RH — Inter Human Ressources**, basé à Yaoundé, Cameroun.

## 🚀 Technologies

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **React Hook Form** + **Zod** (validation des formulaires)
- **Lucide React** (icônes)

## 📦 Installation

```bash
npm install
```

## 🔧 Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Build Production

```bash
npm run build
npm start
```

## 📁 Structure du Projet

```
inter-rh-site/
├── app/                          # Routes Next.js App Router
│   ├── layout.tsx                # Layout principal avec Header/Footer
│   ├── page.tsx                  # Page d'accueil
│   ├── notre-agence/page.tsx     # Page Notre Agence
│   ├── nos-services/page.tsx     # Liste des services
│   ├── employeurs/page.tsx       # Espace Employeurs
│   ├── candidature/page.tsx      # Espace Candidats
│   ├── offres/page.tsx           # Offres d'emploi
│   ├── contact/page.tsx          # Page Contact
│   ├── actus/
│   │   ├── page.tsx              # Liste des articles
│   │   └── [slug]/page.tsx       # Article détail
│   ├── services/[slug]/page.tsx  # Service détail
│   ├── sitemap.ts                # Sitemap XML automatique
│   ├── robots.ts                 # Robots.txt
│   └── not-found.tsx             # Page 404
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Navigation principale avec dropdown
│   │   ├── Footer.tsx            # Pied de page
│   │   └── MobileMenu.tsx        # Menu mobile drawer
│   ├── sections/
│   │   └── PageHero.tsx          # Hero réutilisable pour toutes les pages
│   ├── ui/
│   │   ├── Button.tsx            # Composant bouton
│   │   ├── Badge.tsx             # Badge/tag
│   │   ├── ServiceCard.tsx       # Carte service
│   │   ├── TestimonialCard.tsx   # Carte témoignage
│   │   ├── NewsCard.tsx          # Carte article
│   │   ├── OfferCard.tsx         # Carte offre d'emploi
│   │   └── StepCard.tsx          # Carte étape numérotée
│   └── forms/
│       ├── ContactForm.tsx       # Formulaire de contact
│       └── ApplicationForm.tsx   # Formulaire de candidature
│
├── lib/
│   ├── data/
│   │   ├── services.ts           # Données des services
│   │   ├── testimonials.ts       # Témoignages clients
│   │   ├── news.ts               # Articles d'actualité
│   │   └── offers.ts             # Offres d'emploi
│   ├── types.ts                  # Types TypeScript
│   └── utils.ts                  # Utilitaires (cn, formatDate, slugify)
│
└── public/                       # Assets statiques
```

## 🎨 Système de Design

### Couleurs principales
- **Rouge primaire** : `#E63946` — CTAs, accents, liens actifs
- **Navy** : `#1B2A4A` — Footer, hero, titres
- **Gris clair** : `#F0F4F8` — Sections alternées

### Typographie
- **Font** : Inter (Google Fonts)

## 📄 Pages

| Route | Titre |
|---|---|
| `/` | Accueil |
| `/notre-agence` | Notre Agence |
| `/nos-services` | Nos Services |
| `/services/[slug]` | Détail Service |
| `/employeurs` | Espace Employeurs |
| `/candidature` | Espace Candidats |
| `/offres` | Offres & Opportunités |
| `/contact` | Contact |
| `/actus` | Actualités |
| `/actus/[slug]` | Article Détail |

## 📞 Contact INTER-RH

- **Adresse** : Rue 2.365, Yaoundé-Tsinga, Cameroun (Derrière Tradex)
- **Téléphone** : +237 679 033 398 / +237 695 296 446
- **Email** : contact@inter-rh.com
- **Site** : [inter-rh.com](https://inter-rh.com)

---

© 2026 INTER-RH — Inter Human Ressources. Tous droits réservés.
