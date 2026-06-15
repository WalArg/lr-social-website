// ─── Brand Colors ────────────────────────────────────────────────
export const COLORS = {
  primary: '#8B5CF6',      // Violeta principal
  primaryLight: '#A78BFA',  // Violeta claro
  primaryDark: '#7C3AED',   // Violeta oscuro
  accent: '#C084FC',        // Púrpura accent
  background: '#050507',    // Negro profundo
  surface: '#0A0A0F',       // Superficie
  surfaceLight: '#1A1A2E',  // Cards
  surfaceBorder: '#2A2A3E', // Bordes
  text: '#FFFFFF',          // Texto principal
  textMuted: '#9CA3AF',     // Texto secundario
  textDim: '#6B7280',       // Texto tenue
  success: '#22C55E',       // Verde
} as const;

// ─── Company Info ────────────────────────────────────────────────
export const COMPANY = {
  name: 'LR Social Media & Content',
  shortName: 'LR',
  tagline: 'Hacemos crecer tu marca en redes sociales',
  description: 'Somos un equipo especializado en transformar redes sociales en herramientas reales de venta.',
  whatsapp: 'https://wa.link/fj0ujx',
  instagram: 'https://www.instagram.com/lr.socialcontent/',
  email: 'info@lrsocialcontent.com',
  location: 'Argentina',
} as const;

// ─── Navigation ──────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contacto', href: '/contacto' },
] as const;

// ─── Services ────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 'social-media',
    title: 'Social Media Manager',
    description: 'Gestión integral de tus redes sociales. Planificamos, publicamos y optimizamos tu presencia digital.',
    icon: '📱',
    features: [
      'Gestión de Instagram, Facebook, TikTok',
      'Calendario de contenido mensual',
      'Interacción con tu comunidad',
      'Informes de rendimiento',
    ],
  },
  {
    id: 'contenido',
    title: 'Contenido & Reels',
    description: 'Fotos, videos y producción visual de alto impacto para que tu marca destaque.',
    icon: '🎬',
    features: [
      'Reels y videos cortos',
      'Fotografía de producto',
      'Diseño de carruseles',
      'Edición profesional',
    ],
  },
  {
    id: 'estrategia',
    title: 'Estrategia Digital',
    description: 'Planificación con propósito y objetivos claros para que cada acción tenga impacto.',
    icon: '📊',
    features: [
      'Análisis de competencia',
      'Definición de público objetivo',
      'Plan de acción mensual',
      'KPIs y objetivos medibles',
    ],
  },
  {
    id: 'copywriting',
    title: 'Copywriting',
    description: 'Textos que conectan y convierten. Cada palabra pensada para generar resultados.',
    icon: '✍️',
    features: [
      'Copy para redes sociales',
      'Textos de venta',
      'Guiones para reels',
      'Storytelling de marca',
    ],
  },
  {
    id: 'metricas',
    title: 'Métricas & Reportes',
    description: 'Decisiones basadas en datos reales. Sin datos no sabés qué funciona.',
    icon: '📈',
    features: [
      'Reportes mensuales detallados',
      'Análisis de engagement',
      'Seguimiento de KPIs',
      'Recomendaciones de mejora',
    ],
  },
  {
    id: 'community',
    title: 'Community Manager',
    description: 'Gestión activa de tu comunidad. Respondemos, interactuamos y fidelizamos.',
    icon: '💬',
    features: [
      'Respuesta a mensajes y comentarios',
      'Gestión de crisis',
      'Generación de engagement',
      'Construcción de comunidad',
    ],
  },
] as const;

// ─── Stats ───────────────────────────────────────────────────────
export const STATS = [
  { value: 50, suffix: '+', label: 'Marcas Gestionadas', sublabel: 'Emprendimientos y empresas' },
  { value: 500, suffix: 'K+', label: 'Alcance Generado', sublabel: 'En redes sociales' },
  { value: 1200, suffix: '+', label: 'Contenidos Creados', sublabel: 'Reels, posts y stories' },
  { value: 100, suffix: '%', label: 'Compromiso', sublabel: 'Con cada proyecto' },
] as const;

// ─── Testimonials ────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote: 'LR transformó por completo nuestra presencia en redes. En 3 meses triplicamos nuestro engagement y empezamos a recibir clientes desde Instagram.',
    author: 'María G.',
    company: 'Estudio de Arquitectura',
    rating: 5,
  },
  {
    quote: 'Profesionales de verdad. Entienden la marca, proponen ideas creativas y los resultados hablan por sí solos. 100% recomendados.',
    author: 'Lucas R.',
    company: 'Gastronomía',
    rating: 5,
  },
  {
    quote: 'Nos ayudaron a pasar de no tener estrategia a tener un plan claro y contenido de calidad. Nuestras redes nunca se vieron mejor.',
    author: 'Carolina S.',
    company: 'Inmobiliaria',
    rating: 5,
  },
  {
    quote: 'El equipo de LR es súper dedicado. Se nota que les importa cada cliente. Los reportes mensuales nos ayudan a entender qué funciona.',
    author: 'Diego M.',
    company: 'E-commerce',
    rating: 5,
  },
] as const;

// ─── Industries ──────────────────────────────────────────────────
export const INDUSTRIES = [
  'Gastronomía',
  'Inmobiliarias',
  'E-commerce',
  'Salud & Bienestar',
  'Moda',
  'Arquitectura',
  'Fitness',
  'Educación',
  'Tecnología',
  'Servicios Profesionales',
] as const;

// ─── Process Steps ───────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Consulta Inicial',
    description: 'Nos conocemos, entendemos tu marca y tus objetivos. Analizamos tu situación actual en redes.',
  },
  {
    number: '02',
    title: 'Estrategia',
    description: 'Diseñamos un plan personalizado con calendario de contenido, pilares temáticos y KPIs.',
  },
  {
    number: '03',
    title: 'Ejecución',
    description: 'Creamos contenido de calidad, gestionamos tus redes y construimos tu comunidad día a día.',
  },
  {
    number: '04',
    title: 'Resultados',
    description: 'Medimos, analizamos y optimizamos. Te mostramos resultados reales con reportes mensuales.',
  },
] as const;

// ─── Values ──────────────────────────────────────────────────────
export const VALUES = [
  {
    title: 'Estrategia Personalizada',
    description: 'Cada cliente es único. Cada plan también. No usamos fórmulas genéricas.',
    icon: '🎯',
  },
  {
    title: 'Resultados Medibles',
    description: 'Decisiones basadas en datos reales, no suposiciones. Te mostramos números concretos.',
    icon: '📊',
  },
  {
    title: 'Contenido de Calidad',
    description: 'Gestión profesional que construye marcas sólidas y genera confianza.',
    icon: '✨',
  },
] as const;

// ─── Portfolio Projects ──────────────────────────────────────────
export const PROJECTS = [
  {
    id: 'proyecto-1',
    title: 'Marca de Gastronomía',
    category: 'Social Media + Contenido',
    description: 'Gestión integral de redes sociales para restaurante. Reels, fotografía de producto y estrategia de contenido.',
    results: '+200% engagement en 3 meses',
    color: '#8B5CF6',
  },
  {
    id: 'proyecto-2',
    title: 'Inmobiliaria Digital',
    category: 'Estrategia + Community Manager',
    description: 'Posicionamiento en Instagram para agente inmobiliario. Contenido educativo y generación de leads.',
    results: '+45 consultas mensuales',
    color: '#06B6D4',
  },
  {
    id: 'proyecto-3',
    title: 'E-commerce Moda',
    category: 'Contenido + Copywriting',
    description: 'Producción visual y textos de venta para marca de indumentaria. Reels y carruseles de impacto.',
    results: '+150% en ventas online',
    color: '#F472B6',
  },
  {
    id: 'proyecto-4',
    title: 'Estudio de Fitness',
    category: 'Social Media Manager',
    description: 'Gestión completa de Instagram. Calendario de contenido, interacción con comunidad y reportes.',
    results: '+3K seguidores en 2 meses',
    color: '#F59E0B',
  },
] as const;
