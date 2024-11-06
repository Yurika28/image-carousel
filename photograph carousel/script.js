const cards = document.querySelectorAll('.container .card');
const prev = document.querySelector('.prev-btn');
const next = document.querySelector('.next-btn');

let active = 3;

const loadShow = () => {
    let stt = 0;
    cards[active].style.transform = 'none';
    cards[active].style.zIndex = 1;
    cards[active].style.filter = 'none';
    cards[active].style.opacity = 1;
    
    for (let i = active + 1; i < cards.length; i++) {
        stt++;
        cards[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        cards[i].style.zIndex = -stt;
        cards[i].style.filter = 'blur(3px)';
        cards[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        cards[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        cards[i].style.zIndex = -stt;
        cards[i].style.filter = 'blur(3px)';
        cards[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
};

loadShow();

next.addEventListener('click', () => {
    active = active + 1 < cards.length ? active + 1 : active;
    loadShow();
});

prev.addEventListener('click', () => {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
});


