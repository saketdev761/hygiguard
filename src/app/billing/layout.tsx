import { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/site';

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name}`,
  robots: 'noindex, nofollow',
};

export default function BillingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
