const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const stickyCta = document.querySelector(".mobile-sticky-cta");

window.addEventListener("scroll", () => {
  const isScrolled = window.scrollY > 24;
  header.classList.toggle("is-scrolled", isScrolled);
  stickyCta.classList.toggle("is-visible", window.scrollY > 420);
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
