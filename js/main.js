/* slider */
$(".slider").slick({
  arrows: false,
  dots: true,
});

/* tabs */

$(document).ready(function () {
  $(".tabs__link").click(function (e) {
    e.preventDefault();

    $(".tabs__link").removeClass("tabs__link--active");
    $(".tabs__content-item").removeClass("tabs__content-item--active");

    $(this).addClass("tabs__link--active");
    $($(this).attr("href")).addClass("tabs__content-item--active");
  });
  $(".tabs__link:first").click();
});
