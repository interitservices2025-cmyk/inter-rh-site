import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Illustration from "@/components/ui/Illustration";
import { ArrowRight, Heart, Award, Users } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Notre Agence — Cabinet RH INTER-RH",
  description:
    "Découvrez INTER-RH, cabinet de conseil spécialisé en gestion des talents, conseil stratégique et immigration. Notre mission, nos valeurs, notre équipe à Yaoundé.",
  alternates: { canonical: "/notre-agence" },
  openGraph: {
    title: "Notre Agence | INTER-RH",
    description:
      "Découvrez notre cabinet et notre engagement pour l'excellence RH au Cameroun.",
  },
};

const values = [
  {
    icon: Heart,
    title: "Humanité",
    description:
      "Nous prenons le temps d'écouter, de comprendre et de personnaliser chaque accompagnement.",
  },
  {
    icon: Award,
    title: "Exigence",
    description:
      "Nous nous engageons sur des résultats concrets et mesurables, jamais sur des promesses vagues.",
  },
  {
    icon: Users,
    title: "Proximité",
    description:
      "Une équipe disponible et réactive, présente à chaque étape de votre projet.",
  },
];

export default function NotreAgencePage() {
  return (
    <>
      <PageHero
        overline="QUI SOMMES-NOUS"
        title="Notre agence"
        subtitle="INTER-RH, votre partenaire stratégique pour révéler le potentiel des organisations et des individus."
        breadcrumbs={[{ label: "Notre agence" }]}
        cta={{ label: "Prendre rendez-vous", href: "/contact" }}
      />

      {/* ===== MISSION SECTION ===== */}
      <section className="section-white" aria-labelledby="mission-title">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-left">
              <p className="section-overline">Notre mission</p>
              <h2 id="mission-title" className="section-title">
                Placer l'humain au cœur de chaque décision
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                INTER-RH est un cabinet spécialisé en gestion des ressources humaines, conseil stratégique et immigration. 
                Nous accompagnons les entreprises camerounaises et internationales ainsi que les particuliers dans la réalisation 
                de leurs projets professionnels et personnels.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Notre conviction : derrière chaque organisation performante, il y a des femmes et des hommes engagés, 
                accompagnés et reconnus. C'est sur cette conviction que nous bâtissons nos prestations.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slide-right" delay={0.2} className="relative">
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <Illustration
                  name="mission_human"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="section-light" aria-labelledby="values-title">
        <div className="container-xl">
          <AnimatedSection animation="fade-in" className="text-center mb-12">
            <p className="section-overline">Nos valeurs</p>
            <h2 id="values-title" className="section-title">
              Ce qui guide nos équipes au quotidien
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <AnimatedSection
                key={value.title}
                animation="slide-up"
                delay={idx * 0.1}
                className="card p-8 text-center group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-100 transition-colors">
                  <value.icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="font-extrabold text-navy-500 text-lg mb-4">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-white">
        <div className="container-xl">
          <AnimatedSection
            animation="scale-in"
            className="text-center bg-navy-900 text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Parlons de votre projet
            </h2>
            <p className="text-blue-100 text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Une consultation initiale gratuite pour comprendre vos besoins.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link prefetch={false} href="/contact" className="btn-primary">
                Prendre rendez-vous
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
