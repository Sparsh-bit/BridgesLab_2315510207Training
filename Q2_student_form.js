// Q2: Student Form Validator (Forms + RegExp)

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("studentForm");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const passwordInput = document.getElementById("password");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const passwordError = document.getElementById("passwordError");
  const formSuccess = document.getElementById("formSuccess");

  // Helper functions
  const setError = (input, message, errorSpan) => {
    input.style.border = "2px solid red";
    errorSpan.textContent = message;
  };

  const setSuccess = (input, errorSpan) => {
    input.style.border = "2px solid green";
    errorSpan.textContent = "";
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formSuccess.textContent = "";

    let isValid = true;

    // Name validation: alphabets only
    const nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(nameInput.value.trim())) {
      setError(nameInput, "Name should contain alphabets only.", nameError);
      isValid = false;
    } else {
      setSuccess(nameInput, nameError);
    }

    // Email validation
    const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      setError(emailInput, "Please enter a valid email address.", emailError);
      isValid = false;
    } else {
      setSuccess(emailInput, emailError);
    }

    // Phone validation: exactly 10 digits
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneInput.value.trim())) {
      setError(phoneInput, "Phone number must be exactly 10 digits.", phoneError);
      isValid = false;
    } else {
      setSuccess(phoneInput, phoneError);
    }

    // Password validation: 1 uppercase, 1 number, 1 special character, min 6 chars
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/;
    if (!passwordRegex.test(passwordInput.value)) {
      setError(
        passwordInput,
        "Password must have 1 uppercase, 1 number, 1 special char, and be at least 6 characters.",
        passwordError
      );
      isValid = false;
    } else {
      setSuccess(passwordInput, passwordError);
    }

    if (isValid) {
      formSuccess.textContent = "Form submitted successfully!";
    }
  });
});
