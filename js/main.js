$(document).ready(function () {
  function t(t) {
    return ("00" + t).substr(-2);
  }
  $("a[href^='#']").click(function () {
    var t = $(this).attr("href");
    return $("html, body").animate({ scrollTop: $(t).offset().top + "px" }), !1;
  }),
    $(".panorama").panorama(),
    (function e() {
      var o = new Date(),
        a = new Date();
      a.setHours(23),
        a.setMinutes(59),
        a.setSeconds(59),
        23 === o.getHours() &&
          59 === o.getMinutes() &&
          59 === o.getSeconds &&
          a.setDate(a.getDate() + 1);
      var n = Math.floor((a.getTime() - o.getTime()) / 1e3),
        r = Math.floor(n / 3600);
      n -= 3600 * r;
      var s = Math.floor(n / 60);
      (n -= 60 * s),
        $(".timer .hours").text(t(r)),
        $(".timer .minutes").text(t(s)),
        $(".timer .seconds").text(t(n)),
        setTimeout(e, 200);
    })();
}),
  $(window).on("load", function () {
    $(".catalog").owlCarousel({
      items: 1,
      loop: !0,
      autoHeight: !0,
      smartSpeed: 300,
      mouseDrag: !0,
      pullDrag: !0,
      dots: !0,
      dotsContainer: ".dotsContainer",
      nav: !1,
      navText: "",
      autoplay: !0,
      autoplayTimeout: 1500,
    });
  });
