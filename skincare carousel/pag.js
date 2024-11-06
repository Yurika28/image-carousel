const slides = document.querySelector('.slides');
const paginationBtns = document.querySelectorAll('.pagination-btn');

paginationBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const index = btn.getAttribute('data-index');
        slides.style.transform = `translateX(-${index * 300}px)`;
    });
});
