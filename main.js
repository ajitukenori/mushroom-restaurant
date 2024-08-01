$(document).ready(function () {
    $(".item-slider1").slick({
    });
    $(".item-slider2").slick({
    });
    $(".hd-slide-info").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });
});

$(function () {
    $('#drawer_input').on('click', function () {
      console.log("クリックされた")
      $('.nav_content').toggleClass('nav-off')
      $('.drawer_open').toggleClass('active')
    });
  });
