"use client";

import Link from "next/link";
import { useEffect } from "react";
import {
  X,
  ChevronRight,
  Phone,
  Users,
  TrendingUp,
  BarChart3,
  GraduationCap,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  href: string;
  label: string;
  hasDropdown?: boolean;
}

interface ServiceLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  serviceLinks: ServiceLink[];
  navLinks: NavLink[];
  pathname: string;
}

const serviceIcons = {
  "Gestion des talents": Users,
  "Conseil stratégique": TrendingUp,
  "Gestion de projets": BarChart3,
  "Formation & coaching": GraduationCap,
  Immigration: Globe,
};

export default function MobileMenu({
  isOpen,
  onClose,
  serviceLinks,
  navLinks,
  pathname,
}: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
    return () => document.body.classList.remove("mobile-menu-open");
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-80 max-w-full bg-white shadow-2xl transition-transform duration-300 ease-out overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Menu mobile"
        aria-modal="true"
        role="dialog"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="text-navy-500 font-bold text-lg">Menu</span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-navy-500"
            aria-label="Fermer le menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="px-4 py-6">
          <ul className="space-y-1">
            {navLinks.map((link) =>
              link.hasDropdown ? null : (
                <li key={link.href}>
                  <Link prefetch={false}
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-colors duration-150",
                      pathname === link.href
                        ? "bg-primary-50 text-primary-500"
                        : "text-navy-500 hover:bg-gray-50"
                    )}
                    onClick={onClose}
                  >
                    {link.label}
                    <ChevronRight className="w-4 h-4 opacity-40" />
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Services section */}
          <div className="mt-6">
            <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
              Nos Services
            </p>
            <ul className="space-y-1">
              {serviceLinks.map((svc) => {
                const Icon = serviceIcons[svc.label as keyof typeof serviceIcons];
                return (
                  <li key={svc.href}>
                    <Link prefetch={false}
                      href={svc.href}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150",
                        pathname === svc.href
                          ? "bg-primary-50 text-primary-500"
                          : "text-navy-500 hover:bg-gray-50"
                      )}
                      onClick={onClose}
                    >
                      {Icon && (
                        <span className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-primary-500" />
                        </span>
                      )}
                      {svc.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* CTA */}
        <div className="px-6 py-6 border-t border-gray-100">
          <Link prefetch={false}
            href="/contact"
            className="btn-primary w-full justify-center text-sm"
            onClick={onClose}
          >
            <Phone className="w-4 h-4" />
            Prendre rendez-vous
          </Link>
          <div className="mt-4 text-center">
            <a
              href="tel:+237679033398"
              className="text-sm text-gray-500 hover:text-primary-500 transition-colors"
            >
              +237 679 033 398
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
