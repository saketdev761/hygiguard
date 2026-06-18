/**
 * Footer Component
 */

import React from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  // Twitter,
  // Linkedin,
  // Youtube,
  MessageCircle,
} from 'lucide-react';
import { SITE_CONFIG, SERVICES } from '@/constants/site';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">HygiGuard Solutions</h3>
            <p className="text-gray-300 mb-4">
              Professional Cleaning. Trusted Results.
            </p>
            <p className="text-sm text-gray-400">
              Providing premium cleaning services across Lucknow with certified
              professionals and eco-friendly solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-secondary transition-colors text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-secondary transition-colors text-white"
                >
                  Services
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/gallery"
                  className="hover:text-secondary transition-colors text-white"
                >
                  Gallery
                </Link>
              </li> */}
              <li>
                <Link
                  href="/about"
                  className="hover:text-secondary transition-colors text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-secondary transition-colors text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-secondary transition-colors text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <a
                  href={SITE_CONFIG.phoneLink}
                  className="hover:text-secondary transition-colors text-white"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <a
                  href={SITE_CONFIG.emailLink}
                  className="hover:text-secondary transition-colors text-white"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span>{SITE_CONFIG.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 pb-8">
          <div className="flex justify-center gap-4 mb-6">
            <a
              href={SITE_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-secondary rounded-full transition-colors text-white"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-secondary rounded-full transition-colors text-white"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            {/* <a
              href={SITE_CONFIG.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-secondary rounded-full transition-colors text-white"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={SITE_CONFIG.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-secondary rounded-full transition-colors text-white"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href={SITE_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-secondary rounded-full transition-colors text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} HygiGuard Solutions. All rights reserved. |
            Built with ❤️ for professional cleaning.
          </p>
          {/* <p className="mt-2">
            <Link href="#" className="hover:text-secondary transition-colors">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link href="#" className="hover:text-secondary transition-colors">
              Terms of Service
            </Link>
          </p> */}
        </div>
      </div>
    </footer>
  );
};
