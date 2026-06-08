/**
 * Service Detail Page
 */

import React from 'react';
import { Metadata } from 'next';
import {
  HeroSection,
  FeaturesSection,
  FAQSection,
  CTASection,
} from '@/components/sections';
import { Heading, Text, Container, Section, Button } from '@/components/ui';
import { SERVICES, SITE_CONFIG, FAQ } from '@/constants/site';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, Phone, CheckCircle } from 'lucide-react';

interface ServiceDetailPageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: ServiceDetailPageProps): Metadata {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The service you are looking for does not exist.',
    };
  }

  return {
    title: service.name,
    description: service.description,
    keywords: [service.name, 'cleaning services', ...SITE_CONFIG.keywords],
    openGraph: {
      title: `${service.name} | ${SITE_CONFIG.name}`,
      description: service.description,
      url: `${SITE_CONFIG.baseUrl}/services/${service.slug}`,
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <Container className="py-20">
        <Text>Service not found</Text>
      </Container>
    );
  }

  const relatedServices = SERVICES.filter((s) => s.id !== service.id).slice(
    0,
    3
  );

  return (
    <>
      {/* Hero Section */}
      <HeroSection headline={service.name} subheadline={service.description} />

      {/* Breadcrumb */}
      <Section className="py-6 bg-background border-b border-border">
        <Container>
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/services"
              className="flex items-center gap-1 text-primary hover:text-primary-light"
            >
              <ArrowLeft className="w-4 h-4" />
              All Services
            </Link>
            <span className="text-text-secondary">/</span>
            <span className="text-text-primary font-semibold">
              {service.name}
            </span>
          </div>
        </Container>
      </Section>

      {/* Service Overview */}
      <Section className="bg-surface">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Heading as="h2" className="mb-6">
                About This Service
              </Heading>
              <Text className="mb-6 text-lg">{service.description}</Text>
              <Text className="mb-8">{service.price}</Text>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book on WhatsApp
                  </Button>
                </a>
                <a href={SITE_CONFIG.phoneLink}>
                  <Button
                    variant="primary"
                    size="lg"
                    className="flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-light rounded-lg p-8 text-white">
              <Heading as="h3" className="text-white mb-6">
                Key Benefits
              </Heading>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Cleaning Process */}
      <Section className="bg-background">
        <Container>
          <Heading as="h2" className="text-center mb-12">
            Our Cleaning Process
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {service.process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-surface border-2 border-primary rounded-lg p-6 text-center">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <p className="pt-4 font-semibold text-text-primary">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <FAQSection
        title="Service FAQs"
        description="Find answers to questions about this service"
        faqs={FAQ.slice(0, 6)}
      />

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <Section className="bg-surface">
          <Container>
            <Heading as="h2" className="mb-12">
              Our Other Services
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((relatedService) => (
                <div
                  key={relatedService.id}
                  className="bg-background border border-border rounded-lg p-6"
                >
                  <h3 className="font-bold text-lg text-text-primary mb-2">
                    {relatedService.name}
                  </h3>
                  <Text variant="caption" className="mb-4">
                    {relatedService.shortDescription}
                  </Text>
                  <Link href={`/services/${relatedService.slug}`}>
                    <Button variant="ghost" size="sm">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Final CTA */}
      <CTASection
        title={`Ready for Professional ${service.name}?`}
        description="Book your service today and experience the HygiGuard difference."
      />
    </>
  );
}
