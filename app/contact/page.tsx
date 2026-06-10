import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Prenez Rendez-vous | INTER-RH",
  description:
    "Contactez INTER-RH pour une consultation gratuite. Téléphone, email ou formulaire — notre équipe vous répond rapidement. Yaoundé, Cameroun.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | INTER-RH",
    description: "Contactez notre équipe pour une consultation RH gratuite.",
  },
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Notre adresse",
    lines: [
      "Rue 2.365, Yaoundé-Tsinga",
      "Cameroun (Derrière Tradex)",
    ],
    id: "contact-address",
  },
  {
    icon: Phone,
    title: "Téléphone",
    lines: ["+237 679 033 398", "+237 695 296 446"],
    href: "tel:+237679033398",
    id: "contact-phone",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["contact@inter-rh.com"],
    href: "mailto:contact@inter-rh.com",
    id: "contact-email",
  },
  {
    icon: Clock,
    title: "Horaires",
    lines: ["Lun – Ven : 8h – 18h", "Sam : 9h – 13h"],
    id: "contact-hours",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        overline="PARLONS-NOUS"
        title="Contactez"
        titleHighlight="notre équipe"
        subtitle="Notre équipe d'experts est disponible pour répondre à toutes vos questions et vous accompagner dans vos projets RH."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="section-white" aria-labelledby="contact-section-title">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2
                id="contact-section-title"
                className="text-2xl font-bold text-navy-500 mb-8"
              >
                Nos coordonnées
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div
                    key={item.id}
                    id={item.id}
                    className="flex items-start gap-4 card-bordered p-5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-500 text-sm mb-1">
                        {item.title}
                      </p>
                      {item.lines.map((line, i) =>
                        item.href ? (
                          <a
                            key={i}
                            href={item.href}
                            className="block text-gray-600 text-sm hover:text-primary-500 transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={i} className="text-gray-600 text-sm">
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-6 rounded-2xl overflow-hidden bg-gray-100 h-52 flex items-center justify-center">
                <a
                  href="https://maps.google.com/?q=Yaoundé+Tsinga+Cameroun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 font-semibold text-sm hover:underline"
                >
                  Voir sur Google Maps →
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card p-8 md:p-10">
                <h2 className="text-2xl font-bold text-navy-500 mb-2">
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  Remplissez le formulaire ci-dessous et nous vous répondrons
                  dans les 24 heures.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Consultation rapide */}
      <section className="section-light">
        <div className="container-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white rounded-3xl p-8 shadow-card">
            <div>
              <h3 className="text-xl font-bold text-navy-500 mb-2">
                Besoin d&apos;une réponse urgente ?
              </h3>
              <p className="text-gray-500 text-sm">
                Appelez-nous directement pour une consultation immédiate.
              </p>
            </div>
            <a
              href="tel:+237679033398"
              id="contact-call-cta"
              className="btn-primary whitespace-nowrap shrink-0"
            >
              <Phone className="w-4 h-4" />
              +237 679 033 398
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
