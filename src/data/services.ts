export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  color: string;
  heroTitle1: string;
  heroTitle2: string;
  shortDescription: string;
  description: string;
  features: string[];
  deliverables: string[];
  duration: string;
  targetAudience: string;
}

export const services: ServiceItem[] = [
  {
    id: '01',
    slug: 'fy-start',
    title: 'Fy Start',
    category: 'EDITORIAL',
    color: '#fb8500',
    heroTitle1: 'ASESORÍA Y ADAPTACIÓN',
    heroTitle2: 'EDITORIAL CIENTÍFICA',
    shortDescription: 'Asesoría en la selección de revistas indexadas, adaptación al formato del manuscrito y acompañamiento en el envío y revisión por pares.',
    description: 'El servicio Fy Start está diseñado para investigadores que cuentan con un borrador de investigación y necesitan maximizar las probabilidades de aceptación en revistas indizadas de alto impacto (Scopus, Web of Science). Nos encargamos de auditar la estructura IMRyD, seleccionar las mejores alternativas de publicación según la temática y formatear el artículo bajo las normas exigidas por la revista objetivo.',
    features: [
      'Selección estratégica de revistas indizadas (Scopus Q1-Q4, WoS)',
      'Revisión y adaptación de la estructura IMRyD',
      'Redacción de cartas de presentación (Cover Letters)',
      'Acompañamiento en la respuesta a revisores (Peer Review Support)',
      'Formato de referencias bibliográficas (APA, Vancouver, IEEE, Nature, etc.)'
    ],
    deliverables: [
      'Informe de evaluación editorial y selección de 3 revistas candidatas',
      'Manuscrito completamente formateado listo para envío',
      'Plantilla de respuesta a revisores pares'
    ],
    duration: '2 - 3 semanas',
    targetAudience: 'Investigadores, tesistas de posgrado y docentes universitarios.'
  },
  {
    id: '02',
    slug: 'fy-prime',
    title: 'Fy Prime',
    category: 'METODOLOGÍA',
    color: '#00a2af',
    heroTitle1: 'DISEÑO METODOLÓGICO Y',
    heroTitle2: 'ESTADÍSTICA AVANZADA',
    shortDescription: 'Diseño metodológico completo, análisis estadístico de datos en R o Python y estructuración robusta de pruebas de hipótesis.',
    description: 'Fy Prime brinda un soporte metodológico de nivel experto para investigaciones cuantitativas, cualitativas y mixtas. Nuestro equipo de bioestadísticos y científicos de datos procesa tus variables con el más alto rigor analítico utilizando entornos como R, Python, SPSS y Stata, asegurando la consistencia interna y la validez científica de tus hallazgos.',
    features: [
      'Diseño de protocolos de investigación y cálculo de tamaño muestral',
      'Procesamiento y modelado estadístico avanzado (R, Python, Stata)',
      'Pruebas de hipótesis paramétricas y no paramétricas',
      'Elaboración de tablas y figuras estadísticas en alta resolución',
      'Soporte metodológico ante comités de ética institucional'
    ],
    deliverables: [
      'Código fuente de análisis reproducible (.R, .ipynb)',
      'Reporte estadístico detallado con interpretación de p-valores e intervalos de confianza',
      'Gráficos vectoriales aptos para publicación'
    ],
    duration: '3 - 4 semanas',
    targetAudience: 'Equipos de investigación, laboratorios científicos e instituciones de salud.'
  },
  {
    id: '03',
    slug: 'fy-review',
    title: 'Fy Review',
    category: 'CAPACITACIÓN',
    color: '#ffb703',
    heroTitle1: 'MENTORÍAS Y TALLERES DE',
    heroTitle2: 'CAPACITACIÓN CIENTÍFICA',
    shortDescription: 'Talleres prácticos de redacción científica, capacitación en herramientas de análisis y mentorías individuales.',
    description: 'Fy Review potencia las habilidades científicas de investigadores y grupos de estudio a través de capacitaciones personalizadas y mentorías 1 a 1. Aprende a redactar artículos de revisión sistemática (PRISMA), domina la gestión de referencias y perfecciona la argumentación científica con el acompañamiento directo de editores y revisores con amplia trayectoria.',
    features: [
      'Talleres intensivos de redacción científica e IMRyD',
      'Cursos de bioestadística aplicada y visualización de datos',
      'Capacitación en revisiones sistemáticas e historia narrativa (metodología PRISMA)',
      'Mentorías individuales de acompañamiento durante la redacción',
      'Uso avanzado de gestores bibliográficos (Zotero, Mendeley)'
    ],
    deliverables: [
      'Acceso a sesiones en vivo y grabadas con material práctico',
      'Feedback detallado sesión a sesión sobre los avances del manuscrito',
      'Certificado de participación institucional'
    ],
    duration: 'Personalizado (1 a 8 semanas)',
    targetAudience: 'Estudiantes de maestría y doctorado, semilleros de investigación.'
  },
  {
    id: '04',
    slug: 'fy-titulacion',
    title: 'Fy Titulación',
    category: 'CALIDAD',
    color: '#475569',
    heroTitle1: 'CORRECCIÓN DE ESTILO Y',
    heroTitle2: 'CONTROL DE CALIDAD',
    shortDescription: 'Corrección de estilo científico, adaptación a normas de citado internacional y detección de similitud de textos.',
    description: 'Garantiza la máxima pulcritud formal y académica con Fy Titulación. Este servicio realiza un control de calidad exhaustivo sobre tesis de pregrado/posgrado y artículos científicos. Eliminamos ambigüedades de redacción, corregimos errores ortotipográficos, verificamos la concordancia del citado y realizamos análisis preventivos de originalidad para garantizar la integridad académica.',
    features: [
      'Corrección de estilo ortotipográfico y sintaxis académica',
      'Normalización rigurosa de normas de citado (APA 7, Vancouver, IEEE)',
      'Análisis de similitud de texto con reportes detallados (Turnitin)',
      'Verificación de consistencia entre citas y lista de referencias',
      'Formateo institucional de tesis para repositorios universitarios'
    ],
    deliverables: [
      'Documento corregido con marcas de cambio y versión limpia final',
      'Reporte completo de similitud y originalidad',
      'Certificado de corrección de estilo firmado'
    ],
    duration: '1 - 2 semanas',
    targetAudience: 'Candidatos a título profesional, maestría o doctorado.'
  },
  {
    id: '05',
    slug: 'development-lab',
    title: 'Development lab',
    category: 'TECNOLOGÍA',
    color: '#22c55e',
    heroTitle1: 'DESARROLLO TECNOLÓGICO Y',
    heroTitle2: 'OPEN SCIENCE',
    shortDescription: 'Creación de bases de datos relacionales, dashboards interactivos y sitios web para divulgación científica.',
    description: 'Development Lab conecta la ciencia con la tecnología web moderna. Construimos plataformas interactivas para proyectar tus resultados de investigación hacia la comunidad científica global: desde repositorios de Open Data y dashboards analíticos (Shiny, Streamlit, web apps) hasta sitios web dedicados para proyectos y laboratorios de investigación.',
    features: [
      'Creación de bases de datos científicas seguras en la nube',
      'Dashboards interactivos para la visualización de datos de investigación',
      'Desarrollo de sitios web para proyectos de investigación y laboratorios',
      'Repositorios de datos abiertos cumpliendo principios FAIR',
      'Integración con APIs científicas y sistemas GIS'
    ],
    deliverables: [
      'Plataforma web o dashboard desplegado en la nube',
      'Documentación técnica del proyecto y guía de administración',
      'Repositorio de código fuente documentado'
    ],
    duration: '3 - 6 semanas',
    targetAudience: 'Laboratorios, centros de investigación, proyectos con financiamiento público o privado.'
  }
];
