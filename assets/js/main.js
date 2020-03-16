var mySwiper = new Swiper('.reviews__swiper', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    prevEl: '.arrow_left',
    nextEl: '.arrow_right',
  },
  breakpoints: {
    540: {
      slidesPerView: 2
    }
  }
});
