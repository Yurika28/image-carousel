const productContainers = [...document.querySelectorAll('.product-container')];
const nextBtn = [...document.querySelectorAll('.next-btn')];
const prevBtn = [...document.querySelectorAll('.prev-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    prevBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })

    prevBtn[i].style.opacity = '0';
    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
        prevBtn[i].style.opacity = '1';

        if(item.scrollLeft + containerWidth >= item.scrollWidth){
            nextBtn[1].style.opacity = '0';
        } else{
            nextBtn[i].style.opacity = '1';
        }
    })
    prevBtn[i].addEventListener('click', ()=>{
        item.scrollLeft -= containerWidth;
        nextBtn[i].style.opscity = '1'

        if(item.scrollLeft <= 0){
            prevBtn[1].style.opacity = '0';
        } else{
            prevBtn[i].style.opacity = '1';
        }
    })
})