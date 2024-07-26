let currentSlide = 1;
const totalSlides = 10;

function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index + 1 === slideIndex) {
            slide.classList.add('active');
        }
    });
    document.getElementById('prev-button').style.display = slideIndex === 1 ? 'none' : 'flex';
    document.getElementById('next-button').style.display = slideIndex === totalSlides ? 'none' : 'flex';
}

function nextSlide() {
    if (currentSlide < totalSlides) {
        currentSlide++;
        showSlide(currentSlide);
    }
}

function previousSlide() {
    if (currentSlide > 1) {
        currentSlide--;
        showSlide(currentSlide);
    }
}

showSlide(currentSlide);
