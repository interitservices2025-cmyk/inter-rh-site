import { notFound } from "next/navigation";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F0F4F8]">
      <div className="text-center px-4">
        {/* 404 Number */}
        <div className="text-8xl font-extrabold text-primary-500/20 mb-4 select-none">
          404
        </div>

        <h1 className="text-3xl font-extrabold text-navy-500 mb-4">
          Page introuvable
        </h1>
        <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link prefetch={false} href="/" className="btn-primary">
            <Home className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>
          <Link prefetch={false} href="/contact" className="btn-outline-dark">
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
