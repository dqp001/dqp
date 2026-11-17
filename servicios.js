// Página "Servicios". Los servicios se editan en datos.js.
(() => {
  const D = DATOS, { $, esc, tarjetaServicio } = UI;
  $("#servicios-lista").innerHTML = D.servicios.map(tarjetaServicio).join("");

  // Tabla proyecto × servicio: qué servicios se combinaron en cada proyecto
  $("#matriz").innerHTML = `
    <div class="matriz-tabla" style="--cols:${D.servicios.length}">
      <div class="m-esquina"></div>
      ${D.servicios.map((s) => `<a class="m-col" href="servicio.html?s=${esc(s.slug)}" title="${esc(s.nombre)}" style="--c1:${s.colores[0]};--c2:${s.colores[1]}"><span>${esc(s.icono)}</span><small>${esc(s.nombre)}</small></a>`).join("")}
      ${D.proyectos.map((p) => `
        <a class="m-fila" href="proyectos.html#${esc(p.slug)}">${esc(p.titulo)}</a>
        ${D.servicios.map((s) => `<span class="m-celda${(p.servicios || []).includes(s.slug) ? " si" : ""}" style="--c1:${s.colores[0]};--c2:${s.colores[1]}"></span>`).join("")}`).join("")}
    </div>`;
})();
