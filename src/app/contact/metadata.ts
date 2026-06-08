/**
 * Metadata for Contact Page
 */

import { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with HygiGuard Solutions. Call, WhatsApp, or fill out our contact form for professional cleaning services.',
  keywords: ['contact', 'phone', 'whatsapp', 'email', ...SITE_CONFIG.keywords],
  openGraph: {
    title: 'Contact Us | HygiGuard Solutions',
    description: 'Get in touch with HygiGuard Solutions',
    url: `${SITE_CONFIG.baseUrl}/contact`,
  },
};
