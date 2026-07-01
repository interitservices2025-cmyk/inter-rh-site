import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Illustration from "@/components/ui/Illustration";
import { ArrowRight, CheckCircle } from "lucide-react";
import { services, getServiceBySlug } from "@/lib/data/services";
import PageHero from "@/components/sections/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((svc) => ({ slug: svc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service introuvable | INTER-RH" };
  }

  return {
    title: `${service.title} | INTER-RH`,
    description: service.shortDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: service.title,
      description: service.shortDescription,
      images: [service.imageUrl],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        overline="NOS SERVICES"
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbs={[
          { label: "Nos services", href: "/nos-services" },
          { label: service.title },
        ]}
        cta={{ label: "Nous contacter", href: "/contact" }}
      />

      {/* ===== MAIN CONTENT ===== */}
      <section className="section-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Content */}
            <AnimatedSection animation="slide-left">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-500 mb-6">
                À propos de ce service
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {service.fullDescription}
              </p>

              <h3 className="text-xl font-bold text-navy-500 mb-5">
                Ce que nous proposons
              </h3>
              <ul className="space-y-4 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link prefetch={false} href="/contact" className="btn-primary">
                Demander un devis
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            {/* Image */}
            <AnimatedSection animation="slide-right" delay={0.2} className="sticky top-24">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">
                <Illustration
                  name={
                    service.slug === "gestion-des-talents" ? "service_recrutement" :
                    service.slug === "conseil-strategique" ? "service_strategy" :
                    service.slug === "gestion-de-projets" ? "service_projects" :
                    service.slug === "formation-coaching" ? "service_coaching" :
                    service.slug === "immigration" ? "service_immigration" : "service_recrutement"
                  }
                />
              </div>

              {/* Contact card */}
              <div className="card p-6 mt-6">
                <h4 className="font-bold text-navy-500 mb-3">
                  Intéressé par ce service ?
                </h4>
                <p className="text-gray-500 text-sm mb-4">
                  Contactez-nous pour une consultation gratuite et personnalisée.
                </p>
                <Link prefetch={false} href="/contact" className="btn-primary w-full justify-center text-sm">
                  Prendre contact
                </Link>
                <a
                  href="tel:+237679033398"
                  className="block text-center text-sm text-primary-500 hover:text-primary-600 mt-3 font-medium"
                >
                  +237 679 033 398
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== OTHER SERVICES ===== */}
      <section className="section-light">
        <div className="container-xl">
          <AnimatedSection animation="fade-in">
            <h2 className="text-2xl font-bold text-navy-500 mb-8">
              Nos autres services
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((svc, idx) => (
              <AnimatedSection
                key={svc.id}
                animation="slide-up"
                delay={idx * 0.08}
              >
                <Link prefetch={false}
                  href={`/services/${svc.slug}`}
                  className="card p-6 group hover:-translate-y-1 transition-all duration-300 block h-full"
                >
                  <h3 className="font-bold text-navy-500 mb-2 group-hover:text-primary-500 transition-colors text-sm">
                    {svc.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                    {svc.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary-500 text-xs font-semibold mt-3 group-hover:gap-2 transition-all">
                    En savoir plus <ArrowRight className="w-3 h-3" />
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
