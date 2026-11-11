import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  ExternalLink,
  BookOpen,
  Briefcase,
  Phone,
} from "lucide-react";
import { newsArticles, getArticleBySlug } from "@/lib/data/news";
import { getServiceBySlug } from "@/lib/data/services";
import { formatDate } from "@/lib/utils";
import NewsCard from "@/components/ui/NewsCard";

interface Props {
  params: Promise<{ slug: string }>;
}

function renderFormattedText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-navy-500">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={i} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }
    return part;
  });
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article introuvable" };
  }

  const description = article.metaDescription || article.excerpt;

  return {
    title: article.title,
    description,
    keywords: article.keywords,
    authors: [{ name: article.author || "INTER-RH" }],
    alternates: { canonical: `https://www.inter-rh.com/actus/${slug}` },
    openGraph: {
      type: "article",
      locale: "fr_FR",
      url: `https://www.inter-rh.com/actus/${slug}`,
      siteName: "INTER-RH — Inter Human Ressources",
      title: article.title,
      description,
      publishedTime: article.publishedAt,
      authors: [article.author || "INTER-RH"],
      section: article.category,
      images: article.imageUrl
        ? [
            {
              url: article.imageUrl,
              width: 1200,
              height: 630,
              alt: article.imageAlt || article.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: article.imageUrl ? [article.imageUrl] : [],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const paragraphs = article.content
    .replace(/\r\n/g, "\n")
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  const relatedService = article.relatedServiceSlug
    ? getServiceBySlug(article.relatedServiceSlug)
    : undefined;

  // Articles similaires : prioriser la même catégorie, sinon les plus récents
  const sameCategoryArticles = newsArticles.filter(
    (a) => a.slug !== article.slug && a.category === article.category
  );
  const otherRecentArticles = newsArticles.filter(
    (a) => a.slug !== article.slug && a.category !== article.category
  );
  const similarArticles = [
    ...sameCategoryArticles,
    ...otherRecentArticles,
  ].slice(0, 3);

  // Données structurées Schema.org BlogPosting + BreadcrumbList
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.metaDescription || article.excerpt,
      image: article.imageUrl
        ? article.imageUrl.startsWith("http")
          ? article.imageUrl
          : `https://www.inter-rh.com${article.imageUrl}`
        : "https://www.inter-rh.com/logo.png",
      datePublished: article.publishedAt,
      dateModified: article.publishedAt,
      inLanguage: "fr-FR",
      author: {
        "@type": "Organization",
        name: article.author || "INTER-RH — Inter Human Ressources",
        url: "https://www.inter-rh.com",
      },
      publisher: {
        "@type": "Organization",
        name: "INTER-RH — Inter Human Ressources",
        logo: {
          "@type": "ImageObject",
          url: "https://www.inter-rh.com/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.inter-rh.com/actus/${article.slug}`,
      },
      articleSection: article.category,
      keywords: article.keywords?.join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://www.inter-rh.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Actualités",
          item: "https://www.inter-rh.com/actus",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: `https://www.inter-rh.com/actus/${article.slug}`,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <div className="hero-gradient pt-16 pb-24">
        <div className="container-lg">
          <Link
            prefetch={false}
            href="/actus"
            className="inline-flex items-center gap-2 text-blue-200/80 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux actualités
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-primary-500 text-white text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-blue-100/80 text-xs">
              <Calendar className="w-3.5 h-3.5 text-primary-400" />
              <time dateTime={article.publishedAt}>
                {formatDate(article.publishedAt)}
              </time>
            </span>
            {article.readingTime && (
              <span className="flex items-center gap-1.5 text-blue-100/80 text-xs">
                <Clock className="w-3.5 h-3.5 text-primary-400" />
                {article.readingTime}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-4xl">
            {article.title}
          </h1>

          <p className="text-blue-100/90 text-sm sm:text-base md:text-lg mt-5 max-w-3xl leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Grande image de couverture */}
      {article.imageUrl && (
        <div className="container-lg -mt-12 mb-0 relative z-10">
          <div className="relative h-64 sm:h-80 md:h-[440px] rounded-3xl overflow-hidden shadow-2xl bg-gray-100 border-4 border-white">
            <Image
              src={article.imageUrl}
              alt={article.imageAlt || article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* Contenu principal de l'article */}
      <section className="section-white">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {paragraphs.map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl sm:text-3xl font-extrabold text-navy-500 mt-12 mb-5 leading-snug"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3
                      key={index}
                      className="text-xl font-bold text-navy-500 mt-8 mb-3 leading-snug"
                    >
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  const items = paragraph
                    .split("\n")
                    .map((l) => l.trim())
                    .filter((l) => l.startsWith("- "));
                  return (
                    <ul key={index} className="space-y-3 my-6">
                      {items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3.5 text-gray-700 text-base leading-relaxed"
                        >
                          <div className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center shrink-0 mt-1">
                            <div className="w-2 h-2 rounded-full bg-primary-500" />
                          </div>
                          <span>
                            {renderFormattedText(item.replace("- ", ""))}
                          </span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p
                    key={index}
                    className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6"
                  >
                    {renderFormattedText(paragraph)}
                  </p>
                );
              })}
            </article>

            {/* Sources et références officielles */}
            {article.sources && article.sources.length > 0 && (
              <div className="mt-12 p-5 sm:p-8 rounded-2xl bg-gray-50 border border-gray-200/80">
                <div className="flex items-center gap-2.5 mb-4">
                  <BookOpen className="w-5 h-5 text-navy-500 shrink-0" />
                  <h2 className="text-base sm:text-lg font-bold text-navy-500">
                    Sources officielles et références institutionnelles
                  </h2>
                </div>
                <ul className="space-y-3">
                  {article.sources.map((source, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-gray-600">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start gap-2 text-navy-500 hover:text-primary-500 font-medium underline underline-offset-4 transition-colors break-words"
                      >
                        <span className="leading-relaxed">{source.label}</span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0 mt-1" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Maillage interne vers le service INTER-RH associé */}
            {relatedService && (
              <div className="mt-10 p-5 sm:p-8 rounded-2xl bg-navy-50/70 border border-navy-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 sm:gap-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary-500 mb-2">
                    <Briefcase className="w-3.5 h-3.5 shrink-0" />
                    Service associé INTER-RH
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-navy-500 mb-2">
                    {relatedService.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {relatedService.shortDescription}
                  </p>
                </div>
                <Link
                  prefetch={false}
                  href={`/services/${relatedService.slug}`}
                  className="btn-outline-dark text-xs sm:text-sm shrink-0 bg-white w-full sm:w-auto"
                >
                  Découvrir ce service
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            )}

            {/* Bloc d'appel à l'action et contact INTER-RH */}
            <div className="mt-12 p-6 sm:p-10 rounded-3xl bg-navy-500 text-white relative overflow-hidden shadow-xl">
              <div
                className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="max-w-xl">
                  <p className="font-directive text-xs text-primary-400 uppercase tracking-widest mb-2">
                    INTER-HUMAN RESSOURCES
                  </p>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                    Besoin d&apos;un accompagnement personnalisé ?
                  </h2>
                  <p className="text-blue-100/90 text-sm leading-relaxed">
                    Que vous soyez candidat à l&apos;immigration, en recherche d&apos;opportunités professionnelles ou dirigeant d&apos;entreprise souhaitant recruter ou piloter un projet, notre équipe est à votre écoute à Yaoundé et à distance.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full md:w-auto">
                  <Link
                    prefetch={false}
                    href={
                      article.category === "Gestion de projets"
                        ? "/contact?sujet=Gestion%20et%20pilotage%20de%20projets"
                        : article.category === "Immigration"
                        ? "/contact?sujet=Accompagnement%20en%20immigration"
                        : "/contact?sujet=Recrutement%20et%20gestion%20des%20talents"
                    }
                    className="btn-primary justify-center text-sm whitespace-nowrap"
                  >
                    Nous contacter
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+237679033398"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-white/30 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-3.5 h-3.5 text-primary-400" />
                    +237 679 033 398
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Articles similaires */}
      {similarArticles.length > 0 && (
        <section className="section-light" aria-labelledby="similar-articles-heading">
          <div className="container-xl">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <p className="section-overline">Poursuivre votre lecture</p>
                <h2 id="similar-articles-heading" className="section-title mb-0">
                  Articles similaires
                </h2>
              </div>
              <Link
                prefetch={false}
                href="/actus"
                className="inline-flex items-center gap-2 text-primary-500 font-bold text-sm hover:gap-3 transition-all"
              >
                Voir toutes les actualités
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarArticles.map((simArticle) => (
                <NewsCard key={simArticle.id} article={simArticle} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
