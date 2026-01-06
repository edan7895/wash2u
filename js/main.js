// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Banner Slider
const slides = document.querySelectorAll(".banner img");
let currentSlide = 0;

function showSlides() {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[currentSlide].classList.add("active");
  currentSlide = (currentSlide + 1) % slides.length;
}

if (slides.length > 0) {
  slides[0].classList.add("active");
  setInterval(showSlides, 4000);
}
