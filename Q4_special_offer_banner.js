// Q4 – Special Offer Banner with jQuery effects
$(document).ready(function () {
  const $banners = $(".banner");
  let currentIndex = 0;

  // Initially show first banner
  $banners.eq(0).show();

  $("#showBtn").on("click", function () {
    $banners.show();
  });

  $("#hideBtn").on("click", function () {
    $banners.hide();
  });

  $("#slideToggleBtn").on("click", function () {
    $banners.slideToggle(300);
  });

  $("#fadeToggleBtn").on("click", function () {
    $banners.fadeToggle(300);
  });

  // Auto-rotate banners every 5 seconds using fadeIn/fadeOut
  setInterval(function () {
    const $current = $banners.eq(currentIndex);
    const nextIndex = (currentIndex + 1) % $banners.length;
    const $next = $banners.eq(nextIndex);

    $current.fadeOut(400, function () {
      $next.fadeIn(400);
    });

    currentIndex = nextIndex;
  }, 5000);
});
