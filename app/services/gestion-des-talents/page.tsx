import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Building2,
  Users,
  Briefcase,
  Search,
  CheckSquare,
  FileCheck,
  UserCheck,
} from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Gestion des talents & recrutement | INTER-RH",
  description:
    "Recrutement ciblé, sélection rigoureuse et intégration réussie de vos collaborateurs. Découvrez notre service complet.",
  alternates: { canonical: "/services/gestion-des-talents" },
  openGraph: {
    title: "Gestion des talents & recrutement | INTER-RH",
    description: "Recrutement ciblé, sélection rigoureuse et intégration de talents.",
    images: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80",
    ],
  },
};

const portalCards = [
  {
    icon: Building2,
    title: "Espace Employeurs",
    description:
      "Vous êtes une entreprise à la recherche de talents ? Découvrez notre méthodologie rigoureuse, nos ateliers d'évaluation et nos garanties d'onboarding.",
    link: "/employeurs",
    linkText: "Espace Employeurs",
  },
  {
    icon: Users,
    title: "Espace Candidats",
    description:
      "Vous souhaitez donner un élan à votre parcours professionnel ? Bénéficiez de nos coachings carrière, de la réécriture de votre CV et de l'accès aux offres exclusives.",
    link: "/candidature",
    linkText: "Espace Candidats",
  },
  {
    icon: Briefcase,
    title: "Offres d'Emploi",
    description:
      "Consultez l'ensemble de nos offres d'emploi actives et postulez directement en ligne pour rejoindre nos entreprises partenaires au Cameroun et à l'international.",
    link: "/offres",
    linkText: "Voir les Offres",
  },
];

const methodologyItems = [
  {
    icon: Search,
    title: "Sourcing Actif",
    desc: "Recherche proactive via notre vivier interne et réseaux professionnels.",
  },
  {
    icon: CheckSquare,
    title: "Fiches de Poste Personnalisées",
    desc: "Définition précise des profils et compétences recherchées.",
  },
  {
    icon: FileCheck,
    title: "Entretiens de Positionnement",
    desc: "Évaluation objective du savoir-faire et savoir-être des candidats.",
  },
  {
    icon: UserCheck,
    title: "Vérification des Références",
    desc: "Contrôle rigoureux du parcours professionnel et des antécédents.",
  },
];

export default function GestionDesTalentsPage() {
  return (
    <>
      <PageHero
        overline="NOS SERVICES"
        title="Gestion des talents & recrutement"
        subtitle="Recrutement ciblé, sélection rigoureuse et intégration réussie de vos collaborateurs."
        breadcrumbs={[
          { label: "Nos services", href: "/nos-services" },
          { label: "Gestion des talents & recrutement" },
        ]}
        cta={{ label: "Nous contacter", href: "/contact" }}
      />

      {/* ===== À PROPOS DE CE SERVICE ===== */}
      <section className="section-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection animation="slide-left">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-500 mb-6">
                À propos de ce service
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Notre service de gestion des talents vous accompagne dans toutes les étapes du cycle de recrutement. 
                De l'analyse des besoins à l'intégration du candidat, nous vous garantissons des profils adaptés 
                à votre culture d'entreprise et à vos objectifs stratégiques.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nous combinons l'expertise de nos consultants RH avec des méthodologies d'évaluation avancées 
                pour vous proposer des solutions de recrutement agiles, fiables et à fort impact sur vos performances.
              </p>

              <h3 className="text-xl font-bold text-navy-500 mb-5">
                Notre approche méthodologique
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {methodologyItems.map((item) => (
                  <div key={item.title} className="card-bordered p-4 flex gap-3 items-start bg-white">
                    <item.icon className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy-500 text-xs mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-xxs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 p-4 bg-primary-50 rounded-2xl border border-primary-100 mb-8">
                <CheckCircle className="w-5 h-5 text-primary-500 shrink-0" />
                <p className="text-primary-900 text-xs font-semibold">
                  Suivi d'intégration post-recrutement continu assuré jusqu'à 12 mois.
                </p>
              </div>

              <Link prefetch={false} href="/contact" className="btn-primary">
                Demander un devis
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            <AnimatedSection animation="slide-right" delay={0.2} className="sticky top-24">
              <div className="relative h-[340px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80"
                  alt="Gestion des talents et recrutement professionnel"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== PORTAILS ACCÈS SPECIFIQUES ===== */}
      <section className="section-light" aria-labelledby="portals-title">
        <div className="container-xl">
          <AnimatedSection animation="fade-in" className="text-center mb-12">
            <p className="section-overline">ACCÈS DIRECTS</p>
            <h2 id="portals-title" className="section-title">
              Découvrez nos portails dédiés
            </h2>
            <p className="section-subtitle">
              Des espaces spécialisés pour répondre précisément aux besoins des recruteurs et des candidats.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portalCards.map((portal, idx) => (
              <AnimatedSection
                key={portal.title}
                animation="slide-up"
                delay={idx * 0.1}
                className="card bg-white p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-6">
                    <portal.icon className="w-6 h-6 text-navy-500" />
                  </div>
                  <h3 className="font-extrabold text-navy-500 text-base mb-4">{portal.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{portal.description}</p>
                </div>
                <Link prefetch={false} href={portal.link} className="inline-flex items-center gap-1 text-primary-500 text-xs font-bold hover:gap-2 transition-all">
                  {portal.linkText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
