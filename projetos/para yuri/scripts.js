document.addEventListener("DOMContentLoaded", () => {
    const phoneElement = document.getElementById("phone");
    const emailElement = document.getElementById("email");

    phoneElement.addEventListener("click", () => {
        alert("Ligando para " + phoneElement.textContent);
    });

    emailElement.addEventListener("click", () => {
        alert("Enviando email para " + emailElement.textContent);
    });
});