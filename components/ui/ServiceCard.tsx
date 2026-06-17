import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, TrendingUp, BarChart3, GraduationCap, Globe } from "lucide-react";
import { Service } from "@/lib/types";
import { cn } from "@/lib/utils";

const serviceIcons = {
  Users,
  TrendingUp,
  BarChart3,
  GraduationCap,
  Globe,
};

interface ServiceCardProps {
  service: Service;
  variant?: "image" | "icon" | "compact";
  className?: string;
}

export default function ServiceCard({
  service,
  variant = "image",
  className,
}: ServiceCardProps) {
  const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons] || Users;

  if (variant === "compact") {
    return (
      <Link prefetch={false}
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
        "card group overflow-hidden hover:-translate-y-2 transition-all duration-300",
        className
      )}
    >
      {/* Image */}
      {variant === "image" && service.imageUrl && (
        <div className="relative h-52 overflow-hidden">
          <Image
            src={service.imageUrl}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-500/40 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-navy-500 text-lg mb-2 group-hover:text-primary-500 transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {service.shortDescription}
        </p>
        <Link prefetch={false}
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-primary-500 font-semibold text-sm hover:gap-3 transition-all duration-200 group-hover:gap-3"
          aria-label={`Plus de détails sur ${service.title}`}
        >
          Plus de détails
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
