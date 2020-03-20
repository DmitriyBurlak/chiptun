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

const list = document.querySelectorAll('.accordion');
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', () => {
    list[i].classList.toggle('accordion_opened');
    let panel = list[i].lastElementChild;
    if (list[i].classList.contains('accordion_opened')) 
      panel.style.height = panel.scrollHeight+'px';
      else panel.style.height = 0+'px';
  });
};

// Scroll
// let linkNav = document.querySelectorAll('section[id]');
// let anchor = document.querySelectorAll('.navigation__link');
// console.log('anchor: ', anchor);


//     let w = window.pageYOffset;
//       let start = null;

//         console.log(w);

// // console.log('linkNav: ', linkNav);
// for (let i = 0; i < linkNav.length; i++) {
//   linkNav[i].addEventListener('click', () => {

//   });
// }Hf



const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}