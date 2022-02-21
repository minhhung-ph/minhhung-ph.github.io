$(document).ready(function () {
    $(".counter").countUp({
        time: 2000,
        delay: 10
    });
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplaySpeed: 1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".scrollup").fadeIn();
        } else {
            $(".scrollup").fadeOut();
        }
    });
    $(".scrollup").click(function () {
        $("html, body").animate(
            {
                scrollTop: 0
            },
            200
        );
        return false;
    });
});
