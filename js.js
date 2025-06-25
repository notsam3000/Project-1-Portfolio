// theme
const btn = document.querySelector("#theme-toggle");
// menu
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector(".nav-links");

// theme-toggle
btn.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark-mode");
});

//menu-toggle
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

//remove menu when clicking outside (mobile)
document.addEventListener("click", (e) => {
  const isClickInsideNav =
    navLinks.contains(e.target) || menuToggle.contains(e.target);
  if (!isClickInsideNav) {
    navLinks.classList.remove("open");
  }
});
