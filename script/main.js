$(document).ready(function () {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

  $("a.js-header-button[href='#footer-panel']").click(function () {
    $("html, body").animate({
      scrollTop: $(document).height()
    }, 2000);
    return false;
  });
});
