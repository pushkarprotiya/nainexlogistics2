// AOS JS


$(window).on('load', function () { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({ 'overflow': 'visible' });
})



const body = document.querySelector("body");
const cursor = document.querySelector("#cursor");

body.addEventListener("mousemove", (dets) => {
  cursor.style.left = `${dets.x + 10}px`;
  cursor.style.top = `${dets.y + 10}px`;
});