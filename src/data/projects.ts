export const projects = [
  {
    slug: 'impacto-cambio-climatico',
    category: 'INVESTIGACIÓN APLICADA',
    title: 'Impacto del cambio climático en cultivos de café andinos',
    heroTitlePart1: 'IMPACTO DEL CAMBIO',
    heroTitlePart2: 'CLIMÁTICO EN CULTIVOS',
    subtitle: 'Estudio de la variación de temperatura y precipitación en la productividad agrícola de alta montaña',
    description: 'Este artículo de investigación analiza cómo los cambios proyectados en las temperaturas mínimas y los patrones estacionales de lluvia afectan el rendimiento del café arábico en la cordillera andina. A través de modelos bioclimáticos y datos históricos de cosecha de la última década, se evalúan escenarios futuros y se proponen estrategias locales de adaptación agrícola.',
    imagePlaceholderClass: 'bg-[#0d182b]', // Dark Navy match
    objectives: [
      'Cuantificar la pérdida potencial de aptitud climática de suelos cafetaleros tradicionales.',
      'Modelar el impacto socioeconómico en los pequeños agricultores de la región andina.',
      'Sugerir variedades de café resistentes a temperaturas elevadas y sequías prolongadas.'
    ],
    metrics: [
      { value: '15', label: 'ZONAS EVALUADAS' },
      { value: '12 años', label: 'DATOS HISTÓRICOS' },
      { value: '3', label: 'MODELOS BIOCLIMÁTICOS' }
    ]
  },
  {
    slug: 'modelado-predictivo-dengue',
    category: 'DEVELOPMENT LAB',
    title: 'Modelado predictivo de brotes de dengue con IA',
    heroTitlePart1: 'MODELADO PREDICTIVO',
    heroTitlePart2: 'DE BROTES DE DENGUE',
    subtitle: 'Aplicación de machine learning y datos satelitales para predecir zonas de propagación epidemiológica.',
    description: 'En este desarrollo se implementaron algoritmos de aprendizaje automático para procesar imágenes satelitales y datos meteorológicos. El objetivo es identificar patrones espaciales y temporales que preceden a los brotes de dengue en áreas urbanas y periurbanas, permitiendo a los sistemas de salud pública intervenir de manera anticipada.',
    imagePlaceholderClass: 'bg-[#94a3b8]',
    objectives: [
      'Desarrollar un modelo de machine learning con un 85% de precisión predictiva.',
      'Integrar datos de humedad, temperatura y densidad poblacional en tiempo real.',
      'Crear una plataforma de alerta temprana para autoridades sanitarias locales.'
    ],
    metrics: [
      { value: '85%', label: 'PRECISIÓN PREDICTIVA' },
      { value: '4', label: 'VARIABLES CLIMÁTICAS' },
      { value: '10+', label: 'CIUDADES MONITOREADAS' }
    ]
  },
  {
    slug: 'microplasticos-amazonas',
    category: 'ACADEMY',
    title: 'Presencia de microplásticos en el Río Amazonas',
    heroTitlePart1: 'PRESENCIA DE MICROPLÁSTICOS',
    heroTitlePart2: 'EN EL RÍO AMAZONAS',
    subtitle: 'Evaluación cuantitativa y caracterización polimérica de contaminantes en la cuenca alta y afluentes.',
    description: 'Este estudio pionero cuantifica la concentración de microplásticos en muestras de agua superficial y sedimentos del río Amazonas. Mediante espectroscopía infrarroja por transformada de Fourier (FTIR), se determinó la composición química de las partículas, identificando las principales fuentes de contaminación plástica en la región.',
    imagePlaceholderClass: 'bg-[#2f3e4f]',
    objectives: [
      'Establecer una línea base de contaminación por microplásticos en la cuenca alta.',
      'Identificar los polímeros más abundantes (ej. polietileno, polipropileno).',
      'Evaluar la correlación entre proximidad a zonas urbanas y concentración de partículas.'
    ],
    metrics: [
      { value: '500+', label: 'MUESTRAS ANALIZADAS' },
      { value: '6', label: 'POLÍMEROS IDENTIFICADOS' },
      { value: '1200 km', label: 'EXTENSIÓN DEL MUESTREO' }
    ]
  },
  {
    slug: 'analisis-genomico-sars-cov-2',
    category: 'PUBLICATION',
    title: 'Análisis genómico del SARS-CoV-2 en poblaciones andinas',
    heroTitlePart1: 'ANÁLISIS GENÓMICO',
    heroTitlePart2: 'DEL SARS-COV-2',
    subtitle: 'Secuenciación genómica y filogenia molecular del virus para identificar variantes y mutaciones locales.',
    description: 'Se llevó a cabo la secuenciación del genoma completo de cepas del virus SARS-CoV-2 aisladas de pacientes en regiones andinas de alta altitud. El análisis filogenético permitió trazar las rutas de introducción y dispersión del virus, así como identificar mutaciones específicas que podrían estar asociadas con adaptaciones locales o variaciones en la virulencia.',
    imagePlaceholderClass: 'bg-[#94a3b8]', 
    objectives: [
      'Secuenciar 200 genomas completos de SARS-CoV-2 de muestras clínicas.',
      'Construir árboles filogenéticos para determinar el origen de las cepas circulantes.',
      'Detectar mutaciones de interés epidemiológico en la proteína Spike.'
    ],
    metrics: [
      { value: '200', label: 'GENOMAS SECUENCIADOS' },
      { value: '5', label: 'VARIANTES IDENTIFICADAS' },
      { value: '100%', label: 'COBERTURA GENÓMICA' }
    ]
  },
  {
    slug: 'desnutricion-cronica-infantil',
    category: 'RESEARCH',
    title: 'Determinantes de desnutrición crónica infantil rural',
    heroTitlePart1: 'DETERMINANTES DE DESNUTRICIÓN',
    heroTitlePart2: 'CRÓNICA INFANTIL',
    subtitle: 'Estudio epidemiológico observacional sobre determinantes socioculturales en comunidades andinas.',
    description: 'A través de un enfoque mixto (cuantitativo y cualitativo), este estudio analiza los múltiples factores que contribuyen a la alta prevalencia de la desnutrición crónica infantil en zonas rurales andinas. Se exploran no solo variables dietéticas y de acceso a servicios de salud, sino también creencias culturales, prácticas de cuidado materno-infantil y seguridad alimentaria en el hogar.',
    imagePlaceholderClass: 'bg-[#2f3e4f]', 
    objectives: [
      'Identificar las prácticas de alimentación complementaria en menores de 2 años.',
      'Analizar el impacto del acceso a agua segura y saneamiento básico.',
      'Proponer intervenciones de base comunitaria culturalmente pertinentes.'
    ],
    metrics: [
      { value: '350', label: 'FAMILIAS ENCUESTADAS' },
      { value: '30', label: 'ENTREVISTAS A PROFUNDIDAD' },
      { value: '5', label: 'COMUNIDADES PARTICIPANTES' }
    ]
  },
  {
    slug: 'extractos-botanicos-cancer',
    category: 'REVIEW',
    title: 'Extractos botánicos contra células de cáncer de colon',
    heroTitlePart1: 'EXTRACTOS BOTÁNICOS',
    heroTitlePart2: 'CONTRA CÁNCER DE COLON',
    subtitle: 'Ensayo in vitro sobre el potencial antiproliferativo e inductor de apoptosis de compuestos activos nativos.',
    description: 'Esta investigación documenta la evaluación de extractos metanólicos y acuosos de tres plantas nativas de la Amazonía sobre líneas celulares de cáncer de colon (HT-29 y HCT-116). Mediante ensayos MTT y citometría de flujo, se determinó la viabilidad celular y el mecanismo de muerte celular, abriendo nuevas vías para el desarrollo de coadyuvantes oncológicos basados en la biodiversidad tradicional.',
    imagePlaceholderClass: 'bg-[#94a3b8]', 
    objectives: [
      'Evaluar la citotoxicidad de 3 extractos vegetales en líneas celulares tumorales.',
      'Determinar el mecanismo de acción pro-apoptótico de los extractos más activos.',
      'Aislar las fracciones ricas en polifenoles y alcaloides responsables de la actividad.'
    ],
    metrics: [
      { value: '3', label: 'PLANTAS NATIVAS EVALUADAS' },
      { value: '2', label: 'LÍNEAS CELULARES (HT-29, HCT-116)' },
      { value: '<50µg/mL', label: 'IC50 PROMEDIO OBTENIDO' }
    ]
  }
];
