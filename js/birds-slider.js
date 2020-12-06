$(document).ready(function(){
    $('.birds-slider-list').slick({
        appendArrows: $('.birds-slider-arrow'),
        prevArrow: '<button id="prev" type="button" class="btn birds-arrow-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button" class="btn birds-arrow-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 768,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              }
            }
        ]
    });
    $('.birds-content-slider').slick({
        arrows: false,
        dots: true,
        dotsClass: "birds-content-dots",
    });
  });