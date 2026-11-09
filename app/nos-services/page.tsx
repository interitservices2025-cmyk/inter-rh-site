import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Users, Briefcase } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ServiceCard from "@/components/ui/ServiceCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Nos Services — Gestion des talents, Pilotage de projets & Accompagnement en immigration | INTER-RH",
  description:
    "Découvrez les trois domaines d'expertise d'INTER-RH : Gestion des talents & recrutement, Gestion et pilotage de projets multisectoriels de A à Z, et Accompagnement en immigration.",
  alternates: { canonical: "/nos-services" },
  openGraph: {
    title: "Nos Services | INTER-RH",
    description:
      "Trois domaines d'expertise au service des entreprises, des candidats et des institutions.",
  },
};

const portals = [
  {
    icon: Building2,
    title: "Espace Entreprises",
    description:
      "Recrutement sur mesure, intégration de collaborateurs et pilotage opérationnel de vos projets d'entreprise.",
    href: "/employeurs",
  },
  {
    icon: Users,
    title: "Espace Candidats",
    description:
      "Accompagnement de carrière, valorisation de votre parcours, préparation aux entretiens et accès à nos opportunités.",
    href: "/candidature",
  },
  {
    icon: Briefcase,
    title: "Offres & Appels d'offres",
    description:
      "Publication et gestion d'appels d'offres et de candidatures, au Cameroun comme à l'international.",
    href: "/offres",
  },
];

export default function NosServicesPage() {
  return (
    <>
      <PageHero
        overline="CE QUE NOUS FAISONS"
        title="Nos domaines d'intervention"
        subtitle="Que vous soyez une entreprise, une organisation ou un particulier, INTER-RH vous accompagne avec méthode dans la gestion des talents, le pilotage de projets et les démarches d'immigration."
        breadcrumbs={[{ label: "Nos services" }]}
        cta={{ label: "Nous contacter", href: "/contact" }}
      />

      {/* ===== EXPERTISES GRID ===== */}
      <section className="section-white" aria-labelledby="expertises-title">
        <div className="container-xl">
          <AnimatedSection animation="fade-in" className="text-center mb-14">
            <p className="section-overline">Nos expertises</p>
            <h2 id="expertises-title" className="section-title">
              Trois domaines de compétences complémentaires
            </h2>
            <p className="section-subtitle">
              Une approche professionnelle, structurée et adaptée aux enjeux spécifiques de chaque mandat.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} variant="image" showFeatures />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== PORTALS SECTION ===== */}
      <section className="section-light" aria-labelledby="portals-heading">
        <div className="container-xl">
          <AnimatedSection animation="fade-in" className="text-center mb-12">
            <p className="section-overline">Accès directs</p>
            <h2 id="portals-heading" className="section-title">
              Nos portails dédiés
            </h2>
            <p className="section-subtitle">
              Accédez directement à l&apos;espace correspondant à votre profil et à vos besoins.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portals.map((portal, idx) => (
              <AnimatedSection
                key={portal.title}
                animation="slide-up"
                delay={idx * 0.1}
                className="card p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 border border-gray-100 bg-white"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-6">
                    <portal.icon className="w-6 h-6 text-navy-500" />
                  </div>
                  <h3 className="font-extrabold text-navy-500 text-lg mb-3">
                    {portal.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {portal.description}
                  </p>
                </div>
                <Link
                  prefetch={false}
                  href={portal.href}
                  className="inline-flex items-center gap-1.5 text-primary-500 text-sm font-bold hover:gap-2.5 transition-all duration-200"
                >
                  Accéder à l&apos;espace
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
