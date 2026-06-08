/**
 * Performance Monitoring Utilities
 */

export function reportWebVitals(metric: {
  name: string;
  value: number;
  rating?: 'good' | 'needs-improvement' | 'poor';
}) {
  // Send to analytics service
  if (typeof window !== 'undefined') {
    // Example: Send to Google Analytics
    if (window.gtag) {
      window.gtag('event', 'web_vitals', {
        metric_name: metric.name,
        metric_value: metric.value,
        metric_rating: metric.rating,
      });
    }
  }
}

/**
 * Performance hint for critical images
 */
export const criticalImagePriority = 'high' as const;

/**
 * Preload important resources
 */
export function preloadFont(href: string) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'font';
  link.href = href;
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
}

/**
 * Prefetch routes for faster navigation
 */
export function prefetchRoute(href: string) {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
}
