// Google Analytics 4 utilities for Metanoia Spa

export interface AnalyticsEventParams {
  source?: string;
  service_id?: string;
  category?: string;
  [key: string]: string | number | boolean | undefined;
}

// Track custom events
export const track = (eventName: string, params: AnalyticsEventParams = {}): void => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, {
      custom_parameter: true,
      ...params
    });
  }
};

// Specific tracking functions for common events
export const trackWhatsAppClick = (source: string, serviceId?: string): void => {
  track('click_whatsapp', {
    source,
    service_id: serviceId || 'none'
  });
};

export const trackInstagramClick = (): void => {
  track('click_instagram', {
    source: 'social_link'
  });
};

export const trackMapClick = (): void => {
  track('click_map', {
    source: 'location_section'
  });
};

export const trackServiceView = (serviceId: string, category: string): void => {
  track('service_view', {
    service_id: serviceId,
    category
  });
};

export const trackFAQExpand = (questionIndex: number): void => {
  track('faq_expand', {
    question_index: questionIndex
  });
};

export const trackScrollDepth = (percentage: number): void => {
  track('scroll', {
    percent_scrolled: percentage
  });
};

// Initialize GA4 with consent
export const initAnalytics = (gaId: string): void => {
  if (typeof window !== 'undefined') {
    // Load gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    // Initialize gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).gtag = function() {
      (window as any).dataLayer.push(arguments);
    };

    (window as any).gtag('js', new Date());
    (window as any).gtag('config', gaId, {
      page_title: 'Metanoia Spa - Masajes y Bienestar',
      page_location: window.location.href,
      content_group1: 'Landing Page'
    });
  }
};
