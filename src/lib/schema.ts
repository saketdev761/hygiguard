/**
 * Schema.org - Structured data generation
 */

import { SITE_CONFIG, SERVICES } from '@/constants/site';

export function generateBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.baseUrl}/og-image.jpg`,
    description: SITE_CONFIG.description,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lucknow',
      addressLocality: SITE_CONFIG.city,
      addressRegion: SITE_CONFIG.state,
      postalCode: '226000',
      addressCountry: SITE_CONFIG.country,
    },
    url: SITE_CONFIG.baseUrl,
    sameAs: [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.twitter,
      SITE_CONFIG.social.youtube,
    ],
    areaServed: {
      '@type': 'City',
      name: SITE_CONFIG.city,
    },
  };
}

export function generateServiceSchema(service: (typeof SERVICES)[0]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.baseUrl,
    },
    areaServed: {
      '@type': 'City',
      name: SITE_CONFIG.city,
    },
  };
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    image: `${SITE_CONFIG.baseUrl}/og-image.jpg`,
    priceRange: '$$',
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lucknow',
      addressLocality: SITE_CONFIG.city,
      addressRegion: SITE_CONFIG.state,
      addressCountry: SITE_CONFIG.country,
    },
    url: SITE_CONFIG.baseUrl,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '500+',
    },
    knowsAbout: SERVICES.map((service) => service.name),
  };
}
