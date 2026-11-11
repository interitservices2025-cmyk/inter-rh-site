import type { Metadata } from "next";
import Link from "next/link";
import Illustration from "@/components/ui/Illustration";
import HomeHero from "@/components/sections/HomeHero";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  TrendingUp,
  Star,
  Phone,
  ExternalLink,
  Building2,
  Network,
  Cpu,
  Users,
  Compass,
  Settings,
  ClipboardCheck,
  CalendarClock,
  Layers,
  Activity,
  Award,
} from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import NewsCard from "@/components/ui/NewsCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { services, projectSectors, projectLifecycleSteps } from "@/lib/data/services";
import { testimonials } from "@/lib/data/testimonials";
import { newsArticles } from "@/lib/data/news";

export const metadata: Metadata = {
  title:
    "INTER-RH — Cabinet RH, Recrutement, Pilotage de projets & Immigration au Cameroun",
  description:
    "Basé à Yaoundé, INTER-RH accompagne les entreprises et les particuliers dans la gestion des talents et le recrutement, la gestion et le pilotage de projets multisectoriels de A à Z, et les démarches d'immigration (Canada, Australie, Luxembourg, Europe) ainsi que les études au Maroc et en Tunisie.",
  keywords: [
    "INTER-RH",
    "cabinet RH Yaoundé",
    "recrutement Cameroun",
    "pilotage de projets Cameroun",
    "immigration Canada Australie Luxembourg Europe",
    "études Maroc Tunisie Cameroun",
    "gestion des talents Afrique",
    "Entrée express Canada",
  ],
  alternates: {
    canonical: "https://www.inter-rh.com",
  },
  openGraph: {
    title:
      "INTER-RH — Gestion des talents, pilotage de projets & immigration",
    description:
      "Votre partenaire structuré à Yaoundé pour le recrutement de talents, la coordination et le pilotage de projets de A à Z, et l'immigration internationale (Canada, Australie, Europe, Maroc, Tunisie).",
    url: "https://www.inter-rh.com",
    siteName: "INTER-RH — Inter Human Ressources",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/hero-poster.jpg",
        width: 1200,
        height: 630,
        alt: "INTER-RH — Gestion des talents, pilotage de projets et immigration",
      },
    ],
  },
};

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

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
          SECTION 1 : HERO AVEC VIDÉO OU IMAGE DE FOND
          =================================================== */}
      <HomeHero />

      {/* ===================================================
          SECTION 2 : PRÉSENTATION D'INTER-RH
          =================================================== */}
      <section
        className="section-white"
        aria-labelledby="about-qsn-title"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column - Presentation */}
            <AnimatedSection animation="slide-left" className="lg:col-span-7">
              <span className="section-overline block">
                Présentation du cabinet
              </span>
              <h2
                id="about-qsn-title"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-500 mb-6 leading-tight"
              >
                INTER-RH, un partenaire structuré au service des organisations et des parcours professionnels
              </h2>
              <div className="border-left-accent mb-6">
                <p className="text-navy-500 font-semibold text-base sm:text-lg leading-relaxed">
                  Basé à Yaoundé, INTER-HUMAN RESSOURCES (INTER-RH) accompagne les entreprises, les institutions et les particuliers dans la réussite de leurs démarches et le développement de leurs activités.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base">
                Qu&apos;il s&apos;agisse de recruter et d&apos;intégrer des talents qualifiés, de coordonner et piloter des projets d&apos;envergure dans différents secteurs d&apos;activité, ou de sécuriser un projet d&apos;immigration et d&apos;études à l&apos;international (Canada, Australie, Luxembourg et autres pays d&apos;Europe, ainsi que le Maroc et la Tunisie pour les parcours étudiants en Afrique), nous mettons en œuvre une approche humaine, rigoureuse et adaptée à la réalité de chaque mandat.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  prefetch={false}
                  href="/notre-agence"
                  className="btn-primary justify-center text-sm"
                >
                  En savoir plus sur le cabinet
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+237679033398"
                  className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-full bg-navy-50 text-navy-500 hover:bg-navy-100 font-semibold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary-500 shrink-0" />
                  <span>+237 679 033 398</span>
                </a>
              </div>
            </AnimatedSection>

            {/* Right Column - Visual & Key Pillars */}
            <AnimatedSection animation="slide-right" delay={0.15} className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-navy-500">
                <div className="h-[280px] sm:h-[320px] relative">
                  <Illustration name="team_about" />
                </div>
                <div className="p-6 sm:p-8 bg-navy-500 text-white">
                  <p className="font-directive text-xs text-primary-400 uppercase tracking-widest mb-2">
                    Notre engagement
                  </p>
                  <p className="text-white font-bold text-base sm:text-lg mb-2">
                    Allier exigence méthodologique et proximité humaine
                  </p>
                  <p className="text-blue-100/80 text-xs sm:text-sm leading-relaxed">
                    Un interlocuteur dédié pour analyser vos objectifs, structurer vos démarches et accompagner l&apos;atteinte de résultats concrets.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 3 : NOS TROIS DOMAINES D'EXPERTISE
          =================================================== */}
      <section
        className="section-light"
        aria-labelledby="services-title"
      >
        <div className="container-xl">
          <AnimatedSection animation="fade-in" className="text-center mb-12">
            <p className="section-overline">Ce que nous faisons</p>
            <h2 id="services-title" className="section-title">
              Nos trois domaines d&apos;expertise
            </h2>
            <p className="section-subtitle">
              Une offre claire autour de trois pôles complémentaires pour répondre aux besoins des entreprises et des particuliers.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} variant="image" />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===================================================
          SECTION 4 : FOCUS SUR LA GESTION ET LE PILOTAGE DE PROJETS
          =================================================== */}
      <section
        id="pilotage-projets"
        className="bg-navy-500 py-16 text-white relative overflow-hidden"
        aria-labelledby="project-focus-title"
      >
        {/* Subtle decorative circles */}
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3 pointer-events-none"
          aria-hidden="true"
        />

        <div className="container-xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <AnimatedSection animation="slide-left" className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-500/40 text-primary-300 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
                Expertise multisectorielle
              </span>
              <h2
                id="project-focus-title"
                className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight"
              >
                Gestion et pilotage de projets
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed mb-4">
                Nous accompagnons les entreprises et les organisations dans la conception, la planification, la coordination et la réalisation de leurs projets, quel que soit leur domaine d&apos;activité.
              </p>
              <p className="text-blue-100/80 text-xs sm:text-sm leading-relaxed mb-6">
                De la définition des objectifs à la clôture, nous apportons une méthode structurée pour organiser les ressources, coordonner les intervenants et suivre les délais selon le mandat confié.
              </p>

              <div className="flex flex-wrap gap-3.5">
                <Link
                  prefetch={false}
                  href="/contact?sujet=Gestion%20et%20pilotage%20de%20projets"
                  className="btn-primary text-sm"
                >
                  Discutons de votre projet
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  prefetch={false}
                  href="/services/gestion-de-projets"
                  className="btn-outline text-sm"
                >
                  Détails de l&apos;accompagnement
                </Link>
              </div>
            </AnimatedSection>

            {/* Right Column: Compact Project Sectors Badges */}
            <AnimatedSection animation="slide-right" delay={0.15} className="lg:col-span-6">
              <div className="bg-white/6 backdrop-blur-sm border border-white/12 rounded-3xl p-6 sm:p-7">
                <h3 className="text-white font-bold text-base sm:text-lg mb-1.5">
                  Domaines d&apos;intervention
                </h3>
                <p className="text-blue-200/80 text-xs mb-5">
                  Accompagnement, coordination et pilotage de projets dans différents secteurs :
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {projectSectors.map((sector, index) => {
                    const Icon = sectorIcons[sector.icon] || Building2;
                    const isLastOdd =
                      index === projectSectors.length - 1 &&
                      projectSectors.length % 2 !== 0;
                    return (
                      <div
                        key={sector.title}
                        className={`px-3.5 py-3 rounded-xl bg-white/8 hover:bg-white/12 border border-white/10 transition-colors flex items-center gap-3 ${
                          isLastOdd ? "sm:col-span-2" : ""
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary-500/20 border border-primary-500/30 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-primary-300" />
                        </div>
                        <span className="text-white font-semibold text-xs sm:text-sm leading-snug">
                          {sector.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 5 : NOTRE MÉTHODE D'ACCOMPAGNEMENT DE A À Z
          =================================================== */}
      <section
        className="section-white"
        aria-labelledby="lifecycle-title"
      >
        <div className="container-xl">
          <AnimatedSection animation="fade-in" className="text-center mb-14">
            <p className="section-overline">Cycle de vie du projet</p>
            <h2 id="lifecycle-title" className="section-title">
              Notre accompagnement de A à Z
            </h2>
            <p className="section-subtitle">
              Une méthodologie structurée en 5 étapes clés pour couvrir l&apos;ensemble du cycle de vie de votre projet et sécuriser l&apos;atteinte de vos objectifs.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {projectLifecycleSteps.map((step, idx) => {
                const StepIcon = stepIcons[idx] || ClipboardCheck;
                return (
                  <div
                    key={step.number}
                    className="card-bordered p-6 flex flex-col justify-between relative group hover:-translate-y-1 transition-all duration-300 bg-white"
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
                className="btn-primary text-sm px-8 py-3.5"
              >
                Discutons de votre projet
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===================================================
          SECTION 6 : POURQUOI CHOISIR INTER-RH ? (+ AVIS CLIENTS)
          =================================================== */}
      <section
        className="section-light"
        aria-labelledby="why-us-title"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Image */}
            <AnimatedSection animation="slide-left" className="relative">
              <div className="relative h-[340px] sm:h-[400px] rounded-3xl overflow-hidden shadow-xl">
                <Illustration name="why_choose_us" />
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection animation="slide-right" delay={0.15}>
              <span className="section-overline block">
                Pourquoi choisir INTER-RH ?
              </span>
              <h2
                id="why-us-title"
                className="text-2xl sm:text-3xl font-extrabold text-navy-500 mb-4 leading-snug"
              >
                L&apos;humain, la méthode et la qualité au centre de chaque action
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">
                Chez <strong>INTER-RH</strong>, notre accompagnement repose sur trois engagements fondamentaux auprès des entreprises et des particuliers :
              </p>

              {/* Pillars */}
              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: Shield,
                    title: "Fiabilité et rigueur",
                    desc: "Des processus structurés, du cadrage initial jusqu'à la réalisation finale.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Transparence",
                    desc: "Une communication claire et un suivi régulier à chaque étape de votre dossier ou projet.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Performance durable",
                    desc: "Des solutions pragmatiques orientées vers l'atteinte de vos objectifs opérationnels.",
                  },
                ].map((pillar) => (
                  <div
                    key={pillar.title}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-xs"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0 mt-0.5">
                      <pillar.icon className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-navy-500 font-bold text-sm mb-0.5">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link prefetch={false} href="/contact" className="btn-primary text-sm">
                Prendre contact avec notre équipe
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>

          {/* Témoignages Google intégrés à la preuve de confiance */}
          <div className="pt-12 border-t border-gray-200/80">
            <AnimatedSection animation="fade-in" className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 shadow-xs text-navy-500 font-semibold text-xs sm:text-sm px-4 py-2 rounded-full mb-4">
                <GoogleG />
                AVIS CLIENTS VÉRIFIÉS
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-500 mb-3">
                Ils nous ont fait confiance
              </h3>
              <div className="flex items-center justify-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-navy-500 font-extrabold text-sm sm:text-base">5,0 / 5</span>
                <span className="text-gray-500 text-xs sm:text-sm">— INTER-RH sur Google</span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {testimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>

              <div className="text-center">
                <a
                  href="https://g.page/r/CcboD9Wi2Pv_EAI/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-dark text-xs sm:text-sm inline-flex items-center gap-2 bg-white"
                >
                  Consulter ou laisser un avis sur Google
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 7 : ACTUALITÉS
          =================================================== */}
      <section
        className="section-white"
        aria-labelledby="news-title"
      >
        <div className="container-xl">
          <AnimatedSection animation="slide-up" className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="section-overline">Actualités & Ressources</p>
              <h2 id="news-title" className="section-title mb-0">
                Dernières publications
              </h2>
            </div>
            <Link
              prefetch={false}
              href="/actus"
              className="hidden sm:inline-flex items-center gap-2 text-primary-500 font-bold text-sm hover:gap-3 transition-all duration-200"
            >
              Voir tous les articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsArticles.slice(0, 3).map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>

            <div className="text-center mt-10 sm:hidden">
              <Link prefetch={false} href="/actus" className="btn-outline-dark text-sm">
                Voir tous les articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===================================================
          SECTION 8 : APPEL À L'ACTION ET CONTACT
          =================================================== */}
      <section
        className="bg-primary-500 py-16 sm:py-20 text-white relative overflow-hidden"
        aria-labelledby="home-cta-title"
      >
        <div
          className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-56 h-56 bg-navy-500/20 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none"
          aria-hidden="true"
        />

        <AnimatedSection animation="scale-in" className="container-xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-directive text-xs uppercase tracking-[0.2em] text-white/90 mb-3">
              INTER-HUMAN RESSOURCES
            </p>
            <h2
              id="home-cta-title"
              className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold mb-5 leading-tight"
            >
              Prêt à concrétiser votre recrutement, votre projet d&apos;entreprise ou votre démarche d&apos;immigration ?
            </h2>
            <p className="text-white/90 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Échangeons sur vos objectifs. Notre équipe vous accueille à Yaoundé ou à distance pour définir un accompagnement adapté à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
              <Link
                prefetch={false}
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-navy-500 hover:bg-gray-50 font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Nous contacter
                <ArrowRight className="w-4 h-4 text-primary-500" />
              </Link>
              <a
                href="tel:+237679033398"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/80 hover:border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-all duration-200 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4" />
                +237 679 033 398
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
