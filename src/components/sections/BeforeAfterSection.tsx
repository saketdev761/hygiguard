/**
 * Before After Section Component
 */

'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heading, Text } from '@/components/ui';
import { useInView } from '@/hooks';

interface BeforeAfterItem {
  id: string;
  before: string;
  after: string;
  category: string;
  alt: string;
}

interface BeforeAfterSectionProps {
  title: string;
  description?: string;
  images: BeforeAfterItem[];
}

const BeforeAfterCard = ({ image }: { image: BeforeAfterItem }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(newPosition, 0), 100));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newPosition = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(newPosition, 0), 100));
  };

  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        className="relative w-full aspect-square overflow-hidden rounded-lg cursor-col-resize bg-gray-200"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image */}
        <div className="absolute inset-0">
          <Image
            src={image.after}
            alt={`After: ${image.alt}`}
            fill
            className="object-cover"
          />
        </div>

        {/* Before Image */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <Image
            src={image.before}
            alt={`Before: ${image.alt}`}
            fill
            className="object-cover"
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
            <svg
              className="w-4 h-4 text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1z"
              />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm font-semibold">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm font-semibold">
          After
        </div>
      </div>
      <div>
        <p className="font-semibold text-text-primary">{image.category}</p>
        <p className="text-sm text-text-secondary">{image.alt}</p>
      </div>
    </div>
  );
};

export const BeforeAfterSection = ({
  title,
  description,
  images,
}: BeforeAfterSectionProps) => {
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {images.map((image) => (
            <motion.div key={image.id} variants={itemVariants}>
              <BeforeAfterCard image={image} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
