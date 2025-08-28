# PRD v1.0 — Landing Page Metanoia Spa y Bienestar

- Versión: 1.0 (MVP)
- Fecha: 2025-08-27
- Owner: Metanoia Spa (contigo como contacto principal)
- Estado: Borrador

---

## Visión
Ser el spa urbano de referencia en Providencia que transforma el bienestar cotidiano de las personas, ayudándolas a reconectar con su equilibrio físico y emocional a través de terapias profesionales y una experiencia cálida, cercana y consistente.

## Misión
Brindar terapias personalizadas de masaje, estética y cuidado integral, realizadas por profesionales certificados, en un ambiente acogedor y accesible. Nuestro propósito es aliviar el estrés, mejorar la salud y potenciar el bienestar de cada persona que nos visita.

---

## 1) Contexto y Objetivo
- Objetivo de negocio: captar reservas vía WhatsApp, aumentar visibilidad local y posicionar la marca en el segmento de bienestar de Providencia y comunas aledañas.
- Objetivo de usuario: descubrir servicios con sus precios, entender beneficios y reservar de manera simple e inmediata.

## 2) Alcance (MVP)
Landing de una sola página con secciones: Hero, Beneficios, Servicios destacados, Catálogo por categorías, Sobre Metanoia, Ubicación/Mapa + Horarios, CTA WhatsApp persistente, Instagram, FAQ y Footer. Incluye SEO on-page básico y analíticas (GA4).

Fuera de alcance MVP: sistema de reservas interno, pagos online, blog, multilenguaje.

## 3) Análisis de Público Objetivo — Cluster Persona
Metodología: agrupación de segmentos basada en necesidades, motivaciones y comportamientos comunes (cluster persona). Cada cluster incluye drivers, objeciones, disparadores y mensajes clave.

### Resumen de clusters
| Cluster | Descripción | Necesidades clave | Objeciones/Temores | Disparadores | Mensajes/Propuesta de valor |
|---|---|---|---|---|---|
| Trabajador/a estresado/a | Profesionales 25–45 de oficinas cercanas en Providencia | Relajación inmediata, horarios compatibles, precio claro | Tiempo limitado, dudas de calidad | Semana laboral tensa, dolor de cuello/espalda | “Desconecta en 60 minutos. Profesionales certificados. Reserva en 1 clic.” |
| Deportista/activo | Personas 20–45 que entrenan regularmente | Masaje deportivo, recuperación, prevención de lesiones | Temor a perder rendimiento, dolor post-sesión | Competencias, ciclos de entrenamiento | “Recupérate más rápido. Tratamiento deportivo focalizado.” |
| Postoperatorio (DLM) | Pacientes en recuperación | Drenaje linfático seguro y especializado | Miedo a complicaciones, dolor | Indicaciones médicas post cirugía | “DLM postoperatorio con manejo profesional, alivio y reducción de inflamación.” |
| Embarazada | Gestantes 20–40 | Masaje seguro, alivio de dolor lumbar y circulación | Seguridad del bebé, posición cómoda | Trimestre 2–3, molestias típicas | “Cuidado delicado y seguro, confort adaptado a cada etapa.” |
| Estético/imagen | Personas 20–50 enfocadas en estética | Reductivo, reafirmante, anticelulítico, glúteos | Escepticismo sobre resultados | Eventos sociales, verano | “Protocolos firmes + guía de hábitos, resultados visibles.” |
| Dolor crónico localizado | Adultos 25–60 con cervicalgia/lumbalgia | Tratamiento focalizado y alivio funcional | Temor a recidivas, costo | Brotes de dolor por postura/estrés | “Evaluación breve + técnica específica para tu zona de dolor.” |
| Turista/visitante | Visitantes en Santiago | Acceso rápido, ubicación y horario | Desconocimiento del sector | Estancias cortas | “Spa céntrico en Providencia, agenda inmediata por WhatsApp.” |

### Implicancias para la landing
- CTA WhatsApp visible en todo momento (flotante + en tarjetas de servicio).
- Copies por cluster en bloques relevantes (por ejemplo, destacar DLM en catálogo y secciones informativas).
- Prueba social/testimonios (si disponibles) para clusters con objeciones de eficacia o seguridad.
- Horarios y ubicación prominentes para trabajadores y turistas.

## 4) Arquitectura de Información / Sitemap
- Home (/)
  - Hero (título, subtítulo, CTA “Reservar por WhatsApp”, CTA secundario “Ver servicios”, badges de confianza)
  - Beneficios (relajación, personalización, ambiente acogedor, profesionales certificados)
  - Servicios destacados (4–6 con precio y CTA)
  - Catálogo por categorías (todas las categorías con items: nombre, breve descripción, precio, CTA)
  - Sobre Metanoia (misión, visión, certificaciones)
  - Ubicación y horarios (mapa Google embebido + horarios)
  - FAQ (3–5 preguntas)
  - Redes sociales (Instagram) y botón de WhatsApp flotante
  - Footer (legales, links, políticas)

## 5) Contenido (Inventario)
- Marca: “Metanoia Spa y Bienestar” (tono cercano y profesional)
- Beneficios: relajación, equilibrio, cuidado integral, personalización, certificaciones
- Contacto y redes:
  - Instagram: @spa__metanoia
  - WhatsApp: https://wa.link/4k3hvn
  - Ubicación: Av. Providencia 2601, local 14, Santiago, Chile
  - Horarios: Lun–Vier 9:00–19:00, Sáb 9:00–17:00

### Catálogo de Servicios (con precios)

#### Masajes Terapéuticos
- Masaje de Relajación — $29.990
  - Terapia suave y envolvente que ayuda a liberar tensiones y reducir el estrés.
- Masaje Descontracturante — $34.990
  - Alivia contracturas y rigidez muscular en zonas de mayor tensión.
- Tratamiento Cervical — $34.990
  - Especializado en cuello y hombros; mejora dolor, rigidez y movilidad.
- Tratamiento Lumbar — $34.990
  - Localizado en zona baja de la espalda; ideal por malas posturas o esfuerzo físico.
- Tratamiento Deportivo — $27.990
  - Alta intensidad para preparar músculos, prevenir lesiones o recuperar post ejercicio.
- Masaje para Embarazadas — $34.990
  - Seguro y cuidadoso; alivia dolores, mejora la circulación y retención de líquidos.
- Masaje Craneal — $9.990
  - Relajante en cabeza y cuero cabelludo; ideal contra estrés, insomnio y cefaleas.
- Reflexología Podal — $14.990
  - Puntos específicos en los pies que estimulan órganos y bienestar integral.

#### Tratamientos Estéticos y Corporales
- Tratamiento Reductivo — $34.990
  - Técnicas firmes para moldear la figura y reducir medidas.
- Tratamiento Reafirmante — $34.990
  - Mejora firmeza y elasticidad de la piel.
- Masaje de Levantamiento de Glúteos — $21.990
  - Reafirma, tonifica y realza la zona de glúteos.
- Masaje Anticelulítico — $34.990
  - Mejora la circulación y reduce la apariencia de celulitis.
- Exfoliación + Hidratación Corporal — $24.990
  - Elimina células muertas y nutre la piel para un acabado suave y radiante.

#### Cuidado Facial y Spa
- Limpieza Facial Profunda — $24.990
  - Elimina impurezas y revitaliza la piel, dejándola fresca y luminosa.
- Spa de Pies (Exfoliación + Reflexología) — $24.990
  - Tratamiento completo para pies cansados: limpieza profunda + masaje relajante.

#### Drenaje Linfático (D.L.M.)
- D.L.M. (Drenaje Linfático Manual) — $29.990
  - Estimula el sistema linfático, favoreciendo eliminación de líquidos y toxinas.
- D.L.M. Postoperatorio — $34.990
  - Especializado para recuperación post cirugía; reduce inflamación y acelera regeneración.

### Modelo de contenido sugerido (para implementación)
- Servicio: `id`, `nombre`, `categoria`, `precioCLP`, `descripcion`, `duracionMin` (opcional), `destacado` (bool), `orden`.

## 6) Requisitos Funcionales
- Catálogo por categorías con precios visibles.
- CTA a WhatsApp en Hero, tarjetas de servicio y botón flotante fijo.
- Enlace a Instagram.
- Mapa embebido (Google) y bloque de horarios.
- FAQ desplegable.
- Diseño mobile-first.

## 7) Requisitos No Funcionales
- Performance: LCP < 2.5s en 4G, peso inicial < 300KB.
- Accesibilidad: contraste AA, alt en imágenes, navegación por teclado.
- SEO técnico: meta tags, OG/Twitter Cards, JSON-LD `LocalBusiness`.
- Seguridad: HTTPS, sin almacenamiento de PII.

## 8) SEO (Local)
- Keywords: “spa providencia”, “masajes santiago”, “drenaje linfático providencia”, “masaje relajación”.
- Meta título: “Metanoia Spa – Masajes y Bienestar en Providencia”.
- Meta descripción: 150–160 caracteres con CTA a reservar.
- Datos estructurados: `LocalBusiness` con dirección, horarios, URL y WhatsApp.

## 9) Analíticas y Métricas
- GA4: `page_view`, `click_whatsapp`, `click_instagram`, `click_mapa`, `scroll_depth`.
- KPI: CTR a WhatsApp, tasa de conversión a contacto, tiempo en página, ranking SEO local.

## 10) Diseño / UI
- Estilo: cálido, relajante, confiable. Paleta: verdes suaves, beige/crema, acentos cobre.
- Tipografía: Sans legible (p. ej., Inter, Work Sans).
- Imaginería: texturas naturales, luz cálida. Evitar stock genérico evidente.
- Componentes: tarjetas de servicio, acordeones FAQ, CTA flotante.

## 11) Tecnología (sugerido)
- Framework: Next.js o Astro (generación estática), Tailwind CSS.
- Deploy: Vercel o Netlify.
- Integraciones: GA4, Google Maps embed, enlace WhatsApp.

## 12) Roadmap y Entregables
- Semana 1: Wireframes low‑fi + copy final.
- Semana 2: UI high‑fi + desarrollo estático + SEO on-page.
- Semana 3: QA, performance y accesibilidad, publicación.

## 13) Criterios de Aceptación (MVP)
- Catálogo muestra todas las categorías y precios.
- Botón WhatsApp siempre visible y funcional en móvil y desktop.
- Mapa, horarios e Instagram visibles y clicables.
- Carga móvil aceptable y sin errores de consola.
- SEO básico: título, descripción, OG y JSON‑LD `LocalBusiness` presentes.
- GA4 registra clics de WhatsApp e Instagram.

## 14) Riesgos y Mitigaciones
- Falta de imágenes reales: usar placeholders de alta calidad → reemplazar post‑lanzamiento.
- Cambios de precios: catálogo centralizado → actualización rápida.
- Dependencia de WhatsApp: pruebas en iOS/Android/desktop, validación de enlace corto.

## 15) Preguntas Abiertas
- ¿Hay imágenes propias del spa (espacios, profesionales)?
- ¿Duración estándar por servicio (30/45/60 min) o solo precio?
- ¿Servicios “destacados” para priorizar en la homepage?
- ¿Promociones/paquetes iniciales?
- ¿Teléfono alternativo además de `wa.link`?

---

## Anexo: Estructura de navegación propuesta
- Hero → Beneficios → Destacados → Catálogo → Sobre → Ubicación/Horarios → FAQ → Redes/Footer.

## Anexo: Copys base sugeridos
- Hero título: “Metanoia Spa & Bienestar”.
- Hero subtítulo: “Un espacio para la relajación, el equilibrio y el cuidado integral del cuerpo y la mente.”
- CTA principal: “Reservar por WhatsApp”.
- Badges: “Profesionales certificados”, “En Providencia”.
