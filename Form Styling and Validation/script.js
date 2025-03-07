document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let isValid = true;

        // Clear previous error messages
        document.querySelectorAll(".error-message").forEach(msg => {
            msg.textContent = "";
            msg.style.display = "none";
        });

        // Validate Name
        const nameInput = document.getElementById("name");
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Name is required");
            isValid = false;
        }

        // Validate Email
        const emailInput = document.getElementById("email");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            showError(emailInput, "Enter a valid email address");
            isValid = false;
        }

        // Validate Password
        const passwordInput = document.getElementById("password");
        if (passwordInput.value.length < 6) {
            showError(passwordInput, "Password must be at least 6 characters");
            isValid = false;
        }

        // Validate Message
        const messageInput = document.getElementById("message");
        if (messageInput.value.trim() === "") {
            showError(messageInput, "Message cannot be empty");
            isValid = false;
        }

        // If all validations pass, submit form
        if (isValid) {
            alert("Form submitted successfully!");
            form.reset(); // Reset form fields
        }
    });

    // Function to display error messages
    function showError(inputElement, message) {
        const errorMsg = inputElement.nextElementSibling;
        errorMsg.textContent = message;
        errorMsg.style.display = "block";
    }
});
