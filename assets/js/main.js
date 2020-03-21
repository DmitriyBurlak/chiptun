var mySwiper = new Swiper('.reviews__swiper', {
  slidesPerView: 1,
  loop: true,
  autoHeight: true,
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
// accordion
const lists = document.querySelectorAll('.accordion');
for (let list of lists) {
  list.addEventListener('click', () => {
    list.classList.toggle('accordion_opened');
    let panel = list.lastElementChild;
    if (list.classList.contains('accordion_opened')) 
      panel.style.height = panel.scrollHeight+'px';
      else panel.style.height = 0+'px';
  });
};
// Scroll
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};