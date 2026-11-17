// Página de inicio. El contenido se edita en datos.js.
(() => {
  const D = DATOS, { $, esc, tarjetaProyecto, tarjetaServicio, proyecto } = UI;

  $("#nombre").textContent = D.nombre;
  $("#descripcion").textContent = D.descripcion;
  $("#avatar").innerHTML = D.foto ? `<img src="${esc(D.foto)}" alt="${esc(D.nombre)}">` : esc(D.iniciales);
  $("#frase").textContent = D.frase ? `“${D.frase}”` : "";
  $("#redes-hero").innerHTML = D.redes.map((r) => `<li><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.nombre)}</a></li>`).join("");

  $("#cifras").innerHTML = D.cifras.map((c) => `
    <div class="cifra revelar"><strong data-valor="${c.valor}" data-prefijo="${esc(c.prefijo || "")}" data-sufijo="${esc(c.sufijo)}">0</strong><span>${esc(c.texto)}</span></div>`).join("");

  $("#servicios-inicio").innerHTML = D.servicios.map(tarjetaServicio).join("");
  $("#destacados").innerHTML = (D.destacados || []).map(proyecto).filter(Boolean)
    .map((p, i) => tarjetaProyecto(p, { grande: i === 0 })).join("");

  const h = (D.herramientas || []).map((x) => `<span>${esc(x)}</span>`).join("");
  $("#marquesina").innerHTML = h + h; // duplicado para que el desplazamiento sea continuo

  $("#lista-proceso").innerHTML = (D.proceso || []).map((p) => `
    <li class="paso revelar"><h3>${esc(p.titulo)}</h3><p>${esc(p.texto)}</p></li>`).join("");

  // Texto que se escribe solo
  const span = $("#escribiendo");
  let r = 0, c = 0, borrando = false;
  const escribir = () => {
    const txt = D.roles[r % D.roles.length] || "";
    span.textContent = txt.slice(0, c);
    if (!borrando && c < txt.length) c++;
    else if (borrando && c > 0) c--;
    else if (!borrando) { borrando = true; return setTimeout(escribir, 1600); }
    else { borrando = false; r++; }
    setTimeout(escribir, borrando ? 45 : 90);
  };
  escribir();
})();
