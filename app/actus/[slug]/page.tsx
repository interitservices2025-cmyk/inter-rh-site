import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar } from "lucide-react";
import { newsArticles, getArticleBySlug } from "@/lib/data/news";
import { formatDate } from "@/lib/utils";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article introuvable | INTER-RH" };
  }

  return {
    title: `${article.title} | INTER-RH`,
    description: article.excerpt,
    alternates: { canonical: `/actus/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.imageUrl ? [article.imageUrl] : [],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  // Parse simple markdown-like content
  const paragraphs = article.content.split("\n\n").filter(Boolean);

  return (
    <>
      {/* Hero */}
      <div className="hero-gradient py-20">
        <div className="container-lg">
          <Link prefetch={false}
            href="/actus"
            className="inline-flex items-center gap-2 text-blue-200/70 hover:text-white text-sm mb-8 transition-colors animate-fade-in"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux actualités
          </Link>

          <div className="flex flex-wrap gap-3 mb-6 animate-fade-in">
            <span className="bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-blue-200/60 text-xs">
              <Calendar className="w-3.5 h-3.5" />
              <time dateTime={article.publishedAt}>
                {formatDate(article.publishedAt)}
              </time>
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight max-w-3xl animate-slide-up">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Cover image */}
      {article.imageUrl && (
        <div className="container-lg -mt-8 mb-0 relative z-10">
          <AnimatedSection animation="scale-in" duration={0.8} className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover"
            />
          </AnimatedSection>
        </div>
      )}

      {/* Content */}
      <section className="section-white">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection animation="slide-up" delay={0.1}>
              <div className="prose prose-lg max-w-none">
                {paragraphs.map((paragraph, index) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2
                        key={index}
                        className="text-2xl font-bold text-navy-500 mt-10 mb-4"
                      >
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith("### ")) {
                    return (
                      <h3
                        key={index}
                        className="text-xl font-bold text-navy-500 mt-8 mb-3"
                      >
                        {paragraph.replace("### ", "")}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith("- ")) {
                    const items = paragraph.split("\n").filter((l) => l.startsWith("- "));
                    return (
                      <ul key={index} className="space-y-2 my-4">
                        {items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600">
                            <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-primary-500" />
                            </div>
                            {item.replace("- ", "")}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={index} className="text-gray-600 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <p className="font-bold text-navy-500 mb-1">
                    Besoin d&apos;accompagnement ?
                  </p>
                  <p className="text-gray-500 text-sm">
                    Notre équipe est disponible pour vous conseiller.
                  </p>
                </div>
                <Link prefetch={false} href="/contact" className="btn-primary whitespace-nowrap">
                  Nous contacter
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
