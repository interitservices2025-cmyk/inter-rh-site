import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Users, Briefcase } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ServiceCard from "@/components/ui/ServiceCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Nos Services — Gestion des Talents, Conseil, Immigration | INTER-RH",
  description:
    "Que vous soyez entreprise, candidat ou institution, nous mettons notre expertise à votre service. Découvrez l'ensemble de nos domaines de compétences.",
  alternates: { canonical: "/nos-services" },
  openGraph: {
    title: "Nos Services | INTER-RH",
    description:
      "Cinq expertises au service des entreprises, des candidats et des institutions.",
  },
};

const portals = [
  {
    icon: Building2,
    title: "Entreprise",
    description: "Solutions RH sur mesure : recrutement, intégration, gestion des talents et accompagnement de croissance.",
    href: "/employeurs",
  },
  {
    icon: Users,
    title: "Candidat",
    description: "Coaching personnalisé, CV impactant, préparation aux entretiens et accès à des offres exclusives.",
    href: "/candidature",
  },
  {
    icon: Briefcase,
    title: "Offre",
    description: "Publication et gestion d'appels d'offres et de candidatures, au Cameroun comme à l'international.",
    href: "/offres",
  },
];

export default function NosServicesPage() {
  return (
    <>
      <PageHero
        overline="CE QUE NOUS FAISONS"
        title="Nos services"
        subtitle="Que vous soyez entreprise, candidat ou institution, nous mettons notre expertise à votre service."
        breadcrumbs={[{ label: "Nos services" }]}
        cta={{ label: "Nous contacter", href: "/contact" }}
      />

      {/* ===== PORTALS SECTION ===== */}
      <section className="section-white" aria-labelledby="portals-heading">
        <div className="container-xl">
          <h2 id="portals-heading" className="sr-only">Nos portails d'accès</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portals.map((portal, idx) => (
              <AnimatedSection
                key={portal.title}
                animation="slide-up"
                delay={idx * 0.1}
                className="card p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 border border-gray-50"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-6">
                    <portal.icon className="w-6 h-6 text-navy-500" />
                  </div>
                  <h3 className="font-extrabold text-navy-500 text-lg mb-4">{portal.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{portal.description}</p>
                </div>
                <Link prefetch={false}
                  href={portal.href}
                  className="inline-flex items-center gap-1.5 text-primary-500 text-sm font-bold hover:gap-2 transition-all duration-200"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERTISES GRID ===== */}
      <section className="section-light" aria-labelledby="expertises-title">
        <div className="container-xl">
          <AnimatedSection animation="fade-in" className="text-center mb-12">
            <p className="section-overline">Nos expertises</p>
            <h2 id="expertises-title" className="section-title">
              Cinq domaines de compétences
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 3).map((service) => (
                <ServiceCard key={service.id} service={service} variant="image" />
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto mt-8">
              {services.slice(3).map((service) => (
                <ServiceCard key={service.id} service={service} variant="image" />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
