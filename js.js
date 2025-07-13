// theme
const btn = document.querySelector("#theme-toggle");
const body = document.querySelector("body");

// menu
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector(".nav-links");

//load-theme-dark/light
var theme = localStorage.getItem("theme");
if (theme == "dark") {
  body.classList.add("dark-mode");
} else {
  body.classList.remove("dark-mode");
}

// theme-toggle & save to local storage
btn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
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
