// Q3 – Interactive FAQ using jQuery
$(document).ready(function () {
  const $questions = $(".question");
  const $answers = $(".answer");

  // Click question -> toggle its answer
  $questions.on("click", function () {
    $(this).next(".answer").slideToggle(150);
  });

  // Hover -> change question color
  $questions.hover(
    function () {
      $(this).addClass("question-hover");
    },
    function () {
      $(this).removeClass("question-hover");
    }
  );

  // Double-click question -> collapse all answers
  $questions.on("dblclick", function () {
    $answers.slideUp(150);
  });

  // Focus/blur on answer input -> highlight parent question's background
  $(".feedback-input")
    .on("focus", function () {
      $(this).closest(".faq-item").css("background-color", "#fff3cd");
    })
    .on("blur", function () {
      $(this).closest(".faq-item").css("background-color", "");
    });
});
