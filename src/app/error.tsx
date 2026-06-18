/**
 * Error Boundary
 */

'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Heading, Text, Button, Container, Section } from '@/components/ui';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section className="py-32 bg-background flex items-center justify-center min-h-screen">
      <Container>
        <div className="text-center space-y-6">
          <Heading as="h1">Something went wrong!</Heading>

          <Text className="max-w-md mx-auto">
            An unexpected error occurred. Please try again or contact us if the
            problem persists.
          </Text>

          {error.digest && (
            <Text variant="caption" className="text-secondary">
              Error ID: {error.digest}
            </Text>
          )}

          <div className="flex gap-4 justify-center pt-6">
            <Button variant="primary" size="lg" onClick={reset}>
              Try Again
            </Button>
            <Link href="/">
              <Button variant="outline" size="lg">
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
