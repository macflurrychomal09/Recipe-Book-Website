const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
document.addEventListener("DOMContentLoaded", function() {
    const signInForm = document.querySelector('.form-container.sign-in form');
    const signUpForm = document.querySelector('.form-container.sign-up form');

    signInForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Assuming you have a predefined password for validation
        const predefinedPassword = "medha@2004";
        const email = signInForm.querySelector('input[type="email"]').value;
        const password = signInForm.querySelector('input[type="password"]').value;

        // Check if the password matches the predefined password
        if (password === predefinedPassword) {
            // Redirect to the home page after successful sign-in
            window.location.href = "index.html";
        } else {
            // If password doesn't match, you can display an error message or handle it accordingly
            alert("Incorrect password");
        }
    });

    // Additional code if you want to handle sign-up form
    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Your sign-up form logic goes here
    });

    // Toggle between sign-in and sign-up forms
    const toggleButton = document.getElementById('toggle');
    const container = document.getElementById('container');

    toggleButton.addEventListener('click', function() {
        container.classList.toggle('active');
    });
});
