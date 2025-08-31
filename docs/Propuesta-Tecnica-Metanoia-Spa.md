# Propuesta Técnica v1.0 — Landing Page Metanoia Spa y Bienestar

- Versión: 1.0 (MVP)
- Fecha: 2025-08-27
- Referencia: [PRD](./PRD-Metanoia-Spa.md)
- Estado: Borrador técnico

---

## 1) Resumen de la Solución
- Tipo de sitio: Landing page estática (una sola página) con secciones ancladas.
- Meta: máxima velocidad, alta conversión a WhatsApp, SEO local sólido, coste operativo bajo.
- Enfoque técnico: generación estática, UI accesible y mobile‑first, datos de catálogo centralizados y fáciles de editar.

## 2) Stack Tecnológico
- Framework: Astro (SSG/Islas de Interactividad). Motivos: excelente rendimiento por defecto, HTML primero, JS solo donde se necesita.
- Lenguaje: TypeScript.
- Estilos: Tailwind CSS + utilidades personalizadas (tokens de color y espaciado).
- Componentes: Astro Components + React/Preact opcional para interacciones (por ejemplo, acordeones FAQ).
- Analítica: Google Analytics 4 (gtag.js) con eventos personalizados.
- Mapa: Google Maps embed (iframe).
- Formato de datos: JSON para catálogo de servicios y FAQ centralizados.
- Lint/Format: ESLint + Prettier.
- Deploy: Vercel o Netlify (preferencia: Vercel por DX + preview URLs).
  - Alternativa: Railway sirviendo `dist/` como sitio estático mediante servidor HTTP ligero.

## 3) Arquitectura y Estructura de Proyecto
```
/
  docs/
  public/
    images/
      hero/
      services/
  src/
    components/
      Hero.astro
      Benefits.astro
      ServicesGrid.astro
      ServiceCard.astro
      CategoriesNav.astro
      About.astro
      LocationHours.astro
      FAQ.astro
      FloatingWhatsapp.astro
      CorporateSection.astro
      Footer.astro
    data/
      services.json
      faq.json
      site.json
      corporate.json (opcional)
    lib/
      analytics.ts
      seo.ts
      schemaOrg.ts
    pages/
      index.astro
    styles/
      globals.css
  astro.config.mjs
  tailwind.config.js
```

### Páginas y rutas
- `/` única página con anclas: `#servicios`, `#empresas`, `#sobre`, `#ubicacion`, `#faq`, `#contacto`.

### Componentes clave
- `Hero`: título, subtítulo, CTA WhatsApp, CTA “Ver servicios”, badges.
- `Benefits`: lista breve de diferenciales.
- `ServicesGrid` + `ServiceCard`: catálogo por categorías, precio visible y CTA por tarjeta.
- `CategoriesNav`: filtro por categoría (anclas o tabs sin recargar).
- `About`: misión, visión, certificaciones.
- `LocationHours`: dirección, horarios, mapa embed.
- `FAQ`: acordeones accesibles.
- `FloatingWhatsapp`: botón flotante persistente.
- `Footer`: legales, links, redes.

## 4) Datos y Modelado
### Estructuras
- `services.json` (editado por negocio sin tocar código):
```json
{
  "categories": [
    {
      "id": "masajes-terapeuticos",
      "name": "Masajes Terapéuticos",
      "services": [
        {
          "id": "relajacion",
          "name": "Masaje de Relajación",
          "priceCLP": 29990,
          "description": "Terapia suave para liberar tensiones y reducir el estrés.",
          "durationMin": 60,
          "featured": true,
          "order": 1
        }
      ]
    }
  ]
}
```
- `faq.json`:
```json
[
  { "q": "¿Cómo reservo?", "a": "Por WhatsApp en un clic." },
  { "q": "¿Medios de pago?", "a": "Efectivo y débito en local." }
]
```
- `site.json`:
```json
{
  "brand": "Metanoia Spa y Bienestar",
  "instagram": "@spa__metanoia",
  "whatsappUrl": "https://wa.link/4k3hvn",
  "address": "Av. Providencia 2601, local 14, Santiago, Chile",
  "hours": "Lun–Vier 9:00–19:00, Sáb 9:00–17:00"
}
```
 - `corporate.json` (opcional):
```json
{
  "id": "corporate-masajes-express",
  "title": "Masajes Express en tu Empresa",
  "subtitle": "Bienestar en solo 15 minutos",
  "bullets": [
    "Masajes descontracturantes en silla ergonómica",
    "Duración de 10 a 20 minutos por persona",
    "En tu lugar de trabajo, sin interrumpir la jornada",
    "Reduce el estrés, mejora el ánimo y previene dolores"
  ],
  "benefits": [
    "Reduce el estrés y la tensión muscular",
    "Mejora la concentración y el rendimiento",
    "Aumenta la motivación y el bienestar",
    "Disminuye el ausentismo y mejora el clima laboral",
    "Refuerza el compromiso del equipo"
  ],
  "priceCLPPerPerson": 10000,
  "capacityExample": "En 3 horas se puede atender hasta 10 personas",
  "contact": {
    "brand": "Metanoia Spa",
    "phone": "+56 9 3535 0691",
    "email": "reservas.spa@spametanoia.com",
    "instagram": "@spa__metanoia"
  },
  "whatsappMessage": "Hola, quiero cotizar Masajes Express para mi empresa (nº personas, horario, dirección)."
}
```

## 5) SEO Técnico y Metadatos
- Meta y Open Graph desde `lib/seo.ts`.
- Datos estructurados JSON‑LD: `LocalBusiness` + `Service` por categoría.
- Canonical, favicon, manifest básico.
- Sitemap y robots simples (aunque sea one‑page, útil para SEO local).
 - Extensión corporativa: incluir `Service` adicional para “Masajes Express en tu Empresa” y keywords corporativas ("masajes corporativos", "bienestar en la oficina").

Ejemplo `LocalBusiness` (inyectado en `<head>`):
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Metanoia Spa y Bienestar",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Providencia 2601, local 14",
    "addressLocality": "Santiago",
    "addressRegion": "RM",
    "addressCountry": "CL"
  },
  "openingHours": ["Mo-Fr 09:00-19:00", "Sa 09:00-17:00"],
  "image": "https://example.com/images/og.jpg",
  "sameAs": ["https://instagram.com/spa__metanoia"],
  "telephone": "+56"
}
```

Meta base (`lib/seo.ts`):
```ts
export const defaultSEO = {
  title: "Metanoia Spa – Masajes y Bienestar en Providencia",
  description: "Relajación y terapias personalizadas en Providencia. Reserva por WhatsApp.",
  og: {
    type: "website",
    image: "/images/og.jpg"
  },
  twitter: { card: "summary_large_image" }
};
```

## 6) Analítica (GA4)
- Carga de `gtag.js` con `G-XXXXXXXXXX` (variable de entorno).
- Eventos personalizados:
  - `click_whatsapp` (params: `source` = hero|card|floating, `service_id` opcional).
  - `click_instagram`.
  - `click_map`.
  - `service_view` (visible en viewport; debounced).
  - Extensión corporativa: disparar `click_whatsapp` con `source: "corporate"` desde la sección Empresas.

Helper (`lib/analytics.ts`):
```ts
export const track = (name: string, params?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", name, params || {});
  }
};
```
Uso en CTA WhatsApp de `ServiceCard`:
```tsx
<button onClick={() => track("click_whatsapp", { source: "card", service_id: id })}>
  Reservar por WhatsApp
</button>
```

## 7) Performance y Accesibilidad
- Imágenes: `public/images` optimizadas (WebP/AVIF), tamaños responsivos y `loading="lazy"` fuera del LCP.
- Fuentes: sistema (seguras) para evitar sobrecarga; si se usa una webfont, `preconnect` y `swap`.
- JS mínimo: islas sólo donde haya interacción (FAQ/filters), resto estático.
- LCP objetivo < 2.5s en 4G; presupuesto: < 300KB inicial.
- Accesibilidad: roles y atributos ARIA en acordeones; foco visible; contraste AA; labels.
 - Sección Empresas: jerarquía clara, bullets legibles, CTA con foco visible y tamaño táctil adecuado.

## 8) Seguridad y Buenas Prácticas
- Enlaces externos con `rel="noopener noreferrer"`.
- CSP básica (sin romper mapas/GA): default-src 'self'; img-src 'self' data: https:; script-src 'self' https://www.googletagmanager.com 'unsafe-inline'; frame-src https://www.google.com.
- Sin almacenamiento de PII; solo redirección a WhatsApp.

## 9) CI/CD y Entornos
- Repositorio Git con ramas: `main` (prod), `dev` (preview).
- CI: build + lint + pruebas ligeras (Lighthouse CI, opcional Playwright de smoke tests).
- Deploy automático a Vercel con previews por PR.
- Variables de entorno: `GA4_ID`, `SITE_URL`.

## 10) Pruebas y Calidad
- Smoke E2E: presencia de CTA flotante, render de categorías, funcionamiento de anclas.
- Lighthouse mínimo (móvil): Performance ≥ 90, Accessibility ≥ 90, SEO ≥ 90.
- ESLint/Prettier en pre-commit (Husky + lint-staged, opcional).

## 11) Estilos y Theming
- Tailwind con tokens personalizados:
  - Colores: verdes suaves, beige/crema, acentos cobre.
  - Espaciado: base 4px.
  - Tipografía: sistema o Inter/Work Sans (si se decide usar).
- Modo: mobile‑first, breakpoints `sm`, `md`, `lg`.
 - Bloque “Empresas”: fondo suave `cream-*`/`sage-*`, titulares `text-hero`/`text-large`, íconos alineados con el sistema, uso selectivo de `!important` donde Tailwind no sea suficiente.

## 12) Detalles de Implementación por Sección
- Hero: imagen ligera o fondo de color; botón WhatsApp prominente; sub‑CTA “Ver servicios” hace scroll a `#servicios`.
- Servicios destacados: 4–6 `featured=true` del JSON.
- Catálogo: render por categorías; filtro simple por tabs (aria-selected, keyboard nav).
 - Empresas (CorporateSection): bloque con título, subtítulo, beneficios, detalles operativos (duración, silla ergonómica, capacidad), precio por persona y CTA WhatsApp con `source="corporate"`.
- Sobre: misión y visión (del PRD); badges de certificación (texto si no hay logos aún).
- Ubicación/Horarios: iframe de Google Maps con `title` accesible; horarios en lista.
- FAQ: acordeón con `<button aria-expanded>` y contenido colapsable.
- CTA flotante: `position: fixed` inferior derecha; z-index alto.

## 13) Entregables Técnicos
- Código fuente listo para deploy.
- Documentación de edición de `services.json`/`faq.json`.
- Guía rápida de publicación (Vercel) y variables.
- Archivos `robots.txt`, `sitemap.xml`, `manifest.webmanifest` mínimos.
 - Documentación y datos para sección corporativa (`corporate.json` si se usa) y cómo activarla/ocultarla.

## 14) Riesgos Técnicos y Mitigación
- Falta de imágenes reales: placeholders optimizados → reemplazo sin cambios de código.
- Cambios de precios frecuentes: JSON centralizado → edición simple + redeploy automático.
- Dep. de WhatsApp: pruebas en iOS/Android/desktop; enlace `wa.link` validado.

---

## Anexo A — Robots y Sitemap
- `robots.txt`: permitir indexación; bloquear `/api/*` si existiera.
- `sitemap.xml`: generado en build (Astro Sitemap plugin) con una sola URL.

## Anexo B — Ejemplo de `<head>` (parcial)
```html
<link rel="canonical" href="https://metanoiaspa.cl/" />
<meta property="og:title" content="Metanoia Spa – Masajes y Bienestar en Providencia" />
<meta property="og:description" content="Relajación y terapias personalizadas. Reserva por WhatsApp." />
<meta property="og:image" content="/images/og.jpg" />
<meta name="twitter:card" content="summary_large_image" />
```

## Anexo C — Convenciones
- Nombres de archivos: `PascalCase` para componentes, `kebab-case` para assets.
- Acciones de analítica: prefijo `click_` y `view_`.
- IDs de servicios: `kebab-case` únicos por catálogo.
