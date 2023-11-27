import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

// CARREGA O SLIDE
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        direction: 'vertical',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
});

// NAVEGAR ENTRE OS SLIDES //
const nextButton = document.querySelector('.swiper-button-next');
nextButton.addEventListener('click', function() {
    swiper.slideNext();
});

const prevButton = document.querySelector('.swiper-button-prev');
prevButton.addEventListener('click', function() {
swiper.slidePrev();
});
