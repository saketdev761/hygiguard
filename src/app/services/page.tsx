import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MessageCircle, Sparkles } from 'lucide-react';
import { Heading, Text, Container, Section, Button } from '@/components/ui';
import { SERVICES, SITE_CONFIG } from '@/constants/site';

export const metadata: Metadata = {
  title: 'Cleaning Services in Lucknow',
  description:
    'Explore professional sofa, mattress, carpet, and chair cleaning services by HygiGuard Solutions in Lucknow.',
  keywords: ['cleaning services in Lucknow', ...SITE_CONFIG.keywords],
  openGraph: {
    title: `Cleaning Services in Lucknow | ${SITE_CONFIG.name}`,
    description:
      'Compare cleaning services, pricing, and booking options from HygiGuard Solutions.',
    url: `${SITE_CONFIG.baseUrl}/services`,
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <>
      <section
        className="relative overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #0B4F8A 0%, #1677D2 58%, #1F8B45 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <Container className="relative py-16 md:py-20">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full mb-4"
            style={{
              background: 'rgba(36,196,103,0.20)',
              color: '#24C467',
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Professional Cleaning Services
          </span>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Cleaning Services in Lucknow
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Compare sofa, mattress, carpet, and chair cleaning options before
              choosing the service that fits your home.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Same-day Slots', 'Transparent Pricing', 'Doorstep Service'].map(
              (label) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 text-sm text-white/90 bg-white/10 border border-white/20 rounded-full px-3 py-1.5"
                >
                  <CheckCircle className="w-4 h-4" />
                  {label}
                </span>
              )
            )}
          </div>
        </Container>
      </section>

      <Section className="bg-background py-12 md:py-16">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-secondary mb-2">
                All Services
              </p>
              <Heading as="h2">Choose What You Need</Heading>
              <Text className="max-w-2xl">
                Start from this overview, then open any service page for
                detailed pricing, process, and booking options.
              </Text>
            </div>
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" className="w-full md:w-auto">
                <MessageCircle className="w-4 h-4" />
                Ask on WhatsApp
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group bg-surface border border-border rounded-lg overflow-hidden hover:border-primary/40 hover:shadow-md transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden bg-background">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-xl font-bold text-text-primary mb-0">
                      {service.name}
                    </h3>
                    <span className="text-sm font-bold text-secondary whitespace-nowrap">
                      ₹{service.pricing.startingFrom}+
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm mb-4">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
