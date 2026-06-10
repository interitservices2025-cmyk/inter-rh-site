import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Heart,
  Lightbulb,
  Users,
  Award,
  Globe,
} from "lucide-react";
import PageHero from "@/components/sections/PageHero";

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
    title: "L'humain au centre",
    description:
      "Chaque décision, chaque conseil, chaque accompagnement est guidé par notre profond respect de la personne humaine.",
  },
  {
    icon: Target,
    title: "Excellence & rigueur",
    description:
      "Nous nous engageons à fournir des prestations de qualité supérieure, avec une rigueur méthodologique à chaque étape.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Nous intégrons les dernières tendances RH et technologies pour vous offrir des solutions avant-gardistes.",
  },
  {
    icon: Globe,
    title: "Ouverture internationale",
    description:
      "Notre expertise en immigration et notre réseau international nous permettent de vous connecter au monde.",
  },
];

const stats = [
  { value: "5,0/5", label: "Note Google", suffix: "⭐" },
  { value: "100+", label: "Clients accompagnés" },
  { value: "5", label: "Domaines d'expertise" },
  { value: "3+", label: "Années d'expérience" },
];

export default function NotreAgencePage() {
  return (
    <>
      <PageHero
        overline="QUI SOMMES-NOUS"
        title="Notre Agence"
        titleHighlight="INTER-RH"
        subtitle="Cabinet spécialisé dans la gestion des talents, le conseil stratégique, la gestion de projets, la formation et l'immigration."
        breadcrumbs={[{ label: "Notre agence" }]}
        cta={{ label: "Contactez-nous", href: "/contact" }}
        ctaSecondary={{ label: "Nos services", href: "/nos-services" }}
      />

      {/* ===== MISSION SECTION ===== */}
      <section className="section-white" aria-labelledby="mission-title">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-overline">NOTRE MISSION</p>
              <h2 id="mission-title" className="section-title">
                Transformer le capital humain en avantage compétitif
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                INTER-RH est un cabinet de conseil RH basé à Yaoundé, Cameroun. Fondé avec la
                conviction que les ressources humaines sont le premier levier de performance des
                organisations, nous accompagnons entreprises et particuliers dans leur développement.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Notre approche combine expertise locale et standards internationaux pour vous
                offrir des solutions adaptées à votre contexte et à vos ambitions.
              </p>

              <div className="space-y-3">
                {[
                  "Recrutement ciblé et sélection rigoureuse",
                  "Conseil en stratégie organisationnelle",
                  "Accompagnement à l'immigration vers le Canada",
                  "Formation sur mesure et coaching certifié",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary-500" />
                    </div>
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[460px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80"
                  alt="L'équipe INTER-RH au travail"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="bg-primary-500 py-16">
        <div className="container-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-extrabold text-white mb-2">
                  {stat.suffix && (
                    <span className="text-2xl mr-1">{stat.suffix}</span>
                  )}
                  {stat.value}
                </p>
                <p className="text-white/70 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="section-light" aria-labelledby="values-title">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="section-overline">NOS VALEURS</p>
            <h2 id="values-title" className="section-title">
              Ce qui guide chacune de nos actions
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="card p-6 text-center group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors">
                  <value.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="font-bold text-navy-500 mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-white">
        <div className="container-xl text-center">
          <h2 className="section-title">
            Prêt à collaborer avec nous ?
          </h2>
          <p className="section-subtitle mb-8">
            Contactez notre équipe pour une première consultation gratuite.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Nous contacter
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/nos-services" className="btn-outline-dark">
              Nos services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
