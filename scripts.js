// script.js
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.animate-section, .animate-text, .animate-gallery');
    const options = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

const slides = document.querySelectorAll('.gallery-slide');
const totalSlides = slides.length;
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

document.querySelector('.next-btn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
});

// عرض الشريحة الأولى عند تحميل الصفحة
showSlide(currentSlide);
