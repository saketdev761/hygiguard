/**
 * Hero Section Component
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { Button, Heading, Text } from '@/components/ui';
import { SITE_CONFIG, TRUST_INDICATORS } from '@/constants/site';

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  trustIndicators?: string[];
}

export const HeroSection = ({
  headline,
  subheadline,
  trustIndicators = TRUST_INDICATORS,
}: HeroSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-light to-primary pt-20">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-screen blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-screen blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Headline */}
          <motion.div variants={itemVariants}>
            <Heading
              as="h1"
              variant="display"
              className="text-white leading-tight"
            >
              {headline}
            </Heading>
          </motion.div>

          {/* Subheadline */}
          <motion.div variants={itemVariants}>
            <Text
              variant="body"
              className="text-white text-opacity-90 max-w-2xl mx-auto text-lg md:text-xl"
            >
              {subheadline}
            </Text>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                size="lg"
                className="flex items-center gap-2 min-w-max"
              >
                <MessageCircle className="w-5 h-5" />
                Book on WhatsApp
              </Button>
            </a>
            <a href={SITE_CONFIG.phoneLink}>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary flex items-center gap-2 min-w-max"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 md:gap-8 pt-8"
          >
            {trustIndicators.map((indicator, index) => (
              <div
                key={index}
                className="text-white font-semibold text-sm md:text-base"
              >
                {indicator}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-white text-opacity-60 text-center">
          <p className="text-sm mb-2">Scroll to explore</p>
          <div className="flex justify-center">
            <div className="w-6 h-10 border-2 border-white border-opacity-30 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white border-opacity-60 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
