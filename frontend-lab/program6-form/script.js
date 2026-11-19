var form = document.getElementById("regForm");

form.addEventListener("submit", function (e) {
    // stop the form from submitting, we will check first
    e.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;

    var valid = true;

    // clear old messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmError").textContent = "";
    document.getElementById("success").textContent = "";

    // name check
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
    }

    // email check
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email";
        valid = false;
    }

    // password check
    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required";
        valid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
        valid = false;
    }

    // confirm password check
    if (confirm === "") {
        document.getElementById("confirmError").textContent = "Please confirm your password";
        valid = false;
    } else if (password !== confirm) {
        document.getElementById("confirmError").textContent = "Passwords do not match";
        valid = false;
    }

    // submit only if everything is correct
    if (valid) {
        document.getElementById("success").textContent = "Registration successful!";
        form.reset();
    }
});
