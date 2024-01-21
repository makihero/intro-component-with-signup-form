function validateForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var firstNameError = document.getElementById('firstNameError');
    var lastNameError = document.getElementById('lastNameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');

    // Reset error messages
    firstNameError.style.display = 'none';
    lastNameError.style.display = 'none';
    emailError.style.display = 'none';
    passwordError.style.display = 'none';

    // Validate First Name
    if (firstName === '') {
        firstNameError.style.display = 'block';
        return;
    }

    // Validate Last Name
    if (lastName === '') {
        lastNameError.style.display = 'block';
        return;
    }

    // Validate Email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.style.display = 'block';
        return;
    }

    // Validate Password
    if (password === '') {
        passwordError.style.display = 'block';
        return;
    }

    
    console.log('Form submitted successfully!');
}



