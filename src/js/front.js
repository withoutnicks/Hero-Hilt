$(function () {


    $('#main-slider').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        dotsSpeed: 400
    });


    $('.product-slider').owlCarousel({
        items: 1,
        dots: true,
        nav: false,
        responsive: {
            480: {
                items: 1
            },
            765: {
                items: 2
            },
            991: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    });


});
