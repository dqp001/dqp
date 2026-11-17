// =====================================================================
//  EDITA SOLO ESTE ARCHIVO para cambiar el contenido de tu portfolio.
//  No hace falta tocar el HTML, el CSS ni main.js.
// =====================================================================

const DATOS = {
  nombre: "Daniela Quintana",
  nombreCompleto: "Daniela Itzel Quintana Peñaloza",
  iniciales: "DQ",
  // Frases que se van escribiendo solas en la portada
  roles: [
    "Estratega de contenido",
    "Community Manager",
    "Branding e identidad visual",
    "Meta Ads y generación de leads",
    "Especialista en pauta digital",
  ],
  frase: "No creo contenido, construyo estrategias que convierten.",
  descripcion:
    "Planeo, escribo y gestiono contenido con objetivo: estrategia, calendarios, publicaciones, branding y campañas que generan posicionamiento, engagement y conversión.",
  foto: "", // ej: "img/foto.jpg" (vacío = muestra las iniciales)
  cv: "img/CV_Daniela_Quintana.pdf",
  portafolioPdf: "img/Portafolio_Daniela_Quintana.pdf",
  ubicacion: "San Luis Potosí, México · Trabajo remoto",
  email: "dqp001@hotmail.com",

  // Formulario de contacto: crea una cuenta gratis en https://formspree.io
  // y pega aquí el ID de tu formulario (ej: "xyzabcd").
  // Vacío = el formulario abre el correo del visitante.
  formspreeId: "",

  redes: [
    { nombre: "LinkedIn", url: "https://www.linkedin.com/in/daniela-itzel-quintana-pe%C3%B1aloza-569819263" },
    { nombre: "Instagram @dqp_mkt", url: "https://www.instagram.com/dqp_mkt" },
    { nombre: "Email", url: "mailto:dqp001@hotmail.com" },
  ],

  sobreMi: [
    "Especialista en marketing digital egresada de Innovación de Negocios (Área Mercadotecnia) por la Universidad Tecnológica de San Luis Potosí, con más de 2 años de experiencia en gestión de redes sociales y contenido, prospección comercial B2B, campañas de Meta Ads y coordinación de eventos.",
    "He trabajado de forma remota para empresas de tecnología y agencias de marketing digital, desarrollando marcas, optimizando su comunicación digital y planificando estrategias para empresas y proyectos en crecimiento. Mi enfoque combina creatividad con intención: cada pieza de contenido tiene un objetivo claro.",
    "Inglés C1 en lectura y redacción (certificaciones HubSpot completadas en inglés).",
  ],

  // Cifras destacadas (se animan al aparecer)
  cifras: [
    { prefijo: "", valor: 2, sufijo: "+", texto: "años de experiencia en marketing digital" },
    { prefijo: "", valor: 1190, sufijo: "+", texto: "seguidores en LinkedIn de KOUD (desde 800)" },
    { prefijo: "", valor: 140, sufijo: "", texto: "registros a webinar con el embudo en Meta" },
    { prefijo: "$", valor: 6, sufijo: "M+ MXN", texto: "generados por prospectos calificados del embudo" },
  ],

  // ---------------- SERVICIOS ----------------
  // Cada servicio tiene su propia página (servicio.html?s=slug).
  // Los proyectos se asignan a uno o varios servicios con "servicios" dentro de cada proyecto.
  servicios: [
    {
      slug: "estrategia-contenido",
      nombre: "Estrategia de contenido",
      icono: "◎",
      colores: ["#ff5a6e", "#8b7cf6"],
      resumen: "Calendarios y parrillas mensuales con objetivo, pilares y métricas para cada publicación.",
      descripcion: "Dejo de lado el «publicar por publicar». Defino qué tiene que lograr tu contenido, a quién le habla y cómo se mide, y lo convierto en un calendario que mueve a tu audiencia de conocerte a comprarte.",
      ideal: "Marcas que publican seguido pero no ven resultados, o que no saben qué publicar cada semana.",
      incluye: ["Diagnóstico de tus redes y tu audiencia", "Pilares de contenido: educación, autoridad y conversión", "Parrilla mensual con formato, gancho, CTA y KPI de cada post", "Calendarios bilingües (español e inglés) cuando se necesitan"],
      metricas: ["Alcance", "Guardados", "Compartidos", "Seguidores nuevos"],
      herramientas: ["Notion", "Google Sheets", "Meta Business Suite", "Asana"],
    },
    {
      slug: "copywriting",
      nombre: "Copywriting",
      icono: "✎",
      colores: ["#8b7cf6", "#ff5a6e"],
      resumen: "Textos que conectan y venden: carruseles, captions, LinkedIn, anuncios y guiones de venta.",
      descripcion: "Escribo para que te lean y te respondan. Una idea por pieza, un gancho que detenga el scroll y una sola llamada a la acción clara.",
      ideal: "Negocios que tienen buen producto pero les cuesta explicarlo o venderlo por escrito.",
      incluye: ["Texto del diseño y caption de cada publicación", "Posts para LinkedIn B2B", "Anuncios para Meta orientados a conversión", "Guiones de venta y catálogos para WhatsApp", "Correos de email marketing"],
      metricas: ["Engagement", "Clics", "Mensajes", "Apertura y CTR de email"],
      herramientas: ["Google Docs", "IA generativa (Claude)", "Mailchimp", "HubSpot"],
    },
    {
      slug: "community-management",
      nombre: "Community management",
      icono: "♡",
      colores: ["#f472b6", "#8b7cf6"],
      resumen: "Gestión diaria de tus redes: publicación, moderación y atención a comentarios y mensajes.",
      descripcion: "Tu comunidad no se queda sin respuesta. Programo, publico, modero y atiendo mensajes para que tu marca esté presente todos los días.",
      ideal: "Marcas que no tienen tiempo de atender sus redes o que reciben mensajes que se quedan sin contestar.",
      incluye: ["Programación de publicaciones", "Moderación de comentarios y mensajes directos", "Respuestas automáticas por palabra clave en WhatsApp y Messenger", "Optimización de perfiles: bio, destacados y enlaces", "Reporte de desempeño"],
      metricas: ["Mensajes atendidos", "Engagement", "Visitas al perfil", "Crecimiento de seguidores"],
      herramientas: ["Meta Business Suite", "WhatsApp Business", "LinkedIn", "Canva Pro"],
    },
    {
      slug: "meta-ads",
      nombre: "Meta Ads y embudos",
      icono: "↗",
      colores: ["#22c1c3", "#8b7cf6"],
      resumen: "Campañas de generación de leads en Facebook e Instagram, con embudo, formularios y reportes.",
      descripcion: "Convierto el presupuesto de publicidad en contactos medibles: estructura de campañas, embudo completo y reportes ejecutivos para decidir con datos.",
      ideal: "Empresas que ya invierten en publicidad pero no saben qué les está funcionando, o que reciben mensajes sin datos útiles.",
      incluye: ["Auditoría de la cuenta de Meta Ads", "Estructura de campañas: objetivo, audiencia, presupuesto y evento de optimización", "Embudo con formularios, email, webinar y WhatsApp", "Optimización de presupuestos por campaña y conjunto de anuncios", "Reportes ejecutivos semanales con KPIs"],
      metricas: ["Costo por resultado", "Leads y registros", "CTR", "Uso de presupuesto"],
      herramientas: ["Meta Ads Manager", "HubSpot", "Mailchimp", "Excel / Google Sheets", "PowerPoint"],
    },
    {
      slug: "branding",
      nombre: "Branding y diseño",
      icono: "◆",
      colores: ["#f59e0b", "#ff5a6e"],
      resumen: "Identidad visual desde cero y piezas gráficas: logotipo, manual de marca, redes y diseño editorial.",
      descripcion: "Construyo marcas coherentes y reconocibles, y diseño las piezas que las comunican: desde el logotipo hasta el carrusel o la portada de un libro.",
      ideal: "Marcas nuevas que necesitan identidad, o marcas con una imagen desordenada que no se reconoce.",
      incluye: ["Logotipo y variaciones", "Manual de identidad visual", "Plantillas y piezas para redes sociales", "Materiales corporativos, comerciales y presentaciones", "Portadas y diseño editorial"],
      metricas: ["Coherencia visual", "Reconocimiento de marca", "Piezas listas para usar"],
      herramientas: ["Adobe Illustrator", "Adobe Photoshop", "Canva Pro"],
    },
    {
      slug: "reels-video",
      nombre: "Reels y video",
      icono: "▶",
      colores: ["#8b7cf6", "#22c1c3"],
      resumen: "Reels verticales en formatos de tendencia, con guion, edición y versiones en español e inglés.",
      descripcion: "Investigo qué está funcionando, escribo el guion y edito reels cortos que retienen: POV, antes y después, pantalla dividida o cinemáticos.",
      ideal: "Negocios con mucho material visual (obras, productos, espacios) que no lo están aprovechando en video.",
      incluye: ["Investigación de tendencias (EE. UU. y México)", "Guiones y ganchos", "Edición en formatos de tendencia", "Versiones bilingües con texto o voz"],
      metricas: ["Reproducciones", "Retención", "Compartidos", "Guardados"],
      herramientas: ["CapCut", "Canva Pro", "IA para edición de video"],
    },
  ],

  // Proyectos que aparecen en el inicio (por su slug)
  destacados: ["embudo-meta-koud", "mesa-para-todos", "linkedin-koud", "remodeladora"],


  habilidades: [
    { grupo: "Contenido y comunidad", items: ["Calendarios de contenido", "Copywriting", "Programación", "Moderación", "Métricas y reportes"] },
    { grupo: "Paid media y CRM", items: ["Meta Ads (leads)", "Auditoría de cuentas", "Reportes ejecutivos", "Email marketing", "Lead nurturing", "Prospección B2B", "Segmentación de bases"] },
    { grupo: "Diseño y video", items: ["Branding e identidad", "Logotipos y manuales", "Piezas para redes", "Reels verticales", "Presentaciones", "Landing pages"] },
    { grupo: "Negocio y producto digital", items: ["Estrategia de precios", "Diseño de producto digital", "Venta por redes y WhatsApp", "Facturación y control de obra", "IA generativa"] },
  ],

  herramientas: [
    "HubSpot", "Meta Ads Manager", "Meta Business Suite", "Mailchimp", "Waalaxy", "Canva Pro",
    "CapCut", "Illustrator", "Photoshop", "Notion", "Asana", "Trello", "Google Workspace", "Hojas de cálculo", "PayPal", "PowerPoint", "WhatsApp Business", "IA generativa (Claude)",
  ],

  proceso: [
    { titulo: "Objetivo y audiencia", texto: "Defino qué debe lograr el contenido y a quién le habla." },
    { titulo: "Calendario", texto: "Planeo temas, formatos y fechas para mantener un ritmo constante." },
    { titulo: "Redacción y piezas", texto: "Escribo los textos y preparo las piezas visuales y de video." },
    { titulo: "Publicación y comunidad", texto: "Programo, publico y respondo comentarios y mensajes." },
    { titulo: "Medición y ajuste", texto: "Reviso métricas y ajusto la estrategia del siguiente periodo." },
  ],

  // categoria: se usa para los botones de filtro (se generan solos)
  // galeria: imágenes extra que se ven al abrir el proyecto
  proyectos: [
    {
      slug: "embudo-meta-koud",
      servicios: ["meta-ads", "estrategia-contenido", "copywriting"],
      titulo: "De conversaciones sueltas a un embudo medible",
      cliente: "KOUD Developers · Meta",
      categoria: "Estrategia",
      destacado: true,
      descripcion: "Embudo de 5 etapas en Meta: visibilidad, captación, nutrición, activación y comunidad.",
      objetivo: "Aumentar al menos 40% la visibilidad de la marca en Meta y estructurar la captación de contactos con datos clave (empresa, sector y correo) en tres meses. Antes: 177 conversaciones al mes, 70–80% sin datos útiles y $5K mensuales en publicidad sin estructura.",
      participacion: "Diagnóstico con diagrama de Ishikawa y propuesta del embudo: contenido orgánico y Meta Ads, formularios con datos clave, email marketing, webinar y grupo de WhatsApp.",
      resultado: "140 registros al webinar, 30 asistentes reales, 40 miembros en la comunidad. Email: apertura de 26 a 44%, CTR de hasta 13%, CTOR de hasta 42%. En 2026, 5 de 9 precalificados ya calificaron, con más de $6,000,000 MXN generados.",
      imagen: "img/koud-embudo.jpg",
      carruseles: [
        { titulo: "Pieza de conversión · Webinar del 4 de diciembre de 2025", carpeta: "KOUD_S3_Webinar_3_errores_IA", laminas: 5 },
      ],
      etiquetas: ["Meta Ads", "Embudo", "Email marketing", "Webinar"],
    },
    {
      slug: "meta-ads-credito",
      servicios: ["meta-ads", "copywriting"],
      titulo: "Gestión y optimización de Meta Ads para e-commerce de crédito",
      cliente: "Especialista en Pauta Digital (freelance) · Sep 2026 – actualidad",
      categoria: "Paid media",
      descripcion: "Auditoría, reportes ejecutivos y optimización de presupuesto en campañas de leads por WhatsApp y Messenger para un retail de celulares a crédito.",
      objetivo: "Controlar el gasto y mejorar el costo por resultado de las campañas de generación de leads, con seguimiento directo de dirección y gerencia.",
      participacion: "Auditoría integral de la cuenta (entrega, costo por resultado y gasto sin presupuesto autorizado). Reportes ejecutivos semanales en PowerPoint con gráficas y KPIs. Optimización de presupuestos por campaña y conjunto de anuncios, y resolución de frenos de entrega (método de pago, revisión de anuncios). Copys orientados a conversión, respuestas automatizadas por palabra clave y coordinación con stakeholders para aprobar presupuestos y lanzar promociones estacionales como el Buen Fin.",
      resultado: "Más de 6 reportes ejecutivos semanales, más de 10 campañas auditadas y optimizadas, y cerca del 80% del presupuesto bajo control con alertas de desviación.",
      imagen: "img/caso-meta-ads.jpg",
      miniatura: "img/caso-meta-ads-mini.jpg",
      etiquetas: ["Meta Ads Manager", "Reportes", "Análisis de datos", "WhatsApp Business", "Copywriting"],
    },
    {
      slug: "linkedin-koud",
      servicios: ["estrategia-contenido", "copywriting", "community-management", "branding"],
      titulo: "Calendario de LinkedIn B2B: 4 semanas",
      cliente: "KOUD Developers · LinkedIn",
      categoria: "Redes sociales",
      descripcion: "Contenido educativo sobre IA y automatización para tomadores de decisión.",
      objetivo: "Construir autoridad en IA y automatización con tomadores de decisión, y generar prospectos B2B y registros a webinars.",
      participacion: "Armé el calendario (tendencias, caso de uso, evento y liderazgo), redacté los textos y diseñé los carruseles dentro de la identidad de KOUD.",
      resultado: "La comunidad de LinkedIn pasó de 800 a más de 1,190 seguidores, con mejor engagement gracias al contenido educativo especializado.",
      imagen: "img/carruseles/KOUD_S1_Automatizacion_2025_tendencias_carrusel.jpg",
      miniatura: "img/koud-linkedin-mini.jpg",
      carruseles: [
        { titulo: "Semana 1 · Automatización 2025: 4 tendencias", carpeta: "KOUD_S1_Automatizacion_2025_tendencias", laminas: 6 },
        { titulo: "Semana 2 · ¿Tu cierre contable depende de tareas manuales?", carpeta: "KOUD_S2_Cierre_contable_manual", laminas: 5 },
        { titulo: "Semana 3 · Webinar: 3 errores al implementar IA", carpeta: "KOUD_S3_Webinar_3_errores_IA", laminas: 5 },
        { titulo: "Semana 4 · No toda decisión tecnológica es estratégica", carpeta: "KOUD_S4_Decision_tecnologica_estrategica", laminas: 5 },
      ],
      etiquetas: ["LinkedIn", "Carruseles", "Copywriting", "B2B"],
    },
    {
      slug: "marca-personal-dqp",
      servicios: ["estrategia-contenido", "copywriting", "branding"],
      titulo: "Marca personal: primero confianza, después venta",
      cliente: "@dqp_mkt · Instagram",
      categoria: "Redes sociales",
      descripcion: "Calendario de 6 semanas con carruseles educativos, de autoridad y de conversión.",
      objetivo: "Posicionarme como estratega de marketing para dueños de negocio y generar consultas por mensaje directo.",
      participacion: "Cuenta propia que creé y gestiono: estrategia, texto del diseño, caption y diseño de los seis carruseles. Ganchos contrarios, listas de problemas y un diagnóstico que lleva a una oferta de baja fricción.",
      resultado: "Métricas que sigo: alcance, guardados, compartidos, comentarios, seguidores, mensajes y consultas.",
      imagen: "img/carruseles/IG_S2_Publicar_todos_los_dias_no_es_estrategia_carrusel.jpg",
      miniatura: "img/dqp-mkt-mini.jpg",
      carruseles: [
        { titulo: "Semana 1 · El marketing no es solo publicar", carpeta: "IG_S1_El_marketing_no_es_solo_publicar", laminas: 8 },
        { titulo: "Semana 2 · Publicar todos los días NO es estrategia", carpeta: "IG_S2_Publicar_todos_los_dias_no_es_estrategia", laminas: 7 },
        { titulo: "Semana 3 · 5 errores de marketing que están matando negocios", carpeta: "IG_S3_5_errores_de_marketing", laminas: 7 },
        { titulo: "Semana 4 · 3 estrategias de contenido que generan clientes", carpeta: "IG_S4_3_estrategias_de_contenido", laminas: 7 },
        { titulo: "Semana 5 · 4 señales de que tu marketing no funciona", carpeta: "IG_S5_4_senales_marketing_no_funciona", laminas: 6 },
        { titulo: "Semana 6 · Si tienes un negocio, esto es para ti", carpeta: "IG_S6_Si_tienes_un_negocio", laminas: 8 },
      ],
      enlace: "https://www.instagram.com/dqp_mkt",
      etiquetas: ["Instagram", "Estrategia", "Diseño", "Copy"],
    },
    {
      slug: "fitpod",
      servicios: ["branding"],
      titulo: "FitPod: identidad visual desde cero",
      cliente: "FitPod · Micro-gimnasio, Querétaro",
      categoria: "Branding",
      descripcion: "Logotipo, manual de identidad y materiales para redes de un gimnasio nuevo.",
      objetivo: "Construir una marca nueva desde cero, con identidad coherente y piezas listas para comunicar en redes.",
      participacion: "Diseño de logotipo, manual de identidad visual, storytelling de marca, aplicaciones gráficas y materiales digitales para el lanzamiento.",
      resultado: "Marca lista para lanzar, con sistema visual consistente para redes. (Compartido bajo confidencialidad y acuerdo con terceros.)",
      imagen: "img/fitpod.jpg",
      galeria: ["img/fitpod/logo.jpg", "img/fitpod/variaciones.jpg"],
      etiquetas: ["Branding", "Logotipo", "Manual de marca"],
    },
    {
      slug: "palau",
      servicios: ["community-management", "branding"],
      titulo: "Redes y materiales corporativos industriales",
      cliente: "Palau Suministros Industriales · 2023",
      categoria: "Branding",
      descripcion: "Gestión de Instagram y Facebook y diseño de materiales corporativos.",
      objetivo: "Posicionar la marca de una empresa de suministros industriales con piezas informativas claras y una imagen corporativa ordenada.",
      participacion: "Gestioné las redes de la empresa, moderé mensajes, implementé email marketing en Mailchimp y diseñé materiales corporativos e informativos.",
      resultado: "Imagen corporativa ordenada y presencia constante en redes. (Compartido bajo confidencialidad y acuerdo con terceros.)",
      imagen: "img/palau.jpg",
      etiquetas: ["Community management", "Mailchimp", "Diseño corporativo"],
    },
    {
      slug: "mesa-para-todos",
      servicios: ["copywriting", "branding", "estrategia-contenido"],
      titulo: "Mesa para Todos: marca de recetarios digitales",
      cliente: "Fundadora y creadora de contenido · Oct 2026 – actualidad",
      categoria: "Producto digital",
      descripcion: "Creé y lancé una marca con 7 recetarios en PDF y más de 800 recetas, vendidos por redes sociales y WhatsApp.",
      objetivo: "Ofrecer recetas prácticas para mamás con poco tiempo y presupuesto, familias veganas y niños con alergias, en PDF que llega al instante y con una oferta fácil de elegir.",
      participacion: "Escribí los 7 libros y diseñé la estrategia de precios y paquetes (de $89 a $349 MXN) para aumentar el ticket promedio. Produje el material de venta: anuncios para Facebook e Instagram, historias, catálogo, tabla comparativa y muestras gratuitas. Escribí los textos publicitarios y guiones de venta por WhatsApp, ejecuté campañas de lanzamiento y de urgencia, e implementé el cobro con PayPal y transferencia y la entrega digital por WhatsApp. Dirigí y edité el contenido con apoyo de IA (Claude) y Canva.",
      resultado: "Oferta en tres niveles: libro suelto ($89 a $99), colecciones ($249 y $299) y paquete completo en $349, con el ahorro a la vista (por separado serían $633). Proceso completo de venta, cobro y entrega funcionando.",
      imagen: "img/caso-mesa-para-todos.jpg",
      miniatura: "img/caso-mesa-para-todos-mini.jpg",
      galeria: ["img/mesa-para-todos.jpg"],
      etiquetas: ["Copywriting", "Branding", "Estrategia de precios", "Venta por redes", "IA generativa"],
    },
    {
      slug: "remodeladora",
      servicios: ["reels-video", "estrategia-contenido"],
      titulo: "Sistema administrativo y de marketing para una remodeladora",
      cliente: "Proyecto personal · Nov 2026",
      categoria: "Estrategia",
      descripcion: "Facturación por etapas, control de obra y plan de contenido bilingüe con más de 20 reels.",
      objetivo: "Ordenar la administración de una empresa de remodelación y darle una presencia en redes pensada para EE. UU. y México.",
      participacion: "Diseñé un sistema de facturación por etapas (depósito, pago de progreso, órdenes de cambio y factura final) con una herramienta propia que genera facturas en PDF y calcula saldos. Armé una hoja de control de obra con cobranza, gastos por categoría, asistencia y horas extra según las reglas laborales de California. Investigué tendencias de redes en EE. UU. y México y elaboré dos calendarios mensuales (inglés y español) con guiones y métricas.",
      resultado: "Más de 20 reels verticales bilingües editados en formatos de tendencia (POV, antes y después, pantalla dividida), y un sistema de facturación y control de obra listo para usar.",
      imagen: "img/caso-remodelacion.jpg",
      videos: [
        { titulo: "Pantalla dividida · antes y después (EN)", src: "img/reels/reel-split-screen.mp4", poster: "img/reels/reel-split-screen.jpg" },
        { titulo: "Cinemático · house tour (ES)", src: "img/reels/reel-cinematico.mp4", poster: "img/reels/reel-cinematico.jpg" },
        { titulo: "Educativo · 3 cosas antes de pintar (EN)", src: "img/reels/reel-checklist.mp4", poster: "img/reels/reel-checklist.jpg" },
        { titulo: "POV · proteger todo (ES)", src: "img/reels/reel-proteger.mp4", poster: "img/reels/reel-proteger.jpg" },
      ],
      miniatura: "img/caso-remodelacion-mini.jpg",
      etiquetas: ["Hojas de cálculo", "Automatización", "CapCut", "Reels", "Contenido bilingüe"],
    },
    {
      slug: "portadas-editoriales",
      servicios: ["branding"],
      titulo: "Portadas editoriales: dos libros",
      cliente: "Atlas Apócrifo de Calles y Zoológicos (Irma del Ángel) · Palabras para el corazón (Cirilo Quintana Alvarado)",
      categoria: "Editorial",
      descripcion: "Diseño conceptual de portada y contraportada para dos obras literarias con estilos opuestos.",
      objetivo: "Traducir el tono de cada libro a una portada: lo narrativo y surrealista de un atlas de ciudades imposibles, y lo íntimo y luminoso de un poemario.",
      participacion: "Concepto, composición, tipografía y archivos finales de portada, contraportada y lomo para ambas obras.",
      resultado: "Portadas entregadas para publicación, con archivos editables listos para imprenta.",
      imagen: "img/libros/editorial-mini.jpg",
      galeria: ["img/libros/atlas-portada.jpg", "img/libros/atlas-contraportada.jpg", "img/libros/palabras-portada.jpg", "img/libros/palabras-contraportada.jpg"],
      etiquetas: ["Diseño editorial", "Portadas", "Dirección de arte", "Photoshop"],
    },
  ],

  experiencia: [
    {
      fecha: "Sep 2026 — Actualidad",
      puesto: "Especialista en Pauta Digital (Freelance)",
      lugar: "Cliente: retail de celulares a crédito",
      texto: "Auditoría de Meta Ads, reportes ejecutivos semanales con KPIs, optimización de presupuestos, copys de conversión, respuestas automatizadas en WhatsApp/Messenger y promociones estacionales (Buen Fin).",
    },
    {
      fecha: "Nov 2026",
      puesto: "Sistema administrativo y de marketing",
      lugar: "Proyecto personal · Empresa de remodelación",
      texto: "Facturación por etapas con generación de PDF, control de obra con horas extra según reglas de California, plan de contenido bilingüe y más de 20 reels.",
    },
    {
      fecha: "Oct 2026 — Actualidad",
      puesto: "Fundadora y creadora de contenido",
      lugar: "Mesa para Todos · Productos digitales",
      texto: "Marca de 7 recetarios en PDF (800+ recetas): precios y paquetes, anuncios, guiones de venta por WhatsApp, campañas de lanzamiento y cobro con PayPal.",
    },
    {
      fecha: "May 2024 — Mar 2026",
      puesto: "Auxiliar Comercial y de Marketing",
      lugar: "KOUD Developers · Remoto",
      texto: "Calendarios y copy para LinkedIn, campañas de leads en Meta Ads, HubSpot, prospección B2B (EE. UU. y Canadá) y coordinación de eventos. LinkedIn de 800 a 1,190+ seguidores.",
    },
    {
      fecha: "Mar 2025 — Jun 2025",
      puesto: "Copywriter & Community Manager",
      lugar: "ONIX · Agencia de marketing digital",
      texto: "Copys, estrategias y calendarios para múltiples clientes y apoyo en email marketing. Tasa de apertura aprox. 45%.",
    },
    {
      fecha: "Sep 2023 — Ene 2024",
      puesto: "Diseñadora Gráfica y Community Manager",
      lugar: "Badak Agency · Agencia de marketing digital",
      texto: "Gestión simultánea de redes de varias marcas, piezas en Canva, video en CapCut y producción de eventos.",
    },
    {
      fecha: "May 2023 — Ago 2023",
      puesto: "Diseñadora Gráfica y Community Manager",
      lugar: "Palau Suministros Industriales · Híbrido",
      texto: "Instagram y Facebook, email marketing con Mailchimp y materiales corporativos.",
    },
    {
      fecha: "2021 — 2025",
      puesto: "Innovación de Negocios, Área Mercadotecnia",
      lugar: "Universidad Tecnológica de San Luis Potosí",
      texto: "Certificaciones HubSpot Academy: Inbound, Inbound Marketing y Marketing en Redes Sociales.",
    },
  ],

  // ---------------- MENÚ (aparece en todas las páginas) ----------------
  menu: [
    { texto: "Inicio", url: "index.html" },
    { texto: "Sobre mí", url: "sobre-mi.html" },
    { texto: "Servicios", url: "servicios.html", submenu: "servicios" },
    { texto: "Proyectos", url: "proyectos.html" },
    { texto: "Cómo trabajo", url: "como-trabajo.html" },
    { texto: "Contacto", url: "contacto.html" },
  ],

  // ---------------- PÁGINA "MI MANERA DE TRABAJAR" ----------------
  manera: {
    titulo: "Mi manera de trabajar",
    intro: "Estrategia primero, contenido después. Antes de diseñar una sola pieza defino qué tiene que lograr, a quién le habla y cómo voy a saber si funcionó.",

    principios: [
      { icono: "◎", titulo: "Objetivo antes que formato", texto: "No empiezo por «hagamos un reel». Empiezo por «¿qué tiene que pasar?»: seguidores, mensajes, registros o ventas. El formato se elige después." },
      { icono: "♡", titulo: "Primero confianza, después venta", texto: "Mezclo contenido educativo, de autoridad y de conversión. La audiencia necesita conocerte y confiar en ti antes de comprarte." },
      { icono: "①", titulo: "Una idea por pieza, un CTA por post", texto: "Cada carrusel cuenta una sola cosa y pide una sola acción: guardar, comentar, escribir o registrarse. Así es fácil de leer y de medir." },
      { icono: "↗", titulo: "Lo que no se mide no se mejora", texto: "Cada pieza tiene sus métricas desde que se planea. Reviso los números y ajusto el siguiente periodo con datos, no con corazonadas." },
    ],

    // Pasos del proceso: qué hago yo y qué recibes tú
    pasos: [
      {
        titulo: "Objetivo y audiencia",
        texto: "Conversamos sobre tu negocio, lo que vendes y lo que quieres lograr. Defino qué debe conseguir el contenido y a quién le habla.",
        hago: ["Diagnóstico de tus redes y canales actuales", "Definición de objetivo medible (ej. +40% visibilidad en 3 meses)", "Perfil de la audiencia y sus dolores reales"],
        recibes: "Un diagnóstico claro: qué está pasando hoy, qué falta y qué vamos a medir.",
      },
      {
        titulo: "Calendario",
        texto: "Planeo temas, formatos y fechas para mantener un ritmo constante y mover a la audiencia por el embudo.",
        hago: ["Pilares de contenido (educación, autoridad, conversión)", "Parrilla mensual con formato, gancho, CTA y KPI de cada post", "Fechas clave: lanzamientos, webinars y temporadas como el Buen Fin"],
        recibes: "Tu calendario de contenido listo para aprobar, sin improvisar cada semana.",
      },
      {
        titulo: "Redacción y piezas",
        texto: "Escribo los textos y preparo las piezas visuales y de video, siempre dentro de tu identidad de marca.",
        hago: ["Copy del diseño y caption de cada publicación", "Carruseles, historias, anuncios y reels (Canva, CapCut, Adobe)", "Versiones en español e inglés cuando se necesitan"],
        recibes: "Piezas terminadas y listas para publicar, con texto y diseño alineados.",
      },
      {
        titulo: "Publicación y comunidad",
        texto: "Programo, publico y respondo comentarios y mensajes para que nadie se quede sin respuesta.",
        hago: ["Programación en Meta Business Suite y LinkedIn", "Moderación de comentarios y mensajes", "Respuestas automáticas por palabra clave en WhatsApp/Messenger"],
        recibes: "Presencia constante y una comunidad atendida.",
      },
      {
        titulo: "Medición y ajuste",
        texto: "Reviso métricas y ajusto la estrategia del siguiente periodo: lo que funciona se repite, lo que no se cambia.",
        hago: ["Reporte con KPIs y gráficas", "Detección de alertas y oportunidades", "Recomendaciones concretas para el siguiente mes"],
        recibes: "Un reporte fácil de leer y un plan de mejora, no solo números.",
      },
    ],

    // El embudo que uso para pasar de seguidores a clientes
    embudo: [
      { etapa: "Visibilidad", texto: "Contenido orgánico y Meta Ads para que te conozcan.", ejemplo: "Tendencias, ganchos contrarios, reels" },
      { etapa: "Captación", texto: "Formularios con datos clave para convertir interés en contactos.", ejemplo: "Formularios de leads, muestras gratis" },
      { etapa: "Nutrición", texto: "Email marketing y contenido educativo para generar confianza.", ejemplo: "Secuencias de correo, casos de uso" },
      { etapa: "Activación", texto: "Un punto de decisión claro: un evento, una oferta o una conversación.", ejemplo: "Webinars, ofertas por WhatsApp" },
      { etapa: "Comunidad", texto: "Seguimiento continuo con quienes ya te eligieron.", ejemplo: "Grupos de WhatsApp, contenido exclusivo" },
    ],

    // Qué mido según el objetivo
    metricas: [
      { objetivo: "Que te conozcan", kpis: ["Alcance", "Visitas al perfil", "Seguidores nuevos"] },
      { objetivo: "Que te recuerden", kpis: ["Guardados", "Compartidos", "Comentarios", "Engagement"] },
      { objetivo: "Que te escriban", kpis: ["Mensajes directos", "Clics al sitio", "Leads y registros"] },
      { objetivo: "Que te compren", kpis: ["Costo por resultado", "Apertura y CTR de email", "Ventas y ticket promedio"] },
    ],

    // Cifras reales que respaldan el método
    pruebas: [
      { prefijo: "", valor: 48, sufijo: "%", texto: "de crecimiento en la comunidad de LinkedIn de KOUD (800 → 1,190+)" },
      { prefijo: "", valor: 44, sufijo: "%", texto: "de apertura máxima en email marketing del embudo" },
      { prefijo: "", valor: 140, sufijo: "", texto: "registros a un webinar con el embudo en Meta" },
    ],

    preguntas: [
      { p: "¿Trabajas de forma remota?", r: "Sí. He trabajado de forma remota con empresas de tecnología y agencias en México, y con prospectos de EE. UU. y Canadá. Nos coordinamos por WhatsApp, correo, Zoom o Google Meet." },
      { p: "¿Con qué tipo de negocios trabajas?", r: "Tecnología y software, educación, recursos humanos, salud y bienestar, gimnasios, industria, pymes y servicios profesionales, y proyectos culturales y editoriales." },
      { p: "¿Puedes crear contenido en inglés?", r: "Sí. Tengo inglés C1 en lectura y redacción, y he preparado calendarios, captions y reels bilingües para audiencias de EE. UU. y México." },
      { p: "¿Qué necesito tener para empezar?", r: "Tu objetivo, acceso a tus redes (o a Meta Business Suite) y, si existe, tu identidad de marca. Si no tienes marca, también la puedo diseñar desde cero." },
      { p: "¿Cada cuánto recibo reportes?", r: "Lo acordamos al inicio. En campañas de pauta trabajo con reportes semanales; en contenido orgánico, normalmente un reporte mensual con ajustes para el siguiente periodo." },
    ],

    llamado: "¿Te gustaría trabajar así en tu marca?",
  },
};
