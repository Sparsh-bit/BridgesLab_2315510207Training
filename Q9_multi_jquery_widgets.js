// Q9 – Multi-jQuery Widgets using two different jQuery versions and noConflict

// jQuery v1 instance is jqV1
// jQuery v2/3 instance is jqV2

// Carousel slider rotation & active widget highlight using version 1
jqV1(function () {
  var $carousel = jqV1("#carousel");
  var index = 0;

  function showSlide(i) {
    var offset = -i * 300; // slide width
    $carousel.animate({ scrollLeft: -offset }, 400);
  }

  // Rotate slides every 3 seconds
  setInterval(function () {
    var totalSlides = $carousel.find(".slide").length;
    index = (index + 1) % totalSlides;
    showSlide(index);
  }, 3000);

  // Highlight active widget using v1
  jqV1("#carouselSection").addClass("active-widget");
});

// Modal popups & tooltips using version 2/3
jqV2(function () {
  var $overlay = jqV2("#modalOverlay");
  var $tooltip = jqV2("#tooltip");

  jqV2("#openModalBtn").on("click", function () {
    $overlay.fadeIn(200);
  });

  jqV2("#closeModalBtn").on("click", function () {
    $overlay.fadeOut(200);
  });

  $overlay.on("click", function (e) {
    if (e.target === this) {
      $overlay.fadeOut(200);
    }
  });

  // Tooltips on hover using data-tooltip and jQuery v2
  jqV2("#modalSection").on("mouseenter", function (e) {
    var text = jqV2(this).data("tooltip");
    $tooltip.text(text).css({
      left: e.pageX + 10,
      top: e.pageY + 10,
    }).fadeIn(150);
  }).on("mousemove", function (e) {
    $tooltip.css({ left: e.pageX + 10, top: e.pageY + 10 });
  }).on("mouseleave", function () {
    $tooltip.fadeOut(150);
  });
});
