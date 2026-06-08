/**
 * Type definitions for the application
 */

export interface Service {
  id: string;
  name: string;
  icon: string;
  slug: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  process: string[];
  price: string;
}

export interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FormData {
  name: string;
  phone: string;
  location: string;
  service: string;
  message: string;
}

export interface BeforeAfterImage {
  id: string;
  before: string;
  after: string;
  category: string;
  alt: string;
}

export interface GalleryImage {
  id: string;
  image: string;
  category: string;
  title: string;
  alt: string;
}
