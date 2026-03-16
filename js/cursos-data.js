/**
 * Academia 5.000 Millas — Base de datos de cursos
 * Método BDL: ⛵ + 💎 = 🦁
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
    id: 'autoconocimiento',
    titulo: 'El Viaje del Autoconocimiento',
    subtitulo: 'Descubre quién eres antes de decidir a dónde vas',
    categoria: 'barco',
    nivel: 'Fundamento',
    duracion: '2 horas',
    totalLecciones: 6,
    gratuito: true,
    destacado: true,
    youtubeId: 'REEMPLAZAR',
    descripcion: 'Este curso es el primer paso en tu viaje de 5.000 millas. Antes de zarpar, necesitas conocer tu embarcación: tus fortalezas, tus sombras, tus patrones y tu verdadero norte. A través de ejercicios prácticos y reflexiones profundas, construirás el mapa de tu identidad.',
    beneficios: [
      'Identifica tus patrones limitantes',
      'Descubre tus fortalezas ocultas',
      'Construye tu mapa de identidad personal',
      'Define tu verdadero norte'
    ],
    modulos: [
      {
        titulo: 'Módulo 1: El Puerto de Partida',
        descripcion: '¿Dónde estás realmente? Diagnóstico honesto de tu punto de partida.',
        lecciones: [
          { titulo: 'Lección 1: El espejo sin filtros', duracion: '18 min', youtubeId: 'REEMPLAZAR' },
          { titulo: 'Lección 2: Tus 5 máscaras sociales', duracion: '22 min', youtubeId: 'REEMPLAZAR' }
        ]
      },
      {
        titulo: 'Módulo 2: El Mapa Interior',
        descripcion: 'Cartografía de tu mundo interno: creencias, valores, heridas.',
        lecciones: [
          { titulo: 'Lección 3: Creencias heredadas vs elegidas', duracion: '20 min', youtubeId: 'REEMPLAZAR' },
          { titulo: 'Lección 4: El inventario de valores', duracion: '18 min', youtubeId: 'REEMPLAZAR' }
        ]
      },
      {
        titulo: 'Módulo 3: La Brújula',
        descripcion: 'Define tu verdadero norte y traza la ruta.',
        lecciones: [
          { titulo: 'Lección 5: Tu propósito en una frase', duracion: '22 min', youtubeId: 'REEMPLAZAR' },
          { titulo: 'Lección 6: El compromiso de las 5.000 millas', duracion: '20 min', youtubeId: 'REEMPLAZAR' }
        ]
      }
    ]
  },
  {
    id: 'salud-heptadimensional',
    titulo: 'Salud Heptadimensional',
    subtitulo: 'Transforma las 7 dimensiones de tu bienestar',
    categoria: 'diamante',
    nivel: 'Intermedio',
    duracion: '3 horas',
    totalLecciones: 7,
    gratuito: true,
    destacado: true,
    youtubeId: 'REEMPLAZAR',
    descripcion: 'La salud no es solo ausencia de enfermedad. El Método BDL reconoce 7 dimensiones del bienestar integral: física, mental, emocional, relacional, financiera, de propósito y espiritual. Este curso te guía a través de cada dimensión con herramientas prácticas de transformación.',
    beneficios: [
      'Evalúa tus 7 dimensiones de salud',
      'Crea un plan de transformación integral',
      'Herramientas prácticas para cada dimensión',
      'El diamante se forma bajo presión'
    ],
    modulos: [
      {
        titulo: 'Módulo 1: El Diagnóstico Heptadimensional',
        descripcion: 'Evalúa cada dimensión de tu bienestar con honestidad radical.',
        lecciones: [
          { titulo: 'Lección 1: Las 7 dimensiones del ser', duracion: '25 min', youtubeId: 'REEMPLAZAR' },
          { titulo: 'Lección 2: Tu rueda de la vida real', duracion: '20 min', youtubeId: 'REEMPLAZAR' }
        ]
      },
      {
        titulo: 'Módulo 2: Cuerpo, Mente y Emociones',
        descripcion: 'Las tres dimensiones internas que sostienen todo lo demás.',
        lecciones: [
          { titulo: 'Lección 3: Salud física: el templo', duracion: '28 min', youtubeId: 'REEMPLAZAR' },
          { titulo: 'Lección 4: Salud mental y emocional', duracion: '25 min', youtubeId: 'REEMPLAZAR' }
        ]
      },
      {
        titulo: 'Módulo 3: Relaciones, Finanzas, Propósito y Espíritu',
        descripcion: 'Las dimensiones externas y trascendentes.',
        lecciones: [
          { titulo: 'Lección 5: Relaciones y finanzas saludables', duracion: '30 min', youtubeId: 'REEMPLAZAR' },
          { titulo: 'Lección 6: Propósito y espiritualidad', duracion: '25 min', youtubeId: 'REEMPLAZAR' },
          { titulo: 'Lección 7: Integración: tu plan heptadimensional', duracion: '27 min', youtubeId: 'REEMPLAZAR' }
        ]
      }
    ]
  },
  {
    id: 'soberania-interior',
    titulo: 'Soberanía Interior',
    subtitulo: 'Gobierna tu mundo interior para liderar el exterior',
    categoria: 'leon',
    nivel: 'Avanzado',
    duracion: '2.5 horas',
    totalLecciones: 6,
    gratuito: true,
    destacado: true,
    youtubeId: 'REEMPLAZAR',
    descripcion: 'Un león no pide permiso para rugir. Este curso te lleva al corazón del liderazgo BDL: la soberanía interior. Aprenderás a gobernar tus emociones, establecer límites sanos, tomar decisiones desde la identidad y no desde el miedo, y liderar con amor, poder y dominio propio.',
    beneficios: [
      'Desarrolla dominio propio real',
      'Establece límites desde el amor',
      'Toma decisiones desde la identidad',
      'Lidera sin necesidad de aprobación'
    ],
    modulos: [
      {
        titulo: 'Módulo 1: El Trono Interior',
        descripcion: '¿Quién gobierna tu vida? Recupera tu autoridad interna.',
        lecciones: [
          { titulo: 'Lección 1: El rey destronado', duracion: '22 min', youtubeId: 'REEMPLAZAR' },
          { titulo: 'Lección 2: Dominio propio vs control', duracion: '25 min', youtubeId: 'REEMPLAZAR' }
        ]
      },
      {
        titulo: 'Módulo 2: El Rugido Auténtico',
        descripcion: 'Encuentra tu voz y úsala con poder y compasión.',
        lecciones: [
          { titulo: 'Lección 3: Límites que liberan', duracion: '20 min', youtubeId: 'REEMPLAZAR' },
          { titulo: 'Lección 4: Comunicación soberana', duracion: '25 min', youtubeId: 'REEMPLAZAR' }
        ]
      },
      {
        titulo: 'Módulo 3: El Liderazgo del León',
        descripcion: 'Lidera desde la identidad restaurada.',
        lecciones: [
          { titulo: 'Lección 5: Decisiones desde la identidad', duracion: '23 min', youtubeId: 'REEMPLAZAR' },
          { titulo: 'Lección 6: El león que sirve', duracion: '25 min', youtubeId: 'REEMPLAZAR' }
        ]
      }
    ]
  },
  {
    id: 'ia-emprendedores',
    titulo: 'IA para Emprendedores',
    subtitulo: 'Multiplica tu impacto con inteligencia artificial',
    categoria: 'leon',
    nivel: 'Práctico',
    duracion: '3 horas',
    totalLecciones: 8,
    gratuito: true,
    destacado: true,
    youtubeId: 'REEMPLAZAR',
    descripcion: 'La IA no reemplaza al león, lo potencia. Este curso práctico te enseña a usar herramientas de inteligencia artificial para acelerar tu emprendimiento, automatizar tareas repetitivas, crear contenido de impacto y escalar tu visión. No necesitas saber programar.',
    beneficios: [
      'Domina herramientas de IA sin programar',
      'Automatiza tu negocio inteligentemente',
      'Crea contenido de impacto con IA',
      'Escala tu visión con tecnología'
    ],
    modulos: [
      {
        titulo: 'Módulo 1: IA para Humanos',
        descripcion: 'Entiende la IA sin tecnicismos y descubre su potencial real.',
        lecciones: [
          { titulo: 'Lección 1: IA desmitificada', duracion: '18 min', youtubeId: 'REEMPLAZAR' },
          { titulo: 'Lección 2: Tu ecosistema de herramientas IA', duracion: '22 min', youtubeId: 'REEMPLAZAR' },
          { titulo: 'Lección 3: Prompting: hablar con la IA', duracion: '25 min', youtubeId: 'REEMPLAZAR' }
        ]
      },
      {
        titulo: 'Módulo 2: IA en tu Negocio',
        descripcion: 'Aplicaciones prácticas de IA para emprendedores.',
        lecciones: [
          { titulo: 'Lección 4: Contenido con IA', duracion: '22 min', youtubeId: 'REEMPLAZAR' },
          { titulo: 'Lección 5: Marketing automatizado', duracion: '20 min', youtubeId: 'REEMPLAZAR' },
          { titulo: 'Lección 6: Análisis y decisiones con datos', duracion: '23 min', youtubeId: 'REEMPLAZAR' }
        ]
      },
      {
        titulo: 'Módulo 3: Escala con IA',
        descripcion: 'Sistemas y automatizaciones para crecer sin límites.',
        lecciones: [
          { titulo: 'Lección 7: Automatiza flujos de trabajo', duracion: '25 min', youtubeId: 'REEMPLAZAR' },
          { titulo: 'Lección 8: Tu plan de implementación IA', duracion: '25 min', youtubeId: 'REEMPLAZAR' }
        ]
      }
    ]
  }
];

const DESAFIOS = [
  {
    id: 'desafio-28-dias',
    titulo: 'Desafío 28 Días: Transforma tu Identidad',
    subtitulo: 'El Método BDL en 4 semanas de inmersión total',
    categoria: 'diamante',
    gratuito: true,
    activo: true,
    youtubeId: '18S7wyLvZYw',
    descripcion: '28 días que cambiarán tu forma de verte. Cada semana sigue una fase del Método BDL: del autoconocimiento a la soberanía.',
    semanas: [
      {
        titulo: 'Semana 1 — El Barco ⛵',
        subtitulo: 'Autoconocimiento',
        dias: [
          { dia: 1, titulo: 'El punto de partida', descripcion: 'Escribe dónde estás hoy con honestidad radical.' },
          { dia: 2, titulo: 'Tus 3 máscaras', descripcion: 'Identifica las máscaras que usas en público.' },
          { dia: 3, titulo: 'La herida fundacional', descripcion: 'Reconoce la herida que moldea tus decisiones.' },
          { dia: 4, titulo: 'Inventario de creencias', descripcion: 'Lista las creencias que te frenan y las que te impulsan.' },
          { dia: 5, titulo: 'Tu línea de tiempo', descripcion: 'Mapea los momentos que te definieron.' },
          { dia: 6, titulo: 'Carta al yo pasado', descripcion: 'Escribe lo que necesitabas escuchar.' },
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
          { dia: 15, titulo: 'Salud financiera: tu relación con el dinero', descripcion: 'Diagnostica tus creencias sobre la abundancia.' },
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
          { dia: 28, titulo: 'El león ha despertado', descripcion: 'Declara tu nueva identidad. ⛵ + 💎 = 🦁' }
        ]
      }
    ]
  },
  {
    id: 'desafio-7-dias',
    titulo: 'Desafío 7 Días: Descubre tu Identidad',
    subtitulo: 'Una semana para empezar tu viaje interior',
    categoria: 'barco',
    gratuito: true,
    activo: false,
    youtubeId: null,
    descripcion: 'Un desafío introductorio de 7 días para comenzar tu viaje de autoconocimiento con el Método BDL.',
    semanas: []
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
  if (!youtubeId || youtubeId === 'REEMPLAZAR') return null;
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

function getCategoria(id) {
  return CATEGORIAS[id] || null;
}
