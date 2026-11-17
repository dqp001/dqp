// Lógica del portfolio. Normalmente no necesitas tocar este archivo:
// el contenido se edita en datos.js
(() => {
  const D = DATOS;
  const $ = (s) => document.querySelector(s);
  const esc = (t = "") =>
    String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const colores = [
    ["#ff5a6e", "#8b7cf6"], ["#8b7cf6", "#ff5a6e"], ["#10b981", "#3b82f6"],
    ["#a855f7", "#ec4899"], ["#0ea5e9", "#6366f1"], ["#f97316", "#84cc16"],
  ];

  // ---------- Tema claro / oscuro ----------
  const raiz = document.documentElement;
  let tema = null;
  try { tema = localStorage.getItem("tema"); } catch (e) {}
  if (!tema) tema = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  raiz.dataset.theme = tema;
  $(".tema").addEventListener("click", () => {
    tema = raiz.dataset.theme === "light" ? "dark" : "light";
    raiz.dataset.theme = tema;
    try { localStorage.setItem("tema", tema); } catch (e) {}
  });

  // ---------- Contenido ----------
    $("#logo").innerHTML = `${esc(D.iniciales)}<span>.</span>`;
  $("#nombre").textContent = D.nombre;
  $("#descripcion").textContent = D.descripcion;
    $("#anio").textContent = new Date().getFullYear();
  $("#avatar").innerHTML = D.foto ? `<img src="${esc(D.foto)}" alt="${esc(D.nombre)}">` : esc(D.iniciales);
  if (D.cv) $("#btn-cv").href = D.cv; else $("#btn-cv").remove();
  if (D.portafolioPdf) $("#btn-pdf").href = D.portafolioPdf; else $("#btn-pdf").remove();
  $("#frase").textContent = D.frase ? `“${D.frase}”` : "";
  $("#pie-nombre").textContent = D.nombreCompleto || D.nombre;

  const redesHTML = D.redes.map((r) => `<li><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.nombre)}</a></li>`).join("");
  $("#redes-hero").innerHTML = redesHTML;
  $("#redes-contacto").innerHTML = redesHTML;

  $("#sobre-texto").innerHTML = D.sobreMi.map((p) => `<p>${esc(p)}</p>`).join("");
  const chips = (l) => l.map((x) => `<li>${esc(x)}</li>`).join("");
  $("#servicios").innerHTML = chips(D.servicios || []);
  $("#herramientas").innerHTML = chips(D.herramientas || []);
  $("#habilidades").innerHTML = D.habilidades.map((h) => `
    <div class="grupo"><h3>${esc(h.grupo)}</h3><ul class="chips">${chips(h.items)}</ul></div>`).join("");
  $("#lista-proceso").innerHTML = (D.proceso || []).map((p) => `
    <li class="paso revelar"><h3>${esc(p.titulo)}</h3><p>${esc(p.texto)}</p></li>`).join("");
  $("#cifras").innerHTML = D.cifras.map((c) => `
    <div class="cifra revelar"><strong data-valor="${c.valor}" data-prefijo="${esc(c.prefijo || "")}" data-sufijo="${esc(c.sufijo)}">0</strong><span>${esc(c.texto)}</span></div>`).join("");

  $("#linea-tiempo").innerHTML = D.experiencia.map((e) => `
    <li class="hito revelar">
      <span class="fecha">${esc(e.fecha)}</span>
      <h3>${esc(e.puesto)}</h3>
      <span class="lugar">${esc(e.lugar)}</span>
      <p>${esc(e.texto)}</p>
    </li>`).join("");

  $("#email-link").textContent = D.email;
  $("#email-link").href = `mailto:${D.email}`;
  $("#ubicacion").textContent = D.ubicacion ? `📍 ${D.ubicacion}` : "";

  // ---------- Proyectos ----------
  const imagen = (p, i) => p.imagen
    ? `<img src="${esc(p.imagen)}" alt="${esc(p.titulo)}" loading="lazy">`
    : `<div class="placeholder" style="background:linear-gradient(135deg,${colores[i % colores.length].join(",")})">${esc(p.titulo.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase())}</div>`;

  $("#lista-proyectos").innerHTML = D.proyectos.map((p, i) => `
    <article class="tarjeta revelar${p.destacado ? " destacada" : ""}" data-cat="${esc(p.categoria)}" data-i="${i}" tabindex="0">
      <div class="tarjeta-img">${imagen(p, i)}</div>
      <div class="tarjeta-cuerpo">
        <span class="cat">${esc(p.categoria)}${p.destacado ? '<span class="insignia">Caso destacado</span>' : ""}</span>
        <h3>${esc(p.titulo)}</h3>
        ${p.cliente ? `<span class="cliente">${esc(p.cliente)}</span>` : ""}
        <p>${esc(p.descripcion)}</p>
        <ul class="etiquetas">${p.etiquetas.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
        <span class="ver-mas">Ver detalle →</span>
      </div>
    </article>`).join("");

  const cats = ["Todos", ...new Set(D.proyectos.map((p) => p.categoria))];
  $("#filtros").innerHTML = cats.map((c, i) => `<button class="filtro${i ? "" : " activo"}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
  $("#filtros").addEventListener("click", (e) => {
    const b = e.target.closest(".filtro");
    if (!b) return;
    document.querySelectorAll(".filtro").forEach((f) => f.classList.toggle("activo", f === b));
    document.querySelectorAll(".tarjeta").forEach((t) => {
      const ver = b.dataset.cat === "Todos" || t.dataset.cat === b.dataset.cat;
      t.classList.toggle("oculta", !ver);
      if (ver) t.classList.add("visible");
    });
  });

  // Efecto 3D al pasar el ratón por las tarjetas
  document.querySelectorAll(".tarjeta").forEach((t) => {
    t.addEventListener("mousemove", (e) => {
      const r = t.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      t.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
    });
    t.addEventListener("mouseleave", () => (t.style.transform = ""));
  });

  // Ventana de detalle del proyecto
  const modal = $("#modal");
  const abrir = (i) => {
    const p = D.proyectos[i];
    const enlaces = [
      p.enlace && `<a class="btn primario" href="${esc(p.enlace)}" target="_blank" rel="noopener">Ver proyecto</a>`,
      p.codigo && `<a class="btn" href="${esc(p.codigo)}" target="_blank" rel="noopener">Código</a>`,
    ].filter(Boolean).join("");
    $("#modal-contenido").innerHTML = `
      <div class="tarjeta-img">${imagen(p, i)}</div>
      <div class="tarjeta-cuerpo">
        <span class="cat">${esc(p.categoria)}</span>
        <h3>${esc(p.titulo)}</h3>
        ${p.cliente ? `<span class="cliente">${esc(p.cliente)}</span>` : ""}
        <p>${esc(p.descripcion)}</p>
        ${[["Objetivo", p.objetivo], ["Mi participación", p.participacion], ["Resultado", p.resultado]]
          .filter((b) => b[1]).map((b) => `<div class="bloque"><h4>${b[0]}</h4><p>${esc(b[1])}</p></div>`).join("")}
        ${(p.galeria || []).length ? `<div class="galeria">${p.galeria.map((g) => `<img src="${esc(g)}" alt="${esc(p.titulo)}" loading="lazy">`).join("")}</div>` : ""}
        <ul class="etiquetas">${p.etiquetas.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
        ${enlaces ? `<div class="botones">${enlaces}</div>` : ""}
      </div>`;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  };
  const cerrar = () => { modal.hidden = true; document.body.style.overflow = ""; };
  $("#lista-proyectos").addEventListener("click", (e) => {
    const t = e.target.closest(".tarjeta");
    if (t) abrir(+t.dataset.i);
  });
  $("#lista-proyectos").addEventListener("keydown", (e) => {
    const t = e.target.closest(".tarjeta");
    if (t && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); abrir(+t.dataset.i); }
  });
  modal.addEventListener("click", (e) => { if (e.target === modal || e.target.closest(".cerrar")) cerrar(); });
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) cerrar(); });

  // ---------- Texto que se escribe solo ----------
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

  // ---------- Animaciones al hacer scroll ----------
  const animarCifra = (el) => {
    const fin = +el.dataset.valor, suf = el.dataset.sufijo, pre = el.dataset.prefijo, t0 = performance.now();
    const paso = (t) => {
      const k = Math.min((t - t0) / 1500, 1);
      el.textContent = pre + Math.round(fin * (1 - Math.pow(1 - k, 3))).toLocaleString("es-MX") + suf;
      if (k < 1) requestAnimationFrame(paso);
    };
    requestAnimationFrame(paso);
  };
  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      el.classList.add("visible");
      el.querySelectorAll(".barra span").forEach((b) => (b.style.width = b.dataset.nivel + "%"));
      const num = el.querySelector("[data-valor]");
      if (num) animarCifra(num);
      obs.unobserve(el);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".revelar").forEach((el) => obs.observe(el));

  // Barra de progreso, menú activo y nav con fondo
  const secciones = [...document.querySelectorAll("main section")];
  const linksNav = [...document.querySelectorAll(".links a")];
  const alScroll = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    $(".progreso").style.width = (h > 0 ? (scrollY / h) * 100 : 0) + "%";
    $(".nav").classList.toggle("solida", scrollY > 30);
    let actual = "";
    secciones.forEach((s) => { if (scrollY >= s.offsetTop - 120) actual = s.id; });
    linksNav.forEach((a) => a.classList.toggle("activo", a.getAttribute("href") === "#" + actual));
  };
  addEventListener("scroll", alScroll, { passive: true });
  alScroll();

  // Menú móvil
  const menuBtn = $(".menu-btn"), links = $(".links");
  menuBtn.addEventListener("click", () => {
    const abierto = links.classList.toggle("abierto");
    menuBtn.setAttribute("aria-expanded", abierto);
  });
  linksNav.forEach((a) => a.addEventListener("click", () => links.classList.remove("abierto")));

  // Brillo que sigue al ratón
  const glow = $(".cursor-glow");
  addEventListener("mousemove", (e) => { glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px"; });

  // ---------- Partículas conectadas en la portada ----------
  const cv = $("#particulas"), ctx = cv.getContext("2d");
  let pts = [], raton = { x: -999, y: -999 };
  const ajustar = () => {
    const dpr = devicePixelRatio || 1;
    cv.width = cv.offsetWidth * dpr; cv.height = cv.offsetHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(90, Math.floor((cv.offsetWidth * cv.offsetHeight) / 14000));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * cv.offsetWidth, y: Math.random() * cv.offsetHeight,
      vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
    }));
  };
  cv.parentElement.addEventListener("mousemove", (e) => {
    const r = cv.getBoundingClientRect(); raton = { x: e.clientX - r.left, y: e.clientY - r.top };
  });
  cv.parentElement.addEventListener("mouseleave", () => (raton = { x: -999, y: -999 }));
  const dibujar = () => {
    const w = cv.offsetWidth, h = cv.offsetHeight;
    const color = getComputedStyle(raiz).getPropertyValue("--acento").trim();
    ctx.clearRect(0, 0, w, h);
    pts.forEach((p) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      const dx = p.x - raton.x, dy = p.y - raton.y, d = Math.hypot(dx, dy);
      if (d < 120) { p.x += dx / d; p.y += dy / d; }
    });
    ctx.fillStyle = color; ctx.strokeStyle = color;
    for (let i = 0; i < pts.length; i++) {
      ctx.globalAlpha = 0.7;
      ctx.beginPath(); ctx.arc(pts[i].x, pts[i].y, 2, 0, Math.PI * 2); ctx.fill();
      for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
        if (d < 130) {
          ctx.globalAlpha = (1 - d / 130) * 0.35;
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(dibujar);
  };
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
    ajustar(); dibujar();
    addEventListener("resize", ajustar);
  }

  // ---------- Formulario de contacto ----------
  $("#formulario").addEventListener("submit", async (e) => {
    e.preventDefault();
    const f = e.target, estado = $("#estado");
    const datos = Object.fromEntries(new FormData(f));
    if (!D.formspreeId) {
      const asunto = encodeURIComponent(`Contacto desde el portfolio — ${datos.nombre}`);
      const cuerpo = encodeURIComponent(`${datos.mensaje}\n\n${datos.nombre} (${datos.email})`);
      location.href = `mailto:${D.email}?subject=${asunto}&body=${cuerpo}`;
      return;
    }
    estado.textContent = "Enviando…";
    try {
      const res = await fetch(`https://formspree.io/f/${D.formspreeId}`, {
        method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
      if (!res.ok) throw new Error();
      estado.textContent = "¡Mensaje enviado! Te responderé pronto.";
      f.reset();
    } catch {
      estado.textContent = `No se pudo enviar. Escríbeme a ${D.email}`;
    }
  });
})();
