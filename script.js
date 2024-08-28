document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;


    const username = document.getElementById('username');
    const password = document.getElementById('password');
    if (username.value.trim() === "") {
        isValid = false;
        showError(username, "Username is required");
    } else {
        clearError(username);
    }
    
    if (password.value.trim() === "") {
        isValid = false;
        showError(password, "Password is required");
    } else {
        clearError(password);
    }

    if (isValid) {
        alert("Form Submitted Successfully!, Welcome to ServSpace");
    }
});

/**
 * Display an error message next to an input field.
 * @param {HTMLInputElement} input - The input element to display the error for.
 * @param {string} message - The error message to display.
 */
function showError(input, message) {
    const errorMessage = input.nextElementSibling;
    errorMessage.innerText = message;
    errorMessage.style.display = 'block';
}

/**
 * Clear the error message for an input field.
 * @param {HTMLInputElement} input - The input element to clear the error for.
 */
function clearError(input) {
    const errorMessage = input.nextElementSibling;
    errorMessage.style.display = 'none';
}
