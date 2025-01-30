let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const sliderContainer = document.querySelector('.slider-container');
const totalSlides = slides.length;
const slideWidth = 100 / totalSlides; // Ajustar el ancho según el número de slides

const showSlide = (index) => {
    currentSlide = (index + totalSlides) % totalSlides; // Asegura que el índice esté en el rango correcto
    const offset = -currentSlide * slideWidth;
    sliderContainer.style.transition = 'transform 1s ease-in-out'; // Deslizar en 2 segundos
    sliderContainer.style.transform = `translateX(${offset}%)`;
};

const moveSlide = (step) => {
    showSlide(currentSlide + step);
};

// Inicializar el primer slide
showSlide(currentSlide);
