/**
 * Analytics Utility
 */

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      config?: Record<string, any>
    ) => void;
  }
}

export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

export function trackPageView() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: window.location.pathname,
      page_title: document.title,
    });
  }
}

export function trackConversion(conversionId: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      conversion_id: conversionId,
      conversion_value: value,
      conversion_currency: 'INR',
    });
  }
}

export function trackButtonClick(buttonName: string) {
  trackEvent('button_click', {
    button_name: buttonName,
  });
}

export function trackFormSubmission(formName: string) {
  trackEvent('form_submission', {
    form_name: formName,
  });
}

export function trackServiceSelection(serviceName: string) {
  trackEvent('service_selected', {
    service_name: serviceName,
  });
}
