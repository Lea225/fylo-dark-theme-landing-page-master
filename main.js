function validateEmail() {
    var emailInput = document.getElementById('emailInput').value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput)) {
        document.getElementById('errorMessage').style.display = 'block';
    } else {
        document.getElementById('errorMessage').style.display = 'none';
        // Code pour continuer avec le traitement si l'email est valide
    }
}
