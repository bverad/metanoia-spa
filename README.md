# Metanoia Spa y Bienestar – Landing Page

Landing page estática enfocada en performance y conversión, construida con Astro 4, TypeScript y Tailwind CSS.

## 📦 Stack
- Astro 4 (SSG)
- TypeScript (strict)
- Tailwind CSS 3
- npm scripts

## 📁 Estructura
```
src/
  components/     # Componentes .astro
  data/           # JSON de contenido (servicios, site, FAQ)
  lib/            # Utilidades (seo, analytics, schema)
  pages/          # Páginas (index.astro)
  styles/         # Tailwind + estilos globales
public/            # Estáticos (favicon, manifest, imágenes)
```

## ✅ Requisitos
- Node.js ≥ 18 LTS
- npm ≥ 9

## 🚀 Comandos
```bash
# Instalar dependencias
npm ci

# Desarrollo
npm run dev

# Build (SSG, salida en dist/)
npm run build

# Previsualizar el build estático
npm run preview
```

## 🔧 Variables de entorno
Crea un archivo `.env` (no se versiona) y define según necesidad:
```
# Opcional – Google Analytics 4
PUBLIC_GA4_ID=G-XXXXXXXXXX

# Opcional – URL del sitio (canónicos, SEO)
SITE_URL=https://metanoiaspa.cl
```

## 🧩 Contenido editable
- `src/data/services.json`: catálogo de servicios
- `src/data/site.json`: marca, dirección, horarios, redes
- `src/data/faq.json`: preguntas frecuentes
 - `src/data/corporate.json` (opcional): contenido de “Masajes Express en tu Empresa”

## 🛡️ Calidad y estilo
- TypeScript strict
- Nombres semánticos y consistentes
- Commits Convencionales: `feat|fix|docs|style|refactor|chore`

## 📈 Performance y A11y
- Imágenes optimizadas (preferir WebP/AVIF en `public/`)
- HTML semántico, contraste adecuado, navegación por teclado
- SEO: título, descripción, canónicos, JSON-LD (ver `lib/schemaOrg.ts`)

## ☁️ Despliegue (Railway – Static Site)
1. Subir el repo a GitHub/GitLab.
2. Railway → New → Static Site → conectar repo.
3. Configurar:
   - Install Command: `npm ci`
   - Build Command: `npm run build`
   - Publish Directory: `dist`
4. (Opcional) Variables: `PUBLIC_GA4_ID`, `SITE_URL`.
5. Añadir dominio desde la sección Domains.

> Alternativa: Vercel (framework Astro detectado automáticamente). Output: `dist`.

## 🧱 Sección Empresas — Masajes Express en tu Empresa
- Bloque destacado en la landing con:
  - Título: “Masajes Express en tu Empresa”
  - Subtítulo: “Bienestar en solo 15 minutos”
  - Bullets: silla ergonómica; 10–20 minutos por persona; en tu oficina; beneficios claros
  - Precio de referencia: $10.000 por persona; capacidad de ejemplo: hasta 10 personas en 3 horas
  - CTA WhatsApp con `source: corporate` y mensaje prellenado para cotización

Edición de contenido:
- Opción A: editar directamente el componente si es copy fijo
- Opción B: usar `src/data/corporate.json` para separar contenido y permitir ajustes sin tocar código

## 🔐 Licencia
Este proyecto es de uso interno del cliente. Si necesitas una Licencia OSS, ajusta esta sección.

## 📫 Soporte
- Issues en el repositorio
- Escalaciones: actualizar contenido JSON, estilos en `src/styles/globals.css` o componentes en `src/components/`.
