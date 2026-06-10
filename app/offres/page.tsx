"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Briefcase,
  Layers,
  GraduationCap,
  Globe,
  Settings2,
} from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import OfferCard from "@/components/ui/OfferCard";
import { jobOffers } from "@/lib/data/offers";

const opportunityTypes = [
  {
    icon: Briefcase,
    title: "Recrutement Professionnel",
    desc: "Opportunités en CDI, CDD et contrats cadres au sein de grandes entreprises et PME.",
  },
  {
    icon: GraduationCap,
    title: "Stages de perfectionnement",
    desc: "Programmes d'immersion professionnelle pour jeunes diplômés et profils en reconversion.",
  },
  {
    icon: Globe,
    title: "Mobilité Internationale",
    desc: "Opportunités de carrières et programmes d'immigration professionnelle vers le Canada.",
  },
  {
    icon: Layers,
    title: "Projets RH Financés",
    desc: "Missions d'assistance technique et consultance dans le cadre de projets d'ONG et bailleurs.",
  },
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
        titleHighlight="Opportunités"
        subtitle="Consultez nos offres d'emploi disponibles et postulez directement en ligne. CDI, CDD, stages et missions freelance."
        breadcrumbs={[{ label: "Offres & Opportunités" }]}
        cta={{ label: "Déposer ma candidature", href: "/candidature" }}
      />

      {/* ===== TYPES D'OPPORTUNITÉS ===== */}
      <section className="section-white" aria-labelledby="types-title">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="section-overline">DOMAINES COUVERTS</p>
            <h2 id="types-title" className="section-title">
              Types d'opportunités proposées
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunityTypes.map((type) => (
              <div key={type.title} className="card-bordered p-6 hover:border-primary-400 transition-colors bg-white">
                <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-navy-500" />
                </div>
                <h3 className="font-bold text-navy-500 text-sm mb-2">{type.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GESTION DES APPELS D'OFFRES (B2B) ===== */}
      <section className="section-light" aria-labelledby="b2b-offers-title">
        <div className="container-xl">
          <div className="card bg-white p-8 md:p-12 shadow-md border border-gray-100 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-1.5 bg-primary-50 text-primary-500 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  <Settings2 className="w-3.5 h-3.5" />
                  Services aux Entreprises, ONG & Institutions
                </span>
                <h2 id="b2b-offers-title" className="text-2xl md:text-3xl font-extrabold text-navy-500 mb-4">
                  Gestion des Appels à Candidature
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Destiné aux entreprises, institutions publiques et organisations non gouvernementales (ONG). 
                  Nous prenons en charge l'intégralité du processus de gestion de vos appels à candidature : 
                  de la structuration des critères d'éligibilité à la sélection finale et la rédaction des rapports de recrutement.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <Link href="/contact?type=b2b-offres" className="btn-primary">
                  Demander une consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OFFERS LIST ===== */}
      <section className="section-white" aria-labelledby="offers-title">
        <div className="container-xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
            <div>
              <h2 id="offers-title" className="text-2xl font-bold text-navy-500">
                Offres d'emploi en cours
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                {filteredOffers.length} offre{filteredOffers.length > 1 ? "s" : ""} disponible{filteredOffers.length > 1 ? "s" : ""}
              </p>
            </div>

            {/* Filter badges */}
            <div className="flex flex-wrap items-center gap-2">
              {["Tous", "CDI", "CDD", "Stage", "Freelance"].map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                    activeFilter === type
                      ? "bg-primary-500 text-white shadow-md shadow-primary-200"
                      : "bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-600"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>

          {filteredOffers.length === 0 && (
            <div className="text-center py-20 card-bordered p-8">
              <Briefcase className="w-16 h-16 text-gray-200 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">
                Aucune offre disponible pour cette catégorie.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Déposez votre candidature spontanée et nous vous recontacterons dès qu'une offre correspondra à votre profil.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ===== CANDIDATURE SPONTANÉE ===== */}
      <section className="section-light">
        <div className="container-xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card text-center max-w-2xl mx-auto border border-gray-50">
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
            <Link href="/candidature" className="btn-primary">
              Déposer ma candidature
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
