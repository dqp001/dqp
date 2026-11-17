// Código compartido por todas las páginas: menú, tema, animaciones y formulario.
// Para añadir o quitar páginas del menú, edita "menu" en datos.js.
(() => {
  const D = DATOS;
  const $ = (s) => document.querySelector(s);
  const esc = (t = "") =>
    String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const raiz = document.documentElement;

  // ---------- Tema claro / oscuro ----------
  let tema = null;
  try { tema = localStorage.getItem("tema"); } catch (e) {}
  if (!tema) tema = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  raiz.dataset.theme = tema;
  $(".tema").addEventListener("click", () => {
    tema = raiz.dataset.theme === "light" ? "dark" : "light";
    raiz.dataset.theme = tema;
    try { localStorage.setItem("tema", tema); } catch (e) {}
  });

  // ---------- Logo, pie y menú ----------
  $("#logo").innerHTML = `${esc(D.iniciales)}<span>.</span>`;
  $("#anio").textContent = new Date().getFullYear();
  $("#pie-nombre").textContent = D.nombreCompleto || D.nombre;

  const paginaActual = location.pathname.split("/").pop() || "index.html";
  const partes = (url) => {
    const [pag, hash] = url.split("#");
    return { pag: pag || paginaActual, hash: hash ? "#" + hash : "" };
  };
  // En la misma página, los enlaces con # se quedan como #seccion para que el scroll sea suave
  $(".links").innerHTML = (D.menu || []).map((m) => {
    const { pag, hash } = partes(m.url);
    const href = pag === paginaActual && hash ? hash : m.url;
    return `<li><a href="${esc(href)}" data-pag="${esc(pag)}" data-hash="${esc(hash)}">${esc(m.texto)}</a></li>`;
  }).join("");
  const linksNav = [...document.querySelectorAll(".links a")];

  // ---------- Animaciones al hacer scroll ----------
  const animarCifra = (el) => {
    const fin = +el.dataset.valor, suf = el.dataset.sufijo, pre = el.dataset.prefijo || "", t0 = performance.now();
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
      const num = el.querySelector("[data-valor]");
      if (num) animarCifra(num);
      obs.unobserve(el);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".revelar").forEach((el) => obs.observe(el));

  // Barra de progreso, enlace activo y nav con fondo
  const secciones = [...document.querySelectorAll("main section[id]")];
  const alScroll = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    $(".progreso").style.width = (h > 0 ? (scrollY / h) * 100 : 0) + "%";
    $(".nav").classList.toggle("solida", scrollY > 30);
    let actual = "";
    secciones.forEach((s) => { if (scrollY >= s.offsetTop - 120) actual = "#" + s.id; });
    // Un enlace de sección se marca al llegar a ella; el de la página, cuando no hay ninguno de sección activo
    let marcado = false;
    linksNav.forEach((a) => {
      const on = a.dataset.pag === paginaActual && a.dataset.hash && a.dataset.hash === actual;
      a.classList.toggle("activo", on);
      marcado = marcado || on;
    });
    if (!marcado) linksNav.forEach((a) => {
      if (a.dataset.pag === paginaActual && !a.dataset.hash) a.classList.add("activo");
    });
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
  if (glow) addEventListener("mousemove", (e) => { glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px"; });

  // ---------- Formulario de contacto (si la página tiene uno) ----------
  const form = $("#formulario");
  if (form) form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const estado = $("#estado");
    const datos = Object.fromEntries(new FormData(form));
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
      form.reset();
    } catch {
      estado.textContent = `No se pudo enviar. Escríbeme a ${D.email}`;
    }
  });
})();
