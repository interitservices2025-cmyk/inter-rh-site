import Link from "next/link";
import Illustration from "./Illustration";
import { ArrowRight, Users, BarChart3, Globe, CheckCircle } from "lucide-react";
import { Service } from "@/lib/types";
import { cn } from "@/lib/utils";

const serviceIcons = {
  Users,
  BarChart3,
  Globe,
};

interface ServiceCardProps {
  service: Service;
  variant?: "image" | "icon" | "compact";
  showFeatures?: boolean;
  className?: string;
}

export default function ServiceCard({
  service,
  variant = "image",
  showFeatures = false,
  className,
}: ServiceCardProps) {
  const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons] || Users;

  if (variant === "compact") {
    return (
      <Link
        prefetch={false}
        href={`/services/${service.slug}`}
        className={cn(
          "card-bordered group flex items-start gap-4 p-5 hover:border-primary-300 hover:-translate-y-1",
          "transition-all duration-300",
          className
        )}
      >
        <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
          <IconComponent className="w-5 h-5 text-primary-500" />
        </div>
        <div>
          <h3 className="font-semibold text-navy-500 text-sm group-hover:text-primary-500 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-500 text-xs mt-1 line-clamp-2">
            {service.shortDescription}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <article
      className={cn(
        "card group overflow-hidden hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full border border-gray-100",
        className
      )}
    >
      {/* Image */}
      {variant === "image" && (
        <div className="relative h-48 overflow-hidden shrink-0">
          <Illustration
            name={
              service.slug === "gestion-des-talents"
                ? "service_recrutement"
                : service.slug === "gestion-de-projets"
                ? "service_projects"
                : service.slug === "immigration"
                ? "service_immigration"
                : "service_recrutement"
            }
            className="group-hover:scale-105 transition-transform duration-500 rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-500/60 via-navy-500/15 to-transparent" />
          <div className="absolute bottom-4 left-6">
            <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm shadow-md flex items-center justify-center">
              <IconComponent className="w-5 h-5 text-primary-500" />
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-bold text-navy-500 text-lg sm:text-xl mb-2.5 group-hover:text-primary-500 transition-colors duration-200 leading-snug">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {service.shortDescription}
          </p>

          {showFeatures && service.features && service.features.length > 0 && (
            <ul className="space-y-2 mb-5 border-t border-gray-100 pt-4">
              {service.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="pt-2 border-t border-gray-50">
          <Link
            prefetch={false}
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 text-primary-500 font-bold text-sm hover:gap-3 transition-all duration-200 group-hover:gap-3"
            aria-label={`Découvrir le service ${service.title}`}
          >
            En savoir plus
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
