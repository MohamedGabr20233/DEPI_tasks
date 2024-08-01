let swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
  },
  lazyPreloadPrevNext: 3,
  loopAddBlankSlides: false,
  loop: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});
