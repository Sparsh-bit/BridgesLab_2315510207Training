// Q5: Movie Ticket Booking (Objects + RegExp)

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("ticketForm");
  const movieNameInput = document.getElementById("movieName");
  const nameInput = document.getElementById("userName");
  const emailInput = document.getElementById("userEmail");
  const seatsInput = document.getElementById("seats");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const seatsError = document.getElementById("seatsError");
  const ticketOutput = document.getElementById("ticketOutput");

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

    let isValid = true;

    const nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(nameInput.value.trim())) {
      setError(nameInput, "Name should contain alphabets only.", nameError);
      isValid = false;
    } else {
      clearError(nameInput, nameError);
    }

    const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      setError(emailInput, "Enter a valid email.", emailError);
      isValid = false;
    } else {
      clearError(emailInput, emailError);
    }

    const seatsValue = parseInt(seatsInput.value, 10);
    if (Number.isNaN(seatsValue) || seatsValue < 1 || seatsValue > 10) {
      setError(seatsInput, "Seats must be between 1 and 10.", seatsError);
      isValid = false;
    } else {
      clearError(seatsInput, seatsError);
    }

    if (!isValid) {
      ticketOutput.style.display = "none";
      return;
    }

    // Build booking object
    const booking = {
      movie: movieNameInput.value.trim() || "N/A",
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      seats: seatsValue,
    };

    // Display ticket details
    ticketOutput.style.display = "block";
    ticketOutput.innerHTML = `
      <h3>Booking Confirmed</h3>
      <p><strong>Movie:</strong> ${booking.movie}</p>
      <p><strong>Name:</strong> ${booking.name}</p>
      <p><strong>Email:</strong> ${booking.email}</p>
      <p><strong>Seats:</strong> ${booking.seats}</p>
    `;
  });
});
