function validateForm() {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // Check if email is empty
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
        // alert("Email is required.")
        return false;

    } else {
        emailError.textContent = "";
    }

    if (!emailPattern.test(emailValue)) {
        // alert('Invalid email format.');
        emailError.textContent = "Invalid email format.";
        return false;
    }

    return true; // Submit the form if validation passes
}
