import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import { NewsArticle } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

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
        "card group overflow-hidden hover:-translate-y-2 transition-all duration-300",
        className
      )}
    >
      {/* Image */}
      {article.imageUrl && (
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {article.category}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col gap-3">
        {/* Date */}
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <Calendar className="w-3.5 h-3.5" />
          <time dateTime={article.publishedAt}>
            {formatDate(article.publishedAt)}
          </time>
        </div>

        {/* Title */}
        <h3 className="font-bold text-navy-500 text-base leading-snug group-hover:text-primary-500 transition-colors duration-200 line-clamp-2">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>

        {/* Read more */}
        <Link prefetch={false}
          href={`/actus/${article.slug}`}
          className="inline-flex items-center gap-1.5 text-primary-500 font-semibold text-sm mt-2 hover:gap-3 transition-all duration-200"
          aria-label={`Lire l'article : ${article.title}`}
        >
          Lire la suite
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
