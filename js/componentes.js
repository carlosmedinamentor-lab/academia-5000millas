/**
 * Academia 5.000 Millas — Componentes reutilizables
 * Método BDL: ⛵ + 💎 = 🦁
 */

/* ── Header ── */
function renderHeader(paginaActiva) {
  const nav = [
    { label: 'Inicio', href: 'index.html', id: 'inicio' },
    { label: 'Cursos', href: 'catalogo.html', id: 'cursos' },
    { label: 'Desafíos', href: 'desafios.html', id: 'desafios' }
  ];

  const links = nav.map(item => {
    const isActive = item.id === paginaActiva ? ' class="active"' : '';
    const href = paginaActiva === 'inicio' ? item.href : (item.href === 'index.html' ? 'index.html' : item.href);
    const adjustedHref = paginaActiva === 'inicio' ? item.href : item.href;
    return `<a href="${adjustedHref}"${isActive}>${item.label}</a>`;
  }).join('');

  return `
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
  const videoContent = desafio.youtubeId && desafio.youtubeId !== 'REEMPLAZAR'
    ? `<iframe src="https://www.youtube.com/embed/${desafio.youtubeId}" title="${desafio.titulo}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`
    : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem;opacity:0.2">${cat.emoji}</div>`;

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
          ${desafio.gratuito ? '<span class="badge badge-gratis">Gratuito</span>' : ''}
        </div>
        <div class="desafio-titulo">${desafio.titulo}</div>
        <div class="desafio-subtitulo">${desafio.subtitulo}</div>
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
        ${modulo.lecciones.map(leccion => `
          <div class="leccion" onclick="reproducirLeccion('${leccion.youtubeId}', this)">
            <span class="leccion-titulo">${leccion.titulo}</span>
            <span class="leccion-duracion">${leccion.duracion}</span>
          </div>
        `).join('')}
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
  const videoContainer = document.getElementById('videoMainContainer');
  if (!videoContainer) return;

  document.querySelectorAll('.leccion.active').forEach(l => l.classList.remove('active'));
  el.classList.add('active');

  if (youtubeId && youtubeId !== 'REEMPLAZAR') {
    videoContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${youtubeId}?autoplay=1" title="Lección" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  } else {
    videoContainer.innerHTML = '<div class="curso-video-placeholder">⛵ + 💎 = 🦁</div>';
  }
}

/* ── Modal de inscripción ── */
function abrirModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) overlay.classList.add('active');
}

function cerrarModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) overlay.classList.remove('active');
}

function enviarInscripcion(e) {
  e.preventDefault();
  const nombre = document.getElementById('modalNombre').value;
  const email = document.getElementById('modalEmail').value;
  const whatsapp = document.getElementById('modalWhatsapp').value;
  const cursoTitulo = document.getElementById('modalCurso')?.value || 'Curso Premium';

  const mensaje = encodeURIComponent(
    `¡Hola! Soy ${nombre} y quiero inscribirme en "${cursoTitulo}" de Academia 5.000 Millas.\n\nEmail: ${email}\nWhatsApp: ${whatsapp}`
  );
  window.open(`https://wa.me/?text=${mensaje}`, '_blank');
  cerrarModal();
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
    <div class="modal-overlay" id="modalOverlay">
      <div class="modal">
        <button class="modal-close" onclick="cerrarModal()">&times;</button>
        <h3>Inscríbete al curso</h3>
        <p>Completa tus datos y te contactaremos por WhatsApp.</p>
        <form class="modal-form" onsubmit="enviarInscripcion(event)">
          <input type="hidden" id="modalCurso" value="">
          <input type="text" class="modal-input" id="modalNombre" placeholder="Tu nombre" required>
          <input type="email" class="modal-input" id="modalEmail" placeholder="Tu email" required>
          <input type="tel" class="modal-input" id="modalWhatsapp" placeholder="Tu WhatsApp" required>
          <button type="submit" class="btn btn-primary btn-lg">Enviar por WhatsApp</button>
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
