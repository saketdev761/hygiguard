/**
 * Contact Page
 */

'use client';

import React from 'react';
import { HeroSection, CTASection } from '@/components/sections';
import { Heading, Text, Container, Section, Card } from '@/components/ui';
import { ContactForm } from '@/components/sections';
import { SITE_CONFIG } from '@/constants/site';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        headline="Get In Touch"
        subheadline="Have questions? We're here to help. Contact us today."
      />

      {/* Contact Information */}
      <Section className="bg-surface">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {/* Phone Card */}
            <Card hover>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-text-primary mb-2">Phone</h3>
                <a
                  href={SITE_CONFIG.phoneLink}
                  className="text-primary hover:text-primary-light font-semibold"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
            </Card>

            {/* WhatsApp Card */}
            <Card hover>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="font-bold text-text-primary mb-2">WhatsApp</h3>
                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-600 font-semibold"
                >
                  Chat Now
                </a>
              </div>
            </Card>

            {/* Email Card */}
            <Card hover>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-bold text-text-primary mb-2">Email</h3>
                <a
                  href={SITE_CONFIG.emailLink}
                  className="text-secondary hover:text-secondary-light font-semibold break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
            </Card>

            {/* Location Card */}
            <Card hover>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-text-primary mb-2">Location</h3>
                <p className="text-text-secondary">{SITE_CONFIG.address}</p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Contact Form Section */}
      <Section className="bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <Heading as="h2" className="mb-6">
                Send Us a Message
              </Heading>
              <Text className="mb-6">
                Fill out the form below and we'll get back to you as soon as
                possible. Or directly message us on WhatsApp for instant
                response.
              </Text>
              <ContactForm />
            </div>

            {/* Business Hours & Service Areas */}
            <div className="space-y-8">
              {/* Business Hours */}
              <Card>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary text-lg">
                      Business Hours
                    </h3>
                  </div>
                </div>

                <div className="space-y-2 text-text-secondary">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-secondary bg-opacity-10 rounded-lg">
                  <p className="text-sm text-text-secondary">
                    <span className="font-semibold text-secondary">Note:</span>{' '}
                    Same-day service available on request within business hours.
                  </p>
                </div>
              </Card>

              {/* Service Areas */}
              <Card>
                <h3 className="font-bold text-text-primary text-lg mb-4">
                  Service Areas
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {SITE_CONFIG.serviceAreas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-2 text-text-secondary"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {area}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map Placeholder */}
      <Section className="bg-surface py-8">
        <Container>
          <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-text-secondary mx-auto mb-4" />
              <p className="text-text-secondary">Map Location Coming Soon</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Schedule Your Cleaning?"
        description="We're just a message or call away. Reach out now to book your service."
      />
    </>
  );
}
