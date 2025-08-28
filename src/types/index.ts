// Core data types for Metanoia Spa

export interface Service {
  id: string;
  name: string;
  priceCLP: number;
  description: string;
  durationMin?: number;
  featured?: boolean;
  order: number;
}

export interface ServiceCategory {
  id: string;
  name: string;
  services: Service[];
}

export interface ServicesData {
  categories: ServiceCategory[];
}

export interface FAQ {
  q: string;
  a: string;
}

export interface SiteConfig {
  brand: string;
  instagram: string;
  whatsappUrl: string;
  address: string;
  hours: string;
  phone?: string;
  email?: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  og?: {
    type: string;
    image: string;
    url?: string;
  };
  twitter?: {
    card: string;
    image?: string;
  };
}

export interface AnalyticsEvent {
  name: string;
  parameters?: Record<string, string | number | boolean>;
}

// Component prop types
export interface WhatsAppCTAProps {
  source: 'hero' | 'card' | 'floating' | 'location';
  serviceId?: string;
  message?: string;
  className?: string;
}

export interface ServiceCardProps {
  service: Service;
  category?: string;
}

export interface HeroProps {
  className?: string;
}

export interface SectionProps {
  title?: string;
  description?: string;
  className?: string;
  id?: string;
}
