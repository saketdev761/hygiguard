/**
 * How It Works Section Component
 */

'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Heading, Text } from '@/components/ui';
import { useInView } from '@/hooks';

interface StepItem {
  step: string;
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  title: string;
  description?: string;
  steps: StepItem[];
}

export const HowItWorksSection = ({
  title,
  description,
  steps,
}: HowItWorksSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section ref={ref} className="py-16 md:py-24 lg:py-32 bg-background">
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-surface border-2 border-primary rounded-lg p-6 text-center">
                {/* Step Number */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.step}
                </div>

                <div className="pt-4 space-y-3">
                  <h3 className="font-bold text-lg text-text-primary">
                    {step.title}
                  </h3>
                  <Text variant="body" className="text-center">
                    {step.description}
                  </Text>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
