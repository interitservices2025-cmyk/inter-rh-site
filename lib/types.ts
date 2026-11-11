// Types partagés du projet INTER-RH

export interface ProjectStep {
  number: number;
  title: string;
  description: string;
}

export interface ProjectSector {
  title: string;
  description: string;
  icon: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  secondaryDescription?: string;
  icon: string;
  imageUrl: string;
  features: string[];
  color?: string;
  projectSectors?: ProjectSector[];
  projectSteps?: ProjectStep[];
  ctaLabel?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  avatarUrl?: string;
  source?: "google" | "linkedin";
}

export interface NewsArticleSource {
  label: string;
  url: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  imageAlt?: string;
  category: string;
  publishedAt: string;
  author?: string;
  metaDescription?: string;
  keywords?: string[];
  sources?: NewsArticleSource[];
  relatedServiceSlug?: string;
  readingTime?: string;
}

export interface JobOffer {
  id: string;
  title: string;
  location: string;
  type: "CDI" | "CDD" | "Stage" | "Alternance" | "Freelance";
  sector: string;
  description: string;
  requirements: string[];
  publishedAt: string;
  deadline?: string;
  isActive: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  linkedin?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  education: string;
  coverLetter: string;
  linkedinUrl?: string;
}

export interface EmployerFormData {
  company: string;
  contactName: string;
  email: string;
  phone: string;
  position: string;
  contractType: string;
  startDate?: string;
  description: string;
  requirements: string;
}
