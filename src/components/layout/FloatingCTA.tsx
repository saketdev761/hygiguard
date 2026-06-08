/**
 * Floating Action Buttons
 */

"use client";

import React, { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";
import { useIsMobile } from "@/hooks";

export const FloatingCTA = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile: Floating Call Button */}
      {isMobile && (
        <a
          href={SITE_CONFIG.phoneLink}
          className="fixed bottom-24 right-4 z-30 p-4 bg-primary hover:bg-primary-light text-white rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
          aria-label="Call us"
          title="Call Now"
        >
          <Phone className="w-6 h-6" />
        </a>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={SITE_CONFIG.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-30 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
        title="Message on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </>
  );
};
