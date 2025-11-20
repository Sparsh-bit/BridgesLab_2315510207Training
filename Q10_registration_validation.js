// Q10 – Registration Form Validation with jQuery
$(document).ready(function () {
  const existingEmails = ["test@example.com", "user@example.com"];

  function validateName() {
    const name = $("#nameInput").val().trim();
    if (!name) {
      $("#nameError").text("Name cannot be empty.");
      $("#nameInput").css("border", "1px solid red");
      return false;
    }
    $("#nameError").text("");
    $("#nameInput").css("border", "");
    return true;
  }

  function validateEmail() {
    const email = $("#emailInput").val().trim();
    const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
    if (!emailRegex.test(email)) {
      $("#emailError").text("Enter a valid email.");
      $("#emailInput").css("border", "1px solid red");
      return false;
    }
    if (existingEmails.includes(email)) {
      $("#emailError").text("This email is already registered.");
      $("#emailInput").css("border", "1px solid red");
      return false;
    }
    $("#emailError").text("");
    $("#emailInput").css("border", "");
    return true;
  }

  function validatePassword() {
    const password = $("#passwordInput").val();
    if (password.length < 8) {
      $("#passwordError").text("Password must be at least 8 characters.");
      $("#passwordInput").css("border", "1px solid red");
      return false;
    }
    $("#passwordError").text("");
    $("#passwordInput").css("border", "");
    return true;
  }

  $("#nameInput").on("input", function () {
    validateName();
    $("#formSuccess").text("");
  });

  $("#emailInput").on("input", function () {
    validateEmail();
    $("#formSuccess").text("");
  });

  $("#passwordInput").on("input", function () {
    validatePassword();
    $("#formSuccess").text("");
  });

  $("#registerForm").on("submit", function (e) {
    e.preventDefault();

    const validName = validateName();
    const validEmail = validateEmail();
    const validPassword = validatePassword();

    if (validName && validEmail && validPassword) {
      $("#formSuccess").text("Registration successful!");
    } else {
      $("#formSuccess").text("");
    }
  });
});
