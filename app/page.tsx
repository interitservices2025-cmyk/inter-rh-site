import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Eye,
  TrendingUp,
  Star,
  Phone,
  ExternalLink,
} from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import NewsCard from "@/components/ui/NewsCard";
import { services } from "@/lib/data/services";
import { testimonials } from "@/lib/data/testimonials";
import { newsArticles } from "@/lib/data/news";

export const metadata: Metadata = {
  title: "INTER-RH — Votre Cabinet de Conseil RH | Yaoundé, Cameroun",
  description:
    "Votre partenaire en gestion des talents, conseil stratégique et immigration. Cabinet RH basé à Yaoundé, Cameroun. Notés 5/5 sur Google.",
  alternates: {
    canonical: "/",
  },
};

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ===================================================
          SECTION 1 : HERO SECTION
          =================================================== */}
      <section
        className="relative overflow-hidden min-h-[85vh] flex items-center bg-navy-950 text-white"
        aria-labelledby="hero-title"
      >
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&auto=format&fit=crop&q=80"
            alt="Bannière cabinet de conseil RH"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-950/80" />
        </div>

        <div className="container-xl relative z-10 py-20 text-center">
          <div className="animate-fade-in max-w-4xl mx-auto">
            <h1
              id="hero-title"
              className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8"
            >
              Votre cabinet <span className="text-primary-500">de conseil</span>
            </h1>

            <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
              Votre partenaire en gestion des talents, conseil stratégique et immigration
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Link
                href="/notre-agence"
                className="btn-primary text-sm px-8 py-3.5 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/35 hover:-translate-y-0.5 transition-all duration-300"
              >
                En savoir plus sur nous
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="btn-outline text-sm px-8 py-3.5 hover:-translate-y-0.5 transition-all duration-300"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 2 : ACCOMPAGNEMENT RH
          =================================================== */}
      <section
        className="section-light"
        aria-labelledby="about-intro-title"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Colonne Gauche */}
            <div>
              <div className="border-left-accent mb-6">
                <h2
                  id="about-intro-title"
                  className="text-2xl md:text-3xl font-extrabold text-navy-500 leading-snug"
                >
                  Un accompagnement RH sur mesure selon vos besoins et votre réalité
                </h2>
              </div>

              {/* Boîte d'appel direct type Lovable */}
              <div className="mt-8 bg-primary-500 text-white rounded-3xl p-6 flex items-center gap-4 hover:shadow-lg transition-all duration-300 max-w-md">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/80 font-bold uppercase tracking-wider">Appelez-nous</p>
                  <a
                    href="tel:+237679033398"
                    className="text-white font-extrabold text-base md:text-lg block hover:underline"
                  >
                    +237 679 033 398 / +237 695 296 446
                  </a>
                </div>
              </div>
            </div>

            {/* Colonne Droite */}
            <div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Nous accompagnons les entreprises et les particuliers dans le recrutement, le
                développement organisationnel, la gestion de projets, la formation professionnelle
                et les démarches d'immigration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 3 : QUI SOMMES-NOUS ? (INTER-RH)
          =================================================== */}
      <section
        className="section-white"
        aria-labelledby="about-qsn-title"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div>
              <span className="text-primary-500 font-bold text-xs tracking-widest uppercase mb-3 block">
                Qui sommes-nous ?
              </span>
              <h2
                id="about-qsn-title"
                className="text-3xl font-extrabold text-navy-500 mb-6"
              >
                INTER-RH
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
                est un cabinet spécialisé en gestion des ressources humaines, conseil stratégique et immigration. 
                Nous plaçons l'humain au centre de chaque démarche et offrons des solutions professionnelles 
                adaptées aux besoins des particuliers et des organisations.
              </p>
              <Link href="/notre-agence" className="btn-primary text-sm">
                En savoir plus sur nous
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Column - Team Image */}
            <div className="relative">
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80"
                  alt="Équipe INTER-RH"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 4 : DOMAINES DE COMPÉTENCES (SERVICES)
          =================================================== */}
      <section
        className="section-light"
        aria-labelledby="services-title"
      >
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-navy-500 mb-4">
              Nos domaines de compétences
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              Nos experts vous guident tout au long de votre démarche
            </p>
          </div>

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

          <div className="text-center mt-12">
            <Link href="/nos-services" className="btn-outline-dark text-sm">
              Voir tous nos services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 5 : POURQUOI NOUS CHOISIR ?
          =================================================== */}
      <section
        className="section-white"
        aria-labelledby="why-us-title"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=80"
                  alt="Équipe INTER-RH en session de travail"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-primary-500 font-bold text-xs tracking-widest uppercase mb-3 block">
                Pourquoi nous choisir ?
              </span>
              <h2
                id="why-us-title"
                className="text-2xl md:text-3xl font-extrabold text-navy-500 mb-4 leading-snug"
              >
                L'humain et la qualité au centre de chaque action
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                Chez <strong>INTER-RH</strong>, notre engagement repose sur trois piliers essentiels :
              </p>

              {/* Pillars */}
              <div className="space-y-5 mb-8">
                {[
                  {
                    icon: Shield,
                    title: "Fiabilité",
                    desc: "dans notre accompagnement",
                  },
                  {
                    icon: CheckCircle,
                    title: "Transparence",
                    desc: "dans toutes nos démarches",
                  },
                  {
                    icon: TrendingUp,
                    title: "Performance durable",
                    desc: "pour des résultats qui vous suivent sur le long terme",
                  },
                ].map((pillar) => (
                  <div
                    key={pillar.title}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0 mt-0.5">
                      <pillar.icon className="w-5 h-5 text-primary-500" />
                    </div>
                    <p className="text-navy-500 text-sm">
                      <strong className="font-semibold">{pillar.title}</strong>{" "}
                      <span className="text-gray-600">{pillar.desc}</span>
                    </p>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-primary text-sm">
                Contactez-nous
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 6 : BANNÈRE DE CTA INTERMÉDIAIRE
          =================================================== */}
      <section className="bg-[#e63946] py-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="container-xl relative z-10 text-center max-w-3xl">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Star className="w-6 h-6 text-white fill-white" />
          </div>
          <h2 className="text-white text-2xl md:text-3xl font-extrabold mb-4 leading-tight">
            Obtenez une consultation dès maintenant !
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Contactez-nous dès aujourd'hui en remplissant notre formulaire en ligne et nous vous recontacterons dans les plus brefs délais.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary-500 hover:bg-white/95 font-bold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-sm"
          >
            Contactez-nous
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ===================================================
          SECTION 5 : TÉMOIGNAGES (AVIS GOOGLE)
          =================================================== */}
      <section
        className="section-white"
        aria-labelledby="testimonials-title"
      >
        <div className="container-xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 shadow-sm text-gray-700 font-semibold text-sm px-4 py-2 rounded-full mb-6">
              <GoogleG />
              AVIS GOOGLE
            </div>
            <h2
              id="testimonials-title"
              className="text-3xl md:text-4xl font-extrabold text-navy-500 mb-4"
            >
              Ils nous ont fait confiance
            </h2>
            {/* Rating */}
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-navy-500 font-extrabold text-base">5,0 / 5</span>
              <span className="text-gray-500 text-sm">— Inter-RH sur Google</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://g.page/r/CcboD9Wi2Pv_EAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm inline-flex items-center gap-2"
            >
              Laisser un avis sur Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 6 : ACTUALITÉS / BLOG
          =================================================== */}
      <section
        className="section-light"
        aria-labelledby="news-title"
      >
        <div className="container-xl">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-primary-50 text-primary-500 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Actualités
              </span>
              <h2 id="news-title" className="section-title mb-2">
                Dernières nouvelles
              </h2>
            </div>
            <Link
              href="/actus"
              className="hidden sm:flex items-center gap-2 text-primary-500 font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              Voir toutes les actus
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsArticles.slice(0, 3).map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>

          <div className="text-center mt-10 sm:hidden">
            <Link href="/actus" className="btn-outline-dark text-sm">
              Voir toutes les actus
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
