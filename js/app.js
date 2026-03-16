/**
 * Academia 5.000 Millas — Aplicación principal
 */

const cursosData = [
  {
    id: 1,
    titulo: "Fundamentos de Liderazgo",
    descripcion: "Desarrolla habilidades de liderazgo efectivo para guiar equipos hacia el éxito.",
    categoria: "Liderazgo",
    duracion: "8 semanas",
    progreso: 0
  },
  {
    id: 2,
    titulo: "Comunicación Estratégica",
    descripcion: "Aprende a comunicar ideas con claridad e impacto en cualquier contexto.",
    categoria: "Comunicación",
    duracion: "6 semanas",
    progreso: 0
  },
  {
    id: 3,
    titulo: "Gestión de Proyectos",
    descripcion: "Domina las metodologías y herramientas para gestionar proyectos exitosamente.",
    categoria: "Gestión",
    duracion: "10 semanas",
    progreso: 0
  },
  {
    id: 4,
    titulo: "Desarrollo Personal",
    descripcion: "Herramientas prácticas para el crecimiento personal y profesional continuo.",
    categoria: "Desarrollo",
    duracion: "4 semanas",
    progreso: 0
  },
  {
    id: 5,
    titulo: "Trabajo en Equipo",
    descripcion: "Fortalece la colaboración y construye equipos de alto rendimiento.",
    categoria: "Liderazgo",
    duracion: "6 semanas",
    progreso: 0
  },
  {
    id: 6,
    titulo: "Pensamiento Estratégico",
    descripcion: "Desarrolla una visión estratégica para la toma de decisiones efectiva.",
    categoria: "Gestión",
    duracion: "8 semanas",
    progreso: 0
  }
];

/**
 * Renderiza una tarjeta de curso
 */
function renderCursoCard(curso) {
  return `
    <div class="curso-card" data-id="${curso.id}">
      <div class="curso-card-body">
        <span class="curso-categoria">${curso.categoria}</span>
        <h3>${curso.titulo}</h3>
        <p>${curso.descripcion}</p>
        <p><strong>Duración:</strong> ${curso.duracion}</p>
      </div>
    </div>
  `;
}

/**
 * Carga cursos destacados en la página principal
 */
function cargarCursosDestacados() {
  const container = document.getElementById("cursos-destacados");
  if (!container) return;

  const destacados = cursosData.slice(0, 3);
  container.innerHTML = destacados.map(renderCursoCard).join("");
}

/**
 * Carga todos los cursos en el catálogo
 */
function cargarCatalogo() {
  const container = document.getElementById("catalogo-cursos");
  if (!container) return;

  container.innerHTML = cursosData.map(renderCursoCard).join("");
}

/**
 * Carga datos del perfil del estudiante
 */
function cargarPerfil() {
  const container = document.getElementById("perfil-cursos");
  if (!container) return;

  const cursosInscritos = cursosData.slice(0, 3).map(curso => ({
    ...curso,
    progreso: Math.floor(Math.random() * 100)
  }));

  container.innerHTML = cursosInscritos.map(curso => `
    <div class="curso-card">
      <div class="curso-card-body">
        <span class="curso-categoria">${curso.categoria}</span>
        <h3>${curso.titulo}</h3>
        <p>Progreso: ${curso.progreso}%</p>
        <div class="progreso-bar">
          <div class="progreso-bar-fill" style="width: ${curso.progreso}%"></div>
        </div>
      </div>
    </div>
  `).join("");

  // Actualizar estadísticas
  const totalMillas = cursosInscritos.reduce((acc, c) => acc + c.progreso, 0);
  const millasEl = document.getElementById("millas-recorridas");
  if (millasEl) millasEl.textContent = totalMillas;

  const cursosActivosEl = document.getElementById("cursos-activos");
  if (cursosActivosEl) cursosActivosEl.textContent = cursosInscritos.length;
}

/**
 * Inicialización
 */
document.addEventListener("DOMContentLoaded", () => {
  cargarCursosDestacados();
  cargarCatalogo();
  cargarPerfil();
});
