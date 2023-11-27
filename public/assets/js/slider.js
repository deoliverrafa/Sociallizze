import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  direction: 'vertical',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
