// AOS JS

const body = document.querySelector("body");
const cursor = document.querySelector("#cursor");

body.addEventListener("mousemove", (dets) => {
  cursor.style.left = `${dets.x + 10}px`;
  cursor.style.top = `${dets.y + 10}px`;
});




$(function() {
  $('marquee').mouseover(function() {
      $(this).attr('scrollamount',0);
  }).mouseout(function() {
       $(this).attr('scrollamount',0);
  });
});




(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();
