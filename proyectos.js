// Página "Proyectos": todos los proyectos, con filtro por servicio (proyectos.html?servicio=slug).
(() => {
  const D = DATOS, { $, $$, esc, param, servicio, tarjetaProyecto } = UI;
  const lista = $("#lista-proyectos"), desc = $("#filtro-desc");
  const cuenta = (slug) => D.proyectos.filter((p) => !slug || (p.servicios || []).includes(slug)).length;

  $("#filtros").innerHTML = [{ slug: "", nombre: "Todos", icono: "✦", colores: ["#ff5a6e", "#8b7cf6"] }, ...D.servicios]
    .map((s) => `<button class="filtro" role="tab" data-s="${esc(s.slug)}" style="--c1:${s.colores[0]};--c2:${s.colores[1]}">
      <span>${esc(s.icono)}</span> ${esc(s.nombre)} <em>${cuenta(s.slug)}</em></button>`).join("");

  const pintar = (slug) => {
    const s = servicio(slug);
    $$(".filtro").forEach((b) => b.classList.toggle("activo", b.dataset.s === (s ? slug : "")));
    desc.innerHTML = s
      ? `${esc(s.resumen)} <a href="servicio.html?s=${esc(s.slug)}">Ver el servicio →</a>`
      : "Todo mi trabajo: estrategia, contenido, comunidad, pauta, diseño y video.";
    const ps = D.proyectos.filter((p) => !s || (p.servicios || []).includes(slug));
    lista.innerHTML = ps.map((p, i) => tarjetaProyecto(p, { grande: !s && i === 0 })).join("");
    $$(".tarjeta", lista).forEach((t) => (t.style.viewTransitionName = "p-" + t.dataset.slug));
    if (UI.observar) UI.observar();
  };
  const cambiar = (slug) => {
    const url = slug ? `?servicio=${encodeURIComponent(slug)}` : location.pathname;
    history.replaceState(null, "", url);
    // Transición animada entre filtros donde el navegador la soporta
    if (document.startViewTransition && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.startViewTransition(() => { pintar(slug); $$(".tarjeta").forEach((t) => t.classList.add("visible")); });
    } else pintar(slug);
  };
  $("#filtros").addEventListener("click", (e) => { const b = e.target.closest(".filtro"); if (b) cambiar(b.dataset.s); });
  pintar(param("servicio") || "");
})();
