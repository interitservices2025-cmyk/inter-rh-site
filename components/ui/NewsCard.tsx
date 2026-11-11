import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { NewsArticle } from "@/lib/types";
import { formatDate, cn } from "@/lib/utils";

interface NewsCardProps {
  article: NewsArticle;
  className?: string;
}

export default function NewsCard({
  article,
  className,
}: NewsCardProps) {
  return (
    <article
      className={cn(
        "card group overflow-hidden hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-gray-100/80",
        className
      )}
    >
      {article.imageUrl && (
        <Link
          prefetch={false}
          href={`/actus/${article.slug}`}
          className="relative h-52 overflow-hidden bg-gray-100 block shrink-0"
          aria-label={article.title}
        >
          <Image
            src={article.imageUrl}
            alt={article.imageAlt || article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {article.category}
            </span>
          </div>
        </Link>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 justify-between gap-4">
        <div className="flex flex-col gap-3">
          {/* Date & Reading time */}
          <div className="flex items-center flex-wrap gap-3 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-primary-500" />
              <time dateTime={article.publishedAt}>
                {formatDate(article.publishedAt)}
              </time>
            </span>
            {article.readingTime && (
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-navy-400" />
                {article.readingTime}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-bold text-navy-500 text-lg leading-snug group-hover:text-primary-500 transition-colors duration-200 line-clamp-2">
            <Link prefetch={false} href={`/actus/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        {/* Read more button */}
        <div className="pt-2 border-t border-gray-100">
          <Link
            prefetch={false}
            href={`/actus/${article.slug}`}
            className="inline-flex items-center gap-2 text-primary-500 font-bold text-sm group-hover:gap-3 transition-all duration-200"
            aria-label={`Lire l'article : ${article.title}`}
          >
            Lire l&apos;article
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
