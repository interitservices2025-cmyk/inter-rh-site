import { Service, ProjectSector, ProjectStep } from "@/lib/types";

export const projectSectors: ProjectSector[] = [
  {
    title: "Projets de construction et d'infrastructures",
    description:
      "Planification, coordination des intervenants et suivi des jalons d'opérations.",
    icon: "Building2",
  },
  {
    title: "Projets organisationnels",
    description:
      "Structuration d'équipes et accompagnement des transformations internes.",
    icon: "Network",
  },
  {
    title: "Projets de développement d'entreprise",
    description:
      "Cadrage et pilotage de nouvelles activités et projets de croissance.",
    icon: "TrendingUp",
  },
  {
    title: "Projets technologiques et numériques",
    description:
      "Coordination fonctionnelle pour le déploiement d'outils et la digitalisation.",
    icon: "Cpu",
  },
  {
    title: "Projets RH et organisationnels",
    description:
      "Déploiement de politiques RH, structuration des compétences et intégration.",
    icon: "Users",
  },
  {
    title: "Projets de développement et d'expansion",
    description:
      "Planification d'implantations régionales ou internationales et mobilisation.",
    icon: "Compass",
  },
  {
    title: "Projets de transformation et d'amélioration des processus",
    description:
      "Optimisation des flux de travail et suivi de la performance opérationnelle.",
    icon: "Settings",
  },
];

export const projectLifecycleSteps: ProjectStep[] = [
  {
    number: 1,
    title: "Analyse et cadrage",
    description: "Compréhension du besoin, des objectifs et des contraintes.",
  },
  {
    number: 2,
    title: "Planification",
    description: "Définition des étapes, ressources, responsabilités et échéances.",
  },
  {
    number: 3,
    title: "Organisation et coordination",
    description: "Accompagnement des équipes et intervenants.",
  },
  {
    number: 4,
    title: "Suivi et contrôle",
    description: "Suivi de l'avancement, des délais, des ressources et des risques.",
  },
  {
    number: 5,
    title: "Évaluation et clôture",
    description: "Bilan, vérification des objectifs et finalisation du projet.",
  },
];

export const services: Service[] = [
  {
    id: "1",
    slug: "gestion-des-talents",
    title: "Gestion des talents & recrutement",
    shortDescription:
      "Identification, sélection rigoureuse et accompagnement à l'intégration de profils qualifiés adaptés à votre organisation.",
    fullDescription:
      "Notre service de gestion des talents et recrutement accompagne les entreprises et les institutions dans toutes les étapes de l'acquisition et de l'intégration de leurs collaborateurs. Nous mettons en œuvre une méthodologie rigoureuse pour identifier, évaluer et sélectionner les profils qui répondent précisément à vos enjeux opérationnels.",
    secondaryDescription:
      "De l'analyse initiale de vos besoins en personnel jusqu'au suivi de l'intégration en poste selon le mandat confié, nous veillons à sécuriser vos recrutements et à renforcer durablement vos équipes.",
    icon: "Users",
    imageUrl: "/images/service_recrutement.jpg",
    features: [
      "Analyse des besoins en personnel",
      "Définition des profils recherchés",
      "Recherche et présélection des candidats",
      "Évaluation des candidatures",
      "Accompagnement du processus de recrutement",
      "Suivi de l'intégration selon le mandat",
    ],
    ctaLabel: "Confier un recrutement",
  },
  {
    id: "2",
    slug: "gestion-de-projets",
    title: "Gestion et pilotage de projets",
    shortDescription:
      "Conception, planification, coordination et pilotage de vos projets de A à Z, quel que soit votre secteur d'activité.",
    fullDescription:
      "Nous accompagnons les entreprises et les organisations dans la conception, la planification, la coordination et la réalisation de leurs projets, quel que soit leur domaine d'activité.",
    secondaryDescription:
      "De la définition des objectifs à la clôture du projet, nous apportons une méthode structurée pour organiser les ressources, coordonner les intervenants, suivre les délais et accompagner l'atteinte des résultats attendus.",
    icon: "BarChart3",
    imageUrl: "/images/service_projects.jpg",
    features: [
      "Analyse et cadrage des besoins et objectifs",
      "Planification des étapes, ressources et échéances",
      "Organisation et coordination des intervenants",
      "Suivi de l'avancement, des délais et des risques",
      "Évaluation des résultats et clôture du projet",
      "Pilotage multisectoriel selon le mandat confié",
    ],
    projectSectors,
    projectSteps: projectLifecycleSteps,
    ctaLabel: "Discutons de votre projet",
  },
  {
    id: "3",
    slug: "immigration",
    title: "Accompagnement en immigration",
    shortDescription:
      "Accompagnement structuré et personnalisé dans vos démarches d'immigration et de mobilité internationale (Canada, Australie, Luxembourg, Europe) ainsi que pour vos projets d'études en Afrique (Maroc, Tunisie).",
    fullDescription:
      "Notre service d'accompagnement en immigration et mobilité internationale guide les particuliers, les étudiants et les professionnels à travers toutes les étapes de leur projet vers le Canada, l'Australie, le Luxembourg et d'autres pays d'Europe, ainsi que vers l'Afrique du Nord (Maroc, Tunisie) pour les études supérieures. Résidence permanente, permis de travail, visa d'études ou regroupement familial — nous assurons un suivi méthodique et rigoureux pour préparer et présenter votre dossier dans les meilleures conditions.",
    secondaryDescription:
      "Chaque destination et chaque parcours ayant ses propres exigences réglementaires, nous débutons par une évaluation précise de votre profil et des programmes officiels applicables afin de vous orienter avec transparence, réalisme et professionnalisme.",
    icon: "Globe",
    imageUrl: "/images/service_immigration.jpg",
    features: [
      "Évaluation de l'éligibilité et orientation multi-destinations",
      "Immigration et mobilité professionnelle (Canada, Australie, Luxembourg et pays d'Europe)",
      "Accompagnement aux études supérieures à l'international (Canada, Europe, Australie)",
      "Mobilité étudiante en Afrique : inscriptions et démarches pour le Maroc et la Tunisie",
      "Résidence permanente (Entrée Express, programmes provinciaux et travailleurs qualifiés)",
      "Permis de travail, regroupement familial et suivi complet du dossier",
    ],
    ctaLabel: "Évaluer mon projet d'immigration ou d'études",
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((s) => s.slug === slug);
};
