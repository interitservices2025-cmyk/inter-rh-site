import type { Metadata } from "next";
import Link from "next/link";
import Illustration from "@/components/ui/Illustration";
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
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Gestion des talents & recrutement | INTER-RH",
  description:
    "Analyse des besoins en personnel, définition des profils, recherche et présélection des candidats, évaluation et suivi de l'intégration. Découvrez notre accompagnement en recrutement.",
  alternates: { canonical: "/services/gestion-des-talents" },
  openGraph: {
    title: "Gestion des talents & recrutement | INTER-RH",
    description:
      "Recrutement ciblé, sélection rigoureuse et intégration réussie de vos collaborateurs.",
    images: ["/images/service_recrutement.jpg"],
  },
};

const talentFeatures = [
  "Analyse des besoins en personnel",
  "Définition des profils recherchés",
  "Recherche et présélection des candidats",
  "Évaluation des candidatures",
  "Accompagnement du processus de recrutement",
  "Suivi de l'intégration selon le mandat",
];

const portalCards = [
  {
    icon: Building2,
    title: "Espace Employeurs",
    description:
      "Vous êtes une entreprise à la recherche de collaborateurs qualifiés ? Découvrez notre méthodologie de recrutement et notre accompagnement à l'intégration.",
    link: "/employeurs",
    linkText: "Espace Employeurs",
  },
  {
    icon: Users,
    title: "Espace Candidats",
    description:
      "Vous souhaitez valoriser votre parcours professionnel ? Bénéficiez de nos conseils carrière, de l'optimisation de votre CV et de l'accès à nos opportunités.",
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
    title: "Sourcing ciblé",
    desc: "Recherche proactive via notre vivier interne et nos réseaux professionnels.",
  },
  {
    icon: CheckSquare,
    title: "Définition précise des profils",
    desc: "Analyse approfondie du poste, des compétences techniques et des aptitudes attendues.",
  },
  {
    icon: FileCheck,
    title: "Entretiens & évaluation",
    desc: "Évaluation structurée et objective du savoir-faire et du savoir-être des candidats.",
  },
  {
    icon: UserCheck,
    title: "Vérification & intégration",
    desc: "Contrôle des références professionnelles et suivi de l'intégration selon le mandat.",
  },
];

export default function GestionDesTalentsPage() {
  const otherServices = services.filter((s) => s.slug !== "gestion-des-talents");

  return (
    <>
      <PageHero
        overline="NOS DOMAINES D'EXPERTISE"
        title="Gestion des talents & recrutement"
        subtitle="Identification, sélection rigoureuse et accompagnement à l'intégration des collaborateurs adaptés aux besoins de votre organisation."
        breadcrumbs={[
          { label: "Nos services", href: "/nos-services" },
          { label: "Gestion des talents & recrutement" },
        ]}
        cta={{ label: "Nous contacter", href: "/contact" }}
      />

      {/* ===== À PROPOS DE CE SERVICE ===== */}
      <section className="section-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <AnimatedSection animation="slide-left" className="lg:col-span-7">
              <p className="section-overline">Présentation du domaine</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-navy-500 mb-6 leading-snug">
                Recruter les bons profils et sécuriser leur intégration
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-sm sm:text-base">
                Notre service de gestion des talents vous accompagne dans toutes les étapes du cycle de recrutement. De l&apos;analyse des besoins en personnel jusqu&apos;au suivi de l&apos;intégration du candidat retenu selon le mandat confié, nous veillons à identifier des profils en adéquation avec votre culture d&apos;entreprise et vos exigences opérationnelles.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base">
                Nous combinons l&apos;expertise de nos consultants RH avec des outils d&apos;évaluation structurés pour vous proposer des recrutements fiables, transparents et durables.
              </p>

              <h3 className="text-xl font-bold text-navy-500 mb-5">
                Nos interventions clés
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {talentFeatures.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50/80 border border-gray-100"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-xs sm:text-sm font-medium leading-snug">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-navy-500 mb-5">
                Notre approche méthodologique
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {methodologyItems.map((item) => (
                  <div key={item.title} className="card-bordered p-4 flex gap-3.5 items-start bg-white">
                    <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-500 text-xs sm:text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link prefetch={false} href="/contact" className="btn-primary text-sm">
                Confier un besoin en recrutement
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            <AnimatedSection animation="slide-right" delay={0.15} className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="relative h-[320px] sm:h-[360px] rounded-3xl overflow-hidden shadow-xl">
                <Illustration name="service_recrutement" />
              </div>

              <div className="card p-6 sm:p-8 mt-6 border border-gray-100">
                <h3 className="font-bold text-navy-500 text-lg mb-2">
                  Besoin de renforcer vos équipes ?
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Présentez-nous vos besoins en recrutement pour bénéficier d&apos;un accompagnement structuré.
                </p>
                <Link prefetch={false} href="/contact" className="btn-primary w-full justify-center text-sm">
                  Prendre contact
                </Link>
                <a
                  href="tel:+237679033398"
                  className="block text-center text-sm text-navy-500 hover:text-primary-500 mt-4 font-semibold transition-colors"
                >
                  +237 679 033 398 / +237 695 296 446
                </a>
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
              Des espaces spécialisés pour répondre précisément aux besoins des employeurs et des candidats.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portalCards.map((portal, idx) => (
              <AnimatedSection
                key={portal.title}
                animation="slide-up"
                delay={idx * 0.1}
                className="card bg-white p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-6">
                    <portal.icon className="w-6 h-6 text-navy-500" />
                  </div>
                  <h3 className="font-extrabold text-navy-500 text-base sm:text-lg mb-3">{portal.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{portal.description}</p>
                </div>
                <Link prefetch={false} href={portal.link} className="inline-flex items-center gap-1.5 text-primary-500 text-xs sm:text-sm font-bold hover:gap-2.5 transition-all">
                  {portal.linkText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NOS AUTRES DOMAINES D'EXPERTISE ===== */}
      <section className="section-white">
        <div className="container-xl">
          <AnimatedSection animation="fade-in">
            <h2 className="text-2xl font-bold text-navy-500 mb-8">
              Nos autres domaines d&apos;expertise
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherServices.map((svc, idx) => (
              <AnimatedSection key={svc.id} animation="slide-up" delay={idx * 0.08}>
                <Link
                  prefetch={false}
                  href={`/services/${svc.slug}`}
                  className="card p-6 sm:p-8 group hover:-translate-y-1 transition-all duration-300 block h-full border border-gray-100 bg-white"
                >
                  <h3 className="font-bold text-navy-500 mb-2 group-hover:text-primary-500 transition-colors text-base sm:text-lg">
                    {svc.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {svc.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-primary-500 text-xs sm:text-sm font-bold mt-4 group-hover:gap-2.5 transition-all">
                    Découvrir ce domaine <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
