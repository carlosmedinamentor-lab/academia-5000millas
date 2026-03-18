# Auditoría del Ecosistema Web — 5.000 Millas

**Fecha:** 2026-03-18
**Alcance:** Repositorios, dominios y subdominios relacionados con 5000millas.com

---

## 1. Mapa del Ecosistema Actual

### 1.1 Repositorio Local: `academia-5000millas`

```
academia-5000millas/
├── index.html          ← Landing / Home
├── catalogo.html       ← Catálogo de cursos con filtros
├── curso.html          ← Página dinámica de curso (?id=)
├── desafios.html       ← Página de desafíos
├── css/
│   └── academia.css    ← 1.255 líneas — sistema de diseño completo
├── js/
│   ├── cursos-data.js  ← Base de datos de 3 cursos + 2 desafíos (351 líneas)
│   └── componentes.js  ← Componentes reutilizables + lógica (563 líneas)
├── vercel.json         ← Configuración de despliegue Vercel
├── package.json        ← v2.0.0, sin dependencias externas
└── README.md
```

**Tech Stack:** HTML/CSS/JS vanilla (zero frameworks), Vercel hosting
**Diseño:** Obsidiana (#0A0A0A) + Oro (#D4A574), tipografía Playfair Display / Outfit / JetBrains Mono
**Integraciones:** YouTube (embeds + thumbnails), GoHighLevel webhook (CRM/lead capture)

**Ramas en GitHub:**
- `main` (producción)
- `claude/init-academia-project-c7Wc3` (desarrollo actual)
- PRs #1–#4 existentes

### 1.2 Otros Repositorios en GitHub

> **No se pudo auditar.** El CLI `gh` no tiene autenticación en este entorno. Solo hay acceso git al repo actual (`carlosmedinamentor-lab/academia-5000millas`). Para una auditoría completa de otros repos, se necesita `gh auth login` o configurar `GH_TOKEN`.

### 1.3 Presencia Web del Autor

| Plataforma | URL | Estado |
|---|---|---|
| Web personal | [carlosmedina.io](https://www.carlosmedina.io/) | Activa — correo semanal, propósito + disciplina + IA |
| Twitter/X | [@cmedinamentor](https://x.com/cmedinamentor) | Activa |
| Amazon (libro 1) | [El Método del Diamante](https://www.amazon.es/M%C3%A9todo-del-Diamante-dimensiones-heptadimensional/dp/B0FGWC9S1X) | Publicado — 7 dimensiones de salud heptadimensional |
| Amazon (libro 2) | [El Método Simba](https://www.amazon.es/El-M%C3%A9todo-Simba-Despierta-Interior/dp/B0FH67D67S) | Publicado — Despierta tu León Interior en 21 Días |

---

## 2. Auditoría de URLs Solicitadas

| URL | Status | Resultado |
|---|---|---|
| `https://5000millas.com` | **403 Forbidden** | Bloqueado a fetching automatizado. No indexado en Google. |
| `https://editorial.5000millas.com` | **403 Forbidden** | Bloqueado. Sin resultados en búsquedas web. |
| `https://blog.5000millas.com` | **403 Forbidden** | Bloqueado. Sin resultados en búsquedas web. |
| `https://5000millas.com/academia` | **403 Forbidden** | Bloqueado. No se puede determinar si existe la ruta. |
| `https://5000millas.com/campus` | **403 Forbidden** | Bloqueado. No se puede determinar si existe la ruta. |
| `https://5000millas.com/cursos` | **403 Forbidden** | Bloqueado. No se puede determinar si existe la ruta. |
| `https://5000millas.com/courses` | **403 Forbidden** | Bloqueado. No se puede determinar si existe la ruta. |

### Observaciones Clave

- **Ningún dominio/subdominio está indexado** en Google (`site:5000millas.com` = 0 resultados).
- Los servidores responden con **403 Forbidden** a requests automatizados, lo que indica:
  - Protección anti-bot activa (Cloudflare, Vercel Edge, o similar)
  - O bien configuración restrictiva de headers/WAF
- **"5000millas" no aparece vinculado públicamente** a Carlos Medina en ningún buscador — el ecosistema tiene visibilidad SEO nula.

> **Recomendación urgente:** Verificar manualmente cada URL desde un navegador y reportar qué muestra cada una (o si da 404). La protección anti-bot impide la auditoría remota.

---

## 3. Análisis Detallado del Repositorio `academia-5000millas`

### 3.1 Contenido Educativo Existente (3 cursos)

| # | Curso | ID | Categoría | Duración | Lecciones | YouTube |
|---|---|---|---|---|---|---|
| 1 | Un Encuentro Conmigo Mismo: Desafío de 28 Días | `desafio-28-dias-curso` | 💎 Diamante | 28 días | 28 | Playlist `PLWxXlZghiePzTuw9oJseZVg8bgp4-o7Ll` |
| 2 | Despierta o Morirás Dos Veces: Desafío de 7 Días | `despierta-7-dias` | ⛵ Barco | 7 días | 8 | Playlist `PLWxXlZghiePx6gJI_hN6Upoz83u-Dy4n5` |
| 3 | Workshop 5.000 Millas | `workshop-5000-millas` | 🦁 León | 1 sesión | 1 | Video `WtVrY9SKB84` |

**Total: 37 lecciones con video en YouTube.**

### 3.2 Categorías BDL (Barco-Diamante-León)

| Fase | Emoji | Nombre | Color | Subtítulo |
|---|---|---|---|---|
| Barco ⛵ | ⛵ | El Barco | #4A90D9 | Autoconocimiento |
| Diamante 💎 | 💎 | El Diamante | #D4A574 | Transformación |
| León 🦁 | 🦁 | El León | #C0392B | Liderazgo y Soberanía |

### 3.3 Funcionalidades Implementadas

| Feature | Estado | Detalles |
|---|---|---|
| Landing page con hero | ✅ Completo | Categorías, cursos destacados, desafíos |
| Catálogo con filtros | ✅ Completo | 6 filtros: Todo, Barco, Diamante, León, Gratis, Premium |
| Página de curso dinámica | ✅ Completo | Video, módulos accordion, sidebar sticky, breadcrumb |
| Página de desafíos | ✅ Completo | Cards con semanas/días, videos gated |
| Sistema de registro (gate) | ✅ Completo | Modal con nombre, email, WhatsApp → GoHighLevel webhook |
| Persistencia de sesión | ✅ Completo | localStorage con `academia_user = { firstName, email, registeredAt }` |
| Topbar de usuario | ✅ Completo | "Hola, [nombre] · ⛵+💎=🦁" o CTA de registro |
| Video gating | ✅ Completo | Videos bloqueados hasta registro; unlock sin recarga |
| SEO (meta + JSON-LD) | ✅ Completo | Schema.org Course, meta tags dinámicos |
| Responsive design | ✅ Completo | 3 breakpoints: 1024px, 768px, 480px |
| Seguridad headers | ✅ Completo | X-Content-Type, X-Frame-Options, XSS-Protection, Referrer-Policy |
| Cache optimization | ✅ Completo | CSS/JS: 1 año immutable |
| Sistema de login real | ❌ No existe | Solo registro por webhook, sin auth backend |
| Integración de pagos | ❌ No existe | No hay checkout, Stripe, ni pasarela |
| Dashboard de usuario | ❌ No existe | No hay progreso de cursos, historial, etc. |
| Backend / API | ❌ No existe | 100% estático, sin servidor |
| Base de datos | ❌ No existe | Datos hardcodeados en JS |
| Contenido premium protegido | ❌ No existe | Todo el contenido es accesible post-registro gratuito |

---

## 4. Qué Existe y Qué Falta para una Academia con 3 Cursos

### ✅ Lo que YA existe y funciona

1. **3 cursos completos** con contenido en YouTube (37 lecciones)
2. **Frontend pulido** con diseño obsidiana + oro, responsive, animado
3. **Sistema de registro** con captura de leads → CRM (GoHighLevel)
4. **Gating de contenido** (registro obligatorio para ver videos)
5. **SEO técnico** con Schema.org y meta tags
6. **Despliegue Vercel** listo y configurado
7. **Sistema de categorías** BDL coherente con la marca

### ❌ Lo que FALTA para una academia profesional

| Necesidad | Prioridad | Complejidad |
|---|---|---|
| **Indexación en Google** — el sitio tiene 0 páginas indexadas | 🔴 Crítica | Baja — verificar Search Console, sitemap.xml, robots.txt |
| **Sitemap.xml** — no existe | 🔴 Crítica | Baja — generar estático o dinámico |
| **robots.txt** — no existe | 🔴 Crítica | Baja — crear con allow all + sitemap ref |
| **Sistema de pagos** para cursos premium | 🟡 Alta | Media — Stripe Checkout o Lemon Squeezy |
| **Auth real** (login/password o magic link) | 🟡 Alta | Media — Auth0, Supabase Auth, o Firebase Auth |
| **Progreso del usuario** (lecciones completadas) | 🟡 Alta | Media — localStorage para MVP, backend para prod |
| **Certificados de finalización** | 🟢 Media | Baja — generación PDF client-side |
| **Panel de administración** para editar cursos | 🟢 Media | Alta — requiere CMS o backend |
| **Email automation** post-registro | 🟢 Media | Baja — ya va a GoHighLevel, configurar allí |
| **Analytics** (GA4, Plausible, etc.) | 🟢 Media | Baja — una línea de script |
| **Open Graph / social cards** | 🟢 Media | Baja — meta tags og: en cada página |
| **Favicon y PWA manifest** | 🟢 Baja | Baja |

---

## 5. Recomendación Técnica

### Enfoque: Evolución Incremental sobre lo que ya existe

El stack actual (HTML/CSS/JS vanilla + Vercel) es **intencionalmente simple y efectivo**. No recomiendo migrar a un framework complejo. En su lugar, evolucionar por capas:

### Fase 1 — SEO y Visibilidad (inmediata, 0 costo)

```
1. Crear sitemap.xml (estático, listar las 4 páginas + cursos)
2. Crear robots.txt (Allow: / + referencia al sitemap)
3. Registrar en Google Search Console
4. Añadir meta tags Open Graph para compartir en redes
5. Verificar que 5000millas.com/academia apunte al deploy de Vercel
```

### Fase 2 — Contenido Premium + Pagos (corto plazo)

```
1. Integrar Stripe Checkout (modo client-only, sin backend)
   - Crear productos en Stripe Dashboard
   - Botón "Comprar" → redirect a Stripe Checkout
   - Webhook de Stripe → GoHighLevel para activar acceso
2. Marcar cursos como premium en cursos-data.js (campo ya existe: gratuito: true/false)
3. Guardar compras en localStorage (MVP) o verificar contra un endpoint
```

### Fase 3 — Auth y Progreso (medio plazo)

```
1. Supabase Auth (magic link, gratis hasta 50k MAU)
   - Reemplaza el registro por webhook con auth real
   - Permite login persistente entre dispositivos
2. Supabase Database (gratuito)
   - Progreso de lecciones por usuario
   - Historial de compras
3. Dashboard mínimo del usuario
```

### Fase 4 — Escala (largo plazo, solo si hay tracción)

```
1. CMS headless (Notion API o Strapi) para gestionar cursos sin tocar código
2. Certificados PDF auto-generados
3. Comunidad (Discord embed o foro integrado)
4. App móvil (PWA con service worker)
```

### Arquitectura Recomendada

```
┌─────────────────────────────────────────────────────┐
│                    FRONTEND (actual)                 │
│         HTML/CSS/JS vanilla en Vercel                │
│     index · catálogo · curso · desafíos              │
├─────────────────────────────────────────────────────┤
│                     SERVICIOS                        │
│  ┌──────────┐  ┌──────────┐  ┌───────────────────┐  │
│  │  Stripe  │  │ Supabase │  │   GoHighLevel     │  │
│  │ Checkout │  │Auth + DB │  │   CRM + Email     │  │
│  └──────────┘  └──────────┘  └───────────────────┘  │
├─────────────────────────────────────────────────────┤
│                    CONTENIDO                         │
│           YouTube (videos embebidos)                 │
│        cursos-data.js (metadatos de cursos)          │
└─────────────────────────────────────────────────────┘
```

---

## 6. Resumen Ejecutivo

| Dimensión | Estado |
|---|---|
| **Producto educativo** | ✅ Sólido — 3 cursos, 37 lecciones, método BDL completo |
| **Frontend** | ✅ Profesional — diseño cohesivo, responsive, rápido |
| **Captura de leads** | ✅ Funcional — GoHighLevel integrado |
| **SEO / Visibilidad** | 🔴 Crítico — 0 páginas indexadas en Google |
| **Monetización** | ❌ Ausente — no hay sistema de pagos |
| **Auth real** | ❌ Ausente — solo registro sin login |
| **Ecosistema web** | ⚠️ Incierto — no se pudieron auditar subdominios ni otros repos (403 + sin auth GitHub) |

**Veredicto:** La academia tiene un frontend profesional y contenido listo. Las prioridades inmediatas son: (1) resolver la visibilidad SEO, (2) conectar el dominio 5000millas.com/academia, y (3) decidir si monetizar con pagos o mantener todo gratuito como funnel hacia servicios de mentoría.

---

*Auditoría generada el 2026-03-18. Para completar la auditoría de subdominios y otros repos, se requiere acceso manual al navegador y autenticación de GitHub CLI.*
