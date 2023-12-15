// Variables for managing slides and slideshow state
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideshowInterval;
let isSlideshowRunning = false;

// Function to display a specific slide
function showSlide(index) {
    if (index >= 0 && index < slides.length) {
        currentSlide = index;
        hideAllSlides();
        slides[currentSlide].style.display = 'block';
        updateSlideIndicators();
    }
}

// Function to hide all slides
function hideAllSlides() {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
}

// Functions for navigating to previous and next slides
function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Function to toggle the slideshow on/off
function toggleSlideshow() {
    if (isSlideshowRunning) {
        clearInterval(slideshowInterval);
    } else {
        slideshowInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
    }
    isSlideshowRunning = !isSlideshowRunning;
}

// Function to update the visual indicators for slides
function updateSlideIndicators() {
    const slideIndicatorsContainer = document.querySelector('.slide-indicators');
    const indicators = Array.from(slideIndicatorsContainer.children);

    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Initial setup - hide all slides, show the first slide, and update indicators
hideAllSlides();
showSlide(currentSlide);
updateSlideIndicators();