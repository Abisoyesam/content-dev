$(document).ready(function () {
  
  let owl = $('.owl-carousel');
  owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause: true,
    responsive:{
      0:{
        items:1,
      },
                  
      480:{
        items:2,
      },
                  
      768:{
       items:3,
      }
    }
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