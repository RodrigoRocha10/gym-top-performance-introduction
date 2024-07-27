let currentSlide = 1;
const totalSlides = 12;

function getCurrentSlideFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('slide') ? parseInt(params.get('slide')) : 1;
}

function updateURL(slideIndex) {
    const params = new URLSearchParams(window.location.search);
    params.set('slide', slideIndex);
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
}

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
        updateURL(currentSlide);
    }
}

function previousSlide() {
    if (currentSlide > 1) {
        currentSlide--;
        showSlide(currentSlide);
        updateURL(currentSlide);
    }
}

currentSlide = getCurrentSlideFromURL();
showSlide(currentSlide);
