# Portfolio de Daniela Quintana

Web estática (HTML + CSS + JS), publicada gratis con GitHub Pages.

## Páginas
- `index.html` — Inicio: sobre mí, proyectos, experiencia y contacto.
- `como-trabajo.html` — Mi manera de trabajar: principios, proceso, embudo, métricas y preguntas.

## Editar el contenido
Todo el texto está en **datos.js**:
- `menu` — los enlaces del menú (aparecen en todas las páginas).
- `manera` — el contenido de "Mi manera de trabajar".
- El resto (proyectos, experiencia, habilidades…) es la página de inicio.

Las imágenes y videos van en la carpeta **img/**.

## Añadir otra página
1. Copia `como-trabajo.html` con otro nombre (ej. `servicios.html`) y cambia su contenido.
2. Añade el enlace en `menu` dentro de datos.js: `{ texto: "Servicios", url: "servicios.html" }`.

## Archivos de código
- `comun.js` — menú, tema claro/oscuro, animaciones y formulario (todas las páginas).
- `main.js` — lógica del inicio. `trabajo.js` — lógica de "Mi manera de trabajar".
- `style.css` — estilos de todo el sitio.
