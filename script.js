document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 1; // Start with the second image
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slider = document.querySelector('.slider');

    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('current-slide', index === currentIndex);
        });

        const slideWidth = slides[0].offsetWidth;
        const sliderWidth = slideWidth * totalSlides;
        const containerWidth = document.querySelector('.slider-container').offsetWidth;
        const offset = (containerWidth / 2) - (slideWidth / 2) - (currentIndex * slideWidth);

        slider.style.transform = `translateX(${offset}px)`;
    }

    // Initial setup
    updateSlider();

    // Event listener for next button
    document.querySelector('.next-btn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    });

    // Event listener for previous button
    document.querySelector('.prev-btn').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    });
});
