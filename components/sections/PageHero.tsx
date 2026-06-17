import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  overline?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  cta?: {
    label: string;
    href: string;
  };
  ctaSecondary?: {
    label: string;
    href: string;
  };
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function PageHero({
  overline,
  title,
  titleHighlight,
  subtitle,
  breadcrumbs,
  cta,
  ctaSecondary,
  className,
  size = "md",
}: PageHeroProps) {
  const sizes = {
    sm: "py-16",
    md: "py-24",
    lg: "py-32",
  };

  return (
    <section
      className={cn("hero-gradient text-white relative overflow-hidden", className)}
      aria-labelledby="page-hero-title"
    >
      {/* Background decorative circles */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3 pointer-events-none"
        aria-hidden="true"
      />

      <div className={cn("container-xl relative z-10", sizes[size])}>
        <AnimatedSection animation="slide-up" duration={0.6}>
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav
              className="flex flex-wrap items-center gap-2 text-sm text-blue-200/90 mb-8"
              aria-label="Fil d'Ariane"
            >
              <Link prefetch={false} href="/" className="text-blue-200 hover:text-white transition-colors font-medium">
                Accueil
              </Link>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-blue-300/60" />
                  {crumb.href ? (
                    <Link prefetch={false}
                      href={crumb.href}
                      className="text-blue-200 hover:text-white transition-colors font-medium"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white font-semibold">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {/* Overline */}
          {overline && (
            <p className="text-primary-400 font-bold text-xs tracking-[0.2em] uppercase mb-4">
              {overline}
            </p>
          )}

          {/* Title */}
          <h1
            id="page-hero-title"
            className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 max-w-3xl"
          >
            {title}
            {titleHighlight && (
              <>
                {" "}
                <span className="text-primary-400">{titleHighlight}</span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed font-normal">
              {subtitle}
            </p>
          )}

          {/* CTAs */}
          {(cta || ctaSecondary) && (
            <div className="flex flex-wrap gap-4">
              {cta && (
                <Link prefetch={false} href={cta.href} className="btn-primary">
                  {cta.label}
                </Link>
              )}
              {ctaSecondary && (
                <Link prefetch={false} href={ctaSecondary.href} className="btn-outline">
                  {ctaSecondary.label}
                </Link>
              )}
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
