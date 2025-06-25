// theme
const btn = document.querySelector("#theme-toggle");
// menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

// theme-toggle
btn.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark-mode");
});

//menu-toggle
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
