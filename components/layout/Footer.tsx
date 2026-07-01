import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const footerServices = [
  { href: "/services/gestion-des-talents", label: "Gestion des talents" },
  { href: "/services/conseil-strategique", label: "Conseil stratégique" },
  { href: "/services/gestion-de-projets", label: "Gestion de projets" },
  { href: "/services/formation-coaching", label: "Formation & coaching" },
  { href: "/services/immigration", label: "Immigration" },
];

const footerLinks = [
  { href: "/", label: "Accueil" },
  { href: "/notre-agence", label: "Notre agence" },
  { href: "/nos-services", label: "Nos services" },
  { href: "/actus", label: "Actus" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://web.facebook.com/interhumanressources",
    label: "Facebook",
    icon: Facebook,
    id: "footer-facebook",
  },
  {
    href: "https://www.instagram.com/interhumanressources/",
    label: "Instagram",
    icon: Instagram,
    id: "footer-instagram",
  },
  {
    href: "https://www.linkedin.com/company/inter-rh",
    label: "LinkedIn",
    icon: Linkedin,
    id: "footer-linkedin",
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-500 text-white" role="contentinfo">
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-3">
            {/* Logo */}
            <Link prefetch={false} href="/" className="inline-block mb-6" aria-label="INTER-RH — Accueil">
              <div className="bg-white rounded-xl p-1 inline-block">
                <div className="relative w-[200px] h-[55px] md:w-[240px] md:h-[66px]">
                  <Image
                    src="/logo.png"
                    alt="INTER-RH Logo"
                    fill
                    sizes="(max-width: 768px) 200px, 240px"
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            <p className="text-blue-200/80 text-sm leading-relaxed max-w-xs">
              INTER-RH est un cabinet spécialisé dans la gestion des talents, le
              conseil stratégique, la gestion de projets, la formation et
              l&apos;accompagnement en immigration.
            </p>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-white mb-6 text-base">Nos services</h3>
            <ul className="space-y-3">
              {footerServices.map((svc) => (
                <li key={svc.href}>
                  <Link prefetch={false}
                    href={svc.href}
                    className="text-blue-200/70 hover:text-primary-400 text-sm transition-colors duration-150"
                  >
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-white mb-6 text-base">Liens utiles</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link prefetch={false}
                    href={link.href}
                    className="text-blue-200/70 hover:text-primary-400 text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h3 className="font-bold text-white mb-6 text-base">Adresse</h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <p className="text-blue-200/70 text-xs sm:text-sm leading-relaxed whitespace-nowrap">
                  Rue 2.365, Yaoundé-Tsinga, Cameroun (Derrière Tradex)
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <a
                  href="tel:+237679033398"
                  className="text-blue-200/70 hover:text-white transition-colors text-xs sm:text-sm whitespace-nowrap"
                >
                  +237 679 033 398 / +237 695 296 446
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:contact@inter-rh.com"
                  className="text-blue-200/70 hover:text-white text-xs sm:text-sm transition-colors whitespace-nowrap"
                >
                  contact@inter-rh.com
                </a>
              </div>
            </address>

            {/* Social */}
            <div className="mt-6">
              <p className="text-white font-semibold text-sm mb-4">
                Suivez-nous
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    id={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-colors duration-200"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-200/50 text-sm text-center">
            © 2026 INTER-RH — Inter Human ressources. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm text-blue-200/50">
            <Link prefetch={false} href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link prefetch={false} href="/confidentialite" className="hover:text-white transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
