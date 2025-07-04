(function($) {
  "use strict";

  // Swiper Slider
  var initSlider = function() {
    $('.swiper-carousel').each(function(){
      var swiper = new Swiper(".swiper-carousel", {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-carousel .swiper-right',
          prevEl: '.swiper-carousel .swiper-left',
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          300: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });
    });
    
    $('.swiper-slideshow').each(function(){
      var swiper = new Swiper(".swiper-slideshow", {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 700,
        loop: true,
        navigation: {
          nextEl: '.swiper-slideshow .swiper-right',
          prevEl: '.swiper-slideshow .swiper-left',
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    });
  }



  var initScrollNav = function() {
    var scroll = $(window).scrollTop();
    console

    if (scroll >= 200) {
      $('#header.fixed-top').addClass("bg-white");
    }else{
      $('#header.fixed-top').removeClass("bg-white");
    }
  }
  $(window).scroll(function() {    
    initScrollNav();
  }); 

  // init Chocolat light box
  var initChocolat = function() {
    Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    })
  }


  $(document).ready(function(){

    var swiper = new Swiper(".testimonial-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    initSlider();
    initChocolat();
    
    AOS.init({
      duration: 1200,
      once: true
    })

    $(".youtube").colorbox({
      iframe: true,
      innerWidth: 960,
      innerHeight: 585
    });

  }); // End of a document




})(jQuery);