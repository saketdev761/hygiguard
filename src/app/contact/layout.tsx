import { Metadata } from 'next';
import { metadata as contactMetadata } from './metadata';

export const metadata: Metadata = contactMetadata;

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
