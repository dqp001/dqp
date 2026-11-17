// Código compartido por todas las páginas.
// Orden de carga en cada página: datos.js → comun.js → (script de la página).
// El contenido se edita en datos.js; normalmente no hace falta tocar este archivo.
(() => {
  const D = DATOS;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (t = "") =>
    String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const raiz = document.documentElement;
  const sinMovimiento = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pagina = location.pathname.split("/").pop() || "index.html";
  const param = (k) => new URLSearchParams(location.search).get(k);

  const servicio = (slug) => (D.servicios || []).find((s) => s.slug === slug);
  const proyecto = (slug) => D.proyectos.find((p) => p.slug === slug);
  const colores = [["#ff5a6e", "#8b7cf6"], ["#8b7cf6", "#ff5a6e"], ["#22c1c3", "#8b7cf6"], ["#f59e0b", "#ff5a6e"]];

  // ---------- Tema claro / oscuro ----------
  let tema = null;
  try { tema = localStorage.getItem("tema"); } catch (e) {}
  if (!tema) tema = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  raiz.dataset.theme = tema;

  // ---------- Tarjetas y detalle de proyecto ----------
  const imagen = (p, mini) => {
    const i = D.proyectos.indexOf(p);
    return p.imagen
      ? `<img src="${esc((mini && p.miniatura) || p.imagen)}" alt="${esc(p.titulo)}" loading="lazy">`
      : `<div class="placeholder" style="background:linear-gradient(135deg,${colores[i % colores.length].join(",")})">${esc(p.titulo.slice(0, 2).toUpperCase())}</div>`;
  };
  const chipsServicios = (p) => (p.servicios || []).map((s) => servicio(s)).filter(Boolean)
    .map((s) => `<a class="chip-servicio" href="servicio.html?s=${esc(s.slug)}" style="--c1:${s.colores[0]};--c2:${s.colores[1]}">${esc(s.icono)} ${esc(s.nombre)}</a>`).join("");

  const tarjetaProyecto = (p, { grande = false } = {}) => `
    <article class="tarjeta revelar${grande ? " destacada" : ""}" data-slug="${esc(p.slug)}" data-servicios="${esc((p.servicios || []).join(" "))}" tabindex="0">
      <div class="tarjeta-img">${imagen(p, true)}<span class="ver-overlay">Ver proyecto</span></div>
      <div class="tarjeta-cuerpo">
        <span class="cat">${esc(p.categoria)}</span>
        <h3>${esc(p.titulo)}</h3>
        ${p.cliente ? `<span class="cliente">${esc(p.cliente)}</span>` : ""}
        <p>${esc(p.descripcion)}</p>
        <ul class="etiquetas">${p.etiquetas.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
        <span class="ver-mas">Ver detalle →</span>
      </div>
    </article>`;

  let modal;
  const crearModal = () => {
    if (modal) return modal;
    document.body.insertAdjacentHTML("beforeend", `
      <div class="modal" id="modal" hidden>
        <div class="modal-caja" role="dialog" aria-modal="true">
          <button class="cerrar" aria-label="Cerrar">✕</button>
          <div id="modal-contenido"></div>
        </div>
      </div>`);
    modal = $("#modal");
    modal.addEventListener("click", (e) => {
      const f = e.target.closest(".flecha");
      if (f) {
        const pista = f.parentElement.querySelector(".pista");
        pista.scrollBy({ left: (f.classList.contains("izq") ? -1 : 1) * (pista.firstElementChild.offsetWidth + 12), behavior: "smooth" });
        return;
      }
      if (e.target === modal || e.target.closest(".cerrar")) cerrarProyecto();
    });
    addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) cerrarProyecto(); });
    return modal;
  };
  const abrirProyecto = (slug) => {
    const p = proyecto(slug);
    if (!p) return;
    crearModal();
    $("#modal-contenido").innerHTML = `
      <div class="tarjeta-img">${imagen(p)}</div>
      <div class="tarjeta-cuerpo">
        <span class="cat">${esc(p.categoria)}</span>
        <h3>${esc(p.titulo)}</h3>
        ${p.cliente ? `<span class="cliente">${esc(p.cliente)}</span>` : ""}
        <div class="servicios-chips">${chipsServicios(p)}</div>
        <p>${esc(p.descripcion)}</p>
        ${[["Objetivo", p.objetivo], ["Mi participación", p.participacion], ["Resultado", p.resultado]]
          .filter((b) => b[1]).map((b) => `<div class="bloque"><h4>${b[0]}</h4><p>${esc(b[1])}</p></div>`).join("")}
        ${(p.carruseles || []).map((c) => `
          <div class="bloque carrusel-bloque">
            <h4>${esc(c.titulo)}</h4>
            <div class="carrusel">
              <button class="flecha izq" aria-label="Anterior">‹</button>
              <div class="pista">${Array.from({ length: c.laminas }, (_, k) =>
                `<img src="img/carruseles/${esc(c.carpeta)}/lamina_${k + 1}.jpg" alt="${esc(c.titulo)}, lámina ${k + 1}" loading="lazy">`).join("")}</div>
              <button class="flecha der" aria-label="Siguiente">›</button>
            </div>
          </div>`).join("")}
        ${(p.videos || []).length ? `<div class="bloque"><h4>Reels</h4><div class="pista videos">${p.videos.map((v) => `
          <figure><video src="${esc(v.src)}" poster="${esc(v.poster)}" controls playsinline preload="none"></video><figcaption>${esc(v.titulo)}</figcaption></figure>`).join("")}</div></div>` : ""}
        ${(p.galeria || []).length ? `<div class="galeria">${p.galeria.map((g) => `<img src="${esc(g)}" alt="${esc(p.titulo)}" loading="lazy">`).join("")}</div>` : ""}
        <ul class="etiquetas">${p.etiquetas.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
        ${p.enlace ? `<div class="botones izq"><a class="btn primario" href="${esc(p.enlace)}" target="_blank" rel="noopener">Ver en línea</a></div>` : ""}
      </div>`;
    modal.hidden = false;
    $(".modal-caja", modal).scrollTop = 0;
    document.body.style.overflow = "hidden";
    if (history.replaceState) history.replaceState(null, "", "#" + slug);
  };
  const cerrarProyecto = () => {
    $$("video", modal).forEach((v) => v.pause());
    modal.hidden = true;
    document.body.style.overflow = "";
    if (history.replaceState) history.replaceState(null, "", location.pathname + location.search);
  };
  // Cualquier tarjeta de proyecto, en cualquier página, abre el detalle
  document.addEventListener("click", (e) => {
    const t = e.target.closest(".tarjeta[data-slug]");
    if (t && !e.target.closest("a")) abrirProyecto(t.dataset.slug);
  });
  document.addEventListener("keydown", (e) => {
    const t = e.target.closest && e.target.closest(".tarjeta[data-slug]");
    if (t && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); abrirProyecto(t.dataset.slug); }
  });

  const tarjetaServicio = (s) => {
    const n = D.proyectos.filter((p) => (p.servicios || []).includes(s.slug)).length;
    return `
    <a class="servicio-card revelar" href="servicio.html?s=${esc(s.slug)}" style="--c1:${s.colores[0]};--c2:${s.colores[1]}">
      <span class="servicio-icono">${esc(s.icono)}</span>
      <h3>${esc(s.nombre)}</h3>
      <p>${esc(s.resumen)}</p>
      <span class="servicio-pie"><span>${n} ${n === 1 ? "proyecto" : "proyectos"}</span><span class="flecha-ir">→</span></span>
    </a>`;
  };

  // Lo que usan los scripts de cada página
  window.UI = { $, $$, esc, param, servicio, proyecto, tarjetaProyecto, tarjetaServicio, abrirProyecto, chipsServicios };

  // =====================================================================
  //  Lo siguiente se ejecuta cuando la página ya pintó su contenido
  // =====================================================================
  document.addEventListener("DOMContentLoaded", () => {
    // Tema
    const btnTema = $(".tema");
    if (btnTema) btnTema.addEventListener("click", () => {
      tema = raiz.dataset.theme === "light" ? "dark" : "light";
      raiz.dataset.theme = tema;
      try { localStorage.setItem("tema", tema); } catch (e) {}
    });

    // Logo y pie
    if ($("#logo")) $("#logo").innerHTML = `${esc(D.iniciales)}<span>.</span>`;
    if ($("#anio")) $("#anio").textContent = new Date().getFullYear();
    if ($("#pie-nombre")) $("#pie-nombre").textContent = D.nombreCompleto || D.nombre;
    const pie = $(".pie");
    if (pie && !$(".pie-links", pie)) {
      pie.insertAdjacentHTML("afterbegin", `<ul class="pie-links">${(D.menu || []).map((m) => `<li><a href="${esc(m.url)}">${esc(m.texto)}</a></li>`).join("")}</ul>`);
    }

    // ---------- Menú ----------
    const links = $(".links");
    links.innerHTML = (D.menu || []).map((m) => {
      const activo = m.url === pagina || (m.submenu === "servicios" && pagina === "servicio.html");
      const sub = m.submenu === "servicios"
        ? `<button class="sub-btn" aria-label="Ver servicios" aria-expanded="false">▾</button>
           <ul class="submenu">${D.servicios.map((s) => `
             <li><a href="servicio.html?s=${esc(s.slug)}" class="${pagina === "servicio.html" && param("s") === s.slug ? "activo" : ""}">
               <span class="sub-icono" style="--c1:${s.colores[0]};--c2:${s.colores[1]}">${esc(s.icono)}</span>${esc(s.nombre)}</a></li>`).join("")}
             <li class="sub-todos"><a href="servicios.html">Ver todos los servicios →</a></li>
           </ul>` : "";
      return `<li class="${sub ? "con-sub" : ""}"><a href="${esc(m.url)}" class="${activo ? "activo" : ""}">${esc(m.texto)}</a>${sub}</li>`;
    }).join("");
    $$(".sub-btn", links).forEach((b) => b.addEventListener("click", () => {
      const li = b.closest("li"); const ab = li.classList.toggle("abierto"); b.setAttribute("aria-expanded", ab);
    }));
    const menuBtn = $(".menu-btn");
    menuBtn.addEventListener("click", () => {
      const ab = links.classList.toggle("abierto");
      menuBtn.setAttribute("aria-expanded", ab);
      menuBtn.textContent = ab ? "✕" : "☰";
    });

    // ---------- Títulos que aparecen palabra por palabra ----------
    $$("[data-split]").forEach((el) => {
      if (el.dataset.hecho) return;
      el.dataset.hecho = 1;
      el.innerHTML = el.textContent.trim().split(/\s+/)
        .map((w, i) => `<span class="palabra"><span style="--i:${i}">${esc(w)}</span></span>`).join(" ");
      el.classList.add("revelar", "split");
    });

    // ---------- Aparición al hacer scroll, en cascada ----------
    const animarCifra = (el) => {
      const fin = +el.dataset.valor, suf = el.dataset.sufijo || "", pre = el.dataset.prefijo || "", t0 = performance.now();
      const paso = (t) => {
        const k = Math.min((t - t0) / 1600, 1);
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
        const num = el.matches("[data-valor]") ? el : el.querySelector("[data-valor]");
        if (num) animarCifra(num);
        obs.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    const observar = () => $$(".revelar:not(.observado)").forEach((el) => {
      el.classList.add("observado");
      // Retraso en cascada entre hermanos (tarjetas, pasos, etc.)
      const hermanos = [...el.parentElement.children].filter((h) => h.classList.contains("revelar"));
      el.style.setProperty("--retraso", `${Math.min(hermanos.indexOf(el), 8) * 80}ms`);
      obs.observe(el);
    });
    observar();
    UI.observar = observar; // para contenido que se pinta después (filtros)

    // ---------- Scroll: barra de progreso, nav y parallax ----------
    const prog = $(".progreso"), nav = $(".nav");
    const parallax = $$("[data-parallax]");
    const alScroll = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      if (prog) prog.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + "%";
      nav.classList.toggle("solida", scrollY > 30);
      if (!sinMovimiento) parallax.forEach((el) => (el.style.transform = `translateY(${scrollY * +el.dataset.parallax}px)`));
    };
    addEventListener("scroll", alScroll, { passive: true });
    alScroll();

    // ---------- Brillo del cursor y botones magnéticos ----------
    const glow = $(".cursor-glow");
    if (glow) addEventListener("mousemove", (e) => { glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px"; });
    if (!sinMovimiento && matchMedia("(hover: hover)").matches) {
      document.addEventListener("mousemove", (e) => {
        const b = e.target.closest(".btn, .servicio-card");
        $$(".magnetico").forEach((x) => { if (x !== b) { x.style.translate = ""; x.classList.remove("magnetico"); } });
        if (!b) return;
        const r = b.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        if (b.classList.contains("btn")) { b.classList.add("magnetico"); b.style.translate = `${x * 8}px ${y * 8}px`; }
        else { b.style.setProperty("--mx", `${(x + 0.5) * 100}%`); b.style.setProperty("--my", `${(y + 0.5) * 100}%`); }
      });
    }

    // ---------- Partículas en la portada de cada página ----------
    const cv = $("#particulas");
    if (cv && !sinMovimiento) {
      const ctx = cv.getContext("2d");
      let pts = [], raton = { x: -999, y: -999 };
      const ajustar = () => {
        const dpr = devicePixelRatio || 1;
        cv.width = cv.offsetWidth * dpr; cv.height = cv.offsetHeight * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const n = Math.min(80, Math.floor((cv.offsetWidth * cv.offsetHeight) / 15000));
        pts = Array.from({ length: n }, () => ({
          x: Math.random() * cv.offsetWidth, y: Math.random() * cv.offsetHeight,
          vx: (Math.random() - 0.5) * 0.45, vy: (Math.random() - 0.5) * 0.45,
        }));
      };
      cv.parentElement.addEventListener("mousemove", (e) => {
        const r = cv.getBoundingClientRect(); raton = { x: e.clientX - r.left, y: e.clientY - r.top };
      });
      cv.parentElement.addEventListener("mouseleave", () => (raton = { x: -999, y: -999 }));
      let visible = true;
      new IntersectionObserver(([en]) => (visible = en.isIntersecting)).observe(cv);
      const dibujar = () => {
        requestAnimationFrame(dibujar);
        if (!visible) return;
        const w = cv.offsetWidth, h = cv.offsetHeight;
        const color = getComputedStyle(cv).getPropertyValue("--c-part").trim() || getComputedStyle(raiz).getPropertyValue("--acento").trim();
        ctx.clearRect(0, 0, w, h);
        pts.forEach((p) => {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
          const dx = p.x - raton.x, dy = p.y - raton.y, d = Math.hypot(dx, dy);
          if (d < 120 && d > 0) { p.x += dx / d; p.y += dy / d; }
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
      };
      ajustar(); dibujar();
      addEventListener("resize", ajustar);
    }

    // ---------- Formulario de contacto (si la página tiene uno) ----------
    const form = $("#formulario");
    if (form) {
      const sel = $("select[name=servicio]", form);
      if (sel) {
        sel.innerHTML = `<option value="">Elige un servicio (opcional)</option>` +
          D.servicios.map((s) => `<option${param("servicio") === s.slug ? " selected" : ""}>${esc(s.nombre)}</option>`).join("") +
          `<option>Otro / no estoy segura</option>`;
      }
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const estado = $("#estado");
        const datos = Object.fromEntries(new FormData(form));
        if (!D.formspreeId) {
          const asunto = encodeURIComponent(`Contacto desde el portfolio — ${datos.nombre}${datos.servicio ? " · " + datos.servicio : ""}`);
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
          form.reset();
        } catch {
          estado.textContent = `No se pudo enviar. Escríbeme a ${D.email}`;
        }
      });
    }

    // Abrir un proyecto si la dirección trae #slug (ej. proyectos.html#fitpod)
    const h = decodeURIComponent(location.hash.slice(1));
    if (h && proyecto(h)) setTimeout(() => abrirProyecto(h), 300);

    document.body.classList.add("cargada");
  });
})();
