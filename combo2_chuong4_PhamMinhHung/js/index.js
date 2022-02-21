$(document).ready(function () {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 1200,
    prevArrow: $('.slider .prev'),
    nextArrow: $('.slider .next'),
    dots: true,
    infinite: true,
    speed: 1200,
    fade: true,
    cssEase: 'linear'
  });
  $('.counter').countUp({
    'time': 1000,
    'delay': 1
  });
  $('#toTopBtn').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
  $(window).load(function () {
    $.fn.lightspeedBox();
  });
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});
