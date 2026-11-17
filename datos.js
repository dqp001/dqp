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

  servicios: [
    "Estrategia de contenido para redes sociales",
    "Planeación de parrillas mensuales",
    "Copywriting (posts, carruseles y LinkedIn)",
    "Optimización de perfiles digitales",
    "Branding y comunicación de marca",
  ],

  habilidades: [
    { grupo: "Contenido y comunidad", items: ["Calendarios de contenido", "Copywriting", "Programación", "Moderación", "Métricas y reportes"] },
    { grupo: "Paid media y CRM", items: ["Meta Ads (leads)", "Email marketing", "Lead nurturing", "Prospección B2B", "Segmentación de bases"] },
    { grupo: "Diseño", items: ["Branding e identidad", "Logotipos y manuales", "Piezas para redes", "Presentaciones", "Landing pages"] },
  ],

  herramientas: [
    "HubSpot", "Meta Ads Manager", "Meta Business Suite", "Mailchimp", "Waalaxy", "Canva Pro",
    "CapCut", "Illustrator", "Photoshop", "Notion", "Asana", "Trello", "Google Workspace",
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
      titulo: "De conversaciones sueltas a un embudo medible",
      cliente: "KOUD Developers · Meta",
      categoria: "Estrategia",
      destacado: true,
      descripcion: "Embudo de 5 etapas en Meta: visibilidad, captación, nutrición, activación y comunidad.",
      objetivo: "Aumentar al menos 40% la visibilidad de la marca en Meta y estructurar la captación de contactos con datos clave (empresa, sector y correo) en tres meses. Antes: 177 conversaciones al mes, 70–80% sin datos útiles y $5K mensuales en publicidad sin estructura.",
      participacion: "Diagnóstico con diagrama de Ishikawa y propuesta del embudo: contenido orgánico y Meta Ads, formularios con datos clave, email marketing, webinar y grupo de WhatsApp.",
      resultado: "140 registros al webinar, 30 asistentes reales, 40 miembros en la comunidad. Email: apertura de 26 a 44%, CTR de hasta 13%, CTOR de hasta 42%. En 2026, 5 de 9 precalificados ya calificaron, con más de $6,000,000 MXN generados.",
      imagen: "img/koud-embudo.jpg",
      galeria: ["img/koud-webinar.jpg"],
      etiquetas: ["Meta Ads", "Embudo", "Email marketing", "Webinar"],
    },
    {
      titulo: "Calendario de LinkedIn B2B: 4 semanas",
      cliente: "KOUD Developers · LinkedIn",
      categoria: "Redes sociales",
      descripcion: "Contenido educativo sobre IA y automatización para tomadores de decisión.",
      objetivo: "Construir autoridad en IA y automatización con tomadores de decisión, y generar prospectos B2B y registros a webinars.",
      participacion: "Armé el calendario (tendencias, caso de uso, evento y liderazgo), redacté los textos y diseñé los carruseles dentro de la identidad de KOUD.",
      resultado: "La comunidad de LinkedIn pasó de 800 a más de 1,190 seguidores, con mejor engagement gracias al contenido educativo especializado.",
      imagen: "img/koud-tendencias.jpg",
      galeria: ["img/koud-webinar.jpg"],
      etiquetas: ["LinkedIn", "Carruseles", "Copywriting", "B2B"],
    },
    {
      titulo: "Marca personal: primero confianza, después venta",
      cliente: "@dqp_mkt · Instagram",
      categoria: "Redes sociales",
      descripcion: "Calendario de 6 semanas con carruseles educativos, de autoridad y de conversión.",
      objetivo: "Posicionarme como estratega de marketing para dueños de negocio y generar consultas por mensaje directo.",
      participacion: "Cuenta propia que creé y gestiono: estrategia, texto del diseño, caption y diseño de los seis carruseles. Ganchos contrarios, listas de problemas y un diagnóstico que lleva a una oferta de baja fricción.",
      resultado: "Métricas que sigo: alcance, guardados, compartidos, comentarios, seguidores, mensajes y consultas.",
      imagen: "img/dqp-liderazgo.jpg",
      galeria: ["img/dqp-senales.jpg"],
      enlace: "https://www.instagram.com/dqp_mkt",
      etiquetas: ["Instagram", "Estrategia", "Diseño", "Copy"],
    },
    {
      titulo: "FitPod: identidad visual desde cero",
      cliente: "FitPod · Micro-gimnasio, Querétaro",
      categoria: "Branding",
      descripcion: "Logotipo, manual de identidad y materiales para redes de un gimnasio nuevo.",
      objetivo: "Construir una marca nueva desde cero, con identidad coherente y piezas listas para comunicar en redes.",
      participacion: "Diseño de logotipo, manual de identidad visual, storytelling de marca, aplicaciones gráficas y materiales digitales para el lanzamiento.",
      resultado: "Marca lista para lanzar, con sistema visual consistente para redes. (Compartido bajo confidencialidad y acuerdo con terceros.)",
      imagen: "img/fitpod.jpg",
      etiquetas: ["Branding", "Logotipo", "Manual de marca"],
    },
    {
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
      titulo: "Mesa para Todos: 7 recetarios digitales",
      cliente: "Proyecto propio · WhatsApp",
      categoria: "Editorial",
      descripcion: "Escribí más de 800 recetas en 7 libros y diseñé la oferta de venta por WhatsApp.",
      objetivo: "Ofrecer recetas prácticas y baratas para el día a día y las fiestas, en PDF que llega al instante, con una oferta fácil de entender y de elegir.",
      participacion: "Escribí los 7 libros y redacté el mensaje de catálogo y paquetes que uso con mis clientes.",
      resultado: "Oferta en tres niveles: libro suelto ($89 a $99), colecciones ($249 y $299) y paquete completo en $349, con el ahorro a la vista (por separado serían $633).",
      imagen: "img/mesa-para-todos.jpg",
      etiquetas: ["Copywriting", "Producto digital", "Ventas"],
    },
    {
      titulo: "Atlas Apócrifo de Calles y Zoológicos",
      cliente: "Proyecto editorial · Irma del Ángel",
      categoria: "Editorial",
      descripcion: "Diseño conceptual de portada y contraportada para una obra literaria.",
      objetivo: "Dar a la obra una portada con estilo visual narrativo y surrealista.",
      participacion: "Diseño conceptual de portada y contraportada; también colaboré en otra obra («Palabras para el corazón»).",
      resultado: "Portadas entregadas para publicación.",
      imagen: "",
      etiquetas: ["Diseño editorial", "Ilustración"],
    },
  ],

  experiencia: [
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
};
