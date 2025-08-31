// SEO utilities for Metanoia Spa

import type { SEOData } from '../types';

export const defaultSEO: SEOData = {
  title: 'Metanoia Spa – Masajes y Bienestar en Providencia',
  description: 'Relajación y terapias personalizadas en Providencia. Masajes terapéuticos, tratamientos estéticos y drenaje linfático. Reserva por WhatsApp.',
  keywords: [
    'spa providencia',
    'masajes santiago',
    'drenaje linfático providencia',
    'masaje relajación',
    'masaje descontracturante',
    'spa chile',
    'bienestar santiago',
    // Corporativo
    'masajes corporativos',
    'masajes para empresas',
    'bienestar en la oficina',
    'pausas activas'
  ],
  og: {
    type: 'website',
    image: '/images/og-metanoia-spa.jpg',
    url: 'https://metanoiaspa.cl'
  },
  twitter: {
    card: 'summary_large_image',
    image: '/images/og-metanoia-spa.jpg'
  }
};

export const generatePageTitle = (pageTitle?: string): string => {
  return pageTitle ? `${pageTitle} | ${defaultSEO.title}` : defaultSEO.title;
};

export const generateMetaDescription = (description?: string): string => {
  return description || defaultSEO.description;
};

export const generateKeywords = (additionalKeywords: string[] = []): string => {
  const allKeywords = [...(defaultSEO.keywords || []), ...additionalKeywords];
  return allKeywords.join(', ');
};

export const generateCanonicalUrl = (path: string = ''): string => {
  const baseUrl = 'https://metanoiaspa.cl';
  return path ? `${baseUrl}${path}` : baseUrl;
};

// Generate structured data for Google
export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>): string => {
  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };
  
  return JSON.stringify(breadcrumbList);
};

// SEO-friendly URL slug generator
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens
    .trim();
};
