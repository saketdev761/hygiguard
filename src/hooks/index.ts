/**
 * Custom hook for mobile detection
 */

"use client";

import { useEffect, useState } from "react";

export function useIsMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [breakpoint]);

  return isLoaded ? isMobile : false;
}

/**
 * Custom hook for scroll position
 */

export function useScrollPosition(): number {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}

/**
 * Custom hook for intersection observer
 */

export function useInView(ref: React.RefObject<HTMLElement>): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isInView;
}
