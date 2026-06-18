/**
 * Features Section Component
 */

'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Card, Heading, Text } from '@/components/ui';
import { useInView } from '@/hooks';

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

interface FeaturesSectionProps {
  title: string;
  description?: string;
  features: FeatureItem[];
  columns?: 2 | 3 | 4 | 6;
  background?: string;
}

const isValidIcon = (name: string): name is keyof typeof Icons => {
  return name in Icons;
};

export const FeaturesSection = ({
  title,
  description,
  features,
  columns = 3,
  background = 'bg-surface',
}: FeaturesSectionProps) => {
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

  const gridClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
    6: 'md:grid-cols-3 lg:grid-cols-6',
  }[columns];

  return (
    <section ref={ref} className={`py-16 md:py-24 lg:py-32 ${background}`}>
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
          className={`grid grid-cols-1 ${gridClass} gap-6`}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => {
            const IconComponent = isValidIcon(feature.icon)
              ? (Icons[feature.icon] as React.ComponentType<
                  React.SVGProps<SVGSVGElement>
                >)
              : (Icons.Sparkles as React.ComponentType<
                  React.SVGProps<SVGSVGElement>
                >);

            return (
              <motion.div key={index} variants={itemVariants}>
                <Card hover className="text-center h-full">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-secondary bg-opacity-10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-secondary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <Text variant="caption">{feature.description}</Text>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
