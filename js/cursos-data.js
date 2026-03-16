/**
 * Academia 5.000 Millas — Base de datos de cursos
 * Método BDL: ⛵ + 💎 = 🦁
 *
 * Contenido real del canal de YouTube de Carlos Medina / 5.000 Millas
 * Playlists:
 *   - Desafío 28 días: PLWxXlZghiePzTuw9oJseZVg8bgp4-o7Ll
 *   - Desafío 7 días:  PLWxXlZghiePx6gJI_hN6Upoz83u-Dy4n5
 *   - Workshop 5.000 Millas: WtVrY9SKB84
 */

const CATEGORIAS = {
  barco: {
    id: 'barco',
    emoji: '⛵',
    nombre: 'Barco',
    subtitulo: 'Autoconocimiento',
    descripcion: 'El viaje de 5.000 millas hacia tu interior. Descubre quién eres realmente antes de intentar cambiar el mundo.',
    color: '#4A90D9'
  },
  diamante: {
    id: 'diamante',
    emoji: '💎',
    nombre: 'Diamante',
    subtitulo: 'Transformación',
    descripcion: 'El carbón bajo presión se convierte en diamante. Salud heptadimensional: cuerpo, mente, emociones, relaciones, finanzas, propósito y espiritualidad.',
    color: '#D4A574'
  },
  leon: {
    id: 'leon',
    emoji: '🦁',
    nombre: 'León',
    subtitulo: 'Liderazgo',
    descripcion: 'Tu verdadera identidad restaurada. Amor, poder y dominio propio. Lidera desde la soberanía interior.',
    color: '#C0392B'
  }
};

const CURSOS = [
  {
    id: 'desafio-28-dias-curso',
    titulo: 'Un Encuentro Conmigo Mismo: Desafío de 28 Días',
    subtitulo: 'Lecciones grabadas a las 3am en 2021',
    categoria: 'diamante',
    nivel: 'Gratuito',
    duracion: '28 días',
    totalLecciones: 28,
    gratuito: true,
    destacado: true,
    youtubeId: '18S7wyLvZYw',
    playlistId: 'PLWxXlZghiePzTuw9oJseZVg8bgp4-o7Ll',
    descripcion: 'Lecciones grabadas a las 3am en 2021, cuando mi viaje apenas comenzaba. 28 días de inmersión total en el Método BDL.',
    beneficios: [
      '28 días de transformación guiada',
      'Método BDL completo: Barco → Diamante → León',
      'Lecciones grabadas a las 3am — máxima autenticidad',
      'Salud heptadimensional: 7 dimensiones del bienestar'
    ],
    modulos: [
      {
        titulo: 'Semana 1 — El Barco ⛵',
        descripcion: 'Autoconocimiento: zarpa hacia tu interior y descubre tu punto de partida real.',
        lecciones: [
          { titulo: 'Día 1: Bienvenida al desafío', duracion: 'Video' },
          { titulo: 'Día 2: El punto de partida', duracion: 'Video' },
          { titulo: 'Día 3: Tus máscaras', duracion: 'Video' },
          { titulo: 'Día 4: La herida fundacional', duracion: 'Video' },
          { titulo: 'Día 5: Inventario de creencias', duracion: 'Video' },
          { titulo: 'Día 6: Tu línea de tiempo', duracion: 'Video' },
          { titulo: 'Día 7: El verdadero norte', duracion: 'Video' }
        ]
      },
      {
        titulo: 'Semana 2 — El Diamante Interior 💎',
        descripcion: 'Transformación interna: el carbón bajo presión se convierte en diamante.',
        lecciones: [
          { titulo: 'Día 8: La presión necesaria', duracion: 'Video' },
          { titulo: 'Día 9: Salud mental', duracion: 'Video' },
          { titulo: 'Día 10: Salud emocional', duracion: 'Video' },
          { titulo: 'Día 11: Salud física', duracion: 'Video' },
          { titulo: 'Día 12: Salud espiritual', duracion: 'Video' },
          { titulo: 'Día 13: Salud relacional', duracion: 'Video' },
          { titulo: 'Día 14: Integración interior', duracion: 'Video' }
        ]
      },
      {
        titulo: 'Semana 3 — El Diamante Exterior 💎',
        descripcion: 'Transformación externa: tu diamante interior empieza a brillar hacia afuera.',
        lecciones: [
          { titulo: 'Día 15: Salud financiera', duracion: 'Video' },
          { titulo: 'Día 16: Tu propósito', duracion: 'Video' },
          { titulo: 'Día 17: Comunica tu valor', duracion: 'Video' },
          { titulo: 'Día 18: Límites sanos', duracion: 'Video' },
          { titulo: 'Día 19: Tu marca personal', duracion: 'Video' },
          { titulo: 'Día 20: Sistemas que te sostienen', duracion: 'Video' },
          { titulo: 'Día 21: El diamante brilla', duracion: 'Video' }
        ]
      },
      {
        titulo: 'Semana 4 — El León 🦁',
        descripcion: 'Soberanía y liderazgo: tu verdadera identidad restaurada.',
        lecciones: [
          { titulo: 'Día 22: La corona es tuya', duracion: 'Video' },
          { titulo: 'Día 23: Decisiones de león', duracion: 'Video' },
          { titulo: 'Día 24: El rugido — tu voz', duracion: 'Video' },
          { titulo: 'Día 25: Lidera sirviendo', duracion: 'Video' },
          { titulo: 'Día 26: Tu manada', duracion: 'Video' },
          { titulo: 'Día 27: El legado', duracion: 'Video' },
          { titulo: 'Día 28: El Génesis — 5.000 Millas', duracion: 'Video' }
        ]
      }
    ]
  },
  {
    id: 'despierta-7-dias',
    titulo: 'Despierta o Morirás Dos Veces: Desafío de 7 Días',
    subtitulo: 'Basado en el libro de Carlos Medina',
    categoria: 'barco',
    nivel: 'Gratuito',
    duracion: '7 días',
    totalLecciones: 8,
    gratuito: true,
    destacado: true,
    youtubeId: null,
    playlistId: 'PLWxXlZghiePx6gJI_hN6Upoz83u-Dy4n5',
    descripcion: 'Basado en el libro de Carlos Medina. 7 días para despertar tu grandeza fortaleciendo las 7 dimensiones: física, mental, emocional, espiritual, relacional, vocacional y financiera.',
    beneficios: [
      'Despierta tu grandeza en 7 días',
      'Basado en el libro de Carlos Medina',
      'Fortalece 7 dimensiones de vida',
      'Ejercicios prácticos diarios'
    ],
    modulos: [
      {
        titulo: 'Módulo 1: El Despertar',
        descripcion: 'Introducción al desafío y los primeros pasos del despertar.',
        lecciones: [
          { titulo: 'Introducción: Despierta o morirás dos veces', duracion: 'Video' },
          { titulo: 'Día 1: La primera muerte — no vivir', duracion: 'Video' },
          { titulo: 'Día 2: Tu historia no es tu destino', duracion: 'Video' }
        ]
      },
      {
        titulo: 'Módulo 2: Las Dimensiones',
        descripcion: 'Fortalece las dimensiones de tu bienestar integral.',
        lecciones: [
          { titulo: 'Día 3: Dimensión física y mental', duracion: 'Video' },
          { titulo: 'Día 4: Dimensión emocional y espiritual', duracion: 'Video' },
          { titulo: 'Día 5: Dimensión relacional', duracion: 'Video' }
        ]
      },
      {
        titulo: 'Módulo 3: La Grandeza',
        descripcion: 'Despierta tu grandeza y establece tu nueva identidad.',
        lecciones: [
          { titulo: 'Día 6: Dimensión vocacional y financiera', duracion: 'Video' },
          { titulo: 'Día 7: El despertar — tu nueva identidad', duracion: 'Video' }
        ]
      }
    ]
  },
  {
    id: 'workshop-5000-millas',
    titulo: 'Workshop 5.000 Millas',
    subtitulo: 'Masterclass completa del movimiento 5.000 Millas',
    categoria: 'leon',
    nivel: 'Gratuito',
    duracion: '1 sesión',
    totalLecciones: 1,
    gratuito: true,
    destacado: true,
    youtubeId: 'WtVrY9SKB84',
    playlistId: null,
    descripcion: 'Masterclass completa del movimiento 5.000 Millas. Visión, método BDL y plan de acción.',
    beneficios: [
      'Método BDL completo en una sesión',
      'Masterclass intensiva con Carlos Medina',
      'Visión, método y plan de acción',
      'Herramientas prácticas inmediatas'
    ],
    modulos: [
      {
        titulo: 'Workshop Completo',
        descripcion: 'Masterclass del Método 5.000 Millas — Barco, Diamante y León.',
        lecciones: [
          { titulo: 'Workshop 5.000 Millas — Método BDL Completo', duracion: 'Sesión completa', youtubeId: 'WtVrY9SKB84' }
        ]
      }
    ]
  }
];

const DESAFIOS = [
  {
    id: 'desafio-28-dias',
    titulo: 'Desafío 28 Días: Un Encuentro Conmigo Mismo',
    subtitulo: 'Lecciones grabadas a las 3am en 2021 — El Método BDL en 4 semanas',
    categoria: 'diamante',
    gratuito: true,
    activo: true,
    youtubeId: '18S7wyLvZYw',
    playlistId: 'PLWxXlZghiePzTuw9oJseZVg8bgp4-o7Ll',
    cursoId: 'desafio-28-dias-curso',
    descripcion: '28 días que cambiarán tu forma de verte. Cada semana sigue una fase del Método BDL: del autoconocimiento a la soberanía. Lecciones grabadas a las 3 de la mañana por Carlos Medina durante 2021.',
    semanas: [
      {
        titulo: 'Semana 1 — El Barco ⛵',
        subtitulo: 'Autoconocimiento',
        dias: [
          { dia: 1, titulo: 'Bienvenida al desafío', descripcion: 'Conoce el mapa del viaje y prepárate para zarpar.' },
          { dia: 2, titulo: 'El punto de partida', descripcion: 'Escribe dónde estás hoy con honestidad radical.' },
          { dia: 3, titulo: 'Tus máscaras', descripcion: 'Identifica las máscaras que usas en público.' },
          { dia: 4, titulo: 'La herida fundacional', descripcion: 'Reconoce la herida que moldea tus decisiones.' },
          { dia: 5, titulo: 'Inventario de creencias', descripcion: 'Lista las creencias que te frenan y las que te impulsan.' },
          { dia: 6, titulo: 'Tu línea de tiempo', descripcion: 'Mapea los momentos que te definieron.' },
          { dia: 7, titulo: 'El verdadero norte', descripcion: 'Define tu dirección antes de avanzar.' }
        ]
      },
      {
        titulo: 'Semana 2 — El Diamante Interior 💎',
        subtitulo: 'Transformación interna',
        dias: [
          { dia: 8, titulo: 'La presión necesaria', descripcion: 'Acepta la incomodidad como herramienta de cambio.' },
          { dia: 9, titulo: 'Salud mental: limpia tu mente', descripcion: 'Elimina pensamientos tóxicos con intención.' },
          { dia: 10, titulo: 'Salud emocional: siente sin huir', descripcion: 'Practica la regulación emocional consciente.' },
          { dia: 11, titulo: 'Salud física: tu templo', descripcion: 'Diseña una rutina que honre tu cuerpo.' },
          { dia: 12, titulo: 'Salud espiritual: reconecta', descripcion: 'Cultiva el silencio y la conexión profunda.' },
          { dia: 13, titulo: 'Salud relacional: tus 5 personas', descripcion: 'Evalúa tu círculo íntimo sin culpa.' },
          { dia: 14, titulo: 'Integración interior', descripcion: 'Une las piezas del diamante que estás formando.' }
        ]
      },
      {
        titulo: 'Semana 3 — El Diamante Exterior 💎',
        subtitulo: 'Transformación externa',
        dias: [
          { dia: 15, titulo: 'Salud financiera', descripcion: 'Diagnostica tus creencias sobre la abundancia.' },
          { dia: 16, titulo: 'Tu propósito en una frase', descripcion: 'Destila tu razón de ser en palabras claras.' },
          { dia: 17, titulo: 'Comunica tu valor', descripcion: 'Aprende a mostrar quién eres sin arrogancia.' },
          { dia: 18, titulo: 'Límites sanos', descripcion: 'Di no sin culpa y sí con convicción.' },
          { dia: 19, titulo: 'Tu marca personal', descripcion: 'Alinea tu imagen exterior con tu identidad real.' },
          { dia: 20, titulo: 'Sistemas que te sostienen', descripcion: 'Crea rutinas y sistemas anti-frágiles.' },
          { dia: 21, titulo: 'El diamante brilla', descripcion: 'Celebra la transformación que ya empezó.' }
        ]
      },
      {
        titulo: 'Semana 4 — El León 🦁',
        subtitulo: 'Soberanía y liderazgo',
        dias: [
          { dia: 22, titulo: 'La corona es tuya', descripcion: 'Asume la autoridad sobre tu propia vida.' },
          { dia: 23, titulo: 'Decisiones de león', descripcion: 'Decide desde la identidad, no desde el miedo.' },
          { dia: 24, titulo: 'El rugido: tu voz', descripcion: 'Habla con verdad y compasión.' },
          { dia: 25, titulo: 'Lidera sirviendo', descripcion: 'El verdadero liderazgo es servicio.' },
          { dia: 26, titulo: 'Tu manada: forma comunidad', descripcion: 'Rodéate de personas que te desafíen.' },
          { dia: 27, titulo: 'El legado', descripcion: 'Define qué quieres dejar en el mundo.' },
          { dia: 28, titulo: 'El Génesis — 5.000 Millas', descripcion: 'Declara tu nueva identidad. ⛵ + 💎 = 🦁' }
        ]
      }
    ]
  },
  {
    id: 'desafio-7-dias',
    titulo: 'Desafío 7 Días: Despierta o Morirás Dos Veces',
    subtitulo: 'Basado en el libro de Carlos Medina — Despierta tu grandeza en 7 días',
    categoria: 'barco',
    gratuito: true,
    activo: true,
    youtubeId: null,
    playlistId: 'PLWxXlZghiePx6gJI_hN6Upoz83u-Dy4n5',
    cursoId: 'despierta-7-dias',
    descripcion: 'Basado en el libro "Despierta o morirás dos veces" de Carlos Medina. 7 días para despertar tu grandeza fortaleciendo las 7 dimensiones de tu vida.',
    semanas: [
      {
        titulo: 'Semana 1 — El Despertar ⛵',
        subtitulo: 'Despierta tu grandeza en 7 días',
        dias: [
          { dia: 0, titulo: 'Introducción', descripcion: 'Bienvenida al desafío. ¿Estás dormido o despierto?' },
          { dia: 1, titulo: 'La primera muerte — no vivir', descripcion: 'Reconoce las áreas donde estás dormido.' },
          { dia: 2, titulo: 'Tu historia no es tu destino', descripcion: 'Separa tu pasado de tu potencial.' },
          { dia: 3, titulo: 'Dimensión física y mental', descripcion: 'Despierta tu cuerpo y tu mente.' },
          { dia: 4, titulo: 'Dimensión emocional y espiritual', descripcion: 'Reconecta con tu sentir y tu propósito.' },
          { dia: 5, titulo: 'Dimensión relacional', descripcion: 'Evalúa y fortalece tus relaciones clave.' },
          { dia: 6, titulo: 'Dimensión vocacional y financiera', descripcion: 'Alinea tu trabajo y tu dinero con tu identidad.' },
          { dia: 7, titulo: 'El despertar', descripcion: 'Declara tu nueva identidad despierta.' }
        ]
      }
    ]
  }
];

/* ── Funciones de consulta ── */

function getCurso(id) {
  return CURSOS.find(c => c.id === id) || null;
}

function getCursosPorCategoria(categoria) {
  return CURSOS.filter(c => c.categoria === categoria);
}

function getCursosDestacados() {
  return CURSOS.filter(c => c.destacado);
}

function getCursosGratuitos() {
  return CURSOS.filter(c => c.gratuito);
}

function getCursosRelacionados(cursoId) {
  const curso = getCurso(cursoId);
  if (!curso) return [];
  return CURSOS.filter(c => c.id !== cursoId && c.categoria === curso.categoria);
}

function contarLecciones() {
  return CURSOS.reduce((total, curso) => {
    return total + curso.modulos.reduce((sum, mod) => sum + mod.lecciones.length, 0);
  }, 0);
}

function getDesafio(id) {
  return DESAFIOS.find(d => d.id === id) || null;
}

function getDesafiosActivos() {
  return DESAFIOS.filter(d => d.activo);
}

function getYouTubeThumbnail(youtubeId) {
  if (!youtubeId) return null;
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

/**
 * Genera la URL de embed de YouTube.
 * Si el curso tiene playlistId, usa el embed de playlist completa.
 * Si solo tiene youtubeId, usa el embed de video individual.
 */
function getYouTubeEmbedUrl(curso) {
  if (curso.playlistId) {
    return `https://www.youtube.com/embed/videoseries?list=${curso.playlistId}`;
  }
  if (curso.youtubeId) {
    return `https://www.youtube.com/embed/${curso.youtubeId}`;
  }
  return null;
}

function getCategoria(id) {
  return CATEGORIAS[id] || null;
}
