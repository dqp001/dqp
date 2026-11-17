// Página de un servicio: servicio.html?s=slug. Los datos salen de "servicios" en datos.js.
(() => {
  const D = DATOS, { $, esc, param, tarjetaProyecto } = UI;
  const i = Math.max(0, D.servicios.findIndex((s) => s.slug === param("s")));
  const s = D.servicios[i];

  document.title = `${s.nombre} · ${D.nombre}`;
  document.body.style.setProperty("--c1", s.colores[0]);
  document.body.style.setProperty("--c2", s.colores[1]);
  document.body.classList.add("pagina-servicio");

  $("#h-icono").textContent = s.icono;
  $("#h-titulo").textContent = s.nombre;
  $("#h-lead").textContent = s.resumen;
  $("#s-descripcion").textContent = s.descripcion;
  $("#s-ideal").textContent = s.ideal;
  $("#s-incluye").innerHTML = s.incluye.map((x) => `<li class="revelar">${esc(x)}</li>`).join("");
  $("#s-metricas").innerHTML = s.metricas.map((x) => `<li>${esc(x)}</li>`).join("");
  $("#s-herramientas").innerHTML = s.herramientas.map((x) => `<li>${esc(x)}</li>`).join("");
  $("#s-cta").textContent = `¿Te ayudo con ${s.nombre}?`;
  $("#s-contacto").href = `contacto.html?servicio=${encodeURIComponent(s.slug)}`;
  $("#s-ver-todos").href = `proyectos.html?servicio=${encodeURIComponent(s.slug)}`;

  const ps = D.proyectos.filter((p) => (p.servicios || []).includes(s.slug));
  $("#s-proyectos").innerHTML = ps.length
    ? ps.map((p) => tarjetaProyecto(p)).join("")
    : `<p class="muted">Pronto agregaré proyectos de este servicio.</p>`;

  const ant = D.servicios[(i - 1 + D.servicios.length) % D.servicios.length];
  const sig = D.servicios[(i + 1) % D.servicios.length];
  $("#s-nav").innerHTML = `
    <a href="servicio.html?s=${esc(ant.slug)}" class="sn-ant"><small>← Anterior</small><strong>${esc(ant.icono)} ${esc(ant.nombre)}</strong></a>
    <a href="servicio.html?s=${esc(sig.slug)}" class="sn-sig"><small>Siguiente →</small><strong>${esc(sig.icono)} ${esc(sig.nombre)}</strong></a>`;
})();
