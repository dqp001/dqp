// Página "Contacto". Los datos (email, redes, ubicación) se editan en datos.js.
(() => {
  const D = DATOS, { $, esc } = UI;
  $("#email-link").textContent = D.email;
  $("#email-link").href = `mailto:${D.email}`;
  $("#ubicacion").textContent = D.ubicacion ? `📍 ${D.ubicacion}` : "";
  $("#redes-contacto").innerHTML = D.redes.map((r) => `<li><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.nombre)}</a></li>`).join("");
  if (D.cv) $("#btn-cv").href = D.cv; else $("#btn-cv").remove();
  if (D.portafolioPdf) $("#btn-pdf").href = D.portafolioPdf; else $("#btn-pdf").remove();
})();
