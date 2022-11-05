const slider = document.querySelector('#project_container');
let sliderSection = document.querySelectorAll('.project');
let sliderSectionLast = sliderSection[sliderSection.length-1];

const btnBack = document.querySelector('#btn_project-back');
const btnNext = document.querySelector('#btn_project-next');

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function next() {
    let sliderSectionFirst = document.querySelectorAll('.project')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 1s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    }, 1000);
}

function back() {
    let sliderSection = document.querySelectorAll('.project');
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

