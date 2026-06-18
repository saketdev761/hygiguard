/**
 * CTA Section Component
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { Button, Heading, Text } from '@/components/ui';
import { SITE_CONFIG } from '@/constants/site';

interface CTASectionProps {
  title: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  variant?: 'primary' | 'gradient';
}

export const CTASection = ({
  title,
  description,
  primaryButtonText = 'Book on WhatsApp',
  secondaryButtonText = 'Call Now',
  variant = 'primary',
}: CTASectionProps) => {
  const bgClass =
    variant === 'gradient'
      ? 'bg-gradient-to-r from-primary to-primary-light'
      : 'bg-primary';

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className={`${bgClass} py-16 md:py-24 lg:py-32`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div variants={itemVariants}>
            <Heading className="text-white">{title}</Heading>
          </motion.div>

          {description && (
            <motion.div variants={itemVariants}>
              <Text className="text-white text-opacity-90 max-w-2xl mx-auto text-lg">
                {description}
              </Text>
            </motion.div>
          )}

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
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
                {primaryButtonText}
              </Button>
            </a>
            <a href={SITE_CONFIG.phoneLink}>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary flex items-center gap-2 min-w-max"
              >
                <Phone className="w-5 h-5" />
                {secondaryButtonText}
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
