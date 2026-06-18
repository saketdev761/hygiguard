/**
 * Reviews Section Component
 */

'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';
import { Card, Heading, Text } from '@/components/ui';
import { useInView } from '@/hooks';

export interface ReviewItem {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

interface ReviewsSectionProps {
  title: string;
  description?: string;
  reviews: ReviewItem[];
}

export const ReviewsSection = ({
  title,
  description,
  reviews,
}: ReviewsSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const formatDate = (date: string) => {
    const d = new Date(date);

    return `${String(d.getDate()).padStart(2, '0')}/${String(
      d.getMonth() + 1
    ).padStart(2, '0')}/${d.getFullYear()}`;
  };

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {reviews.map((review, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card hover className="flex flex-col h-full">
                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-warning text-warning"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <Text variant="body" className="mb-4 flex-grow italic">
                  &quot;{review.text}&quot;
                </Text>

                {/* Divider */}
                <div className="border-t border-border my-4" />

                {/* Author Info */}
                <div>
                  <p className="font-semibold text-primary mb-1">
                    {review.name}
                  </p>
                  <div className="flex items-center gap-1 text-secondary">
                    <MapPin className="w-4 h-4" />
                    <Text variant="caption">{review.location}</Text>
                  </div>
                  <Text variant="small" className="text-secondary mt-1">
                    {formatDate(review.date)}
                  </Text>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
