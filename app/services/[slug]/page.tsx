import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import Link from "next/link";
import Illustration from "@/components/ui/Illustration";
import {
  ArrowRight,
  CheckCircle,
  Building2,
  Network,
  TrendingUp,
  Cpu,
  Users,
  Compass,
  Settings,
  ClipboardCheck,
  CalendarClock,
  Layers,
  Activity,
  Award,
  Info,
} from "lucide-react";
import { services, getServiceBySlug } from "@/lib/data/services";
import PageHero from "@/components/sections/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface Props {
  params: Promise<{ slug: string }>;
}

const removedServiceSlugs = ["formation-coaching", "conseil-strategique"];

const sectorIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Network,
  TrendingUp,
  Cpu,
  Users,
  Compass,
  Settings,
};

const stepIcons = [
  ClipboardCheck,
  CalendarClock,
  Layers,
  Activity,
  Award,
];

export async function generateStaticParams() {
  return services.map((svc) => ({ slug: svc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service | INTER-RH" };
  }

  return {
    title: `${service.title} | INTER-RH`,
    description: service.shortDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${service.title} | INTER-RH`,
      description: service.shortDescription,
      images: [service.imageUrl],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  if (removedServiceSlugs.includes(slug)) {
    permanentRedirect("/nos-services");
  }

  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);
  const isProjectManagement = service.slug === "gestion-de-projets";

  return (
    <>
      <PageHero
        overline="NOS DOMAINES D'EXPERTISE"
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbs={[
          { label: "Nos services", href: "/nos-services" },
          { label: service.title },
        ]}
        cta={{
          label: service.ctaLabel || "Nous contacter",
          href: isProjectManagement
            ? "/contact?sujet=Gestion%20et%20pilotage%20de%20projets"
            : "/contact",
        }}
      />

      {/* ===== MAIN CONTENT ===== */}
      <section className="section-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Content */}
            <AnimatedSection animation="slide-left" className="lg:col-span-7">
              <p className="section-overline">Présentation du domaine</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-500 mb-6 leading-snug">
                {isProjectManagement
                  ? "Un accompagnement structuré de l'idée initiale jusqu'à la finalisation"
                  : "Notre accompagnement sur mesure"}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-sm sm:text-base">
                {service.fullDescription}
              </p>
              {service.secondaryDescription && (
                <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base">
                  {service.secondaryDescription}
                </p>
              )}

              {isProjectManagement && (
                <div className="p-5 rounded-2xl bg-navy-50 border border-navy-100 flex items-start gap-3.5 mb-8">
                  <Info className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-navy-700 leading-relaxed">
                    <strong className="text-navy-500 font-bold">Positionnement et mandat :</strong>{" "}
                    INTER-RH intervient dans l&apos;accompagnement, la planification, la coordination des intervenants et le pilotage du projet selon le mandat confié, sans se substituer aux entreprises de réalisation technique ou de travaux spécialisés.
                  </p>
                </div>
              )}

              <h3 className="text-xl font-bold text-navy-500 mb-5">
                {isProjectManagement
                  ? "Les axes clés de notre intervention"
                  : "Ce que nous proposons"}
              </h3>
              <ul className="space-y-3.5 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50/80 border border-gray-100">
                    <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm font-medium leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                prefetch={false}
                href={
                  isProjectManagement
                    ? "/contact?sujet=Gestion%20et%20pilotage%20de%20projets"
                    : "/contact"
                }
                className="btn-primary text-sm"
              >
                {service.ctaLabel || "Nous contacter"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            {/* Image & Contact Card */}
            <AnimatedSection animation="slide-right" delay={0.15} className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="relative h-[320px] sm:h-[380px] rounded-3xl overflow-hidden shadow-xl">
                <Illustration
                  name={
                    service.slug === "gestion-des-talents"
                      ? "service_recrutement"
                      : service.slug === "gestion-de-projets"
                      ? "service_projects"
                      : "service_immigration"
                  }
                />
              </div>

              {/* Contact card */}
              <div className="card p-6 sm:p-8 mt-6 border border-gray-100">
                <h3 className="font-bold text-navy-500 text-lg mb-2">
                  {isProjectManagement
                    ? "Vous avez un projet à structurer ou piloter ?"
                    : "Intéressé par cet accompagnement ?"}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Échangeons sur vos objectifs et vos contraintes afin de définir un accompagnement adapté à vos besoins.
                </p>
                <Link
                  prefetch={false}
                  href={
                    isProjectManagement
                      ? "/contact?sujet=Gestion%20et%20pilotage%20de%20projets"
                      : "/contact"
                  }
                  className="btn-primary w-full justify-center text-sm"
                >
                  {service.ctaLabel || "Prendre contact"}
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

      {/* ===== SPECIFIC PROJECT MANAGEMENT SECTIONS (SECTORS & A-TO-Z LIFECYCLE) ===== */}
      {isProjectManagement && service.projectSectors && service.projectSteps && (
        <>
          {/* Exemples de projets concernés */}
          <section className="section-light" aria-labelledby="sectors-heading">
            <div className="container-xl">
              <AnimatedSection animation="fade-in" className="text-center mb-14">
                <p className="section-overline">Intervention multisectorielle</p>
                <h2 id="sectors-heading" className="section-title">
                  Exemples de projets concernés
                </h2>
                <p className="section-subtitle">
                  Notre accompagnement en gestion et pilotage de projets s&apos;adapte à différents secteurs d&apos;activité, selon la nature et les objectifs du mandat confié.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.projectSectors.map((sector) => {
                    const Icon = sectorIcons[sector.icon] || Building2;
                    return (
                      <div
                        key={sector.title}
                        className="card p-6 sm:p-7 border border-gray-100 bg-white flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
                      >
                        <div>
                          <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center mb-5">
                            <Icon className="w-6 h-6 text-primary-500" />
                          </div>
                          <h3 className="font-bold text-navy-500 text-base sm:text-lg mb-2.5 leading-snug">
                            {sector.title}
                          </h3>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            {sector.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Notre accompagnement de A à Z */}
          <section className="section-white" aria-labelledby="a-to-z-heading">
            <div className="container-xl">
              <AnimatedSection animation="fade-in" className="text-center mb-14">
                <p className="section-overline">Méthodologie de pilotage</p>
                <h2 id="a-to-z-heading" className="section-title">
                  Notre accompagnement de A à Z
                </h2>
                <p className="section-subtitle">
                  Un suivi structuré couvrant l&apos;ensemble du cycle de vie de votre projet, du cadrage initial jusqu&apos;à la clôture.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={0.1}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                  {service.projectSteps.map((step, idx) => {
                    const StepIcon = stepIcons[idx] || ClipboardCheck;
                    return (
                      <div
                        key={step.number}
                        className="card-bordered p-6 flex flex-col justify-between bg-white group hover:-translate-y-1 transition-all duration-300"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-5">
                            <div className="w-11 h-11 rounded-2xl bg-navy-50 group-hover:bg-primary-50 flex items-center justify-center transition-colors">
                              <StepIcon className="w-5 h-5 text-navy-500 group-hover:text-primary-500 transition-colors" />
                            </div>
                            <span className="text-2xl font-extrabold text-primary-500/25 group-hover:text-primary-500 transition-colors">
                              0{step.number}
                            </span>
                          </div>
                          <h3 className="font-bold text-navy-500 text-base mb-2.5 group-hover:text-primary-500 transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                        <div className="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                          <span>Étape {step.number} / 5</span>
                          <span className="w-2 h-2 rounded-full bg-primary-500/40 group-hover:bg-primary-500 transition-colors" />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-12 text-center">
                  <Link
                    prefetch={false}
                    href="/contact?sujet=Gestion%20et%20pilotage%20de%20projets"
                    className="btn-primary text-sm px-8 py-4"
                  >
                    Discutons de votre projet
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </section>
        </>
      )}

      {/* ===== OTHER SERVICES ===== */}
      <section className={isProjectManagement ? "section-light" : "section-light"}>
        <div className="container-xl">
          <AnimatedSection animation="fade-in">
            <h2 className="text-2xl font-bold text-navy-500 mb-8">
              Nos autres domaines d&apos;expertise
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherServices.map((svc, idx) => (
              <AnimatedSection
                key={svc.id}
                animation="slide-up"
                delay={idx * 0.08}
              >
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
