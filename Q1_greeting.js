// Q1 – Welcome Page Greeting
// Uses jQuery to update greeting text, toggle visibility, and handle click events.

$(document).ready(function () {
  function setInitialGreeting() {
    const hour = new Date().getHours();
    let text = "Welcome!";
    if (hour < 12) {
      text = "Good Morning!";
    } else if (hour < 18) {
      text = "Good Afternoon!";
    } else {
      text = "Good Evening!";
    }
    $("#greeting").text(text);
  }

  setInitialGreeting();

  $("#changeGreetingBtn").on("click", function () {
    $("#greeting").text("Believe in yourself, you are capable of great things!");
  });

  $("#toggleWelcomeBtn").on("click", function () {
    $("#welcomeMessage").slideToggle();
  });

  $("#greeting").on("click", function () {
    alert("Greeting clicked: " + $(this).text());
  });
});
