// navbar

const iconMenu = document.querySelector(".icon_menu");
const menu = document.querySelector(".menu");

iconMenu.addEventListener("click", function () {
    menu.classList.toggle("menu_show");
});

// slider

const slider = document.querySelector('#skills_info');
let sliderSection = document.querySelectorAll('.slide');
let sliderSectionLast = sliderSection[sliderSection.length-1];

const btnBack = document.querySelector('#btn-back');
const btnNext = document.querySelector('#btn-next');

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function next() {
    let sliderSectionFirst = document.querySelectorAll('.slide')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 1s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    }, 1000);
}

function back() {
    let sliderSection = document.querySelectorAll('.slide');
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft = '0%';
    slider.style.transition = 'all 1s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = '-100%';
    }, 1000);
}

btnNext.addEventListener('click',function(){
    next();
});
btnBack.addEventListener('click',function(){
    back();
});

// Timer

setInterval(function(){
    next();
}, 10000)