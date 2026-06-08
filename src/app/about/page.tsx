/**
 * About Page
 */

import React from 'react';
import { Metadata } from 'next';
import {
  HeroSection,
  FeaturesSection,
  ReviewsSection,
  CTASection,
} from '@/components/sections';
import { Heading, Text, Container, Section } from '@/components/ui';
import { SITE_CONFIG, WHY_CHOOSE_US, REVIEWS } from '@/constants/site';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about HygiGuard Solutions, our mission, values, and commitment to professional cleaning.',
};

const CORE_VALUES = [
  {
    title: 'Excellence',
    description:
      'We maintain the highest standards in every service we deliver.',
    icon: 'Star',
  },
  {
    title: 'Trust',
    description: 'Your satisfaction and trust are at the core of our business.',
    icon: 'Shield',
  },
  {
    title: 'Sustainability',
    description:
      'We use eco-friendly solutions to protect your family and environment.',
    icon: 'Leaf',
  },
  {
    title: 'Innovation',
    description:
      'We continuously upgrade our equipment and methods for better results.',
    icon: 'Lightbulb',
  },
  {
    title: 'Reliability',
    description: 'We are always on time and always deliver on our promises.',
    icon: 'CheckCircle',
  },
  {
    title: 'Affordability',
    description:
      'Premium quality cleaning at prices that make sense for your budget.',
    icon: 'IndianRupee',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        headline="About HygiGuard Solutions"
        subheadline="Delivering professional cleaning solutions since day one"
      />

      {/* Company Story */}
      <Section className="bg-surface">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Heading as="h2" className="mb-6">
                Our Story
              </Heading>
              <div className="space-y-4">
                <Text>
                  HygiGuard Solutions was founded with a simple mission: to
                  provide premium professional cleaning services that improve
                  the hygiene and comfort of homes and offices across Lucknow.
                </Text>
                <Text>
                  What started as a small initiative has grown into a trusted
                  name in professional cleaning. We've served thousands of
                  satisfied customers with our dedicated team of trained
                  professionals.
                </Text>
                <Text>
                  Every day, we work towards making spaces cleaner, healthier,
                  and more comfortable for families and businesses across the
                  city.
                </Text>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-light rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Stats</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-4xl font-bold">5000+</p>
                  <p className="text-white text-opacity-80">Happy Customers</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">10,000+</p>
                  <p className="text-white text-opacity-80">
                    Services Completed
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold">98%</p>
                  <p className="text-white text-opacity-80">
                    Satisfaction Rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-background">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-l-4 border-primary pl-8">
              <Heading as="h3" className="mb-4">
                Our Mission
              </Heading>
              <Text>
                To deliver professional cleaning solutions that improve hygiene,
                health, and comfort of our customers' homes and offices. We are
                committed to excellence, sustainability, and customer
                satisfaction in every service.
              </Text>
            </div>

            <div className="border-l-4 border-secondary pl-8">
              <Heading as="h3" className="mb-4">
                Our Vision
              </Heading>
              <Text>
                To become the most trusted and preferred cleaning services brand
                in India, known for our professionalism, quality, and
                innovation. We aspire to create a cleaner, healthier India, one
                home at a time.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Values */}
      <FeaturesSection
        title="Our Core Values"
        description="The principles that guide everything we do"
        features={CORE_VALUES}
        columns={3}
      />

      {/* Why Choose Us */}
      <FeaturesSection
        title="Why Customers Trust HygiGuard"
        description="What sets us apart from the competition"
        features={WHY_CHOOSE_US}
        columns={3}
      />

      {/* Customer Reviews */}
      <ReviewsSection
        title="What Our Customers Say"
        description="Real testimonials from satisfied customers"
        reviews={REVIEWS}
      />

      {/* Team Section */}
      <Section className="bg-surface">
        <Container>
          <Heading as="h2" className="text-center mb-12">
            Our Professional Team
          </Heading>
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-lg p-8 md:p-12 text-white text-center">
            <p className="text-lg mb-4">
              Our team consists of certified professionals with years of
              experience in professional cleaning. Each member is trained,
              background-checked, and committed to delivering excellence.
            </p>
            <p className="text-xl font-semibold">
              Trained • Certified • Reliable • Professional
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTASection
        title="Experience the HygiGuard Difference"
        description="Join thousands of satisfied customers across Lucknow who trust us for their cleaning needs."
      />
    </>
  );
}
