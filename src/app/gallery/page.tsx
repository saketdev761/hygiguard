/**
 * Gallery Page
 */

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { HeroSection, CTASection } from '@/components/sections';
import { Container, Section, Modal } from '@/components/ui';
import { GALLERY_IMAGES } from '@/data/images';

const CATEGORIES = [
  'All',
  ...new Set(GALLERY_IMAGES.map((img) => img.category)),
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages =
    selectedCategory === 'All'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        headline="Our Work Gallery"
        subheadline="View our professional cleaning transformations"
      />

      {/* Gallery Section */}
      <Section className="bg-background">
        <Container>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-surface border-2 border-border hover:border-primary text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="break-inside-avoid cursor-pointer group overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(image.image)}
              >
                <div className="relative bg-background overflow-hidden rounded-lg">
                  <Image
                    src={image.image}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                    <div className="w-full p-4 bg-gradient-to-t from-black to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-semibold">{image.title}</p>
                      <p className="text-sm text-gray-200">{image.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Lightbox Modal */}
      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        className="w-full max-w-4xl max-h-screen"
      >
        {selectedImage && (
          <Image
            src={selectedImage}
            alt="Gallery image"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        )}
      </Modal>

      {/* CTA Section */}
      <CTASection
        title="Ready to See Your Space Transform?"
        description="Book our professional cleaning service today and get results like the ones in our gallery."
      />
    </>
  );
}
