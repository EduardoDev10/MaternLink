/*Codigo comentado para melhor entendimento dos colegas de equipe*/
/*efeitos carrossel*/
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let current = 0;

// Cria bolinhas dinamicamente
slides.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.addEventListener("click", () => goToSlide(index));
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dots button");

function updateCarousel() {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === current);
    dots[i].classList.toggle("active", i === current);
  });
}

function goToSlide(index) {
  current = index;
  updateCarousel();
}

function nextSlide() {
  current = (current + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  updateCarousel();
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// autoplay
setInterval(nextSlide, 5000);

// inicia
updateCarousel();
/*fim efeitos carrossel*/

/* === HEADER FIXO COM TRANSPARÊNCIA AO ROLAR === */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.style.background = "rgba(255, 255, 255, 0.85)";
    header.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
    header.style.backdropFilter = "blur(6px)";
  } else {
    header.style.background = "transparent";
    header.style.boxShadow = "none";
    header.style.backdropFilter = "none";
  }
});

/* === MENU HAMBURGUER === */
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
