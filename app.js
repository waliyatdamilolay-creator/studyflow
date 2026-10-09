// Get the login form
const loginForm = document.querySelector(".login-form");

// Get the email input
const emailInput = document.querySelector("#email");

// Get the password input
const passwordInput = document.querySelector("#password");

// Listen for the form submission
loginForm.addEventListener("submit", function (event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get the values entered by the user
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Check if email is empty
    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    // Check if password is empty
    if (password === "") {
        alert("Please enter your password.");
        return;
    }

    // Check password length
    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    // If everything is okay
    alert("Login details received successfully!");

    console.log("Email:", email);
    console.log("Password:", password);

});