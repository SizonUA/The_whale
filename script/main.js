new WOW().init();

$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 565,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  $("a.js-header-button[href='#footer-panel']").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(document).height(),
      },
      2000
    );
    return false;
  });
});
