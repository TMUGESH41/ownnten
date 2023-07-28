function validateForm() {
    const fullName = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmpassword').value;

    // Validate Full Name (minimum 3 characters)
    const namePattern = /^[A-Za-z\s]+$/;

    if (fullName === "") {
        document.getElementById('fullnameerror').innerText = 'Fill The Name please';
        return false;
    }

    else if (!namePattern.test(fullName)) {
        document.getElementById('fullnameerror').innerText = 'Full Name should not contain numbers';
        return false;
    }

    else if (fullName.length < 3) {
        document.getElementById('fullnameerror').innerText = 'Full Name must be at least 3 characters';
        return false;
    } else {
        document.getElementById('fullnameerror').innerText = '';
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        document.getElementById('emailError').innerText = 'Please Fill The email';
        return false;
    }

    else if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format';
        return false;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    // Validate Password (minimum 6 characters)

    if (password === "") {
        document.getElementById('passwordError').innerText = 'Fill The password please';
        return false;
    }

    else if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters';
        return false;
    } else {
        document.getElementById('passwordError').innerText = '';
    }

    // Validate Confirm Password (match with Password)

    if (confirmPassword === "") {
        document.getElementById('ConfirmError').innerText = 'Fill The Confirmpassword please';
        return false;
    }

    else if (confirmPassword !== password) {
        document.getElementById('ConfirmError').innerText = 'Passwords do not match';
        return false;
    } else {
        document.getElementById('ConfirmError').innerText = '';
    }

    // If all validations pass, show the success toast
    const toast = document.getElementById('liveToast');
    const toastInstance = new bootstrap.Toast(toast);
    toastInstance.show();

    // You can submit the form to the server here if needed
    // e.g., document.getElementById('myForm').submit();

    return true; // Form submission will proceed if all validations pass
}

