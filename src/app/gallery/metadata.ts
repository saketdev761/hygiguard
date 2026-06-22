/**
 * Metadata for Gallery Page
 */

import { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/site';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'View our professional cleaning transformations. Before and after photos of sofas, mattresses, carpets, and more.',
  keywords: [
    'cleaning gallery',
    'before and after',
    'sofa cleaning results',
    'carpet cleaning photos',
    ...SITE_CONFIG.keywords,
  ],
  openGraph: {
    title: 'Gallery | HygiGuard Solutions',
    description: 'View our professional cleaning transformations',
    url: `${SITE_CONFIG.baseUrl}/gallery`,
  },
  alternates: {
    canonical: 'https://hygiguardsolutions.com/gallery',
  },
};
