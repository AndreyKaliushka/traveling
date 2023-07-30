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

export {swiper};
