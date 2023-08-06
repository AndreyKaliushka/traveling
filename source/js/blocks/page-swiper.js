import Swiper from '../vendor/swiper';

const swiper = new Swiper('.hero__swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.hero__swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      allowTouchMove: true,
    },
    768: {
      allowTouchMove: true,
    },
    1200: {
      allowTouchMove: false,
    },
  },
});

const swiperCatalog = new Swiper('.catalog__swiper', {
  loop: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
      allowTouchMove: true,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
      allowTouchMove: false,
    },
  },

  navigation: {
    nextEl: '.catalog__button-next',
    prevEl: '.catalog__button-prev',
  },
});

const swiperTrainers = new Swiper('.trainers-swiper', {
  loop: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      allowTouchMove: true,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
      allowTouchMove: false,
    },
  },

  navigation: {
    nextEl: '.trainers-swiper__button-next',
    prevEl: '.trainers-swiper__button-prev',
  },
});

const swiperReviews = new Swiper('.reviews__swiper', {
  loop: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 1.2,
      spaceBetween: 30,
      allowTouchMove: true,
    },
    1200: {
      slidesPerView: 1.5,
      spaceBetween: 30,
      allowTouchMove: false,
    },
  },

  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
});

const swiperAdvantages = () => {
  const breakpoint = window.matchMedia('(max-width:1199px)');

  // keep track of swiper instances to destroy later
  let mySwiper;

  const breakpointChecker = () => {
    if (breakpoint.matches === true) {

      // clean up old instances and inline styles when available
      if (mySwiper !== undefined) mySwiper.destroy( true, true );

      // or/and do nothing
      return;

      // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {

      // fire small viewport version of swiper
      return enableSwiper();

    }

  };

  const enableSwiper = () => {

    mySwiper = new Swiper('.advantages__swiper', {
      loop: true,
      breakpoints: {
        1200: {
          enabled: true,
          slidesPerView: 3,
          spaceBetween: 30,
          allowTouchMove: false,
          centeredSlides: true,
          initialSlide: 2,
        },
      },

      navigation: {
        nextEl: '.advantages__button-next',
        prevEl: '.advantages__button-prev',
      },
    });

  };

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();
};

const swiperGallery = new Swiper('.gallery__swiper', {
  loop: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 1.3,
      spaceBetween: 6,
      allowTouchMove: true,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 5,
      allowTouchMove: false,
    },
  },

  navigation: {
    nextEl: '.gallery__button-next',
    prevEl: '.gallery__button-prev',
  },
});

export {swiper, swiperCatalog, swiperTrainers, swiperReviews, swiperAdvantages, swiperGallery};
