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

/* MENU HAMBURGUER */
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

/* EFEITO DE TRANSPARÊNCIA DO MENU */
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});



/* EFEITO DO CARROSSEL NAS MENSAGENS */

const quoteCards = document.querySelectorAll('.quote-card');
const nextQuote = document.querySelector('.quote-next');
const prevQuote = document.querySelector('.quote-prev');
let quoteIndex = 0;

function showQuote(i) {
  quoteCards.forEach(q => q.classList.remove('active'));
  quoteCards[i].classList.add('active');
}

function nextQ() {
  quoteIndex = (quoteIndex + 1) % quoteCards.length;
  showQuote(quoteIndex);
}

function prevQ() {
  quoteIndex = (quoteIndex - 1 + quoteCards.length) % quoteCards.length;
  showQuote(quoteIndex);
}

nextQuote.addEventListener('click', nextQ);
prevQuote.addEventListener('click', prevQ);

// Rotação automática
setInterval(nextQ, 7000);