function authenticate() {
    const correctPassword = "admin123"; // Replace with your actual password
    const passwordInput = document.getElementById("password").value;
    if (passwordInput === correctPassword) {
        window.location.href = "admin-panel.html"; // Redirect to admin panel
    } else {
        alert("Incorrect password. Please try again.");
    }
}
