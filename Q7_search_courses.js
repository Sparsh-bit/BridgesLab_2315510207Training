// Q7 – Search Courses with real-time filtering using jQuery
$(document).ready(function () {
  function updateFilter() {
    const query = $("#searchInput").val().toLowerCase();
    let count = 0;

    $(".course").each(function () {
      const $course = $(this);
      const text = $course.text();
      const lower = text.toLowerCase();

      // Reset highlighting
      $course.removeClass("highlight");

      if (!query) {
        $course.show();
        return;
      }

      if (lower.includes(query)) {
        $course.show();
        $course.addClass("highlight");
        count++;
      } else {
        $course.hide();
      }
    });

    $("#matchCount").text(count);
  }

  $("#searchInput").on("keyup", updateFilter);

  $("#clearSearchBtn").on("click", function () {
    $("#searchInput").val("");
    $(".course").show().removeClass("highlight");
    $("#matchCount").text($(".course").length);
  });

  // Initialize count
  $("#matchCount").text($(".course").length);
});
