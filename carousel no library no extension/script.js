const slider = document.querySelector(".container .slider")
const cards = document.querySelectorAll(".card")
const pagination = document.querySelectorAll(".container .pagination li")
const next = document.querySelector(".next-btn")
const prev = document.querySelector(".prev-btn")

let active = 0;
let cardsLength = cards.length -1;

next.onclick = function (){
    if(active + 1 > cardsLength){
        active = 0;
    } else{
        active = active + 1;
    }
    loadSlider();
}

prev.onclick = function (){
    if(active - 1 < 0){
        active = cardsLength;
    } else{
        active = active - 1;
    }
    loadSlider();
}

let refreshSlide = setInterval(() => {next.click()}, 5000);

function loadSlider(){
    let checkLeft = cards[active].offsetLeft;
    slider.style.left = -checkLeft + 'px';
    
    let lastActiveDot = document.querySelector('.container .pagination li.active');
    lastActiveDot.classList.remove('active');
    pagination[active].classList.add('active')
    clearInterval(refreshSlide);
    refreshSlide = setInterval(() => {next.click()}, 5000);
}

pagination.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        loadSlider();
    })
});