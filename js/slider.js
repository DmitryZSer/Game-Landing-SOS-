$(function() {

  /* Slider: https://kenwheeler.github.io/slick/ */

    $('#gallerySlider').slick({
        centerMode: true,
        centerPadding: ' ',              /* 40-45px */
        slidesToShow: 1,
        arrows: false,
        dots: true,
        slickPrev: false

    });

    $('.slider__arrow').on('click', function(event) {
        event.preventDefault();

        $('#gallerySlider').slick('slickNext');
    });

  
})

