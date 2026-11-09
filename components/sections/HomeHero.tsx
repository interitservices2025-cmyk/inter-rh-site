"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, BarChart3, Globe } from "lucide-react";

const highlights = [
  { icon: Users, label: "Gestion des talents & recrutement", href: "/services/gestion-des-talents" },
  { icon: BarChart3, label: "Gestion et pilotage de projets", href: "/services/gestion-de-projets" },
  { icon: Globe, label: "Accompagnement en immigration", href: "/services/immigration" },
];

export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (videoRef.current) {
        if (e.matches) {
          videoRef.current.pause();
        } else {
          videoRef.current.play().catch(() => {});
        }
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[88vh] flex items-center bg-navy-700 text-white"
      aria-labelledby="hero-title"
    >
      {/* Background Media (Video + Fallback / Poster Image + Official Blue Overlay) */}
      <div className="absolute inset-0 z-0">
        {/* Fallback / Poster Image always present behind video */}
        <Image
          src="/images/hero-poster.jpg"
          alt="Réunion professionnelle et pilotage de projet chez INTER-RH"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Video Background */}
        {!prefersReducedMotion && !videoFailed && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/hero-poster.jpg"
            onError={() => setVideoFailed(true)}
            className="absolute inset-0 w-full h-full object-cover object-center"
            aria-hidden="true"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        )}

        {/* Charte Graphique Dark Blue Overlay (#243770) for Optimal Readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#131E3E]/95 via-[#243770]/88 to-[#131E3E]/80"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#131E3E]/90 via-transparent to-[#131E3E]/40"
          aria-hidden="true"
        />
      </div>

      {/* Main Content */}
      <div className="container-xl relative z-10 py-20 md:py-28">
        <div className="max-w-4xl">
          {/* Small Overline Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary-500" />
            <span className="font-directive text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white">
              INTER-HUMAN RESSOURCES
            </span>
          </div>

          {/* Main H1 Title */}
          <h1
            id="hero-title"
            className="text-white text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight mb-6 animate-slide-up"
          >
            Nous accompagnons vos{" "}
            <span className="text-primary-500">talents</span> et vos{" "}
            <span className="underline decoration-primary-500/80 decoration-4 underline-offset-8">
              projets
            </span>{" "}
            vers la réussite.
          </h1>

          {/* Subtitle */}
          <p className="text-blue-50/95 text-base sm:text-lg md:text-xl max-w-3xl mb-10 font-normal leading-relaxed animate-slide-up animation-delay-100">
            INTER-RH accompagne les entreprises et les particuliers dans la
            gestion des talents, le pilotage de projets et les démarches
            d&apos;immigration, avec une approche professionnelle, structurée et
            adaptée à leurs besoins.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14 animate-slide-up animation-delay-200">
            <Link
              prefetch={false}
              href="/nos-services"
              className="btn-primary justify-center text-sm sm:text-base px-8 py-4 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40"
            >
              Découvrir nos services
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
            <Link
              prefetch={false}
              href="/contact"
              className="btn-outline justify-center text-sm sm:text-base px-8 py-4"
            >
              Nous contacter
            </Link>
          </div>

          {/* 3 Domains Quick Access Bar */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in animation-delay-300">
            {highlights.map((item) => (
              <Link
                key={item.href}
                prefetch={false}
                href={item.href}
                className="group flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 hover:bg-white/12 border border-white/10 hover:border-white/25 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-500/20 border border-primary-500/40 flex items-center justify-center shrink-0 group-hover:bg-primary-500 transition-colors">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-white/95 group-hover:text-white leading-snug">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
