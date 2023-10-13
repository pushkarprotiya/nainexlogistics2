// AOS JS

$(function() {
  $('marquee').mouseover(function() {
      $(this).attr('scrollamount',0);
  }).mouseout(function() {
       $(this).attr('scrollamount',0);
  });
});



// preloader script


$(window).on('load', function () { // makes sure the whole site is loaded 
  $('.preloader_back').delay(390).fadeOut('slow'); // will first fade out the loading animation 
  $('.preloader').delay(400).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({ 'overflow': 'visible' });
})





jQuery(document).ready(function ($) {

  window.onload = function () {
      $(".bts-popup").delay(1000).addClass('is-visible');
  }

  //open popup
  $('.bts-popup-trigger').on('click', function (event) {
      event.preventDefault();
      $('.bts-popup').addClass('is-visible');
  });

  //close popup
  $('.bts-popup').on('click', function (event) {
      if ($(event.target).is('.bts-popup-close') || $(event.target).is('.bts-popup')) {
          event.preventDefault(); 1
          $(this).removeClass('is-visible');
      }
  });
  //close popup when clicking the esc keyboard button
  $(document).keyup(function (event) {
      if (event.which == '27') {
          $('.bts-popup').removeClass('is-visible');
      }
  });
});


