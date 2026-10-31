"use strict";
// Cadence site. Content that changes (prices, links, packs) comes from config.js.
(() => {
  const C = window.CADENCE || {};
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const initials = (name) => (name.match(/\b\w/g) || ["?"]).slice(0, 2).join("").toUpperCase();
  const hue = (name) => [...name].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 360, 7);
  const el = (tag, attrs = {}, ...children) => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") node.className = v;
      else if (k === "style") node.style.cssText = v;
      else node.setAttribute(k, v);
    }
    node.append(...children.filter((c) => c !== null && c !== undefined));
    return node;
  };
  const avatar = (name, extra = "") => {
    const a = el("span", { class: `avatar ${extra}`, "aria-hidden": "true" }, initials(name));
    a.style.setProperty("--h", hue(name));
    return a;
  };

  // ---------- toast ----------
  function toast(message) {
    let t = $("#toast");
    if (!t) {
      t = el("div", { id: "toast", class: "toast", role: "status" });
      document.body.append(t);
    }
    t.textContent = message;
    t.hidden = false;
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => { t.hidden = true; }, 3200);
  }

  // ---------- buy buttons ----------
  // <a data-buy="app"> or data-buy="pack:<id>" or data-buy="bundle"
  function checkoutFor(key) {
    if (key === "app") return C.checkout;
    if (key === "bundle") return C.bundle && C.bundle.checkout;
    if (key.startsWith("pack:")) {
      const pack = (C.packs || []).find((p) => p.id === key.slice(5));
      return pack && pack.checkout;
    }
    return "";
  }
  function wireBuy(root = document) {
    $$("[data-buy]", root).forEach((a) => {
      const url = checkoutFor(a.dataset.buy);
      if (url) {
        a.href = url;
        a.rel = "noopener";
        // Lemon Squeezy links open as a pop-up over the page (see loadLemon)
        if (/(^|\.)lemonsqueezy\.com$/.test(new URL(url, location.href).hostname)) a.classList.add("lemonsqueezy-button");
      } else {
        a.href = "#";
        a.classList.add("soon");
        a.addEventListener("click", (e) => {
          e.preventDefault();
          toast("Coming soon. Check back shortly!");
        });
      }
    });
  }

  // ---------- text from config ----------
  $$("[data-price]").forEach((e) => { e.textContent = C.price || "$10"; });
  $$("[data-requirements]").forEach((e) => { e.textContent = C.requirements || ""; });
  $$("[data-email]").forEach((e) => {
    if (!C.supportEmail) return;
    if (e.tagName === "A") e.href = `mailto:${C.supportEmail}`;
    if (!e.dataset.keepText) e.textContent = C.supportEmail;
  });
  $$("[data-year]").forEach((e) => { e.textContent = new Date().getFullYear(); });
  $$("[data-pc]").forEach((e) => {
    if (C.pcVersion) e.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>' + C.pcVersion;
    else e.parentElement.hidden = true;
  });
  $$("[data-pc-faq]").forEach((e) => { e.hidden = !C.pcVersion; });

  // ---------- audio: one sample plays at a time ----------
  const player = new Audio();
  let current = null;
  function stop() {
    player.pause();
    if (current) current.classList.remove("playing");
    current = null;
  }
  player.addEventListener("ended", stop);
  function playButton(src, label) {
    const button = el("button", { class: "play", type: "button", "aria-label": `Play ${label}` });
    button.innerHTML =
      '<svg class="i-play" viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z"/></svg>' +
      '<svg class="i-pause" viewBox="0 0 24 24"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z"/></svg>';
    const unavailable = () => {
      button.disabled = true;
      button.title = "Sample coming soon";
      button.dispatchEvent(new CustomEvent("unavailable", { bubbles: true }));
    };
    if (!src) unavailable();
    else {
      // Check the file exists, so a missing sample shows as "coming soon"
      // rather than a button that does nothing.
      const probe = new Audio();
      probe.preload = "metadata";
      probe.addEventListener("error", unavailable, { once: true });
      probe.src = src;
    }
    button.addEventListener("click", () => {
      if (current === button) return stop();
      stop();
      player.src = src;
      player.play().then(() => {
        current = button;
        button.classList.add("playing");
        button.setAttribute("aria-label", `Pause ${label}`);
      }).catch(unavailable);
    });
    return button;
  }
  function wave(count = 28) {
    const w = el("div", { class: "wave", "aria-hidden": "true" });
    for (let i = 0; i < count; i++) {
      const bar = el("span");
      bar.style.height = `${25 + Math.round(60 * Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.6)))}%`;
      bar.style.animationDelay = `${(i % 7) * 0.08}s`;
      w.append(bar);
    }
    return w;
  }

  // ---------- samples (home) ----------
  const samples = $("#samples");
  if (samples) {
    for (const s of C.samples || []) {
      const button = playButton(s.src, `${s.voice} sample`);
      const note = el("span", { class: "soon-note", hidden: "" }, "Sample coming soon");
      const card = el("article", { class: "sample reveal" },
        el("div", { class: "sample-head" }, avatar(s.voice),
          el("div", {}, el("div", { class: "sample-name" }, s.voice), el("div", { class: "sample-style" }, s.style))),
        el("blockquote", {}, s.text),
        el("div", { class: "play-row" }, button, wave(), note));
      card.addEventListener("unavailable", () => { note.hidden = false; card.querySelector(".wave").hidden = true; });
      samples.append(card);
    }
  }

  // ---------- voice packs ----------
  // A pack's voices are names, or { name, gender } to also show the mix.
  const voiceName = (v) => (typeof v === "string" ? v : v.name);
  function voiceSummary(voices) {
    const count = (g) => voices.filter((v) => v.gender === g).length;
    const mix = [count("female") && `${count("female")} female`, count("male") && `${count("male")} male`].filter(Boolean);
    return `${voices.length} voices${mix.length ? ` (${mix.join(", ")})` : ""}: ${voices.map(voiceName).join(", ")}`;
  }
  function packCard(p) {
    const names = p.voices.map(voiceName);
    const faces = el("div", { class: "faces" }, ...names.slice(0, 4).map((v) => avatar(v)),
      names.length > 4 ? el("span", { class: "avatar more", "aria-hidden": "true" }, `+${names.length - 4}`) : null);
    const buy = el("a", { class: "btn btn-primary btn-sm", "data-buy": `pack:${p.id}` }, "Buy");
    const card = el("article", { class: "pack reveal", "data-category": p.category },
      el("div", { class: "pack-top" }, faces, el("span", { class: "chip" }, p.category)),
      el("h3", {}, p.name),
      el("p", {}, p.tagline),
      el("div", { class: "voices-list" }, voiceSummary(p.voices)),
      el("div", { class: "pack-foot" }, el("span", { class: "price" }, p.price),
        el("div", { class: "actions" }, playButton(p.sample, `${p.name} sample`), buy)));
    return card;
  }
  const packGrid = $("#packs");
  if (packGrid) {
    const limit = Number(packGrid.dataset.limit || 0);
    const packs = (C.packs || []).slice(0, limit || undefined);
    packs.forEach((p) => packGrid.append(packCard(p)));
    packGrid.classList.toggle("two-up", packs.length % 3 !== 0 && packs.length % 2 === 0);
    wireBuy(packGrid);

    const filters = $("#filters");
    if (filters) {
      const categories = ["All", ...new Set(packs.map((p) => p.category))];
      categories.forEach((cat, i) => {
        const b = el("button", { class: "filter", type: "button", "aria-pressed": String(i === 0) }, cat);
        b.addEventListener("click", () => {
          $$(".filter", filters).forEach((f) => f.setAttribute("aria-pressed", String(f === b)));
          $$(".pack", packGrid).forEach((card) => { card.hidden = cat !== "All" && card.dataset.category !== cat; });
        });
        filters.append(b);
      });
    }
  }
  const bundle = $("#bundle");
  if (bundle && C.bundle) {
    $("[data-bundle-name]", bundle).textContent = C.bundle.name;
    $("[data-bundle-tagline]", bundle).textContent = C.bundle.tagline;
    $("[data-bundle-price]", bundle).textContent = C.bundle.price;
  }
  wireBuy();

  // ---------- Lemon Squeezy checkout overlay ----------
  // Their script turns .lemonsqueezy-button links into a pop-up checkout. If
  // it can't load, the links still work and open the checkout page instead.
  if ($(".lemonsqueezy-button")) {
    const script = el("script", { src: "https://app.lemonsqueezy.com/js/lemon.js", defer: "" });
    script.addEventListener("load", () => { if (window.createLemonSqueezy) window.createLemonSqueezy(); });
    document.head.append(script);
  }

  // ---------- showcase tabs ----------
  const showcase = $("#showcase");
  if (showcase) {
    const tabs = $$(".tab", showcase);
    const img = $("img", showcase);
    const source = $("source", showcase);
    const caption = $(".caption", showcase);
    tabs.forEach((tab) => tab.addEventListener("click", () => {
      tabs.forEach((t) => t.setAttribute("aria-selected", String(t === tab)));
      img.style.opacity = 0;
      setTimeout(() => {
        img.src = `assets/img/${tab.dataset.shot}-light.png`;
        source.srcset = `assets/img/${tab.dataset.shot}-dark.png`;
        img.alt = tab.dataset.alt;
        caption.textContent = tab.dataset.caption;
        img.onload = () => { img.style.opacity = 1; };
      }, 180);
    }));
  }

  // ---------- header & menu ----------
  const header = $(".site-header");
  const onScroll = () => header && header.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  const menuButton = $(".menu-button");
  const menu = $(".mobile-menu");
  if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
      menu.hidden = !menu.hidden;
      menuButton.setAttribute("aria-expanded", String(!menu.hidden));
    });
    $$("a", menu).forEach((a) => a.addEventListener("click", () => { menu.hidden = true; }));
  }

  // ---------- FAQ links (e.g. index.html#update) open their answer ----------
  const linked = location.hash && document.getElementById(location.hash.slice(1));
  if (linked && linked.tagName === "DETAILS") linked.open = true;

  // ---------- reveal on scroll ----------
  const reveals = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach((r) => io.observe(r));
  } else {
    reveals.forEach((r) => r.classList.add("in"));
  }
})();
