import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import NewsCard from "@/components/ui/NewsCard";
import { newsArticles } from "@/lib/data/news";

export const metadata: Metadata = {
  title: "Actualités RH & Immigration | INTER-RH",
  description:
    "Restez informés des dernières tendances RH, conseils en recrutement, gestion des talents et actualités immigration au Canada. Blog INTER-RH.",
  alternates: { canonical: "/actus" },
  openGraph: {
    title: "Actualités | INTER-RH",
    description: "Découvrez nos articles sur les RH, la gestion des talents et l'immigration.",
  },
};

export default function ActusPage() {
  return (
    <>
      <PageHero
        overline="BLOG & RESSOURCES"
        title="Nos"
        titleHighlight="Actualités"
        subtitle="Restez informés des dernières tendances RH, conseils pratiques et actualités immigration."
        breadcrumbs={[{ label: "Actualités" }]}
      />

      <section className="section-white" aria-labelledby="articles-title">
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 id="articles-title" className="section-title">
              Tous nos articles
            </h2>
          </div>

          {/* Featured article */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 card overflow-hidden hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-72 lg:h-auto">
                <img
                  src={newsArticles[0].imageUrl || ""}
                  alt={newsArticles[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {newsArticles[0].category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <p className="text-xs text-gray-400 mb-3">
                  {new Intl.DateTimeFormat("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(newsArticles[0].publishedAt))}
                </p>
                <h3 className="text-2xl font-bold text-navy-500 mb-4 leading-snug">
                  {newsArticles[0].title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {newsArticles[0].excerpt}
                </p>
                <Link
                  href={`/actus/${newsArticles[0].slug}`}
                  className="btn-primary self-start"
                >
                  Lire l&apos;article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.slice(1).map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
