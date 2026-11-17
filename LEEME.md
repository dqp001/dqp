# Portfolio de Daniela Quintana

Web estática (HTML + CSS + JS), publicada gratis con GitHub Pages.

## Páginas
| Archivo | Página |
|---|---|
| `index.html` | Inicio: presentación, cifras, servicios y proyectos destacados |
| `sobre-mi.html` | Sobre mí: historia, habilidades, herramientas y trayectoria |
| `servicios.html` | Todos los servicios y cómo se combinan |
| `servicio.html?s=slug` | Un servicio (una sola plantilla para los 6) |
| `proyectos.html` | Todos los proyectos, con filtro por servicio (`?servicio=slug`) |
| `como-trabajo.html` | Mi manera de trabajar |
| `contacto.html` | Formulario y datos de contacto |

Un proyecto se puede enlazar directo: `proyectos.html#fitpod`.

## Editar el contenido (todo en datos.js)
- `servicios` — cada servicio: nombre, ícono, colores, qué incluye, métricas, herramientas.
- `proyectos` — cada proyecto tiene `servicios: [...]` con los slugs de los servicios a los que pertenece.
- `destacados` — los proyectos que salen en el inicio.
- `menu` — el menú (aparece en todas las páginas).
- `manera` — el contenido de "Mi manera de trabajar".

Las imágenes y videos van en **img/**.

## Agregar un servicio
Copia uno de los objetos de `servicios` en datos.js, cambia el `slug` y los textos,
y añade ese slug en `servicios` de los proyectos que correspondan. La página, el menú
y los filtros se generan solos.

## Código
- `comun.js` — menú, tema, animaciones, tarjetas, detalle de proyecto y formulario (todas las páginas).
- `inicio.js`, `sobre.js`, `servicios.js`, `servicio.js`, `proyectos.js`, `trabajo.js`, `contacto.js` — una por página.
- `style.css` — estilos de todo el sitio.
