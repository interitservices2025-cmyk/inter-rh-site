"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, Upload } from "lucide-react";
import Button from "@/components/ui/Button";

const schema = z.object({
  firstName: z.string().min(2, "Prénom requis (min. 2 caractères)"),
  lastName: z.string().min(2, "Nom requis (min. 2 caractères)"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().min(8, "Numéro de téléphone requis"),
  position: z.string().min(2, "Précisez le poste visé"),
  experience: z.string().min(1, "Précisez votre expérience"),
  education: z.string().min(2, "Précisez votre formation"),
  coverLetter: z
    .string()
    .min(50, "Votre lettre de motivation doit contenir au moins 50 caractères"),
  linkedinUrl: z.string().url("URL LinkedIn invalide").optional().or(z.literal("")),
});

type FormData = z.infer<typeof schema>;

export default function ApplicationForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Application data:", data);
    setIsSuccess(true);
    reset();
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-navy-500 mb-3">
          Candidature envoyée !
        </h3>
        <p className="text-gray-500 max-w-sm">
          Merci pour votre candidature. Notre équipe RH va analyser votre profil
          et vous contactera dans les 5 à 7 jours ouvrables.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
      aria-label="Formulaire de candidature"
    >
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="app-firstname" className="form-label">
            Prénom <span className="text-primary-500">*</span>
          </label>
          <input
            id="app-firstname"
            type="text"
            autoComplete="given-name"
            placeholder="Votre prénom"
            className="form-input"
            {...register("firstName")}
          />
          {errors.firstName && (
            <p role="alert" className="form-error">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="app-lastname" className="form-label">
            Nom <span className="text-primary-500">*</span>
          </label>
          <input
            id="app-lastname"
            type="text"
            autoComplete="family-name"
            placeholder="Votre nom"
            className="form-input"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p role="alert" className="form-error">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="app-email" className="form-label">
            Email <span className="text-primary-500">*</span>
          </label>
          <input
            id="app-email"
            type="email"
            autoComplete="email"
            placeholder="votre@email.com"
            className="form-input"
            {...register("email")}
          />
          {errors.email && (
            <p role="alert" className="form-error">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="app-phone" className="form-label">
            Téléphone <span className="text-primary-500">*</span>
          </label>
          <input
            id="app-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+237 6XX XXX XXX"
            className="form-input"
            {...register("phone")}
          />
          {errors.phone && (
            <p role="alert" className="form-error">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Position */}
      <div>
        <label htmlFor="app-position" className="form-label">
          Poste visé <span className="text-primary-500">*</span>
        </label>
        <input
          id="app-position"
          type="text"
          placeholder="Ex: Chargé de recrutement, Chef de projet..."
          className="form-input"
          {...register("position")}
        />
        {errors.position && (
          <p role="alert" className="form-error">{errors.position.message}</p>
        )}
      </div>

      {/* Experience & Education */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="app-experience" className="form-label">
            Années d&apos;expérience <span className="text-primary-500">*</span>
          </label>
          <select id="app-experience" className="form-input" {...register("experience")}>
            <option value="">Sélectionner</option>
            <option value="0-1">Moins d&apos;1 an</option>
            <option value="1-3">1 à 3 ans</option>
            <option value="3-5">3 à 5 ans</option>
            <option value="5-10">5 à 10 ans</option>
            <option value="10+">Plus de 10 ans</option>
          </select>
          {errors.experience && (
            <p role="alert" className="form-error">{errors.experience.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="app-education" className="form-label">
            Niveau d&apos;études <span className="text-primary-500">*</span>
          </label>
          <select id="app-education" className="form-input" {...register("education")}>
            <option value="">Sélectionner</option>
            <option value="bac">Baccalauréat</option>
            <option value="bac+2">Bac+2</option>
            <option value="bac+3">Bac+3 (Licence)</option>
            <option value="bac+5">Bac+5 (Master)</option>
            <option value="bac+8">Doctorat</option>
          </select>
          {errors.education && (
            <p role="alert" className="form-error">{errors.education.message}</p>
          )}
        </div>
      </div>

      {/* LinkedIn */}
      <div>
        <label htmlFor="app-linkedin" className="form-label">
          Profil LinkedIn{" "}
          <span className="text-gray-400 font-normal">(optionnel)</span>
        </label>
        <input
          id="app-linkedin"
          type="url"
          placeholder="https://linkedin.com/in/votre-profil"
          className="form-input"
          {...register("linkedinUrl")}
        />
        {errors.linkedinUrl && (
          <p role="alert" className="form-error">{errors.linkedinUrl.message}</p>
        )}
      </div>

      {/* Cover Letter */}
      <div>
        <label htmlFor="app-cover-letter" className="form-label">
          Lettre de motivation <span className="text-primary-500">*</span>
        </label>
        <textarea
          id="app-cover-letter"
          rows={6}
          placeholder="Présentez-vous et expliquez pourquoi vous souhaitez rejoindre INTER-RH ou notre réseau de candidats..."
          className="form-input resize-none"
          {...register("coverLetter")}
        />
        {errors.coverLetter && (
          <p role="alert" className="form-error">{errors.coverLetter.message}</p>
        )}
      </div>

      {/* File upload note */}
      <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
        <Upload className="w-5 h-5 text-blue-500 shrink-0" />
        <p className="text-blue-700 text-sm">
          Pour joindre votre CV, envoyez-le par email à{" "}
          <a href="mailto:contact@inter-rh.com" className="font-semibold hover:underline">
            contact@inter-rh.com
          </a>{" "}
          avec le sujet &ldquo;Candidature — [Votre nom]&rdquo;
        </p>
      </div>

      <Button
        type="submit"
        variant="primary"
        isLoading={isSubmitting}
        fullWidth
        size="lg"
        id="app-submit"
      >
        <Send className="w-4 h-4" />
        Envoyer ma candidature
      </Button>
    </form>
  );
}
