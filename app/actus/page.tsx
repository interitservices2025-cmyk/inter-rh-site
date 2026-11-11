import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import NewsCard from "@/components/ui/NewsCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { newsArticles } from "@/lib/data/news";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title:
    "Actualités — Immigration Canada, Recrutement Cameroun & Gestion de projets",
  description:
    "Découvrez les analyses et guides pratiques d'INTER-RH : nouvelles règles Entrée express Canada 2026, compétences recherchées au Cameroun et pilotage de projets avec l'IA.",
  keywords: [
    "actualités RH Cameroun",
    "blog immigration Canada 2026",
    "Entrée express règles 2026",
    "marché emploi Cameroun 2026",
    "gestion de projets IA 2026",
    "conseils INTER-RH",
  ],
  alternates: { canonical: "https://www.inter-rh.com/actus" },
  openGraph: {
    title: "Actualités & Ressources | INTER-RH",
    description:
      "Analyses et conseils experts en immigration au Canada, recrutement au Cameroun et gestion de projets multisectoriels.",
    url: "https://www.inter-rh.com/actus",
    type: "website",
    images: [
      {
        url: "/images/article-immigration-canada-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Actualités INTER-RH — Immigration, Recrutement et Gestion de projets",
      },
    ],
  },
};

export default function ActusPage() {
  const featuredArticle = newsArticles[0];
  const recentArticles = newsArticles.slice(0, 3);
  const previousArticles = newsArticles.slice(3);

  return (
    <>
      <PageHero
        overline="BLOG & RESSOURCES"
        title="Nos"
        titleHighlight="Actualités"
        subtitle="Analyses réglementaires, tendances du marché de l'emploi et bonnes pratiques en pilotage de projets et immigration."
        breadcrumbs={[{ label: "Actualités" }]}
      />

      <section className="section-white" aria-labelledby="featured-title">
        <div className="container-xl">
          {/* Article à la une */}
          <AnimatedSection animation="fade-in" className="mb-6">
            <span className="section-overline block">À la une</span>
            <h2 id="featured-title" className="text-2xl md:text-3xl font-bold text-navy-500">
              Publication récente mise en avant
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" className="mb-20">
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-0 card overflow-hidden border border-gray-100 hover:shadow-card-hover transition-all duration-300">
              <Link
                prefetch={false}
                href={`/actus/${featuredArticle.slug}`}
                className="relative h-72 sm:h-80 lg:h-auto lg:col-span-6 bg-gray-100 min-h-[320px] block overflow-hidden group"
                aria-label={featuredArticle.title}
              >
                <Image
                  src={featuredArticle.imageUrl || ""}
                  alt={featuredArticle.imageAlt || featuredArticle.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-500 text-white text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    {featuredArticle.category}
                  </span>
                </div>
              </Link>

              <div className="p-6 sm:p-8 lg:p-10 lg:col-span-6 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary-500" />
                    <time dateTime={featuredArticle.publishedAt}>
                      {formatDate(featuredArticle.publishedAt)}
                    </time>
                  </span>
                  {featuredArticle.readingTime && (
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-navy-400" />
                      {featuredArticle.readingTime}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-500 mb-4 leading-snug hover:text-primary-500 transition-colors">
                  <Link prefetch={false} href={`/actus/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </Link>
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base">
                  {featuredArticle.excerpt}
                </p>

                <div className="mt-auto">
                  <Link
                    prefetch={false}
                    href={`/actus/${featuredArticle.slug}`}
                    className="btn-primary self-start text-sm"
                  >
                    Lire l&apos;article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          </AnimatedSection>

          {/* Les 3 nouveaux dossiers thématiques 2026 */}
          <AnimatedSection animation="fade-in" className="text-center mb-12">
            <span className="section-overline block">Dossiers & Analyses 2026</span>
            <h2 id="recent-articles-title" className="section-title">
              Nos derniers articles d&apos;actualité
            </h2>
            <p className="section-subtitle">
              Retrouvez nos analyses approfondies sur l&apos;immigration économique au Canada, le marché du recrutement au Cameroun et la gestion de projets.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {recentArticles.map((article, idx) => (
              <AnimatedSection key={article.id} animation="slide-up" delay={idx * 0.08}>
                <NewsCard article={article} />
              </AnimatedSection>
            ))}
          </div>

          {/* Articles précédents */}
          {previousArticles.length > 0 && (
            <div className="pt-16 border-t border-gray-100">
              <AnimatedSection animation="fade-in" className="mb-10">
                <span className="section-overline block">Ressources & Méthodes</span>
                <h2 className="text-2xl md:text-3xl font-bold text-navy-500">
                  Articles et conseils fondamentaux
                </h2>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {previousArticles.map((article, idx) => (
                  <AnimatedSection key={article.id} animation="slide-up" delay={idx * 0.08}>
                    <NewsCard article={article} />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bandeau CTA bas de page */}
      <section className="bg-navy-500 py-16 text-white">
        <div className="container-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <p className="font-directive text-xs text-primary-400 uppercase tracking-widest mb-2">
                INTER-HUMAN RESSOURCES
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Vous souhaitez être accompagné sur l&apos;une de ces thématiques ?
              </h2>
              <p className="text-blue-100/80 text-sm sm:text-base">
                Nos équipes vous accueillent à Yaoundé ou à distance pour analyser votre projet d&apos;immigration, vos besoins en recrutement ou le pilotage de vos opérations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full lg:w-auto shrink-0">
              <Link prefetch={false} href="/contact" className="btn-primary text-sm">
                Prendre contact avec INTER-RH
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <Link prefetch={false} href="/nos-services" className="btn-outline text-sm">
                Découvrir nos services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
