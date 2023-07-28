
function validateForm() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format';
        return false;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    // Validate Password (not empty)
    if (password === '') {
        document.getElementById('passwordError').innerText = 'Password cannot be empty';
        return false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters';
        return false;
    } else {
        document.getElementById('passwordError').innerText = '';
    }

    // If all validations pass, show the success toast
    const toast = document.getElementById('liveToast');
    const toastInstance = new bootstrap.Toast(toast);
    toastInstance.show();

    // You can submit the form to the server here if needed
    // e.g., document.getElementById('myForm').submit();

    return true; // Form submission will proceed if all validations pass
}




