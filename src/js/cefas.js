let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const slideInterval = 3000; // Intervalo de 3 segundos

function showSlide(index) {
    slides[currentSlide].style.display = 'none';
    currentSlide = index;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].style.display = 'block';
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Função para mudar os slides automaticamente
function autoSlide() {
    changeSlide(1);
}

// Inicia o slide automático
let slideTimer = setInterval(autoSlide, slideInterval);

// Pausa o slide automático ao passar o mouse sobre os botões
document.querySelector('.slider').addEventListener('mouseover', function() {
    clearInterval(slideTimer);
});

// Retoma o slide automático ao remover o mouse
document.querySelector('.slider').addEventListener('mouseout', function() {
    slideTimer = setInterval(autoSlide, slideInterval);
});s