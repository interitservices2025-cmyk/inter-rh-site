import { MapPin, Clock, Briefcase } from "lucide-react";
import Link from "next/link";
import { JobOffer } from "@/lib/types";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/utils";

interface OfferCardProps {
  offer: JobOffer;
  className?: string;
}

const typeColors: Record<JobOffer["type"], string> = {
  CDI: "bg-green-50 text-green-700 border-green-200",
  CDD: "bg-blue-50 text-blue-700 border-blue-200",
  Stage: "bg-purple-50 text-purple-700 border-purple-200",
  Alternance: "bg-orange-50 text-orange-700 border-orange-200",
  Freelance: "bg-yellow-50 text-yellow-700 border-yellow-200",
};

export default function OfferCard({ offer, className }: OfferCardProps) {
  return (
    <article
      className={cn(
        "card-bordered p-6 hover:-translate-y-1 transition-all duration-300 group",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-bold text-navy-500 text-lg group-hover:text-primary-500 transition-colors duration-200">
            {offer.title}
          </h3>
          <p className="text-primary-500 text-sm font-medium mt-1">
            {offer.sector}
          </p>
        </div>
        <span
          className={cn(
            "shrink-0 ml-3 text-xs font-semibold px-3 py-1 rounded-full border",
            typeColors[offer.type]
          )}
        >
          {offer.type}
        </span>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-4">
        <span className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-primary-400" />
          {offer.location}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-primary-400" />
          Publié le {formatDate(offer.publishedAt)}
        </span>
        {offer.deadline && (
          <span className="flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-primary-400" />
            Avant le {formatDate(offer.deadline)}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
        {offer.description}
      </p>

      {/* Requirements preview */}
      {offer.requirements.length > 0 && (
        <ul className="flex flex-wrap gap-2 mb-5">
          {offer.requirements.slice(0, 3).map((req, i) => (
            <li
              key={i}
              className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-2.5 py-1 rounded-full"
            >
              {req}
            </li>
          ))}
          {offer.requirements.length > 3 && (
            <li className="text-xs bg-gray-50 border border-gray-200 text-gray-400 px-2.5 py-1 rounded-full">
              +{offer.requirements.length - 3}
            </li>
          )}
        </ul>
      )}

      {/* CTA */}
      <Link
        href={`/candidature?poste=${encodeURIComponent(offer.title)}`}
        className="btn-primary text-xs py-2.5 px-5 w-full justify-center"
        aria-label={`Postuler pour ${offer.title}`}
      >
        Postuler maintenant
      </Link>
    </article>
  );
}
