/**
 * Header Component
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MessageCircle, ShoppingCart } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/site';
import { Button } from '@/components/ui';
import { useCart } from '@/context/CartContext';
import { useScrollPosition } from '@/hooks';
import { cn } from '@/utils';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const { itemCount } = useCart();

  const isScrolled = scrollPosition > 0;

  const ShoppingcartTab = () => {
    return (
      <Link
        href="/cart"
        className="relative inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg border border-border text-primary hover:bg-background transition-colors"
        aria-label={`Cart with ${itemCount} item${itemCount === 1 ? '' : 's'}`}
      >
        <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
        {itemCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 min-w-4 h-4 md:min-w-5 md:h-5 px-1 rounded-full bg-secondary text-white text-[10px] md:text-xs font-bold flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </Link>
    );
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-surface shadow-md border-b border-border'
            : 'bg-background'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl text-primary hover:text-primary-light transition-colors"
            >
              <span className="text-2xl">🧹</span>
              <span className="hidden sm:inline">HygiGuard</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text-primary hover:text-primary font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <ShoppingcartTab />
              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
              </a>
              <a href={SITE_CONFIG.phoneLink}>
                <Button
                  variant="primary"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <ShoppingcartTab />
              <button
                className="p-2 hover:bg-background rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-text-primary" />
                ) : (
                  <Menu className="w-6 h-6 text-text-primary" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {isMobileMenuOpen && (
            <nav className="md:hidden pb-4 border-t border-border space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-text-primary hover:bg-background rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-2 space-y-2">
                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="secondary" size="sm" className="w-full">
                    WhatsApp
                  </Button>
                </a>
                <a href={SITE_CONFIG.phoneLink} className="block">
                  <Button variant="primary" size="sm" className="w-full">
                    Call Now
                  </Button>
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Spacer */}
      <div className="h-16 md:h-20" />
    </>
  );
};
