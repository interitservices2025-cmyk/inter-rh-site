"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";


const schema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Le sujet doit contenir au moins 2 caractères"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Contact form data:", data);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-navy-500 mb-2">
          Message envoyé avec succès !
        </h3>
        <p className="text-gray-500 text-sm">
          Notre équipe vous répondra dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
      aria-label="Formulaire de contact"
    >
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="form-label">
          Nom complet <span className="text-primary-500">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          placeholder="Votre nom et prénom"
          className="form-input"
          aria-required="true"
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          {...register("name")}
        />
        {errors.name && (
          <p id="contact-name-error" role="alert" className="form-error">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="form-label">
          Email <span className="text-primary-500">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          placeholder="votre@email.com"
          className="form-input"
          aria-required="true"
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          {...register("email")}
        />
        {errors.email && (
          <p id="contact-email-error" role="alert" className="form-error">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="contact-phone" className="form-label">
          Téléphone{" "}
          <span className="text-gray-400 font-normal">(optionnel)</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          autoComplete="tel"
          placeholder="+237 6XX XXX XXX"
          className="form-input"
          {...register("phone")}
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="contact-subject" className="form-label">
          Sujet <span className="text-primary-500">*</span>
        </label>
        <input
          id="contact-subject"
          type="text"
          placeholder="Objet de votre message"
          className="form-input"
          aria-required="true"
          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
          {...register("subject")}
        />
        {errors.subject && (
          <p id="contact-subject-error" role="alert" className="form-error">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="form-label">
          Message <span className="text-primary-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Décrivez votre demande..."
          className="form-input resize-none"
          aria-required="true"
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="contact-message-error" role="alert" className="form-error">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        isLoading={isSubmitting}
        fullWidth
        size="lg"
        id="contact-submit"
      >
        <Send className="w-4 h-4" />
        Envoyer le message
      </Button>
    </form>
  );
}
