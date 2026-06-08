/**
 * Services Section Component
 */

'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Card, Heading, Text, Button } from '@/components/ui';
import { useInView } from '@/hooks';

export interface ServiceItem {
  id: string;
  name: string;
  icon: string;
  slug: string;
  shortDescription: string;
}

interface ServicesSectionProps {
  title: string;
  description?: string;
  services: ServiceItem[];
}

// Type guard to safely access icon
const isValidIcon = (name: string): name is keyof typeof Icons => {
  return name in Icons;
};

export const ServicesSection = ({
  title,
  description,
  services,
}: ServicesSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants}>
            <Heading className="mb-4">{title}</Heading>
          </motion.div>
          {description && (
            <motion.div variants={itemVariants}>
              <Text className="max-w-2xl mx-auto text-lg">{description}</Text>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service) => {
            const IconComponent = isValidIcon(service.icon)
              ? Icons[service.icon]
              : Icons.Sparkles;

            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Card hover className="h-full flex flex-col">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-text-primary mb-2">
                      {service.name}
                    </h3>
                    <Text variant="caption">{service.shortDescription}</Text>
                  </div>
                  <div className="mt-auto">
                    <Link href={`/services/${service.slug}`}>
                      <Button variant="ghost" size="sm" className="text-left">
                        Learn More →
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
