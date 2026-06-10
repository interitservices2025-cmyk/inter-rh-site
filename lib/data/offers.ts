import { JobOffer } from "@/lib/types";

export const jobOffers: JobOffer[] = [
  {
    id: "1",
    title: "Directeur des Ressources Humaines",
    location: "Yaoundé, Cameroun",
    type: "CDI",
    sector: "Ressources Humaines",
    description:
      "Nous recherchons un Directeur RH expérimenté pour piloter la stratégie des ressources humaines d'une entreprise en pleine croissance à Yaoundé. Vous serez en charge de la politique RH, du développement des talents et de la gestion des relations sociales.",
    requirements: ["10+ ans d'expérience", "Master RH ou équivalent", "Leadership"],
    publishedAt: "2026-01-15",
    deadline: "2026-03-01",
    isActive: true,
  },
  {
    id: "2",
    title: "Chargé de Recrutement",
    location: "Douala, Cameroun",
    type: "CDI",
    sector: "Ressources Humaines",
    description:
      "En tant que Chargé de Recrutement, vous gérez le processus de recrutement de bout en bout : définition des besoins, sourcing, sélection, entretiens et onboarding des nouveaux collaborateurs.",
    requirements: [
      "3+ ans en recrutement",
      "Maîtrise ATS",
      "Communication",
      "Réseaux sociaux professionnels",
    ],
    publishedAt: "2026-01-20",
    deadline: "2026-02-28",
    isActive: true,
  },
  {
    id: "3",
    title: "Chef de Projet IT",
    location: "Yaoundé, Cameroun",
    type: "CDI",
    sector: "Informatique",
    description:
      "Nous recherchons un Chef de Projet IT pour piloter des projets de transformation digitale. Vous coordonnerez les équipes techniques, gérerez les délais et budgets, et assurerez la communication avec les parties prenantes.",
    requirements: [
      "PMP ou Prince2",
      "5+ ans en gestion de projets IT",
      "Agile/Scrum",
      "Leadership",
    ],
    publishedAt: "2026-01-22",
    isActive: true,
  },
  {
    id: "4",
    title: "Consultant en Immigration",
    location: "Yaoundé, Cameroun",
    type: "CDI",
    sector: "Immigration",
    description:
      "Rejoignez notre équipe en tant que Consultant en Immigration. Vous accompagnerez nos clients dans leurs démarches d'immigration vers le Canada : évaluation, constitution des dossiers, suivi des demandes.",
    requirements: [
      "Connaissance du système canadien",
      "Anglais courant",
      "Rigueur",
      "Empathie",
    ],
    publishedAt: "2026-01-18",
    deadline: "2026-03-15",
    isActive: true,
  },
  {
    id: "5",
    title: "Formateur en Développement des Compétences",
    location: "Yaoundé/Douala, Cameroun",
    type: "Freelance",
    sector: "Formation",
    description:
      "Nous recherchons des formateurs freelances spécialisés en développement des compétences pour animer des sessions de formation en entreprise. Domaines : leadership, gestion de projets, communication, vente.",
    requirements: [
      "Expérience en formation",
      "Certification pédagogique",
      "Disponibilité",
    ],
    publishedAt: "2026-01-25",
    isActive: true,
  },
  {
    id: "6",
    title: "Stagiaire en Ressources Humaines",
    location: "Yaoundé, Cameroun",
    type: "Stage",
    sector: "Ressources Humaines",
    description:
      "Stage de 3 à 6 mois au sein de notre équipe RH. Vous participerez aux processus de recrutement, à la gestion administrative du personnel et à des projets RH variés. Excellente opportunité pour démarrer votre carrière.",
    requirements: [
      "Bac+3 en RH ou Gestion",
      "Bonne communication",
      "Maîtrise Pack Office",
    ],
    publishedAt: "2026-01-10",
    deadline: "2026-02-15",
    isActive: true,
  },
];
