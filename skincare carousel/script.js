document.addEventListener('DOMContentLoaded', () => {
    // Select carousel elements
    const productContainer = document.querySelector('.product-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const cards = document.querySelectorAll('.card');

    // Set up initial variables
    let currentIndex = 0;
    const totalCards = cards.length;

    // Function to update carousel position
    function updateCarousel() {
        // Calculate the translateX value
        const translateX = -currentIndex * cards[0].clientWidth;
        productContainer.style.transform = `translateX(${translateX}px)`;
    }

    // Event listener for next button
    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first card
        }
        updateCarousel();
    });

    // Event listener for previous button
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalCards - 1; // Loop back to the last card
        }
        updateCarousel();
    });
});
