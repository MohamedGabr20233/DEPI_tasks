const swiperEl = document.querySelector('swiper-container');
Object.assign(swiperEl, {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1320: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

swiperEl.initialize();
