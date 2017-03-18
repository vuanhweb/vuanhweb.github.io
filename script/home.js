AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-cubic',
    delay: 100,
});
$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsiveRefreshRate: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    $('.product-group-carousel .item .block a').on('mouseleave', function(e) {
        owl.trigger('next.owl.carousel', [3000]);
    })
});
$(window).on("load", function() {
    $('.product-group-carousel').effect("slide", {
        direction: "up"
    }, 2000, function() {});
});