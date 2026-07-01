"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Phone, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

const serviceLinks = [
  { href: "/services/gestion-des-talents", label: "Gestion des talents" },
  { href: "/services/conseil-strategique", label: "Conseil stratégique" },
  { href: "/services/gestion-de-projets", label: "Gestion de projets" },
  { href: "/services/formation-coaching", label: "Formation & coaching" },
  { href: "/services/immigration", label: "Immigration" },
];

const navLinks = [
  { href: "/", label: "ACCUEIL" },
  { href: "/notre-agence", label: "NOTRE AGENCE" },
  { href: "/nos-services", label: "NOS SERVICES", hasDropdown: true },
  { href: "/actus", label: "ACTUS" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white shadow-md py-3"
            : "bg-white/95 backdrop-blur-sm py-4"
        )}
        role="banner"
      >
        <div className="container-xl">
          <nav
            className="flex items-center justify-between"
            aria-label="Navigation principale"
          >
            {/* Logo */}
            <Link prefetch={false}
              href="/"
              className="flex items-center shrink-0"
              aria-label="INTER-RH — Accueil"
            >
              <div className="relative w-[180px] h-[49px] md:w-[220px] md:h-[60px] lg:w-[240px] lg:h-[66px]">
                <Image
                  src="/logo.png"
                  alt="INTER-RH Logo"
                  fill
                  sizes="(max-width: 768px) 180px, (max-width: 1024px) 220px, 240px"
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.hasDropdown ? (
                    <div ref={dropdownRef} className="relative">
                      <button
                        className={cn(
                          "flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors duration-200 py-2",
                          isActive(link.href) || isActive("/services")
                            ? "text-primary-500"
                            : "text-navy-500 hover:text-primary-500"
                        )}
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        aria-expanded={isServicesOpen}
                        aria-haspopup="true"
                        id="services-menu-button"
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            isServicesOpen && "rotate-180"
                          )}
                        />
                      </button>

                      {/* Dropdown */}
                      {isServicesOpen && (
                        <div
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-2xl shadow-nav-dropdown border border-gray-100 overflow-hidden py-2 animate-fade-in"
                          role="menu"
                          aria-labelledby="services-menu-button"
                        >
                          {serviceLinks.map((svc) => (
                            <Link prefetch={false}
                              key={svc.href}
                              href={svc.href}
                              role="menuitem"
                              className={cn(
                                "block px-5 py-3 text-sm font-medium transition-colors duration-150",
                                pathname === svc.href
                                  ? "text-primary-500 bg-primary-50"
                                  : "text-navy-500 hover:text-primary-500 hover:bg-gray-50"
                              )}
                            >
                              {svc.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link prefetch={false}
                      href={link.href}
                      className={cn(
                        "text-sm font-semibold tracking-wide transition-colors duration-200 py-2",
                        isActive(link.href)
                          ? "text-primary-500"
                          : "text-navy-500 hover:text-primary-500"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA Consultation */}
            <div className="hidden lg:flex items-center gap-4">
              <Link prefetch={false}
                href="/contact"
                className="btn-primary text-sm"
                aria-label="Prendre rendez-vous pour une consultation"
              >
                <Phone className="w-4 h-4" />
                Consultation
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg text-navy-500 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={isMobileOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        serviceLinks={serviceLinks}
        navLinks={navLinks}
        pathname={pathname}
      />

      {/* Spacer for fixed header */}
      <div className="h-[73px] md:h-[84px] lg:h-[90px]" aria-hidden="true" />
    </>
  );
}
