// Q2 – Product Highlight with jQuery
$(document).ready(function () {
  // Highlight products with discounts using attribute selector
  $(".product[data-discount='true']").addClass("discount");

  // Click on product -> highlight background
  $(".product").on("click", function (e) {
    // Avoid interfering with favorite icon click
    if ($(e.target).hasClass("favorite")) return;

    $(".product").removeClass("highlight");
    $(this).addClass("highlight");

    const stock = parseInt($(this).data("stock"), 10);
    if (stock === 0) {
      alert($(this).data("name") + " is out of stock!");
    }
  });

  // Hover over product -> show additional details
  $(".product").hover(
    function () {
      $(this).find(".details").stop(true, true).slideDown(150);
    },
    function () {
      $(this).find(".details").stop(true, true).slideUp(150);
    }
  );

  // Favorite icon click -> toggle selected class
  $(".favorite").on("click", function (e) {
    e.stopPropagation(); // prevent triggering product click
    $(this).toggleClass("selected");
  });
});
