// =====================================================================
//  EDITA SOLO ESTE ARCHIVO para cambiar el contenido de tu portfolio.
//  No hace falta tocar el HTML, el CSS ni main.js.
// =====================================================================

const DATOS = {
  nombre: "Tu Nombre",
  iniciales: "TN",
  // Frases que se van escribiendo solas en la portada
  roles: ["Desarrollador/a Web", "Diseñador/a UI", "Creativo/a digital"],
  descripcion:
    "Breve presentación: quién eres, qué haces y qué te apasiona. Dos o tres líneas bastan.",
  foto: "", // ej: "img/foto.jpg" (déjalo vacío para mostrar tus iniciales)
  cv: "", // ej: "img/cv.pdf" (déjalo vacío para ocultar el botón)
  ubicacion: "Ciudad, País",
  email: "tu-correo@ejemplo.com",

  // Formulario de contacto: crea una cuenta gratis en https://formspree.io,
  // crea un formulario y pega aquí su ID (ej: "xyzabcd").
  // Si lo dejas vacío, el formulario abrirá el programa de correo del visitante.
  formspreeId: "",

  redes: [
    { nombre: "GitHub", url: "https://github.com/tu-usuario" },
    { nombre: "LinkedIn", url: "https://linkedin.com/in/tu-usuario" },
    { nombre: "Instagram", url: "https://instagram.com/tu-usuario" },
  ],

  sobreMi: [
    "Párrafo 1: tu historia, cómo empezaste y qué te motiva.",
    "Párrafo 2: en qué te especializas y qué buscas (trabajo, clientes, prácticas…).",
  ],

  // Cifras destacadas (pon las que quieras o deja la lista vacía)
  cifras: [
    { valor: 3, sufijo: "+", texto: "años de experiencia" },
    { valor: 20, sufijo: "+", texto: "proyectos" },
    { valor: 10, sufijo: "", texto: "clientes felices" },
  ],

  // nivel: de 0 a 100
  habilidades: [
    { nombre: "HTML y CSS", nivel: 90 },
    { nombre: "JavaScript", nivel: 75 },
    { nombre: "Diseño (Figma / Canva)", nivel: 85 },
    { nombre: "Fotografía", nivel: 60 },
  ],

  // categoria: se usa para los botones de filtro (se generan solos)
  proyectos: [
    {
      titulo: "Proyecto Uno",
      categoria: "Web",
      descripcion: "Qué es, qué problema resuelve y qué hiciste tú.",
      imagen: "", // ej: "img/proyecto1.jpg"
      etiquetas: ["HTML", "CSS", "JS"],
      enlace: "https://ejemplo.com",
      codigo: "https://github.com/tu-usuario/proyecto-uno",
    },
    {
      titulo: "Proyecto Dos",
      categoria: "Diseño",
      descripcion: "Identidad visual para una marca local.",
      imagen: "",
      etiquetas: ["Branding", "Canva"],
      enlace: "",
      codigo: "",
    },
    {
      titulo: "Proyecto Tres",
      categoria: "Web",
      descripcion: "Aplicación para organizar tareas.",
      imagen: "",
      etiquetas: ["React", "API"],
      enlace: "",
      codigo: "",
    },
    {
      titulo: "Proyecto Cuatro",
      categoria: "Fotografía",
      descripcion: "Serie fotográfica urbana.",
      imagen: "",
      etiquetas: ["Lightroom"],
      enlace: "",
      codigo: "",
    },
  ],

  experiencia: [
    {
      fecha: "2024 — Actualidad",
      puesto: "Puesto actual",
      lugar: "Empresa / Freelance",
      texto: "Qué haces y logros concretos.",
    },
    {
      fecha: "2022 — 2024",
      puesto: "Puesto anterior",
      lugar: "Empresa",
      texto: "Qué hacías y qué aprendiste.",
    },
    {
      fecha: "2018 — 2022",
      puesto: "Estudios",
      lugar: "Universidad / Escuela",
      texto: "Título obtenido.",
    },
  ],
};
