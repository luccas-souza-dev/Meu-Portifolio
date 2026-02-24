/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    
    // Menu Mobile
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navList = document.querySelector('.nav__list');
    const navLinks = document.querySelectorAll('.nav__link');

    mobileToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });

    // Animação de Scroll (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Dispara quando 15% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para de observar após animar
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Header Shadow on Scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
        } else {
            header.style.boxShadow = "none";
        }
    });
});
