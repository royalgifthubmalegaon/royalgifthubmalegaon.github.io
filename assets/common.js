// Shared layout and helpers for every page. Shop data lives in data.js.

const ICONS = {
  "i-gift": '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
  "i-pen": '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  "i-trophy": '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
  "i-frame": '<rect x="3" y="3" width="18" height="18" rx="1.5"/><rect x="7" y="7" width="10" height="10"/>',
  "i-drop": '<path d="M9 3h6M10 3v3l-3 3v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9l-3-3V3"/><path d="M7 13h10"/>',
  "i-sparkle": '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 17l.7 1.8 1.8.7-1.8.7L19 22l-.7-1.8-1.8-.7 1.8-.7z"/>',
  "i-key": '<circle cx="8" cy="15" r="4"/><path d="M10.8 12.2 20 3M17 6l3 3M14.5 8.5l2 2"/>',
  "i-ribbon": '<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7"/>',
  "i-tag": '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><path d="M7.5 7.5h.01"/>',
  "i-star": '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
  "i-pin": '<path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
  "i-phone": '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
  "i-mail": '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  "i-clock": '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  "i-arrow": '<path d="M5 12h14M13 6l6 6-6 6"/>',
  "i-insta": '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>'
};
const WA_PATH = '<path fill="currentColor" stroke="none" d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.700.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zM12 0a12 12 0 0 0-10.3 18L0 24l6.2-1.6A12 12 0 1 0 12 0z"/>';

function icon(id) {
  const body = id === "i-wa" ? WA_PATH : ICONS[id] || ICONS["i-gift"];
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function waLink(message) {
  const text = message || `Hello ${SHOP.name}, I would like to know about your gifts.`;
  return `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(text)}`;
}

function productCard(p, category, showCategory) {
  const msg = `Hello ${SHOP.name}, I am interested in: ${p.name}. ${new URL(p.image, location.href).href}`;
  return `<article class="product reveal">
    <div class="ph"><img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy">${p.new ? '<span class="badge">NEW</span>' : ""}</div>
    <div class="info">
      ${showCategory ? `<a class="cat-name" href="category.html?c=${category.key}">${esc(category.title)}</a>` : ""}
      <h3>${esc(p.name)}</h3>
      <div class="price">${p.price ? esc(p.price) : "Ask for price"}</div>
      <a class="btn btn-wa btn-sm" href="${waLink(msg)}" target="_blank" rel="noopener">${icon("i-wa")}Enquire on WhatsApp</a>
    </div>
  </article>`;
}

function renderLayout() {
  const header = `<header><nav class="wrap nav">
    <a href="index.html" class="logo">${icon("i-gift")}${esc(SHOP.name)}</a>
    <button class="menu-btn" aria-label="Open menu"><span></span><span></span><span></span></button>
    <ul id="menu">
      <li><a href="index.html#collections">Collections</a></li>
      <li><a href="index.html#new">New Arrivals</a></li>
      <li><a href="index.html#shop">Our Shop</a></li>
      <li><a href="index.html#visit">Visit Us</a></li>
    </ul></nav></header>`;
  const offer = SHOP.offer
    ? `<div class="offer">${esc(SHOP.offer)} <a href="${waLink()}" target="_blank" rel="noopener">Chat now</a></div>`
    : "";
  document.body.insertAdjacentHTML("afterbegin", offer + header);
  const menu = document.getElementById("menu");
  document.querySelector(".menu-btn").onclick = () => menu.classList.toggle("open");
  menu.onclick = () => menu.classList.remove("open");

  document.body.insertAdjacentHTML("beforeend", `<footer>
    <div class="social">
      ${SHOP.instagram ? `<a href="${esc(SHOP.instagram)}" target="_blank" rel="noopener" aria-label="Instagram" style="width:22px;display:block">${icon("i-insta")}</a>` : ""}
      <a href="${waLink()}" target="_blank" rel="noopener" aria-label="WhatsApp" style="width:22px;display:block">${icon("i-wa")}</a>
    </div>
    <p class="names">${esc(SHOP.nameHindi)} &nbsp;·&nbsp; <span lang="ur" dir="rtl">${esc(SHOP.nameUrdu)}</span></p>
    <p>&copy; ${new Date().getFullYear()} ${esc(SHOP.name)}, Malegaon. All rights reserved.</p>
  </footer>
  <a class="wa-float" href="${waLink()}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${icon("i-wa")}</a>`);

  document.querySelectorAll("[data-icon]").forEach(el => el.innerHTML = icon(el.dataset.icon));
  document.querySelectorAll(".js-wa").forEach(a => a.href = waLink());
  document.querySelectorAll(".js-phone").forEach(a => a.href = `tel:${SHOP.phone.replace(/\s/g, "")}`);
}

function addSparkles(container, count) {
  const box = document.createElement("div");
  box.className = "sparkles";
  for (let i = 0; i < count; i++) {
    const s = document.createElement("i");
    const size = 8 + Math.random() * 14;
    Object.assign(s.style, {
      left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
      width: `${size}px`, height: `${size}px`,
      animationDelay: `${Math.random() * 3.2}s`, animationDuration: `${2.4 + Math.random() * 2}s`
    });
    box.appendChild(s);
  }
  container.prepend(box);
}

function revealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { items.forEach(el => el.classList.add("in")); return; }
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  items.forEach(el => io.observe(el));
}
