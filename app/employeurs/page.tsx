import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Illustration from "@/components/ui/Illustration";
import {
  ArrowRight,
  CheckCircle,
  Building2,
  Clock,
  Users,
  Trophy,
  Percent,
} from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import StepCard from "@/components/ui/StepCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Espace Employeurs — Recrutement & Solutions RH | INTER-RH",
  description:
    "INTER-RH gère l'ensemble du cycle de recrutement pour vous libérer du temps et garantir des profils adaptés. Découvrez notre méthodologie en 6 étapes.",
  alternates: { canonical: "/employeurs" },
  openGraph: {
    title: "Espace Employeurs | INTER-RH",
    description:
      "Externalisez votre recrutement à des experts. Méthodologie rigoureuse, résultats garantis.",
  },
};

const recruitmentSteps = [
  {
    number: 1,
    title: "Analyse des besoins",
    description:
      "Évaluation approfondie de vos postes et compétences requises via des ateliers avec vos équipes.",
  },
  {
    number: 2,
    title: "Rédaction et diffusion d'offres",
    description:
      "Création d'annonces attractives diffusées sur des plateformes ciblées (LinkedIn, sites locaux, etc.).",
  },
  {
    number: 3,
    title: "Tri et présélection",
    description:
      "Utilisation d'outils RH et IA pour filtrer les CV et identifier les meilleurs profils.",
  },
  {
    number: 4,
    title: "Conduite d'entretiens",
    description:
      "Méthodes d'évaluation objectives pour des décisions de recrutement fiables et équitables.",
  },
  {
    number: 5,
    title: "Tests techniques & psychométriques",
    description:
      "Partenariats avec des outils certifiés pour évaluer aptitudes et personnalité.",
  },
  {
    number: 6,
    title: "Recommandations finales",
    description:
      "Rapport complet avec profils shortlistés et recommandations argumentées.",
  },
];

const integrationServices = [
  {
    title: "Plan d'intégration personnalisé",
    description: "Programme d'onboarding structuré pour maximiser la rétention.",
  },
  {
    title: "Suivi post-intégration",
    description: "Point à 30, 60 et 90 jours avec le manager et le collaborateur.",
  },
  {
    title: "Rapport d'étonnement",
    description: "Feedback à 3 mois pour une prise de poste parfaitement réussie.",
  },
];

const benefits = [
  { icon: Clock, title: "Gain de temps", desc: "Déléguez le processus chronophage de recrutement" },
  { icon: Users, title: "Qualité des profils", desc: "Sélection rigoureuse avec outils et méthodes éprouvés" },
  { icon: Trophy, title: "Résultats garantis", desc: "Nous nous engageons sur la qualité des candidats présentés" },
  { icon: Building2, title: "Expertise locale", desc: "Connaissance approfondie du marché camerounais" },
];

export default function EmployeursPage() {
  return (
    <>
      <PageHero
        overline="ESPACE EMPLOYEURS"
        title="Recrutez les meilleurs"
        titleHighlight="talents"
        subtitle="Nous gérons l'ensemble du cycle de recrutement pour vous libérer du temps et garantir des profils parfaitement adaptés à vos besoins."
        breadcrumbs={[{ label: "Employeurs" }]}
        cta={{ label: "Soumettre un besoin", href: "/contact?type=employeur" }}
        ctaSecondary={{ label: "Notre méthodologie", href: "#methodologie" }}
      />

      {/* ===== IMPACT STATS ===== */}
      <section className="section-light">
        <div className="container-xl">
          <AnimatedSection animation="scale-in">
            <div className="card bg-gradient-to-r from-navy-500 to-navy-600 text-white p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-8">
                  <p className="text-primary-400 font-semibold text-xs tracking-widest uppercase mb-2">
                    OPTIMISEZ VOS INVESTISSEMENTS RH
                  </p>
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
                    Une réduction des coûts de recrutement allant jusqu'à 30%
                  </h2>
                  <p className="text-blue-200/80 leading-relaxed text-sm md:text-base">
                    Grâce à nos solutions d'externalisation et d'évaluation expertes,
                    évitez les erreurs de casting coûteuses et accélérez votre délai de recrutement (Time-to-Hire).
                  </p>
                </div>
                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center border border-white/20 w-full max-w-[260px]">
                    <Percent className="w-12 h-12 text-primary-400 mx-auto mb-3" />
                    <p className="text-4xl font-black text-white">-30%</p>
                    <p className="text-xs text-blue-200 mt-1">Sur vos coûts de recrutement</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="section-white">
        <div className="container-xl">
          <AnimatedSection animation="fade-in" className="text-center mb-12">
            <p className="section-overline">POURQUOI NOUS CONFIER VOTRE RECRUTEMENT ?</p>
            <h2 className="section-title">Les avantages de notre accompagnement</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <AnimatedSection
                key={benefit.title}
                animation="slide-up"
                delay={idx * 0.08}
                className="card p-6 text-center group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="font-bold text-navy-500 mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RECRUITMENT METHODOLOGY ===== */}
      <section
        id="methodologie"
        className="section-light"
        aria-labelledby="methodology-title"
      >
        <div className="container-xl">
          <AnimatedSection animation="fade-in" className="text-center mb-14">
            <p className="section-overline">NOTRE PROCESSUS</p>
            <h2 id="methodology-title" className="section-title">
              Recrutement complet en 6 étapes
            </h2>
            <p className="section-subtitle">
              Une méthodologie rigoureuse garantissant l'adéquation parfaite du candidat avec votre poste.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recruitmentSteps.map((step, idx) => (
              <AnimatedSection key={step.number} animation="slide-up" delay={idx * 0.08}>
                <StepCard
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTEGRATION & ONBOARDING ===== */}
      <section className="section-white" aria-labelledby="integration-title">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-left">
              <p className="section-overline">INTÉGRATION & ONBOARDING</p>
              <h2 id="integration-title" className="text-2xl md:text-3xl font-bold text-navy-500 mb-4">
                Au-delà du recrutement : réussir l'intégration
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Un recrutement réussi ne s'arrête pas à la signature du contrat. Nous vous
                accompagnons dans la phase critique d'intégration pour maximiser les chances
                de succès et fidéliser vos talents sur le long terme.
              </p>

              <div className="space-y-4">
                {integrationServices.map((svc) => (
                  <div key={svc.title} className="flex items-start gap-4 card-bordered p-4">
                    <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy-500 text-sm">{svc.title}</p>
                      <p className="text-gray-500 text-xs mt-1">{svc.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-right" delay={0.2} className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl">
              <Illustration
                name="employeurs_onboarding"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* ===== EMPLOYER FORM CTA ===== */}
      <section className="bg-navy-500 py-16">
        <div className="container-xl">
          <AnimatedSection animation="scale-in" className="text-center">
            <p className="text-primary-400 font-semibold text-xs tracking-widest uppercase mb-4">
              PARLEZ-NOUS DE VOS BESOINS
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Prêt à confier votre recrutement à des experts ?
            </h2>
            <p className="text-blue-200/70 text-lg mb-8 max-w-xl mx-auto">
              Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez
              comment nous pouvons vous aider.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link prefetch={false} href="/contact?type=employeur" className="btn-primary">
                Soumettre un besoin
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link prefetch={false} href="/contact" className="btn-outline">
                Nous appeler
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
