// Página "Mi manera de trabajar". El contenido se edita en datos.js (sección "manera").
(() => {
  const D = DATOS, M = DATOS.manera;
  const $ = (s) => document.querySelector(s);
  const esc = (t = "") =>
    String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  $("#m-titulo").textContent = M.titulo;
  $("#m-intro").textContent = M.intro;
  $("#m-frase").textContent = D.frase ? `“${D.frase}”` : "";
  $("#m-llamado").textContent = M.llamado;

  $("#m-principios").innerHTML = M.principios.map((p) => `
    <article class="principio revelar">
      <span class="icono" aria-hidden="true">${esc(p.icono)}</span>
      <h3>${esc(p.titulo)}</h3>
      <p>${esc(p.texto)}</p>
    </article>`).join("");

  // ---------- Pasos interactivos ----------
  const lista = $("#m-pasos"), panel = $("#m-panel");
  lista.innerHTML = M.pasos.map((p, i) => `
    <li><button role="tab" data-i="${i}" aria-selected="false">
      <span class="num">${i + 1}</span><span>${esc(p.titulo)}</span>
    </button></li>`).join("");
  let actual = 0, auto = null;
  const mostrar = (i) => {
    actual = i;
    const p = M.pasos[i];
    lista.querySelectorAll("button").forEach((b, k) => {
      b.setAttribute("aria-selected", k === i);
      b.classList.toggle("hecho", k < i);
    });
    lista.style.setProperty("--avance", i / (M.pasos.length - 1));
    panel.classList.remove("entra"); void panel.offsetWidth; panel.classList.add("entra");
    panel.innerHTML = `
      <span class="paso-num">Paso ${i + 1} de ${M.pasos.length}</span>
      <h3>${esc(p.titulo)}</h3>
      <p class="lead">${esc(p.texto)}</p>
      <div class="panel-cols">
        <div><h4>Qué hago</h4><ul class="check">${p.hago.map((h) => `<li>${esc(h)}</li>`).join("")}</ul></div>
        <div class="recibes"><h4>Qué recibes</h4><p>${esc(p.recibes)}</p></div>
      </div>
      <div class="panel-nav">
        <button class="btn" data-mover="-1" ${i === 0 ? "disabled" : ""}>← Anterior</button>
        <button class="btn primario" data-mover="1" ${i === M.pasos.length - 1 ? "disabled" : ""}>Siguiente →</button>
      </div>`;
  };
  const parar = () => { clearInterval(auto); auto = null; };
  lista.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) { parar(); mostrar(+b.dataset.i); } });
  panel.addEventListener("click", (e) => {
    const b = e.target.closest("[data-mover]");
    if (b) { parar(); mostrar(Math.max(0, Math.min(M.pasos.length - 1, actual + +b.dataset.mover))); }
  });
  lista.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    parar();
    mostrar((actual + (e.key === "ArrowRight" ? 1 : M.pasos.length - 1)) % M.pasos.length);
    lista.querySelectorAll("button")[actual].focus();
  });
  mostrar(0);
  // Avanza solo mientras nadie lo toca, para que se vea que es interactivo
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const ob = new IntersectionObserver(([en]) => {
      if (en.isIntersecting && auto === null && actual === 0) {
        auto = setInterval(() => { if (actual >= M.pasos.length - 1) parar(); else mostrar(actual + 1); }, 4500);
        ob.disconnect();
      }
    }, { threshold: 0.5 });
    ob.observe(panel);
  }

  // ---------- Embudo ----------
  const n = M.embudo.length;
  $("#m-embudo").innerHTML = M.embudo.map((e, i) => `
    <div class="etapa revelar" style="--i:${i};--ancho:${100 - (i * 40) / Math.max(n - 1, 1)}%">
      <div class="etapa-barra"><span class="num">${i + 1}</span><strong>${esc(e.etapa)}</strong></div>
      <div class="etapa-info"><p>${esc(e.texto)}</p><span class="ejemplo">${esc(e.ejemplo)}</span></div>
    </div>`).join("");

  // ---------- Métricas ----------
  $("#m-metricas").innerHTML = M.metricas.map((m) => `
    <div class="metrica revelar"><h3>${esc(m.objetivo)}</h3>
      <ul class="chips">${m.kpis.map((k) => `<li>${esc(k)}</li>`).join("")}</ul></div>`).join("");
  $("#m-pruebas").innerHTML = (M.pruebas || []).map((c) => `
    <div class="cifra revelar"><strong data-valor="${c.valor}" data-prefijo="${esc(c.prefijo || "")}" data-sufijo="${esc(c.sufijo)}">0</strong><span>${esc(c.texto)}</span></div>`).join("");

  $("#m-herramientas").innerHTML = (D.herramientas || []).map((h) => `<li>${esc(h)}</li>`).join("");

  // ---------- Preguntas ----------
  $("#m-preguntas").innerHTML = M.preguntas.map((q, i) => `
    <details class="pregunta revelar"${i === 0 ? " open" : ""}>
      <summary>${esc(q.p)}</summary><p>${esc(q.r)}</p>
    </details>`).join("");
})();
