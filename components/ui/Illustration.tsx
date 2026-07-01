import React from "react";

interface IllustrationProps {
  name:
    | "hero_home"
    | "team_about"
    | "why_choose_us"
    | "mission_human"
    | "employeurs_onboarding"
    | "candidats_coaching"
    | "offres_tenders"
    | "offres_jobs"
    | "service_recrutement"
    | "service_strategy"
    | "service_projects"
    | "service_coaching"
    | "service_immigration"
    | "blog_cameroun"
    | "blog_idea_result"
    | "blog_interview"
    | "blog_canada";
  className?: string;
}

export default function Illustration({ name, className = "" }: IllustrationProps) {
  // Styles communs pour les conteneurs d'illustrations SVG
  const svgClass = `w-full h-full min-h-[300px] object-cover rounded-3xl ${className}`;

  switch (name) {
    // ===== ACCUEIL & PAGES HERO =====
    case "hero_home":
      return (
        <svg viewBox="0 0 1600 900" className={svgClass} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hero-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B132B" />
              <stop offset="50%" stopColor="#1C2541" />
              <stop offset="100%" stopColor="#22305C" />
            </linearGradient>
            <linearGradient id="accent-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#dc2626" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grad)" />
          {/* Formes géométriques abstraites de fond */}
          <path d="M-100 700 C 300 800, 700 500, 1000 650 C 1300 800, 1500 550, 1800 650 L1800 900 L-100 900 Z" fill="url(#accent-grad)" />
          <circle cx="1300" cy="250" r="180" fill="#3b82f6" opacity="0.08" />
          <circle cx="200" cy="150" r="100" fill="#dc2626" opacity="0.05" />
          {/* Lignes de flux technologiques */}
          <path d="M 0,450 Q 400,300 800,450 T 1600,450" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
          <path d="M 0,480 Q 400,380 800,480 T 1600,480" fill="none" stroke="rgba(220,38,38,0.1)" strokeWidth="2" />
        </svg>
      );

    case "team_about":
      return (
        <svg viewBox="0 0 800 450" className={svgClass} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="team-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#0B132B" />
            </linearGradient>
            <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#team-grad)" />
          {/* Illustration de collaboration d'équipe en réunion */}
          <g transform="translate(100, 50)">
            {/* Personnages simplifiés de profil en costume */}
            {/* Personnage gauche */}
            <circle cx="150" cy="200" r="40" fill="#dc2626" opacity="0.85" />
            <path d="M 100,290 C 100,240 200,240 200,290 Z" fill="#E5E7EB" />
            {/* Table et écran */}
            <rect x="220" y="150" width="160" height="210" rx="16" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            <line x1="300" y1="150" x2="300" y2="360" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            {/* Personnage droite */}
            <circle cx="450" cy="200" r="40" fill="#3b82f6" opacity="0.85" />
            <path d="M 400,290 C 400,240 500,240 500,290 Z" fill="#E5E7EB" />
            {/* Éléments de connexion */}
            <path d="M 190,200 Q 300,100 410,200" fill="none" stroke="url(#gold-grad)" strokeWidth="3" strokeDasharray="5,5" />
            <circle cx="300" cy="150" r="8" fill="#F59E0B" />
          </g>
        </svg>
      );

    case "why_choose_us":
      return (
        <svg viewBox="0 0 800 450" className={svgClass} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="wcu-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#wcu-grad)" />
          {/* Bouclier et Coche de confiance/sécurité */}
          <g transform="translate(250, 75)">
            <path d="M 150,50 L 250,90 L 250,220 C 250,290 150,330 150,330 C 150,330 50,290 50,220 L 50,90 Z" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.3)" strokeWidth="4" />
            {/* Coche de validation géante rouge */}
            <path d="M 90,180 L 130,220 L 210,130" fill="none" stroke="#dc2626" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="150" cy="180" r="120" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
          </g>
        </svg>
      );

    case "mission_human":
      return (
        <svg viewBox="0 0 800 450" className={svgClass} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mission-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#mission-grad)" />
          {/* Cœur et silhouettes de collaboration humaine */}
          <g transform="translate(280, 100)">
            <path d="M 120,70 A 50,50 0 0,0 20,70 C 20,120 120,200 120,200 C 120,200 220,120 220,70 A 50,50 0 0,0 120,70 Z" fill="#dc2626" opacity="0.8" />
            <circle cx="60" cy="160" r="25" fill="#3b82f6" />
            <circle cx="180" cy="160" r="25" fill="#10b981" />
            <path d="M 60,160 Q 120,110 180,160" fill="none" stroke="white" strokeWidth="3" opacity="0.4" />
          </g>
        </svg>
      );

    case "employeurs_onboarding":
      return (
        <svg viewBox="0 0 800 450" className={svgClass} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="onb-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#312e81" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#onb-grad)" />
          {/* Flèche d'intégration ascendante à travers des portails */}
          <g transform="translate(220, 80)">
            <ellipse cx="180" cy="220" rx="140" ry="40" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="3" />
            <ellipse cx="180" cy="140" rx="100" ry="30" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="3" />
            {/* Flèche rouge montante */}
            <path d="M 180,260 L 180,60 L 150,90 M 180,60 L 210,90" fill="none" stroke="#dc2626" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="180" cy="60" r="12" fill="#dc2626" />
          </g>
        </svg>
      );

    case "candidats_coaching":
      return (
        <svg viewBox="0 0 800 450" className={svgClass} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="coach-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#111827" />
              <stop offset="100%" stopColor="#1f2937" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#coach-grad)" />
          {/* Boussole et chemin de réussite de carrière */}
          <g transform="translate(280, 100)">
            <circle cx="120" cy="120" r="100" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="4" />
            <path d="M 120,40 L 140,110 L 200,120 L 140,130 L 120,200 L 100,130 L 40,120 L 100,110 Z" fill="#dc2626" opacity="0.9" />
            <circle cx="120" cy="120" r="12" fill="white" />
            {/* Étoile de réussite */}
            <path d="M 220,40 L 225,55 L 240,55 L 228,65 L 232,80 L 220,70 L 208,80 L 212,65 L 200,55 L 215,55 Z" fill="#F59E0B" />
          </g>
        </svg>
      );

    case "offres_tenders":
      return (
        <svg viewBox="0 0 800 450" className={svgClass} xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#1e3a8a" />
          {/* Document officiel avec sceau d'appel d'offres */}
          <g transform="translate(260, 60)">
            <rect x="50" y="40" width="180" height="240" rx="8" fill="white" />
            <line x1="80" y1="90" x2="200" y2="90" stroke="#E5E7EB" strokeWidth="6" strokeLinecap="round" />
            <line x1="80" y1="130" x2="200" y2="130" stroke="#E5E7EB" strokeWidth="6" strokeLinecap="round" />
            <line x1="80" y1="170" x2="160" y2="170" stroke="#E5E7EB" strokeWidth="6" strokeLinecap="round" />
            {/* Sceau rouge de validation */}
            <circle cx="180" cy="220" r="30" fill="#dc2626" opacity="0.9" />
            <circle cx="180" cy="220" r="22" fill="none" stroke="white" strokeWidth="2" />
            <path d="M 170,220 L 178,228 L 192,214" fill="none" stroke="white" strokeWidth="3" />
          </g>
        </svg>
      );

    case "offres_jobs":
      return (
        <svg viewBox="0 0 800 450" className={svgClass} xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#0f172a" />
          {/* Loupe et carte d'offre d'emploi */}
          <g transform="translate(250, 70)">
            <rect x="40" y="60" width="220" height="150" rx="16" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
            <circle cx="90" cy="110" r="20" fill="#3b82f6" opacity="0.3" />
            <line x1="130" y1="100" x2="220" y2="100" stroke="white" strokeWidth="4" />
            <line x1="130" y1="125" x2="190" y2="125" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
            {/* Loupe */}
            <circle cx="210" cy="160" r="35" fill="none" stroke="#dc2626" strokeWidth="6" />
            <line x1="235" y1="185" x2="265" y2="215" stroke="#dc2626" strokeWidth="6" strokeLinecap="round" />
          </g>
        </svg>
      );

    // ===== EXPERTISES / SERVICES PRO =====
    case "service_recrutement":
      return (
        <svg viewBox="0 0 800 450" className={svgClass} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="rec-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#rec-grad)" />
          {/* Cible de recrutement et candidat validé au premier plan */}
          <g transform="translate(280, 80)">
            {/* Cercles radar */}
            <circle cx="120" cy="120" r="100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            <circle cx="120" cy="120" r="70" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
            {/* Silhouette du candidat idéal */}
            <circle cx="120" cy="100" r="30" fill="white" />
            <path d="M 70,180 C 70,145 170,145 170,180 Z" fill="white" />
            {/* Coche de sélection verte */}
            <circle cx="170" cy="70" r="22" fill="#10b981" />
            <path d="M 160,70 L 167,77 L 180,64" fill="none" stroke="white" strokeWidth="3" />
          </g>
        </svg>
      );

    case "service_strategy":
      return (
        <svg viewBox="0 0 800 450" className={svgClass} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="strat-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#strat-grad)" />
          {/* Analyse de croissance et flèche stratégique montante */}
          <g transform="translate(250, 90)">
            {/* Grille */}
            <line x1="50" y1="200" x2="280" y2="200" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
            <line x1="50" y1="50" x2="50" y2="200" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
            {/* Courbe montante */}
            <path d="M 50,180 L 100,160 L 150,110 L 200,120 L 270,40" fill="none" stroke="white" strokeWidth="4" />
            {/* Flèche finale en forme d'étoile de croissance */}
            <path d="M 255,40 L 270,40 L 270,55" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" />
            <circle cx="270" cy="40" r="8" fill="#F59E0B" />
            {/* Bulles d'indicateurs de performance */}
            <rect x="90" y="60" width="80" height="30" rx="8" fill="rgba(255,255,255,0.15)" />
            <text x="105" y="80" fill="white" fontSize="12" fontWeight="bold">KPI +45%</text>
          </g>
        </svg>
      );

    case "service_projects":
      return (
        <svg viewBox="0 0 800 450" className={svgClass} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="proj-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B132B" />
              <stop offset="100%" stopColor="#312e81" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#proj-grad)" />
          {/* Planification Agile / Diagramme de Gantt */}
          <g transform="translate(240, 90)">
            <rect x="20" y="40" width="320" height="200" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            {/* Lignes de Gantt */}
            <rect x="50" y="70" width="90" height="24" rx="6" fill="#dc2626" opacity="0.85" />
            <rect x="150" y="110" width="110" height="24" rx="6" fill="#3b82f6" opacity="0.85" />
            <rect x="230" y="150" width="80" height="24" rx="6" fill="#10b981" opacity="0.85" />
            {/* Liaisons de dépendance entre tâches */}
            <path d="M 140,82 L 150,122" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="3,3" />
            <path d="M 260,122 L 260,150" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="3,3" />
          </g>
        </svg>
      );

    case "service_coaching":
      return (
        <svg viewBox="0 0 800 450" className={svgClass} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ch-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#ch-grad)" />
          {/* Trophée de réussite de coaching et transmission de savoir */}
          <g transform="translate(290, 80)">
            {/* Trophée en dégradé de jaune/or */}
            <path d="M 70,50 L 150,50 L 140,130 C 130,170 90,170 80,130 Z" fill="#F59E0B" />
            <rect x="100" y="180" width="20" height="40" fill="#D97706" />
            <rect x="75" y="220" width="70" height="15" fill="#B45309" />
            {/* Étoiles étincelantes */}
            <path d="M 50,30 L 53,40 L 63,40 L 55,47 L 58,57 L 50,50 L 42,57 L 45,47 L 37,40 L 47,40 Z" fill="white" opacity="0.8" />
            <path d="M 170,40 L 173,50 L 183,50 L 175,57 L 178,67 L 170,60 L 162,67 L 165,57 L 157,50 L 167,50 Z" fill="white" opacity="0.8" />
          </g>
        </svg>
      );

    case "service_immigration":
      return (
        <svg viewBox="0 0 800 450" className={svgClass} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="imm-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#imm-grad)" />
          {/* Globe terrestre avec arcs de voyage vers le Canada (Feuille d'érable) */}
          <g transform="translate(280, 90)">
            {/* Globe terrestre */}
            <circle cx="120" cy="120" r="100" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
            <ellipse cx="120" cy="120" rx="100" ry="30" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
            <ellipse cx="120" cy="120" rx="30" ry="100" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
            {/* Arcs de voyage en pointillés blancs */}
            <path d="M 40,80 Q 120,-10 200,80" fill="none" stroke="white" strokeWidth="3" strokeDasharray="6,4" />
            {/* Feuille d'érable canadienne stylisée en rouge au centre */}
            <path d="M 120,65 L 128,80 L 140,78 L 133,92 L 148,100 L 128,103 L 120,118 L 112,103 L 92,100 L 107,92 L 100,78 L 112,80 Z" fill="#dc2626" />
            <line x1="120" y1="103" x2="120" y2="125" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" />
          </g>
        </svg>
      );

    // ===== ARTICLES DE BLOG =====
    case "blog_cameroun":
      return (
        <svg viewBox="0 0 800 450" className={svgClass} xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#111827" />
          <circle cx="400" cy="225" r="150" fill="#1e3a8a" opacity="0.3" />
          <text x="400" y="240" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" opacity="0.5">RH & FORMATION</text>
        </svg>
      );

    case "blog_idea_result":
      return (
        <svg viewBox="0 0 800 450" className={svgClass} xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#1f2937" />
          <circle cx="400" cy="225" r="150" fill="#dc2626" opacity="0.2" />
          <text x="400" y="240" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" opacity="0.5">IDÉE ➔ RÉSULTAT</text>
        </svg>
      );

    case "blog_interview":
      return (
        <svg viewBox="0 0 800 450" className={svgClass} xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#0f172a" />
          <circle cx="400" cy="225" r="150" fill="#3b82f6" opacity="0.2" />
          <text x="400" y="240" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" opacity="0.5">STRATÉGIE RH</text>
        </svg>
      );

    case "blog_canada":
      return (
        <svg viewBox="0 0 800 450" className={svgClass} xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#312e81" />
          <circle cx="400" cy="225" r="150" fill="#dc2626" opacity="0.3" />
          <text x="400" y="240" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" opacity="0.5">EXPRESS ENTRÉE</text>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 800 450" className={svgClass} xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#1e3a8a" />
          <text x="400" y="240" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">INTER-RH</text>
        </svg>
      );
  }
}
