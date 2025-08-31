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

// Minimal Service schema (category optional)
export const generateServiceSchemaBasic = (service: Service): string => {
  const schema = {
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
    'offers': {
      '@type': 'Offer',
      'price': service.priceCLP,
      'priceCurrency': 'CLP',
      'availability': 'https://schema.org/InStock',
      'validFrom': new Date().toISOString()
    },
    'duration': service.durationMin ? `PT${service.durationMin}M` : undefined
  };

  return JSON.stringify(schema, null, 2);
};

// ItemList schema for a category of services
export const generateItemListForCategory = (category: ServiceCategory): string => {
  const list = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `https://metanoiaspa.cl/#itemlist-${category.id}`,
    'name': `Servicios — ${category.name}`,
    'itemListElement': category.services
      .sort((a, b) => a.order - b.order)
      .map((service, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'url': `https://metanoiaspa.cl/#service-${service.id}`,
        'name': service.name
      }))
  };

  return JSON.stringify(list, null, 2);
};

// Generate combined schema for the landing page
export const generateCombinedSchema = (
  siteConfig: SiteConfig,
  services: Service[] = [],
  corporate?: { id: string; title: string; priceCLPPerPerson: number },
  categories: ServiceCategory[] = []
): string => {
  const schemas: any[] = [
    JSON.parse(generateLocalBusinessSchema(siteConfig)),
    JSON.parse(generateOrganizationSchema(siteConfig)),
    JSON.parse(generateWebsiteSchema())
  ];

  // Add individual Service schemas
  services.forEach((svc) => {
    try {
      schemas.push(JSON.parse(generateServiceSchemaBasic(svc)));
    } catch (_) {
      // ignore malformed services
    }
  });

  // Add ItemList per category
  categories.forEach((cat) => {
    try {
      schemas.push(JSON.parse(generateItemListForCategory(cat)));
    } catch (_) {
      // ignore malformed categories
    }
  });

  // Add corporate service schema if provided
  if (corporate) {
    const corpSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `https://metanoiaspa.cl/#service-${corporate.id}`,
      'name': corporate.title,
      'description': 'Masajes express en oficina para equipos: 10–20 minutos por persona en silla ergonómica.',
      'serviceType': 'Corporativo',
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'Metanoia Spa y Bienestar',
        '@id': 'https://metanoiaspa.cl/#business'
      },
      'areaServed': 'Oficinas en Santiago (in-office)',
      'offers': {
        '@type': 'Offer',
        'price': corporate.priceCLPPerPerson,
        'priceCurrency': 'CLP',
        'availability': 'https://schema.org/InStock',
        'category': 'Corporate'
      }
    };
    schemas.push(corpSchema);
  }

  return JSON.stringify(schemas, null, 2);
};
