// Q7: Login Form Validation using RegExp

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");
  const loginMessage = document.getElementById("loginMessage");

  const setError = (input, message, errorSpan) => {
    input.style.border = "2px solid red";
    errorSpan.textContent = message;
  };

  const clearError = (input, errorSpan) => {
    input.style.border = "2px solid green";
    errorSpan.textContent = "";
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    loginMessage.textContent = "";

    let isValid = true;

    // Username: at least 5 characters
    if (usernameInput.value.trim().length < 5) {
      setError(usernameInput, "Username must be at least 5 characters.", usernameError);
      isValid = false;
    } else {
      clearError(usernameInput, usernameError);
    }

    // Password: at least 8 characters, includes number, uppercase, lowercase, special character
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

    if (!passwordRegex.test(passwordInput.value)) {
      setError(
        passwordInput,
        "Password must be 8+ chars with upper, lower, number, special char.",
        passwordError
      );
      isValid = false;
    } else {
      clearError(passwordInput, passwordError);
    }

    if (isValid) {
      loginMessage.textContent = "Login successful!";
    }
  });
});
