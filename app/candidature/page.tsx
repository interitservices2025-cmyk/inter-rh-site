import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  FileText,
  Briefcase,
  GraduationCap,
  CheckCircle,
  ShieldAlert,
  Coins,
  MapPin,
  Lock,
} from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ApplicationForm from "@/components/forms/ApplicationForm";

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
    title: "Rédaction de CV & LinkedIn",
    description:
      "Correction et optimisation professionnelle de votre CV et de votre profil LinkedIn, en français et en anglais, pour capter l'intérêt des recruteurs.",
  },
  {
    icon: GraduationCap,
    title: "Coaching & Préparation aux entretiens",
    description:
      "Simulations d'entretiens et coaching d'objectifs personnalisés pour vous aider à argumenter sereinement et avec assurance lors de vos rendez-vous.",
  },
  {
    icon: Briefcase,
    title: "Matching & Offres Exclusives",
    description:
      "Accès privilégié à nos opportunités de carrière internes, y compris à l'international (mobilité vers le Canada) et lors de salons d'emploi (job fairs).",
  },
];

const guarantees = [
  {
    icon: Coins,
    title: "Gratuité des services",
    description: "La majorité de nos services d'orientation et de placement sont entièrement gratuits pour les candidats sélectionnés.",
  },
  {
    icon: Lock,
    title: "Confidentialité totale",
    description: "Vos données et votre projet professionnel sont traités avec le plus haut niveau de discrétion vis-à-vis de votre employeur actuel.",
  },
  {
    icon: MapPin,
    title: "Expertise locale & internationale",
    description: "Un ancrage fort au Cameroun allié à des opportunités concrètes de développement de carrière à l'international.",
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

      {/* ===== SERVICES CANDIDATS ===== */}
      <section className="section-white" aria-labelledby="cand-services-title">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="section-overline">ACCOMPAGNEMENT DE CARRIÈRE</p>
            <h2 id="cand-services-title" className="section-title">
              Notre accompagnement pour les candidats
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {candidateServices.map((svc) => (
              <div
                key={svc.title}
                className="card p-8 text-center group hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-100 transition-colors">
                    <svc.icon className="w-8 h-8 text-primary-500" />
                  </div>
                  <h3 className="font-extrabold text-navy-500 mb-4 text-base">{svc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{svc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GUARANTEES ===== */}
      <section className="section-light" aria-labelledby="guarantees-title">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="section-overline">NOS ENGAGEMENTS</p>
            <h2 id="guarantees-title" className="section-title">
              Nos garanties pour votre succès
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((g) => (
              <div key={g.title} className="card bg-white p-6 rounded-2xl flex items-start gap-4 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center shrink-0">
                  <g.icon className="w-6 h-6 text-navy-500" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-500 text-sm mb-2">{g.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{g.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section-white" aria-labelledby="how-title">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="section-overline">COMMENT ÇA MARCHE</p>
            <h2 id="how-title" className="section-title">Notre processus de sélection en 4 étapes</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPLICATION FORM ===== */}
      <section
        id="formulaire"
        className="section-light"
        aria-labelledby="form-title"
      >
        <div className="container-xl">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="section-overline">POSTULEZ EN LIGNE</p>
              <h2 id="form-title" className="section-title">
                Déposez votre candidature spontanée
              </h2>
              <p className="text-gray-500 text-sm">
                Remplissez le formulaire ci-dessous pour intégrer notre vivier de talents.
                Notre équipe reviendra vers vous si votre profil correspond à un besoin.
              </p>
            </div>

            <div className="card p-8 md:p-10 bg-white">
              <ApplicationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
