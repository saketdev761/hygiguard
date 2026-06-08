/**
 * Not Found Page
 */

import Link from 'next/link';
import { Heading, Text, Button, Container, Section } from '@/components/ui';

export default function NotFound() {
  return (
    <Section className="py-32 bg-background flex items-center justify-center min-h-screen">
      <Container>
        <div className="text-center space-y-6">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary opacity-10">404</h1>
          </div>

          <Heading as="h1">Page Not Found</Heading>

          <Text className="max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. The
            page may have been moved or deleted.
          </Text>

          <div className="flex gap-4 justify-center pt-6">
            <Link href="/">
              <Button variant="primary" size="lg">
                Go Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
