function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Clear previous error messages
    clearMessages();

    // Basic validation
    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
        showError('All fields must be filled out');
        return;
    }

    // Email validation
    if (!isValidEmail(email)) {
        showError('Please enter a valid email address');
        return;
    }

    // Additional validation logic can be added here (e.g., password strength)

    // If all validation passes, simulate form submission
    showSuccess('Form submitted successfully!');
    document.getElementById('registrationForm').reset();
}

function isValidEmail(email) {
    // Regular expression for a simple email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(message) {
    var errorContainer = document.getElementById('error-container');
    var errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.appendChild(document.createTextNode(message));
    errorContainer.appendChild(errorDiv);
}

function showSuccess(message) {
    var successContainer = document.getElementById('success-container');
    var successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.appendChild(document.createTextNode(message));
    successContainer.appendChild(successDiv);
}

function clearMessages() {
    var errorContainer = document.getElementById('error-container');
    var successContainer = document.getElementById('success-container');

    // Clear error and success messages
    errorContainer.innerHTML = '';
    successContainer.innerHTML = '';
}
