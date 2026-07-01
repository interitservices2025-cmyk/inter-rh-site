import { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "1",
    slug: "gestion-des-talents",
    title: "Gestion des talents & recrutement",
    shortDescription:
      "Recrutement ciblé, sélection rigoureuse et intégration réussie de vos collaborateurs.",
    fullDescription:
      "Notre service de gestion des talents vous accompagne dans toutes les étapes du cycle de recrutement. De l'analyse des besoins à l'intégration du candidat, nous vous garantissons des profils adaptés à votre culture d'entreprise et à vos objectifs stratégiques.",
    icon: "Users",
    imageUrl:
      "/images/service_recrutement.jpg",
    features: [
      "Analyse approfondie des postes et compétences requises",
      "Rédaction et diffusion d'offres sur plateformes ciblées",
      "Tri et présélection avec outils RH et IA",
      "Conduite d'entretiens structurés",
      "Tests techniques & psychométriques",
      "Rapport complet avec recommandations argumentées",
    ],
  },
  {
    id: "2",
    slug: "conseil-strategique",
    title: "Conseil stratégique",
    shortDescription:
      "Accompagnement stratégique pour optimiser vos ressources humaines et atteindre vos objectifs.",
    fullDescription:
      "Notre expertise en conseil stratégique vous permet d'aligner votre politique RH avec vos ambitions d'entreprise. Nous vous aidons à structurer vos organisations, développer vos talents internes et anticiper les évolutions de votre secteur.",
    icon: "TrendingUp",
    imageUrl:
      "/images/service_strategy.jpg",
    features: [
      "Audit organisationnel et diagnostic RH",
      "Définition de la stratégie RH",
      "Restructuration et optimisation des processus",
      "Accompagnement au changement",
      "Développement de la marque employeur",
      "Conseil en rémunération et avantages sociaux",
    ],
  },
  {
    id: "3",
    slug: "gestion-de-projets",
    title: "Gestion de projets",
    shortDescription:
      "Pilotage et coordination de vos projets RH pour des résultats mesurables et durables.",
    fullDescription:
      "Nous prenons en charge la gestion complète de vos projets RH, de la planification à la livraison. Notre équipe assure le suivi des délais, des budgets et des ressources pour garantir le succès de chaque initiative.",
    icon: "BarChart3",
    imageUrl:
      "/images/service_projects.jpg",
    features: [
      "Planification et organisation des projets RH",
      "Gestion des ressources et des budgets",
      "Suivi des indicateurs de performance",
      "Coordination des équipes pluridisciplinaires",
      "Reporting régulier et tableaux de bord",
      "Gestion des risques et des parties prenantes",
    ],
  },
  {
    id: "4",
    slug: "formation-coaching",
    title: "Formation & coaching",
    shortDescription:
      "Programmes de formation sur mesure et coaching individuel pour développer vos équipes.",
    fullDescription:
      "Nous concevons et déployons des programmes de formation adaptés à vos besoins spécifiques. Nos coachs certifiés accompagnent individuellement vos managers et collaborateurs dans leur développement professionnel et personnel.",
    icon: "GraduationCap",
    imageUrl:
      "/images/service_coaching.jpg",
    features: [
      "Analyse des besoins en formation",
      "Conception de programmes sur mesure",
      "Formation en présentiel et à distance",
      "Coaching individuel et coaching d'équipe",
      "Évaluation des acquis et suivi des compétences",
      "Certification et habilitations professionnelles",
    ],
  },
  {
    id: "5",
    slug: "immigration",
    title: "Procédure d'immigration",
    shortDescription:
      "Accompagnement complet dans vos démarches d'immigration vers le Canada et autres destinations.",
    fullDescription:
      "Notre service d'immigration vous guide à travers toutes les étapes de votre projet migratoire. Visa d'études, résidence permanente, permis de travail — nous vous offrons un accompagnement personnalisé et expert pour sécuriser votre avenir au Canada.",
    icon: "Globe",
    imageUrl:
      "/images/service_immigration.jpg",
    features: [
      "Évaluation de l'éligibilité et des options d'immigration",
      "Visa d'études pour le Canada",
      "Résidence permanente (Express Entrée, PNP)",
      "Permis de travail et mobilité internationale",
      "Regroupement familial",
      "Suivi et accompagnement jusqu'à l'obtention du statut",
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((s) => s.slug === slug);
};
