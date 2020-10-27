$(document).ready(function () {
  
  let owl = $('.owl-carousel');
  owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
  });
  $('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[5000])
  })
  $('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
  })
  
  // Owl carousel Instance
  $(".owl-carousel").owlCarousel();

  // AOS Instance
  AOS.init();

});