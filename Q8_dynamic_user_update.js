// Q8: Dynamic Object Updater

// Initial user object
const user = { name: "John", email: "john@mail.com", age: 21 };

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");
  const nameInput = document.getElementById("userName");
  const emailInput = document.getElementById("userEmail");
  const ageInput = document.getElementById("userAge");
  const userOutput = document.getElementById("userOutput");

  // Initialize form fields with current user values
  const renderUser = () => {
    nameInput.value = user.name;
    emailInput.value = user.email;
    ageInput.value = user.age;
    userOutput.textContent = JSON.stringify(user, null, 2);
  };

  renderUser();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Update user object
    user.name = nameInput.value.trim();
    user.email = emailInput.value.trim();
    user.age = Number(ageInput.value);

    renderUser();
  });
});
