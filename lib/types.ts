// Types partagés du projet INTER-RH

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  imageUrl: string;
  features: string[];
  color?: string;
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

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  category: string;
  publishedAt: string;
  author?: string;
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
