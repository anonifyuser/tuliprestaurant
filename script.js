const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const reveal = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [{opacity: 0, transform: "translateY(28px)"}, {opacity: 1, transform: "translateY(0)"}],
        {duration: 650, easing: "cubic-bezier(.2,.7,.2,1)", fill: "forwards"}
      );
      reveal.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

document.querySelectorAll(".section-heading, .feature-card, .menu-row, .booking-card, .visit-copy, .map-art").forEach(el => {
  el.style.opacity = "0";
  reveal.observe(el);
});
