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


const list = document.querySelectorAll('.list_question');
console.log(list);
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', () => {
    list[i].classList.toggle('list_question_opened')
  });
}






// Lizy
(function(){ 

  document.onreadystatechange = () => {

    if (document.readyState === 'complete') {
              
      /**
       * Setup your Lazy Line element.
       * see README file for more settings
       */

      let el = document.querySelector('#chip2');
      let myAnimation = new LazyLinePainter(el, {"ease":"easeInOutQuad","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#ff1119","reverse":true}); 
      myAnimation.paint(); 
    }
  }

})();



