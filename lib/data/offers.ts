import { JobOffer } from "@/lib/types";

export const jobOffers: JobOffer[] = [
  {
    id: "1",
    title: "Chargé(e) de recrutement",
    location: "Yaoundé, Cameroun",
    type: "CDI",
    sector: "PME Tech",
    description:
      "Pilotez le cycle complet de recrutement pour une équipe en forte croissance dans le secteur du numérique. Sourcing, tri de CV, conduite d'entretiens et onboarding.",
    requirements: ["Sourcing actif", "Techniques d'entretien", "Onboarding", "Aisance relationnelle"],
    publishedAt: "2026-01-21",
    isActive: true,
  },
  {
    id: "2",
    title: "Développeur Full-Stack",
    location: "Yaoundé, Cameroun",
    type: "CDD",
    sector: "Startup internationale",
    description:
      "Concevez et développez des applications web modernes au sein d'une équipe distribuée. Vous travaillerez sur des architectures modernes avec des technologiques récentes.",
    requirements: ["React / Next.js", "Node.js & TypeScript", "Bases de données SQL/NoSQL", "Git / GitHub"],
    publishedAt: "2026-01-21",
    isActive: true,
  },
  {
    id: "3",
    title: "Responsable Administratif & Financier",
    location: "Yaoundé, Cameroun",
    type: "CDI",
    sector: "ONG",
    description:
      "Supervision de la gestion administrative, comptable et financière d'une structure à mission sociale. Gestion des budgets, reporting bailleurs et encadrement des équipes.",
    requirements: ["Comptabilité générale", "Gestion de trésorerie", "Reporting financier", "Management"],
    publishedAt: "2026-01-21",
    isActive: true,
  },
  {
    id: "4",
    title: "Programme d'immigration — Canada",
    location: "Canada / Manitoba / Québec",
    type: "CDI",
    sector: "INTER-RH",
    description:
      "Sélection de candidats qualifiés pour un programme d'immigration professionnelle vers le Manitoba et le Québec. Accompagnement complet dans l'intégration.",
    requirements: ["Diplôme universitaire", "Expérience pro qualifiée", "Niveau de langue (IELTS/TEF)", "Projet de vie"],
    publishedAt: "2026-01-21",
    isActive: true,
  },
  {
    id: "5",
    title: "Formation Leadership Manager",
    location: "Yaoundé, Cameroun",
    type: "Freelance",
    sector: "Grand groupe industriel",
    description:
      "Programme de formation continue de 6 semaines à destination des managers intermédiaires pour renforcer le leadership et l'esprit d'équipe.",
    requirements: ["Expérience en management", "Qualités d'animateur", "Ingénierie de formation", "Coaching"],
    publishedAt: "2026-01-21",
    isActive: true,
  },
  {
    id: "6",
    title: "Stage Marketing Digital",
    location: "Yaoundé, Cameroun",
    type: "Stage",
    sector: "Agence média",
    description:
      "Six mois en immersion sur la stratégie digitale, le SEO, le copywriting et la production de contenu créatif pour nos clients.",
    requirements: ["Réseaux sociaux", "Notions SEO", "Aisance rédactionnelle", "Outils de design (Canva/Figma)"],
    publishedAt: "2026-01-21",
    isActive: true,
  },
];
