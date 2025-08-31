# Arquitectura C4 — Landing Page Metanoia Spa y Bienestar

- Versión: 1.0
- Fecha: 2025-08-27
- Referencias: [PRD](./PRD-Metanoia-Spa.md) | [Propuesta Técnica](./Propuesta-Tecnica-Metanoia-Spa.md)
- Metodología: C4 Model (Context, Containers, Components)

---

## Introducción

Este documento describe la arquitectura del sistema de la landing page de Metanoia Spa utilizando el modelo C4 (Context, Containers, Components, Code). El sistema es una aplicación web estática enfocada en conversión, diseñada para maximizar las reservas vía WhatsApp y proporcionar información clara sobre servicios de spa y bienestar.

### Objetivos Arquitectónicos
- **Performance**: Carga rápida (LCP < 2.5s) mediante generación estática
- **Conversión**: Múltiples CTAs optimizados para WhatsApp
- **Mantenibilidad**: Contenido editable vía JSON sin tocar código
- **SEO**: Optimización técnica para búsquedas locales
- **Escalabilidad**: Infraestructura serverless con CDN global

---

## Nivel 1: Contexto del Sistema

### Descripción
El diagrama de contexto muestra cómo el sistema de la landing page interactúa con usuarios externos y sistemas de terceros. El propósito principal es convertir visitantes en clientes mediante reservas por WhatsApp.

### Actores Principales

#### Cliente (Usuario Final)
- **Descripción**: Personas que buscan servicios de spa, masajes y bienestar
- **Necesidades**: Consultar servicios, ver precios, reservar citas, encontrar ubicación
- **Comportamiento**: Navegación móvil-first, decisión rápida, preferencia por WhatsApp
- **Clusters**: Trabajadores estresados, deportistas, postoperatorio, embarazadas, estético

#### Empresa / RR.HH.
- **Descripción**: Líderes de equipo, RR.HH., Office Managers
- **Necesidades**: Llevar bienestar a la oficina con mínima fricción y sin interrumpir la jornada
- **Comportamiento**: Búsqueda orientada a beneficios medibles (estrés, ausentismo, rendimiento); contacto por WhatsApp con datos de cotización

#### Propietario del Spa (Usuario Administrativo)
- **Descripción**: Administrador del negocio que gestiona contenido y precios
- **Necesidades**: Actualizar catálogo, modificar precios, añadir promociones
- **Flujo**: Edita archivos JSON → commit Git → deploy automático

### Sistemas Externos

#### WhatsApp Business
- **Función**: Canal principal de conversión y atención al cliente
- **Integración**: Enlaces directos `wa.link/4k3hvn` con mensaje predefinido
- **Importancia**: Crítica - es el único método de reserva
 - **Extensión corporativa**: mensaje prellenado para solicitudes de empresa (nº de personas, horario, dirección)

#### Instagram (@spa__metanoia)
- **Función**: Marketing visual y prueba social
- **Integración**: Enlaces directos al perfil
- **Contenido**: Fotos de servicios, testimonios, promociones

#### Google Maps
- **Función**: Localización y direcciones
- **Integración**: iframe embebido con dirección exacta
- **Datos**: Av. Providencia 2601, local 14, Santiago

#### Google Analytics 4
- **Función**: Medición de conversión y comportamiento
- **Eventos**: `click_whatsapp`, `click_instagram`, `service_view`, `click_map`
- **KPIs**: CTR a WhatsApp, tiempo en página, bounce rate

#### Vercel/Netlify
- **Función**: Hosting y deployment con CDN global
- **Características**: Deploy automático, preview URLs, optimización de assets

---

## Nivel 2: Contenedores

### Descripción
El sistema se compone de 3 contenedores principales que trabajan en conjunto para generar y servir la landing page estática.

### Web Application (Astro SSG)
- **Tecnología**: Astro con TypeScript
- **Responsabilidad**: Generación estática de HTML optimizado
- **Características**:
  - SSG (Static Site Generation) para máximo performance
  - Islas de hidratación solo donde se necesita JavaScript
  - SEO técnico integrado (meta tags, schema.org)
  - Mobile-first responsive design
  - Sección Empresas (corporativo) servida estáticamente con CTA dedicado

### Data Files (JSON)
- **Ubicación**: `src/data/`
- **Archivos**:
  - `services.json`: Catálogo completo con precios y categorías
  - `faq.json`: Preguntas frecuentes
  - `site.json`: Configuración general (contacto, horarios, redes)
  - `corporate.json` (opcional): Copy, beneficios y datos operativos del servicio corporativo
- **Ventajas**:
  - Edición sin conocimiento técnico
  - Versionado en Git
  - Validación automática en build

### Static Assets
- **Ubicación**: `public/images/`
- **Contenido**: 
  - Imágenes optimizadas (WebP/AVIF)
  - Iconos SVG
  - Favicon y manifest
- **Optimización**:
  - Compresión automática
  - Lazy loading
  - Responsive images

### Flujo de Datos
1. **Build Time**: Astro lee JSON files y genera HTML estático
2. **Runtime**: Cliente recibe assets optimizados vía CDN
3. **Interacción**: JavaScript mínimo para analytics, acordeones y tracking específico del bloque corporativo
4. **Actualización**: Git push → build automático → deploy

---

## Nivel 3: Componentes

### Descripción
La aplicación web se estructura en componentes Astro reutilizables, cada uno con responsabilidades específicas para maximizar conversión y mantenibilidad.

### Componentes de Presentación

#### Hero Component
- **Archivo**: `src/components/Hero.astro`
- **Función**: Primera impresión y CTAs principales
- **Elementos**:
  - Título y subtítulo del spa
  - CTA primario: "Reservar por WhatsApp"
  - CTA secundario: "Ver servicios" (scroll)
  - Badges de confianza: "Profesionales certificados"
- **Analytics**: Track `click_whatsapp` con `source: "hero"`

#### Services Grid & Service Card
- **Archivos**: `ServicesGrid.astro`, `ServiceCard.astro`
- **Función**: Catálogo de servicios con conversión
- **Características**:
  - Filtro por categorías (tabs accesibles)
  - Precio prominente por servicio
  - CTA individual por tarjeta
  - Servicios destacados (`featured: true`)
- **Analytics**: Track `click_whatsapp` con `service_id`

#### About Component
- **Archivo**: `src/components/About.astro`
- **Función**: Construcción de confianza y credibilidad
- **Contenido**: Misión, visión, certificaciones profesionales

#### Corporate Section
- **Archivo**: `src/components/CorporateSection.astro`
- **Función**: Presentar “Masajes Express en tu Empresa” con beneficios, operación y CTA
- **Contenido**: Título, subtítulo, bullets (silla ergonómica, 10–20 min), precio por persona, capacidad ejemplo, CTA WhatsApp (source: corporate)
- **Analytics**: Track `click_whatsapp` con `source: "corporate"`

#### Location & Hours
- **Archivo**: `src/components/LocationHours.astro`
- **Función**: Información práctica para visitas
- **Elementos**:
  - Google Maps iframe
  - Dirección completa
  - Horarios de atención
  - CTA para obtener direcciones
- **Analytics**: Track `click_map`

#### FAQ Component
- **Archivo**: `src/components/FAQ.astro`
- **Función**: Resolver objeciones comunes
- **Implementación**: Acordeón accesible con ARIA
- **Analytics**: Track expansión de preguntas

#### Floating WhatsApp
- **Archivo**: `src/components/FloatingWhatsapp.astro`
- **Función**: CTA persistente en toda la página
- **Características**:
  - Position fixed, z-index alto
  - Siempre visible en móvil
  - Animación sutil para llamar atención
- **Analytics**: Track `click_whatsapp` con `source: "floating"`

### Componentes de Utilidad

#### SEO Library
- **Archivo**: `src/lib/seo.ts`
- **Función**: Meta tags, Open Graph, Twitter Cards
- **Configuración**: Títulos, descripciones, imágenes OG

#### Analytics Library
- **Archivo**: `src/lib/analytics.ts`
- **Función**: Helper para eventos GA4
- **Métodos**: `track(eventName, params)`
- **Implementación**: Verificación de window y gtag disponible

#### Schema.org Generator
- **Archivo**: `src/lib/schemaOrg.ts`
- **Función**: JSON-LD para LocalBusiness
- **Datos**: Dirección, horarios, servicios, contacto
- **SEO**: Mejora resultados en búsquedas locales

#### SEO Library (extensión corporativa)
- **Función**: Añadir `Service` JSON‑LD para el servicio corporativo
- **Datos**: nombre del servicio, precio por persona, área de servicio (oficinas), proveedor

### Flujo de Interacción
1. **Carga inicial**: Hero visible inmediatamente (LCP)
2. **Navegación**: Scroll suave entre secciones
3. **Descubrimiento**: Filtros de servicios, expandir FAQ
4. **Conversión**: Multiple touchpoints a WhatsApp (incl. bloque corporativo)
5. **Analytics**: Cada interacción se trackea para optimización

---

## Decisiones Arquitectónicas

### ¿Por qué Astro sobre Next.js/Nuxt?
- **Performance**: HTML estático por defecto, JS mínimo
- **SEO**: Mejor crawling y indexación
- **Simplicidad**: No necesita server-side rendering
- **Costo**: Hosting estático es más económico

### ¿Por qué JSON sobre CMS?
- **Velocidad**: Sin llamadas API en runtime
- **Control**: Versionado completo en Git
- **Simplicidad**: No hay dependencias externas
- **Costo**: Sin subscripciones adicionales

### ¿Por qué Vercel sobre hosting tradicional?
- **Performance**: CDN global automático
- **DevEx**: Deploy automático por Git
- **Optimización**: Compresión y cache inteligente
- **Escalabilidad**: Sin gestión de servidores

---

## Seguridad y Compliance

### Consideraciones de Seguridad
- **No PII**: No se almacenan datos personales
- **CSP**: Content Security Policy para prevenir XSS
- **HTTPS**: Forzado en toda la aplicación
- **Enlaces externos**: `rel="noopener noreferrer"`

### Compliance
- **GDPR/LOPD**: Solo analytics básico, sin cookies de terceros
- **Accesibilidad**: ARIA labels, contraste AA, navegación por teclado
- **Performance**: Core Web Vitals optimizados

---

## Métricas y Monitoreo

### Métricas de Negocio
- **CTR WhatsApp**: % clics en CTAs vs. visitors
- **Conversion Rate**: % visitors que contactan
- **Source Attribution**: Qué CTAs convierten más

### Métricas Técnicas
- **Core Web Vitals**: LCP, FID, CLS
- **Lighthouse Score**: Performance, Accessibility, SEO
- **Error Rate**: JavaScript y network errors

### Herramientas
- **Google Analytics 4**: Eventos y conversiones
- **Vercel Analytics**: Performance real user monitoring
- **Google Search Console**: SEO y indexación

---

## Evolución y Roadmap

### Versión 1.0 (MVP)
- Landing page estática funcional
- Catálogo completo de servicios
- CTAs WhatsApp optimizados
- SEO técnico básico

### Versión 1.1 (Mejoras)
- A/B testing de CTAs
- Testimonios de clientes
- Galería de imágenes del spa
- Blog básico para SEO

### Versión 2.0 (Avanzado)
- Sistema de reservas integrado
- Calendario de disponibilidad
- Pagos online opcionales
- CRM básico para seguimiento

---

## Conclusión

La arquitectura propuesta equilibra simplicidad, performance y conversión. Utilizando un stack moderno pero estable (Astro + Tailwind + JSON), se logra:

1. **Time to Market**: Desarrollo e implementación rápidos
2. **Mantenibilidad**: Contenido editable sin conocimiento técnico
3. **Performance**: Carga rápida que mejora conversión
4. **Costo-Efectividad**: Infraestructura serverless económica
5. **Escalabilidad**: Base sólida para funcionalidades futuras

El sistema está diseñado para crecer con el negocio, permitiendo añadir funcionalidades avanzadas sin reescribir la base.
