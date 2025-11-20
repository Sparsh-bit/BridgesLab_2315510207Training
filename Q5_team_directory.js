// Q5 – Team Members Directory with jQuery traversal helpers
$(document).ready(function () {
  // Click manager -> highlight all direct reports (siblings with class .employee)
  $(".manager").on("click", function () {
    $(".employee").removeClass("highlight");
    $(this)
      .parent(".department")
      .children(".employee")
      .addClass("highlight");
  });

  // Hover on employee -> show contact info using .next() (here .contact is next inline)
  $(".employee").hover(
    function () {
      $(this).find(".contact").show();
    },
    function () {
      $(this).find(".contact").hide();
    }
  );

  // Click department title -> change background of all members in that department using .children()
  $(".dept-title").on("click", function () {
    $(".department").removeClass("highlight");
    $(this).parent(".department").children().addClass("highlight");
  });

  // Select random employee -> highlight sibling employees
  $("#randomHighlightBtn").on("click", function () {
    const $employees = $(".employee");
    $employees.removeClass("random-highlight");
    const randomIndex = Math.floor(Math.random() * $employees.length);
    const $random = $employees.eq(randomIndex);
    $random.siblings(".employee").addClass("random-highlight");
  });

  // Collapse/expand team using .parent() and .find()
  let collapsed = false;
  $("#toggleTeamsBtn").on("click", function () {
    collapsed = !collapsed;
    $("#teams")
      .children(".department")
      .each(function () {
        const $dept = $(this);
        if (collapsed) {
          $dept.find(".manager, .employee").hide();
        } else {
          $dept.find(".manager, .employee").show();
        }
      });
  });
});
