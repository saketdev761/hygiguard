/**
 * Service Areas Section Component
 */

'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Heading, Text } from '@/components/ui';
import { useInView } from '@/hooks';

interface ServiceAreasSectionProps {
  title: string;
  description?: string;
  areas: string[];
}

export const ServiceAreasSection = ({
  title,
  description,
  areas,
}: ServiceAreasSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background border-2 border-primary rounded-lg p-4 text-center hover:shadow-lg hover:border-primary-light transition-all"
            >
              <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="font-semibold text-text-primary text-sm">{area}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
