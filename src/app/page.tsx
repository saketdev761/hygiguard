/**
 * Home Page
 */

import React from 'react';
import {
  HeroSection,
  BeforeAfterSection,
  ServicesSection,
  HowItWorksSection,
  FeaturesSection,
  ReviewsSection,
  ServiceAreasSection,
  FAQSection,
  CTASection,
} from '@/components/sections';
import {
  SITE_CONFIG,
  SERVICES,
  WHY_CHOOSE_US,
  HOW_IT_WORKS,
  REVIEWS,
  FAQ,
} from '@/constants/site';
import { BEFORE_AFTER_IMAGES } from '@/data/images';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        headline="Professional Sofa, Mattress & Carpet Cleaning Services"
        subheadline="Deep cleaning solutions for healthier and fresher homes."
      />

      {/* Before After Section */}
      <BeforeAfterSection
        title="See Our Transformation Results"
        description="Witness the dramatic difference our professional cleaning service makes to your furniture and home."
        images={BEFORE_AFTER_IMAGES}
      />

      {/* Services Section */}
      <ServicesSection
        title="Our Premium Services"
        description="Professional cleaning solutions tailored to your needs"
        services={SERVICES.map(
          ({ id, name, icon, slug, shortDescription }) => ({
            id,
            name,
            icon,
            slug,
            shortDescription,
          })
        )}
      />

      {/* How It Works Section */}
      <HowItWorksSection
        title="How It Works"
        description="Three simple steps to fresher, cleaner spaces"
        steps={HOW_IT_WORKS}
      />

      {/* Why Choose Us Section */}
      <FeaturesSection
        title="Why Choose HygiGuard Solutions"
        description="We deliver premium cleaning services with certified professionals and proven results"
        features={WHY_CHOOSE_US}
        columns={3}
      />

      {/* Reviews Section */}
      {/* <ReviewsSection
        title="What Our Customers Say"
        description="Real reviews from happy customers across Lucknow"
        reviews={REVIEWS}
      /> */}

      {/* Service Areas Section */}
      <ServiceAreasSection
        title="Service Areas"
        description="We serve all major areas in and around Lucknow"
        areas={SITE_CONFIG.serviceAreas}
      />

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        description="Find answers to common questions about our services"
        faqs={FAQ}
      />

      {/* Final CTA Section */}
      <CTASection
        title="Ready To Refresh Your Home?"
        description="Get professional cleaning service with guaranteed satisfaction. Book now on WhatsApp or call us directly."
        primaryButtonText="Book on WhatsApp"
        secondaryButtonText="Call Now"
        variant="gradient"
      />
    </>
  );
}
