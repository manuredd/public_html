document.addEventListener("DOMContentLoaded", function () {
    const password1Input = document.getElementById("password1");
    const password2Input = document.getElementById("password2");
    const verifyButton = document.getElementById("verifyButton");
    const resultMessage = document.getElementById("result");

    verifyButton.addEventListener("click", function () {
        const password1 = password1Input.value;
        const password2 = password2Input.value;

        if (password1.length < 8 || password2.length < 8) {
            resultMessage.textContent = "Passwords must be at least eight characters long.";
        } else if (password1 !== password2) {
            resultMessage.textContent = "Passwords do not match. Please try again.";
        } else {
            resultMessage.textContent = "Passwords matched!";
        }
    });
});
