document.addEventListener('DOMContentLoaded', function() {
    const newsCards = document.querySelectorAll('.news-card.hidden');

    const observerOptions = {
        root: null, // viewport como root
        rootMargin: '0px',
        threshold: 0.1 // O card se torna visível quando 10% dele estiver na tela
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para iniciar a animação CSS
                entry.target.classList.remove('hidden');
                entry.target.classList.add('visible');
                // Para de observar o elemento
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observa cada news card
    newsCards.forEach(card => {
        observer.observe(card);
    });
});