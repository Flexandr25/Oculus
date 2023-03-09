'use strict'

const tabBtn = document.querySelectorAll('.features__tabs-btn');
const tabContent = document.querySelectorAll('.features__tabs-content__item');

tabBtn.forEach(function(el){
    el.addEventListener('click', open);
});

function open(event){
    const tabTarget = event.currentTarget;
    const dataBtn = tabTarget.dataset.button;

    tabBtn.forEach(function(item){
        item.classList.remove('features__tabs-btn--active');
    });

    tabContent.forEach(function(item){
        item.classList.remove('features__tabs-content__item--active');
    });

    tabTarget.classList.add('features__tabs-btn--active');
    document.querySelector(`#${dataBtn}`).classList.add('features__tabs-content__item--active');
}

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.header__nav-menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu__btn--active');
    menu.classList.toggle('header__nav-menu--active');
});