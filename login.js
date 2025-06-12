// Get DOM elements using getElementById
var form = document.getElementById("loginForm");
var phoneInput = document.getElementById("phoneInput");
var passwordInput = document.getElementById("passwordInput");
var errorMsg = document.getElementById("errorMsg");

// Set the onsubmit function directly (DOM method)
form.onsubmit = function(event) {
  event.preventDefault(); // Prevent actual form submission

  // Clear any previous error
  errorMsg.textContent = "";

  // Read input values using .value
  var phone = phoneInput.value.trim();
  var password = passwordInput.value.trim();

  // Basic validation using regex and DOM feedback
  if (!/^\d{10}$/.test(phone)) {
    errorMsg.textContent = "Please enter a valid 10-digit phone number.";
    return;
  }

  if (password === "") {
    errorMsg.textContent = "Password cannot be empty.";
    return;
  }

  // If both are valid
  alert("Login successful!");
  // You can redirect or send data to a server here
};
