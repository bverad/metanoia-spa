// Schema.org structured data generators for Metanoia Spa

import type { Service, ServiceCategory, SiteConfig } from '../types';

export const generateLocalBusinessSchema = (siteConfig: SiteConfig): string => {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://metanoiaspa.cl/#business',
    'name': siteConfig.brand,
    'description': 'Spa y centro de bienestar especializado en masajes terapéuticos, tratamientos estéticos y drenaje linfático en Providencia, Santiago.',
    'url': 'https://metanoiaspa.cl',
    'telephone': siteConfig.phone,
    'email': siteConfig.email,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Av. Providencia 2601, local 14',
      'addressLocality': 'Providencia',
      'addressRegion': 'Región Metropolitana',
      'postalCode': '7500000',
      'addressCountry': 'CL'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': -33.4234,
      'longitude': -70.6052
    },
    'openingHours': [
      'Mo-Fr 09:00-19:00',
      'Sa 09:00-17:00'
    ],
    'priceRange': '$-$$',
    'currenciesAccepted': 'CLP',
    'paymentAccepted': 'Cash, Debit Card, Bank Transfer',
    'image': [
      'https://metanoiaspa.cl/images/spa-exterior.jpg',
      'https://metanoiaspa.cl/images/spa-interior.jpg',
      'https://metanoiaspa.cl/images/treatment-room.jpg'
    ],
    'sameAs': [
      `https://instagram.com/${siteConfig.instagram.replace('@', '')}`
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Servicios de Spa y Bienestar',
      'itemListElement': []
    }
  };

  return JSON.stringify(localBusiness, null, 2);
};

export const generateServiceSchema = (service: Service, category: ServiceCategory): string => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://metanoiaspa.cl/#service-${service.id}`,
    'name': service.name,
    'description': service.description,
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Metanoia Spa y Bienestar',
      '@id': 'https://metanoiaspa.cl/#business'
    },
    'serviceType': category.name,
    'offers': {
      '@type': 'Offer',
      'price': service.priceCLP,
      'priceCurrency': 'CLP',
      'availability': 'https://schema.org/InStock',
      'validFrom': new Date().toISOString(),
      'category': category.name
    },
    'duration': service.durationMin ? `PT${service.durationMin}M` : undefined
  };

  return JSON.stringify(serviceSchema, null, 2);
};

export const generateOrganizationSchema = (siteConfig: SiteConfig): string => {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://metanoiaspa.cl/#organization',
    'name': siteConfig.brand,
    'url': 'https://metanoiaspa.cl',
    'logo': 'https://metanoiaspa.cl/images/logo.png',
    'description': 'Centro de spa y bienestar especializado en terapias de relajación y cuidado integral.',
    'foundingDate': '2024',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Av. Providencia 2601, local 14',
      'addressLocality': 'Providencia',
      'addressRegion': 'Región Metropolitana',
      'addressCountry': 'CL'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': siteConfig.phone,
      'contactType': 'Customer Service',
      'availableLanguage': 'Spanish'
    },
    'sameAs': [
      `https://instagram.com/${siteConfig.instagram.replace('@', '')}`
    ]
  };

  return JSON.stringify(organization, null, 2);
};

export const generateWebsiteSchema = (): string => {
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://metanoiaspa.cl/#website',
    'url': 'https://metanoiaspa.cl',
    'name': 'Metanoia Spa y Bienestar',
    'description': 'Landing page oficial de Metanoia Spa - Reserva masajes y tratamientos de bienestar en Providencia',
    'publisher': {
      '@id': 'https://metanoiaspa.cl/#organization'
    },
    'potentialAction': {
      '@type': 'SearchAction',
      'target': 'https://metanoiaspa.cl/?s={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return JSON.stringify(website, null, 2);
};

// Generate combined schema for the landing page  
export const generateCombinedSchema = (siteConfig: SiteConfig, _services: Service[]): string => {
  const schemas = [
    JSON.parse(generateLocalBusinessSchema(siteConfig)),
    JSON.parse(generateOrganizationSchema(siteConfig)),
    JSON.parse(generateWebsiteSchema())
  ];

  return JSON.stringify(schemas, null, 2);
};
