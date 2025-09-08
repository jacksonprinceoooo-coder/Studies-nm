// Sticky Header
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact Form
const formMessage = document.getElementById("formMessage");
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  formMessage.textContent = "✅ Thank you! Your message has been sent.";
  formMessage.classList.add("show");
  this.reset();
  setTimeout(() => formMessage.classList.remove("show"), 4000);
});

// Dark Mode Toggle with Memory
const toggleBtn = document.getElementById("darkModeToggle");
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️ Light Mode";
}
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) backToTop.classList.add("show");
  else backToTop.classList.remove("show");
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Navbar Active Link Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav ul li a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) current = section.getAttribute("id");
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) link.classList.add("active");
  });
});
