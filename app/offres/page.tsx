"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Illustration from "@/components/ui/Illustration";
import {
  ArrowRight,
  FileText,
  Briefcase,
  CheckCircle,
} from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import OfferCard from "@/components/ui/OfferCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { jobOffers } from "@/lib/data/offers";

const b2bSteps = [
  "Rédaction et structuration de l'appel",
  "Diffusion ciblée (plateformes, réseaux, base de données)",
  "Réception et analyse des dossiers",
  "Présélection des candidats",
  "Organisation des entretiens et évaluations",
  "Production de rapports de sélection",
];

const callForCandidates = [
  "Recrutement de profils professionnels",
  "Programmes de formation et renforcement de capacités",
  "Stages professionnels et académiques",
  "Programmes d'immigration professionnelle",
  "Missions locales et internationales",
  "Projets financés et partenariats institutionnels",
];

export default function OffresPage() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const activeOffers = jobOffers.filter((o) => o.isActive);

  const filteredOffers = activeOffers.filter((offer) => {
    if (activeFilter === "Tous") return true;
    return offer.type.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <>
      <PageHero
        overline="OPPORTUNITÉS"
        title="Offres &"
        titleHighlight="Candidatures"
        subtitle="INTER-RH accompagne entreprises, institutions, ONG et particuliers dans la publication, la gestion et la sélection d'appels au Cameroun et à l'international."
        breadcrumbs={[{ label: "Offres & Candidatures" }]}
        cta={{ label: "Déposer ma candidature", href: "/candidature" }}
      />

      {/* ===== B2B : GESTION DES APPELS D'OFFRES ===== */}
      <section className="section-white" aria-labelledby="b2b-offers-title">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-left">
              <p className="section-overline">Notre accompagnement</p>
              <h2 id="b2b-offers-title" className="text-2xl md:text-3xl font-extrabold text-navy-500 mb-6">
                Gestion complète des appels d'offres
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                INTER-RH prend en charge l'ensemble du processus, de la rédaction à la sélection finale, 
                pour vous garantir un processus structuré, transparent et efficace.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {b2bSteps.map((step) => (
                  <li key={step} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-xs font-medium">{step}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-primary-50 text-primary-950 p-4 rounded-2xl border border-primary-100 text-xs font-semibold mb-6">
                Résultat : gain de temps, réduction des risques et décisions éclairées.
              </div>

              <Link prefetch={false} href="/contact?type=b2b-offres" className="btn-primary">
                Prendre contact
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            <AnimatedSection animation="slide-right" delay={0.2} className="relative h-[360px] rounded-3xl overflow-hidden shadow-xl bg-gray-100">
              <Illustration
                name="offres_tenders"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== APPELS A CANDIDATURE ===== */}
      <section className="section-light" aria-labelledby="candidatures-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-left" className="relative h-[340px] rounded-3xl overflow-hidden shadow-xl bg-gray-100 lg:order-2">
              <Illustration
                name="offres_jobs"
              />
            </AnimatedSection>

            <AnimatedSection animation="slide-right" className="lg:order-1">
              <p className="section-overline">Appels à candidature</p>
              <h2 id="candidatures-heading" className="text-2xl md:text-3xl font-extrabold text-navy-500 mb-4">
                Des opportunités structurées et fiables
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nous publions et gérons régulièrement des appels à candidature pour :
              </p>

              <ul className="space-y-3.5 mb-6">
                {callForCandidates.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary-500" />
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== OFFERS LIST ===== */}
      <section className="section-white" aria-labelledby="offers-title">
        <div className="container-xl">
          <AnimatedSection animation="fade-in" className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
            <div>
              <p className="section-overline">Offres disponibles</p>
              <h2 id="offers-title" className="text-2xl md:text-3xl font-bold text-navy-500">
                Découvrez nos opportunités
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Offres d'emploi de PME, grandes entreprises, ONG et institutions partenaires.
              </p>
            </div>

            {/* Filter badges */}
            <div className="flex flex-wrap items-center gap-2">
              {["Tous", "CDI", "CDD", "Stage", "Freelance"].map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                    activeFilter === type
                      ? "bg-primary-500 text-white shadow-md shadow-primary-200"
                      : "bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-600"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOffers.map((offer, idx) => (
              <AnimatedSection key={offer.id} animation="slide-up" delay={idx * 0.08}>
                <OfferCard offer={offer} />
              </AnimatedSection>
            ))}
          </div>

          {filteredOffers.length === 0 && (
            <AnimatedSection animation="fade-in" className="text-center py-20 card-bordered p-8 bg-white">
              <Briefcase className="w-16 h-16 text-gray-200 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">
                Aucune offre disponible pour cette catégorie.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Déposez votre candidature spontanée et nous vous recontacterons dès qu'une offre correspondra à votre profil.
              </p>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* ===== CANDIDATURE SPONTANÉE ===== */}
      <section className="section-light">
        <div className="container-xl">
          <AnimatedSection
            animation="scale-in"
            className="bg-white rounded-3xl p-8 md:p-12 shadow-card text-center max-w-2xl mx-auto border border-gray-50"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-primary-500" />
            </div>
            <h2 className="text-2xl font-bold text-navy-500 mb-4">
              Vous ne trouvez pas votre poste ?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Déposez votre candidature spontanée. Notre équipe analysera votre profil
              et vous contactera dès qu'une opportunité correspondante sera disponible.
            </p>
            <Link prefetch={false} href="/candidature" className="btn-primary">
              Déposer ma candidature
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
