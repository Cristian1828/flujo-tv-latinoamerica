# SEO de Indexación Real — Checklist PRD (Latinoamérica)

## 1) Google Search Console (obligatorio)
- Añadir propiedad de dominio: `premium.flujooficial.com`
- Verificar propiedad (DNS TXT recomendado)
- Enviar sitemap: `https://premium.flujooficial.com/sitemap.xml`
- Usar "Inspección de URL" para solicitar indexación de:
  - `/`
  - `/terminos`
  - `/privacidad`

## 2) Rendimiento técnico (Core Web Vitals)
- Comprimir imágenes hero a < 120KB cuando sea posible
- Verificar LCP en móvil con PageSpeed Insights
- Revisar CLS (evitar cambios de layout al cargar fuentes/imagenes)
- Mantener JS del cliente mínimo

## 3) SEO on-page ya implementado
- Title + description orientados a intención de búsqueda
- Canonical + hreflang `es-419`
- Open Graph + Twitter cards
- Schema `Service`, `AggregateOffer`, `FAQPage`
- robots.txt y sitemap vigentes

## 4) Tracking de conversiones (ya listo en código)
- Configurar `.env` desde `.env.example`
- Definir `PUBLIC_GA_MEASUREMENT_ID`
- Definir `PUBLIC_META_PIXEL_ID`
- Confirmar eventos CTA en tiempo real:
  - Hero
  - Planes
  - Footer
  - Botón flotante móvil

## 5) Acciones externas para subir posiciones más rápido
- Conseguir enlaces desde medios/blogs LATAM relevantes
- Crear menciones de marca en perfiles sociales y directorios de negocios
- Publicar 2-4 piezas de contenido semanal (intención transaccional + informacional)
- Monitorear CTR y consultas en Search Console y ajustar titles cada 7-14 días

## 6) Criterio realista de resultados
- Indexación inicial: 24h a 14 días
- Mejora de posiciones: 4 a 12 semanas (depende de autoridad + backlinks + CTR)
- “Primeros lugares” no es inmediato ni garantizable sin estrategia continua de contenido y enlaces
