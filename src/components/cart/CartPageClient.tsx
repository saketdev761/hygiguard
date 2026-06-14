'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
  MessageCircle,
} from 'lucide-react';
import { Button, Container, Heading, Section, Text } from '@/components/ui';
import { SITE_CONFIG } from '@/constants/site';
import { useCart } from '@/context/CartContext';

const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);

export function CartPageClient() {
  const { items, itemCount, subtotal, removeItem, updateQuantity, clearCart } =
    useCart();

  const checkoutMessage = encodeURIComponent(
    [
      `Hello ${SITE_CONFIG.name},`,
      '',
      'I want to book these services:',
      '',
      ...items.map(
        (item, index) =>
          `${index + 1}. ${item.serviceName} - ${item.itemName} (${item.variantName}) x ${item.quantity} = ${formatPrice(
            item.price * item.quantity
          )}`
      ),
      '',
      `Total: ${formatPrice(subtotal)}`,
    ].join('\n')
  );

  const checkoutUrl = `${SITE_CONFIG.whatsappLink}?text=${checkoutMessage}`;

  return (
    <Section className="bg-background py-12 md:py-16">
      <Container>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Continue browsing services
        </Link>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:flex-1">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <Heading as="h1" className="mb-2">
                  Your Cart
                </Heading>
                <Text className="mb-0">
                  {itemCount === 0
                    ? 'No services selected yet.'
                    : `${itemCount} selected service${itemCount > 1 ? 's' : ''}`}
                </Text>
              </div>
              {items.length > 0 && (
                <Button variant="ghost" size="sm" onClick={clearCart}>
                  <Trash2 className="w-4 h-4" />
                  Clear
                </Button>
              )}
            </div>

            {items.length === 0 ? (
              <div className="bg-surface border border-border rounded-lg p-8 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-background flex items-center justify-center">
                  <ShoppingCart className="w-7 h-7 text-primary" />
                </div>
                <Heading as="h2" className="text-2xl mb-2">
                  Pick a cleaning service
                </Heading>
                <Text>
                  Add sofa, mattress, carpet, or chair cleaning options and
                  book everything together.
                </Text>
                <Link href="/services">
                  <Button variant="primary">View Services</Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-surface border border-border rounded-lg p-4 sm:p-5"
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      <img
                        src={item.image}
                        alt={item.itemName}
                        className="w-full sm:w-28 h-36 sm:h-28 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                          <div>
                            <p className="text-sm font-semibold text-secondary mb-1">
                              {item.serviceName}
                            </p>
                            <h2 className="text-lg font-bold text-text-primary mb-1">
                              {item.itemName}
                            </h2>
                            <p className="text-sm text-text-secondary mb-3">
                              {item.variantName}
                            </p>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-primary text-xl">
                                {formatPrice(item.price)}
                              </span>
                              <span className="text-sm line-through text-text-secondary">
                                {formatPrice(item.originalPrice)}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between md:justify-end gap-3">
                            <div className="flex items-center border border-border rounded-lg overflow-hidden bg-background">
                              <button
                                type="button"
                                className="w-9 h-9 flex items-center justify-center text-text-primary hover:bg-surface"
                                aria-label={`Decrease ${item.itemName}`}
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="w-10 text-center font-semibold">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                className="w-9 h-9 flex items-center justify-center text-text-primary hover:bg-surface"
                                aria-label={`Increase ${item.itemName}`}
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            <button
                              type="button"
                              className="w-9 h-9 rounded-lg flex items-center justify-center text-danger hover:bg-background"
                              aria-label={`Remove ${item.itemName}`}
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <aside className="w-full lg:w-96 bg-surface border border-border rounded-lg p-5 sticky top-24">
            <Heading as="h2" className="text-2xl mb-5">
              Summary
            </Heading>
            <div className="space-y-3 border-b border-border pb-5 mb-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">Selected services</span>
                <span className="font-semibold">{itemCount}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">Subtotal</span>
                <span className="font-semibold">{formatPrice(subtotal)}</span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-5">
              <span className="font-bold text-text-primary">Estimated total</span>
              <span className="text-2xl font-bold text-primary">
                {formatPrice(subtotal)}
              </span>
            </div>
            <a
              href={items.length > 0 ? checkoutUrl : undefined}
              target="_blank"
              rel="noopener noreferrer"
              className={items.length === 0 ? 'pointer-events-none' : undefined}
            >
              <Button
                variant="secondary"
                className="w-full"
                disabled={items.length === 0}
              >
                <MessageCircle className="w-4 h-4" />
                Checkout on WhatsApp
              </Button>
            </a>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
