import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Illustration from "@/components/ui/Illustration";
import {
  ArrowRight,
  FileText,
  Briefcase,
  GraduationCap,
  CheckCircle,
  Coins,
  MapPin,
  Lock,
  Trophy,
} from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ApplicationForm from "@/components/forms/ApplicationForm";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Espace Candidats — Coaching & Opportunités | INTER-RH",
  description:
    "Boostez votre carrière avec INTER-RH. Accompagnement personnalisé, coaching, CV, accès aux offres exclusives et accompagnement immigration au Canada.",
  alternates: { canonical: "/candidature" },
  openGraph: {
    title: "Espace Candidats | INTER-RH",
    description:
      "Accédez à un accompagnement personnalisé pour propulser votre carrière.",
  },
};

const candidateServices = [
  {
    icon: FileText,
    title: "CV & Lettre impactants",
    description:
      "Nous révisons votre CV et lettre de motivation pour les rendre percutants et adaptés aux attentes des recruteurs.",
    features: [
      "Analyse personnalisée de votre profil",
      "Rédaction ou refonte professionnelle",
      "Conseils LinkedIn et profils en ligne",
      "Versions française et anglaise",
    ],
  },
  {
    icon: GraduationCap,
    title: "Préparation aux entretiens & coaching",
    description:
      "Préparez-vous efficacement avec nos experts RH : simulations réalistes et feedback constructif.",
    features: [
      "Simulations d'entretiens (visio ou présentiel)",
      "Conseils langage corporel et questions pièges",
      "Coaching individuel d'objectifs de carrière",
      "Suivi post-entretien",
    ],
  },
  {
    icon: Briefcase,
    title: "Offres exclusives & matching",
    description:
      "Inscrivez-vous dans notre base de talents pour être contacté en priorité sur des postes adaptés à votre profil.",
    features: [
      "Diffusion de votre CV à nos partenaires",
      "Alertes offres personnalisées",
      "Accompagnement mobilité internationale",
      "Événements networking et job fairs",
    ],
  },
];

const guarantees = [
  {
    icon: Coins,
    title: "Gratuité",
    description: "La plupart de nos services candidats sont offerts.",
  },
  {
    icon: Trophy,
    title: "Expertise",
    description: "Accompagnement par des consultants RH expérimentés.",
  },
  {
    icon: Lock,
    title: "Confidentialité",
    description: "Vos données restent strictement confidentielles.",
  },
  {
    icon: MapPin,
    title: "Résultats",
    description: "Des centaines de placements réussis au Cameroun et à l'étranger.",
  },
];

const steps = [
  { number: "01", title: "Déposez votre candidature", desc: "Remplissez le formulaire de candidature spontanée ci-dessous." },
  { number: "02", title: "Analyse de votre profil", desc: "Notre équipe de consultants RH évalue vos compétences et aspirations." },
  { number: "03", title: "Entretien de positionnement", desc: "Un entretien personnalisé pour affiner votre profil et vos projets." },
  { number: "04", title: "Mise en relation", desc: "Nous vous connectons avec les recruteurs et opportunités idéales." },
];

export default function CandidaturePage() {
  return (
    <>
      <PageHero
        overline="ESPACE CANDIDATS"
        title="Propulsez votre"
        titleHighlight="carrière"
        subtitle="Bénéficiez d'un accompagnement de carrière personnalisé, accédez à des opportunités exclusives et réalisez vos ambitions professionnelles."
        breadcrumbs={[{ label: "Candidature" }]}
        cta={{ label: "Déposer ma candidature", href: "#formulaire" }}
        ctaSecondary={{ label: "Voir les offres", href: "/offres" }}
      />

      {/* ===== INTRO SECTION ===== */}
      <section className="section-white" aria-labelledby="cand-intro-title">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimatedSection animation="slide-left" className="lg:col-span-7">
              <p className="section-overline">Votre carrière, notre priorité</p>
              <h2 id="cand-intro-title" className="section-title">
                Un accompagnement personnalisé
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Chez INTER-RH, nous ouvrons aux candidats les portes d'opportunités exclusives, souvent non publiées, 
                grâce à notre réseau d'entreprises partenaires au Cameroun et à l'international. 
              </p>
              <p className="text-gray-600 leading-relaxed">
                Notre équipe de consultants expérimentés vous conseille à chaque étape importante de votre parcours professionnel : 
                orientation, outils de candidature et développement de compétences clés.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="slide-right" delay={0.2} className="lg:col-span-5 relative h-[300px] rounded-3xl overflow-hidden shadow-lg">
                <Illustration
                  name="candidats_coaching"
                />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== SERVICES CANDIDATS ===== */}
      <section className="section-light" aria-labelledby="cand-services-title">
        <div className="container-xl">
          <AnimatedSection animation="fade-in" className="text-center mb-12">
            <p className="section-overline">ACCOMPAGNEMENT DE CARRIÈRE</p>
            <h2 id="cand-services-title" className="section-title">
              Notre accompagnement pour les candidats
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {candidateServices.map((svc, idx) => (
              <AnimatedSection
                key={svc.title}
                animation="slide-up"
                delay={idx * 0.1}
                className="card p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-6">
                    <svc.icon className="w-7 h-7 text-primary-500" />
                  </div>
                  <h3 className="font-extrabold text-navy-500 mb-3 text-base">{svc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{svc.description}</p>
                  
                  <ul className="space-y-2.5">
                    {svc.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-xs">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <Link prefetch={false} href="#formulaire" className="btn-outline-dark text-xs py-2.5 px-5 w-full justify-center">
                    En savoir plus
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GUARANTEES ===== */}
      <section className="section-white" aria-labelledby="guarantees-title">
        <div className="container-xl">
          <AnimatedSection animation="fade-in" className="text-center mb-12">
            <p className="section-overline">NOS ENGAGEMENTS</p>
            <h2 id="guarantees-title" className="section-title">
              Un accompagnement pensé pour votre réussite
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((g, idx) => (
              <AnimatedSection
                key={g.title}
                animation="slide-up"
                delay={idx * 0.08}
                className="card-bordered bg-white p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center shrink-0">
                  <g.icon className="w-6 h-6 text-navy-500" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-500 text-base mb-2">{g.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{g.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section-light" aria-labelledby="how-title">
        <div className="container-xl">
          <AnimatedSection animation="fade-in" className="text-center mb-12">
            <p className="section-overline">COMMENT ÇA MARCHE</p>
            <h2 id="how-title" className="section-title">Notre processus de sélection en 4 étapes</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <AnimatedSection
                key={step.number}
                animation="slide-up"
                delay={index * 0.08}
                className="relative"
              >
                <div className="card-bordered p-6 text-center h-full bg-white hover:border-primary-300 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                  <h3 className="font-bold text-navy-500 mb-2 text-sm">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary-400" />
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPLICATION FORM ===== */}
      <section
        id="formulaire"
        className="section-white"
        aria-labelledby="form-title"
      >
        <div className="container-xl">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection animation="fade-in" className="text-center mb-10">
              <p className="section-overline">POSTULEZ EN LIGNE</p>
              <h2 id="form-title" className="section-title">
                Déposez votre candidature spontanée
              </h2>
              <p className="text-gray-500 text-sm">
                Remplissez le formulaire ci-dessous pour intégrer notre vivier de talents.
                Notre équipe reviendra vers vous si votre profil correspond à un besoin.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={0.15} className="card p-8 md:p-10 border border-gray-100 bg-white">
              <ApplicationForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
