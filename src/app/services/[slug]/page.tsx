/**
 * Service Detail Page — Beautified
 */

import React from 'react';
import { Metadata } from 'next';
import {
  FAQSection,
  CTASection,
  HowItWorksSection,
} from '@/components/sections';
import { Heading, Text, Container, Section, Button } from '@/components/ui';
import { SERVICES, SITE_CONFIG } from '@/constants/site';
import { ServiceVariantRow } from '@/components/services/ServiceVariantRow';
import Link from 'next/link';
import {
  ArrowLeft,
  MessageCircle,
  Phone,
  CheckCircle,
  ChevronRight,
  Star,
  ShieldCheck,
  Clock,
  Sparkles,
} from 'lucide-react';

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The service you are looking for does not exist.',
    };
  }

  return {
    title: service.title,
    description: service.description,
    keywords: [service.name, 'cleaning services', ...SITE_CONFIG.keywords],
    openGraph: {
      title: `${service.name} | ${SITE_CONFIG.name}`,
      description: service.description,
      url: `${SITE_CONFIG.baseUrl}/services/${slug}`,
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <Container className="py-20 text-center">
        <Text>Service not found.</Text>
        <Link href="/services">
          <Button variant="primary" className="mt-4">
            Back to Services
          </Button>
        </Link>
      </Container>
    );
  }

  const relatedServices = SERVICES.filter((s) => s.id !== service.id).slice(
    0,
    3
  );

  return (
    <>
      {/* ─── Hero ─── */}
      <Section
        className="relative overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #0B4F8A 0%, #1677D2 60%, #1F8B45 100%)',
          minHeight: '360px',
        }}
      >
        {/* subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <Container className="relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8">
            <Link
              href="/services"
              className="flex items-center gap-1 text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Services
            </Link>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <span className="text-white font-medium">{service.name}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              {/* badge */}
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full mb-4"
                style={{
                  background: 'rgba(36,196,103,0.20)',
                  color: '#24C467',
                }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                Professional Service
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                {service.name}
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                {service.description}
              </p>

              {/* trust pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: ShieldCheck, label: 'Insured & Certified' },
                  { icon: Clock, label: 'Same-day Available' },
                  { icon: Star, label: '4.9★ Rated' },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 text-sm text-white/90 bg-white/10 border border-white/20 rounded-full px-3 py-1.5"
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    className="flex items-center gap-2 w-full sm:w-auto"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book on WhatsApp
                  </Button>
                </a>
                <a href={SITE_CONFIG.phoneLink}>
                  <Button
                    size="lg"
                    className="flex items-center gap-2 w-full sm:w-auto bg-white text-primary font-semibold hover:bg-white/90"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>

            {/* Hero image */}
            <div className="hidden md:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-72 object-cover"
                />
                {/* price badge */}
                <div
                  className="absolute bottom-4 left-4 rounded-xl px-4 py-3"
                  style={{
                    background: 'rgba(11,79,138,0.90)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <p className="text-white/70 text-xs font-medium">
                    Starting from
                  </p>
                  <p className="text-white text-2xl font-bold">
                    ₹{service.pricing?.startingFrom}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ─── Pricing ─── */}
      <Section className="bg-background">
        <Container>
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase text-secondary mb-2">
              Transparent Pricing
            </p>
            <Heading as="h2">Choose Your Plan</Heading>
            <Text className="text-secondary mt-2">
              No hidden charges. What you see is what you pay.
            </Text>
          </div>

          {service.pricing && (
            <div className="space-y-6">
              {service.pricing.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-surface border border-border rounded-2xl overflow-hidden"
                >
                  {/* Item header */}
                  <div className="flex items-center gap-4 p-5 border-b border-border">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-xl flex-shrink-0"
                    />
                    <div>
                      <h3 className="text-primary font-bold text-lg">
                        {item.name}
                      </h3>
                      <p className="text-secondary text-sm">
                        {item.variants.length} variant
                        {item.variants.length > 1 ? 's' : ''} available
                      </p>
                    </div>
                  </div>

                  {/* Variants */}
                  <div className="divide-y divide-border">
                    {item.variants.map((variant) => {
                      // const discount = Math.round(
                      //   ((variant.originalPrice - variant.price) /
                      //     variant.originalPrice) *
                      //     100
                      // );

                      return (
                        <ServiceVariantRow
                          key={variant.name}
                          service={service}
                          item={item}
                          variant={variant}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </Section>
      {/* ─── Benefits ─── */}
      <Section className="bg-surface">
        <Container>
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase text-secondary mb-2">
              Why Choose Us
            </p>
            <Heading as="h2">Key Benefits</Heading>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-background border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-sm transition-all"
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: '#e8f5ee' }}
                >
                  <CheckCircle className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-primary font-medium text-sm leading-relaxed">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ─── Process ─── */}

      <HowItWorksSection
        title="Our Cleaning Process"
        description={`A proven ${service.process.length}-step method for spotless
              results.`}
        steps={service.process}
      />

      {/* ─── FAQ ─── */}
      <FAQSection
        title="Frequently Asked Questions"
        description="Everything you need to know about this service"
        faqs={service.faqs}
      />

      {/* ─── Related Services ─── */}
      {relatedServices.length > 0 && (
        <Section className="bg-background">
          <Container>
            <div className="flex items-center justify-between mb-8">
              <Heading as="h2">Other Services</Heading>
              <Link
                href="/services"
                className="text-sm font-semibold text-primary hover:text-primary-light flex items-center gap-1"
              >
                View all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/services/${rel.slug}`}
                  className="group block bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <img
                    src={rel.image}
                    alt={rel.name}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-5">
                    <h3 className="font-bold text-primary mb-1">
                      {rel.name}
                    </h3>
                    <p className="text-secondary text-sm mb-3 line-clamp-2">
                      {rel.shortDescription}
                    </p>
                    <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Details <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ─── CTA ─── */}
      <CTASection
        title={`Ready for Professional ${service.name}?`}
        description="Book your service today and experience the HygiGuard difference."
      />
    </>
  );
}
