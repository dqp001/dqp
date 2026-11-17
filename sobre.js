// Página "Sobre mí". El contenido se edita en datos.js.
(() => {
  const D = DATOS, { $, esc } = UI;

  $("#avatar").innerHTML = D.foto ? `<img src="${esc(D.foto)}" alt="${esc(D.nombre)}">` : esc(D.iniciales);
  $("#frase").textContent = D.frase ? `“${D.frase}”` : "";
  $("#sobre-texto").innerHTML = D.sobreMi.map((p) => `<p>${esc(p)}</p>`).join("");
  if (D.cv) $("#btn-cv").href = D.cv; else $("#btn-cv").remove();
  if (D.portafolioPdf) $("#btn-pdf").href = D.portafolioPdf; else $("#btn-pdf").remove();

  const rapidos = [
    ["Ubicación", D.ubicacion],
    ["Idiomas", "Español nativo · Inglés C1 (lectura y redacción)"],
    ["Formación", "Innovación de Negocios, Área Mercadotecnia · UTSLP"],
    ["Certificaciones", "HubSpot Academy: Inbound, Inbound Marketing, Marketing en Redes Sociales"],
  ];
  $("#datos-rapidos").innerHTML = rapidos.filter((x) => x[1]).map(([k, v]) => `<div><span>${esc(k)}</span><strong>${esc(v)}</strong></div>`).join("");

  $("#habilidades").innerHTML = D.habilidades.map((h) => `
    <div class="grupo-card revelar"><h3>${esc(h.grupo)}</h3><ul class="chips">${h.items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>`).join("");

  const h = (D.herramientas || []).map((x) => `<span>${esc(x)}</span>`).join("");
  $("#marquesina").innerHTML = h + h;

  $("#linea-tiempo").innerHTML = D.experiencia.map((e) => `
    <li class="hito revelar">
      <span class="fecha">${esc(e.fecha)}</span>
      <h3>${esc(e.puesto)}</h3>
      <span class="lugar">${esc(e.lugar)}</span>
      <p>${esc(e.texto)}</p>
    </li>`).join("");
})();
