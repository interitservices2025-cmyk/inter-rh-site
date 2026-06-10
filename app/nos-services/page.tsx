import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Nos Services — Gestion des Talents, Conseil, Immigration | INTER-RH",
  description:
    "Découvrez l'ensemble de nos services : gestion des talents & recrutement, conseil stratégique, gestion de projets, formation & coaching, et accompagnement en immigration.",
  alternates: { canonical: "/nos-services" },
  openGraph: {
    title: "Nos Services | INTER-RH",
    description:
      "5 domaines d'expertise pour accompagner votre organisation et votre développement.",
  },
};

export default function NosServicesPage() {
  return (
    <>
      <PageHero
        overline="CE QUE NOUS FAISONS"
        title="Nos Services"
        titleHighlight="& Expertises"
        subtitle="5 domaines de compétences pour accompagner votre organisation dans tous ses défis RH et stratégiques."
        breadcrumbs={[{ label: "Nos services" }]}
        cta={{ label: "Nous contacter", href: "/contact" }}
      />

      {/* Services Grid */}
      <section className="section-white" aria-labelledby="services-list-title">
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 id="services-list-title" className="section-title">
              Nos domaines de compétences
            </h2>
            <p className="section-subtitle">
              Nos experts vous guident tout au long de votre démarche
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <p className="section-overline mb-4">SERVICE {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-navy-500 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.fullDescription}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary-500" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.slug}`}
                    className="btn-primary"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-500 py-16">
        <div className="container-xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Vous avez un besoin spécifique ?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Contactez-nous pour une consultation sur mesure.
          </p>
          <Link href="/contact" className="btn-secondary">
            Prendre contact
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
