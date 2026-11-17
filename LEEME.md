# Mi portfolio

Web estática (HTML + CSS + JS). Sin servidor, sin base de datos, sin costes.

## Editar el contenido
Abre **datos.js** con cualquier editor de texto (Bloc de notas, VS Code…) y cambia los textos.
Las imágenes (foto, proyectos, CV en PDF) van en la carpeta **img/**.

## Publicar gratis en GitHub Pages
1. Crea una cuenta en https://github.com (gratis).
2. Pulsa **New repository** y llámalo exactamente `TU-USUARIO.github.io` (Public).
3. Dentro del repositorio: **Add file → Upload files**, arrastra TODOS los archivos de esta carpeta
   (index.html, style.css, main.js, datos.js y la carpeta img) y pulsa **Commit changes**.
4. Ve a **Settings → Pages** y comprueba que la fuente sea la rama `main`, carpeta `/ (root)`.
5. En 1-2 minutos tu web estará en `https://TU-USUARIO.github.io`.

Para actualizarla: edita el archivo en GitHub (icono del lápiz) o vuelve a subirlo. Se actualiza solo.

Alternativas igual de gratis: Netlify Drop (https://app.netlify.com/drop, arrastras la carpeta)
o Cloudflare Pages.

## Formulario de contacto (opcional)
Crea una cuenta gratis en https://formspree.io, crea un formulario y pega su ID en `formspreeId`
dentro de datos.js. Si no, el formulario abre el correo del visitante.
