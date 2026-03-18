/**
 * Academia 5.000 Millas — Componentes reutilizables
 * Método BDL: ⛵ + 💎 = 🦁
 */

/* ── Registro / Gate ── */

function isRegistered() {
  return localStorage.getItem('academia_user') !== null;
}

function getUser() {
  try { return JSON.parse(localStorage.getItem('academia_user')); }
  catch { return null; }
}

function markRegistered(firstName, email) {
  localStorage.setItem('academia_user', JSON.stringify({
    firstName: firstName || '',
    email: email || '',
    registeredAt: new Date().toISOString()
  }));
}

/**
 * Genera el HTML de un placeholder de video con thumbnail + play dorado.
 * @param {string} thumbUrl - URL del thumbnail (maxresdefault)
 * @param {string} cursoId  - ID del curso para el modal
 * @param {string} emoji    - Emoji fallback si no hay thumbnail
 */
function renderVideoGate(thumbUrl, cursoId, emoji) {
  const bg = thumbUrl
    ? `<img src="${thumbUrl}" alt="Vista previa" style="width:100%;height:100%;object-fit:cover;">`
    : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:4rem;opacity:0.15;">${emoji || '⛵ + 💎 = 🦁'}</div>`;

  return `
    <div class="video-gate" onclick="abrirModal('${cursoId}')" style="position:relative;width:100%;height:100%;cursor:pointer;border-radius:var(--radius-md,12px);overflow:hidden;">
      ${bg}
      <div style="position:absolute;inset:0;background:rgba(10,10,12,0.55);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;">
        <div style="width:68px;height:68px;border-radius:50%;border:2px solid #D4A574;display:flex;align-items:center;justify-content:center;background:rgba(10,10,12,0.6);transition:transform .2s;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#D4A574"><path d="M8 5v14l11-7z"/></svg>
        </div>
        <span style="color:#D4A574;font-size:0.85rem;font-weight:500;letter-spacing:0.03em;">Regístrate gratis para acceder</span>
      </div>
    </div>
  `;
}

/**
 * Retorna el thumbnail URL para un curso (maxresdefault).
 */
function getVideoThumbnail(curso) {
  if (curso.youtubeId) return `https://img.youtube.com/vi/${curso.youtubeId}/maxresdefault.jpg`;
  return null;
}

/**
 * Carga el iframe de video real en un contenedor.
 */
function loadVideoEmbed(container, curso) {
  const embedUrl = getYouTubeEmbedUrl(curso);
  if (embedUrl) {
    container.innerHTML = `<iframe src="${embedUrl}" title="${curso.titulo}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
}

/* ── Topbar ── */
function renderTopbar() {
  const user = getUser();
  if (user) {
    return `<div id="topbar" style="background:rgba(10,10,12,0.95);border-bottom:1px solid rgba(212,165,116,0.15);padding:0.35rem 1rem;text-align:right;font-family:var(--font-mono,'SF Mono',monospace);font-size:0.7rem;color:#D4A574;letter-spacing:0.04em;">Hola, ${user.firstName} · ⛵+💎=🦁</div>`;
  }
  return `<div id="topbar" style="background:rgba(10,10,12,0.95);border-bottom:1px solid rgba(212,165,116,0.15);padding:0.35rem 1rem;text-align:right;font-family:var(--font-mono,'SF Mono',monospace);font-size:0.7rem;color:rgba(255,255,255,0.45);letter-spacing:0.04em;"><a href="#" onclick="event.preventDefault();abrirModal('');" style="color:#D4A574;text-decoration:none;">Regístrate gratis para acceder al contenido</a></div>`;
}

function updateTopbar() {
  const el = document.getElementById('topbar');
  if (el) {
    const user = getUser();
    if (user) {
      el.style.color = '#D4A574';
      el.innerHTML = `Hola, ${user.firstName} · ⛵+💎=🦁`;
    }
  }
}

/* ── Header ── */
function renderHeader(paginaActiva) {
  const nav = [
    { label: 'Inicio', href: 'index.html', id: 'inicio' },
    { label: 'Cursos', href: 'catalogo.html', id: 'cursos' },
    { label: 'Desafíos', href: 'desafios.html', id: 'desafios' },
    { label: 'Academia', href: 'academia/index.html', id: 'academia' }
  ];

  const links = nav.map(item => {
    const isActive = item.id === paginaActiva ? ' class="active"' : '';
    const adjustedHref = paginaActiva === 'inicio' ? item.href : item.href;
    return `<a href="${adjustedHref}"${isActive}>${item.label}</a>`;
  }).join('');

  return `
    ${renderTopbar()}
    <header class="header">
      <div class="container">
        <div class="header-brand">
          <a href="index.html" class="header-logo">5.000 Millas</a>
          <span class="header-badge">Academia</span>
        </div>
        <nav class="header-nav" id="headerNav">
          ${links}
          <a href="https://5000millas.com" target="_blank" rel="noopener" class="header-nav-external">5000millas.com ↗</a>
        </nav>
        <button class="hamburger" id="hamburger" aria-label="Menú">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  `;
}

/* ── Footer ── */
function renderFooter() {
  return `
    <footer class="footer">
      <div class="footer-ecuacion">⛵ + 💎 = 🦁</div>
      <div class="footer-marca">Academia 5.000 Millas</div>
      <div class="footer-copy">&copy; ${new Date().getFullYear()} 5.000 Millas — Campus Educativo BDL. Todos los derechos reservados.</div>
      <div class="footer-links">
        <a href="index.html">Inicio</a>
        <a href="catalogo.html">Cursos</a>
        <a href="desafios.html">Desafíos</a>
        <a href="https://5000millas.com" target="_blank" rel="noopener">5000millas.com</a>
      </div>
    </footer>
  `;
}

/* ── Curso Card ── */
function renderCursoCard(curso) {
  const cat = CATEGORIAS[curso.categoria];
  const thumbnail = getYouTubeThumbnail(curso.youtubeId);
  const thumbContent = thumbnail
    ? `<img src="${thumbnail}" alt="${curso.titulo}" loading="lazy">`
    : `<span class="curso-card-thumb-placeholder">${cat.emoji}</span>`;

  return `
    <a href="curso.html?id=${curso.id}" class="curso-card fade-in-up">
      <div class="curso-card-thumb">${thumbContent}</div>
      <div class="curso-card-body">
        <div class="curso-card-badges">
          <span class="badge badge-${curso.categoria}">${cat.emoji} ${cat.nombre}</span>
          ${curso.gratuito ? '<span class="badge badge-gratis">Gratuito</span>' : '<span class="badge badge-premium">Premium</span>'}
        </div>
        <div class="curso-card-titulo">${curso.titulo}</div>
        <div class="curso-card-subtitulo">${curso.subtitulo}</div>
        <div class="curso-card-meta">
          <span>${curso.duracion}</span>
          <span>${curso.totalLecciones} lecciones</span>
          <span>${curso.nivel}</span>
        </div>
      </div>
    </a>
  `;
}

/* ── Categoría Card ── */
function renderCategoriaCard(cat) {
  return `
    <a href="catalogo.html?cat=${cat.id}" class="categoria-card fade-in-up">
      <span class="categoria-emoji">${cat.emoji}</span>
      <div class="categoria-nombre">${cat.nombre}</div>
      <div class="categoria-subtitulo">${cat.subtitulo}</div>
      <div class="categoria-descripcion">${cat.descripcion}</div>
    </a>
  `;
}

/* ── Desafío Card ── */
function renderDesafioCard(desafio) {
  const cat = CATEGORIAS[desafio.categoria];

  // Video: gated si no está registrado
  let videoContent;
  const thumbId = desafio.youtubeId;
  const thumbUrl = thumbId ? `https://img.youtube.com/vi/${thumbId}/maxresdefault.jpg` : null;

  if (isRegistered()) {
    let desafioEmbedUrl = null;
    if (desafio.playlistId) {
      desafioEmbedUrl = `https://www.youtube.com/embed/videoseries?list=${desafio.playlistId}`;
    } else if (desafio.youtubeId) {
      desafioEmbedUrl = `https://www.youtube.com/embed/${desafio.youtubeId}`;
    }
    videoContent = desafioEmbedUrl
      ? `<iframe src="${desafioEmbedUrl}" title="${desafio.titulo}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`
      : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem;opacity:0.2">${cat.emoji}</div>`;
  } else {
    videoContent = renderVideoGate(thumbUrl, desafio.cursoId || desafio.id, cat.emoji);
  }

  const semanasHTML = desafio.semanas.map((semana, i) => `
    <div class="semana${i === 0 ? ' open' : ''}">
      <div class="semana-header" onclick="toggleSemana(this)">
        <div>
          <div class="semana-titulo">${semana.titulo}</div>
          <div class="semana-subtitulo">${semana.subtitulo}</div>
        </div>
        <span class="semana-toggle">▼</span>
      </div>
      <div class="semana-dias">
        ${semana.dias.map(dia => `
          <div class="dia">
            <span class="dia-numero">Día ${dia.dia}</span>
            <div>
              <div class="dia-titulo">${dia.titulo}</div>
              <div class="dia-descripcion">${dia.descripcion}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  const statusBadge = desafio.activo
    ? '<span class="badge badge-gratis">Activo</span>'
    : '<span class="badge badge-proximamente">Próximamente</span>';

  return `
    <div class="desafio-card fade-in-up">
      <div class="desafio-video">${videoContent}</div>
      <div class="desafio-body">
        <div style="display:flex;gap:0.5rem;margin-bottom:1rem;">
          <span class="badge badge-${desafio.categoria}">${cat.emoji} ${cat.nombre}</span>
          ${statusBadge}
          ${desafio.gratuito ? '<span class="badge badge-gratis">Gratuito</span>' : '<span class="badge badge-premium">Premium</span>'}
        </div>
        <div class="desafio-titulo">${desafio.titulo}</div>
        <div class="desafio-subtitulo">${desafio.subtitulo}</div>
        ${desafio.activo && desafio.gratuito ? `<button class="btn btn-primary" style="margin:1rem 0;" onclick="abrirModal('${desafio.cursoId || desafio.id}')">Empezar desafío gratis</button>` : ''}
        ${desafio.activo && !desafio.gratuito && desafio.stripeLink ? `<a href="${desafio.stripeLink}" class="btn-stripe" style="margin:1rem 0;display:inline-flex;">Acceder — €${desafio.precio || 47}</a>` : ''}
        ${desafio.semanas.length > 0 ? `<div class="desafio-semanas">${semanasHTML}</div>` : '<p style="color:var(--blanco-muted);font-style:italic;">Contenido próximamente...</p>'}
      </div>
    </div>
  `;
}

/* ── Módulos (página de curso) ── */
function renderModulos(curso) {
  return curso.modulos.map((modulo, i) => `
    <div class="modulo${i === 0 ? ' open' : ''}">
      <div class="modulo-header" onclick="toggleModulo(this)">
        <div>
          <div class="modulo-titulo">${modulo.titulo}</div>
          <div class="modulo-desc">${modulo.descripcion}</div>
        </div>
        <span class="modulo-toggle">▼</span>
      </div>
      <div class="modulo-lecciones">
        ${modulo.lecciones.map(leccion => {
          const hasVideo = leccion.youtubeId;
          const onclick = hasVideo ? `onclick="reproducirLeccion('${leccion.youtubeId}', this)"` : '';
          return `
          <div class="leccion" ${onclick}>
            <span class="leccion-titulo">${leccion.titulo}</span>
            <span class="leccion-duracion">${leccion.duracion}</span>
          </div>`;
        }).join('')}
      </div>
    </div>
  `).join('');
}

/* ── Interacciones ── */

function toggleModulo(header) {
  const modulo = header.closest('.modulo');
  modulo.classList.toggle('open');
}

function toggleSemana(header) {
  const semana = header.closest('.semana');
  semana.classList.toggle('open');
}

function reproducirLeccion(youtubeId, el) {
  // Gate: require registration before playing any lesson
  if (!isRegistered()) {
    const cursoIdInput = document.getElementById('modalCursoId');
    const cursoId = cursoIdInput ? cursoIdInput.value : '';
    // Try to extract cursoId from URL
    const urlCursoId = new URLSearchParams(window.location.search).get('id') || '';
    abrirModal(cursoId || urlCursoId);
    return;
  }

  const videoContainer = document.getElementById('videoMainContainer');
  if (!videoContainer) return;

  document.querySelectorAll('.leccion.active').forEach(l => l.classList.remove('active'));
  el.classList.add('active');

  if (youtubeId) {
    videoContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${youtubeId}?autoplay=1" title="Lección" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
}

/* ── Modal de inscripción ── */

const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/JjPQcPMDSUM4LdEE0pGZ/webhook-trigger/063252d6-0065-4c4c-9316-0f4206d732b9';

function abrirModal(cursoId) {
  const overlay = document.getElementById('modalOverlay');
  if (!overlay) return;

  // Reset modal to form state
  const form = overlay.querySelector('.modal-form');
  const successEl = overlay.querySelector('.modal-success');
  if (form) form.style.display = '';
  if (successEl) successEl.remove();
  overlay.querySelector('h3').textContent = 'Empieza tu transformación';
  overlay.querySelector('.modal-subtitle').textContent = 'Ingresa tus datos para acceder al contenido gratuito.';

  // Store cursoId
  const cursoInput = document.getElementById('modalCursoId');
  if (cursoInput) cursoInput.value = cursoId || '';

  // Reset error
  const errorEl = overlay.querySelector('.modal-error');
  if (errorEl) errorEl.style.display = 'none';

  overlay.classList.add('active');
}

function cerrarModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) overlay.classList.remove('active');
}

async function enviarInscripcion(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = 'Enviando...';
  btn.disabled = true;

  const firstName = document.getElementById('modalNombre').value.trim();
  const email = document.getElementById('modalEmail').value.trim();
  const phone = document.getElementById('modalWhatsapp').value.trim();
  const cursoId = document.getElementById('modalCursoId')?.value || '';

  try {
    const res = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        email,
        phone,
        curso: cursoId,
        source: 'Academia 5.000 Millas'
      })
    });

    if (!res.ok) throw new Error('Error en el registro');

    // Mark as registered with user data
    markRegistered(firstName, email);
    updateTopbar();

    // Show success state
    const modal = document.querySelector('.modal');
    const form = modal.querySelector('.modal-form');
    form.style.display = 'none';
    modal.querySelector('h3').textContent = '';
    modal.querySelector('.modal-subtitle').textContent = '';

    const cursoUrl = cursoId ? `curso.html?id=${cursoId}` : 'catalogo.html';
    const successHTML = document.createElement('div');
    successHTML.className = 'modal-success';
    successHTML.innerHTML = `
      <div class="modal-checkmark">
        <svg viewBox="0 0 52 52" width="64" height="64">
          <circle cx="26" cy="26" r="25" fill="none" stroke="#D4A574" stroke-width="2" class="checkmark-circle"/>
          <path fill="none" stroke="#D4A574" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M14 27l8 8 16-16" class="checkmark-path"/>
        </svg>
      </div>
      <h3 style="font-family:var(--font-display);color:var(--oro);margin:1rem 0 0.5rem;">¡Tu viaje comienza ahora!</h3>
      <p style="color:var(--blanco-muted);margin-bottom:1.5rem;">Revisa tu email para acceder al curso.</p>
      <a href="${cursoUrl}" class="btn btn-primary btn-lg">Acceder al curso</a>
    `;
    form.parentNode.insertBefore(successHTML, form.nextSibling);

    // Unlock videos on current page (without reload)
    unlockVideosOnPage();

  } catch (err) {
    btn.textContent = originalText;
    btn.disabled = false;
    const errorEl = e.target.querySelector('.modal-error');
    if (errorEl) {
      errorEl.textContent = 'Hubo un problema. Inténtalo de nuevo.';
      errorEl.style.display = 'block';
    }
  }
}

/**
 * After successful registration, replace all video gates on the current page
 * with their actual video embeds (without requiring a page reload).
 */
function unlockVideosOnPage() {
  // Unlock curso.html main video
  const videoMain = document.getElementById('videoMainContainer');
  if (videoMain && videoMain.querySelector('.video-gate')) {
    const cursoId = new URLSearchParams(window.location.search).get('id');
    const curso = typeof getCurso === 'function' ? getCurso(cursoId) : null;
    if (curso) {
      loadVideoEmbed(videoMain, curso);
    }
  }

  // Unlock desafio video gates
  document.querySelectorAll('.desafio-video .video-gate').forEach(gate => {
    const parent = gate.closest('.desafio-video');
    if (!parent) return;
    // Find which desafio this belongs to by matching the cursoId in onclick
    const onclickAttr = gate.getAttribute('onclick') || '';
    const match = onclickAttr.match(/abrirModal\('([^']+)'\)/);
    if (match) {
      const targetId = match[1];
      const desafio = typeof DESAFIOS !== 'undefined'
        ? DESAFIOS.find(d => (d.cursoId || d.id) === targetId)
        : null;
      if (desafio) {
        let embedUrl = null;
        if (desafio.playlistId) {
          embedUrl = `https://www.youtube.com/embed/videoseries?list=${desafio.playlistId}`;
        } else if (desafio.youtubeId) {
          embedUrl = `https://www.youtube.com/embed/${desafio.youtubeId}`;
        }
        if (embedUrl) {
          parent.innerHTML = `<iframe src="${embedUrl}" title="${desafio.titulo}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        }
      }
    }
  });
}

/* ── SEO ── */
function setMetaTags(title, description) {
  document.title = title + ' — Academia 5.000 Millas';
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = description;
}

function addCourseSchema(curso) {
  const cat = CATEGORIAS[curso.categoria];
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': curso.titulo,
    'description': curso.descripcion,
    'provider': {
      '@type': 'Organization',
      'name': 'Academia 5.000 Millas',
      'url': 'https://5000millas.com'
    },
    'isAccessibleForFree': curso.gratuito,
    'coursePrerequisites': 'Ninguno',
    'educationalLevel': curso.nivel,
    'about': cat.subtitulo,
    'timeRequired': `PT${parseInt(curso.duracion)}H`
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

/* ── Render Modal HTML ── */
function renderModal() {
  return `
    <style>
      .modal-success { text-align: center; padding: 1rem 0; }
      .modal-checkmark { margin: 0 auto 0.5rem; }
      .checkmark-circle {
        stroke-dasharray: 157;
        stroke-dashoffset: 157;
        animation: checkmark-circle 0.6s ease-out forwards;
      }
      .checkmark-path {
        stroke-dasharray: 48;
        stroke-dashoffset: 48;
        animation: checkmark-draw 0.4s 0.4s ease-out forwards;
      }
      @keyframes checkmark-circle {
        to { stroke-dashoffset: 0; }
      }
      @keyframes checkmark-draw {
        to { stroke-dashoffset: 0; }
      }
      .video-gate:hover div > div:first-child {
        transform: scale(1.1);
      }
    </style>
    <div class="modal-overlay" id="modalOverlay">
      <div class="modal">
        <button class="modal-close" onclick="cerrarModal()">&times;</button>
        <h3>Empieza tu transformación</h3>
        <p class="modal-subtitle">Ingresa tus datos para acceder al contenido gratuito.</p>
        <form class="modal-form" onsubmit="enviarInscripcion(event)">
          <input type="hidden" id="modalCursoId" value="">
          <input type="text" class="modal-input" id="modalNombre" placeholder="Tu nombre" required>
          <input type="email" class="modal-input" id="modalEmail" placeholder="Tu email" required>
          <input type="tel" class="modal-input" id="modalWhatsapp" placeholder="Tu WhatsApp (opcional)">
          <div class="modal-error" style="display:none;color:#e74c3c;font-size:0.875rem;margin-bottom:0.5rem;"></div>
          <button type="submit" class="btn btn-primary btn-lg">Empezar ahora — Gratis</button>
        </form>
      </div>
    </div>
  `;
}

/* ── Inicialización ── */
function initComponents() {
  // Menú hamburguesa
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('headerNav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('open');
    });
  }

  // IntersectionObserver para fadeInUp
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

  // Cerrar modal al hacer click fuera
  const overlay = document.getElementById('modalOverlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) cerrarModal();
    });
  }
}
