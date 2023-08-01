import Swiper from '../vendor/swiper';

const swiper = new Swiper('.hero__swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.hero__swiper-pagination',
    clickable: true,
  },
});

const swiperCatalog = new Swiper('.catalog__swiper', {
  loop: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

  navigation: {
    nextEl: '.catalog__button-next',
    prevEl: '.catalog__button-prev',
  },
});

export {swiper, swiperCatalog};
