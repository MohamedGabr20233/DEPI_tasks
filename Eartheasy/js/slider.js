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
      slidesPerGroup: 1,
      spaceBetween: 25,
    },
    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 25,
    },

    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 25,
    },
  },
});

const swiperEl2 = document.querySelector('#swiper-container2');
Object.assign(swiperEl2, {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 25,
    },
    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 25,
    },

    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 25,
    },
  },
});

const swiperEl3 = document.querySelector('#swiper-container3');
Object.assign(swiperEl3, {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 25,
    },
    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 0,
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 10,
    },
  },
});
